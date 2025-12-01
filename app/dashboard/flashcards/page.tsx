'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from 'framer-motion'
import Link from 'next/link'
import {
  ChevronLeft, ChevronRight, RotateCcw, Check, X,
  Shuffle, BookOpen, Target, Beaker, MessageSquare,
  Clock, Brain, Zap, Star, Heart, Stethoscope, Keyboard,
  Volume2, Trophy, Flame
} from 'lucide-react'
import { flashcardDecks as importedDecks } from '@/lib/flashcards'
import styles from './flashcards.module.css'

// Map imported decks to include React icons
const flashcardDecks = {
  reading: {
    ...importedDecks.reading,
    icon: <BookOpen size={18} />,
    color: 'teal',
  },
  math: {
    ...importedDecks.math,
    icon: <Target size={18} />,
    color: 'amber',
  },
  science: {
    ...importedDecks.science,
    icon: <Beaker size={18} />,
    color: 'coral',
  },
  english: {
    ...importedDecks.english,
    icon: <MessageSquare size={18} />,
    color: 'navy',
  },
  medicalTerms: {
    ...importedDecks.medicalTerms,
    icon: <Stethoscope size={18} />,
    color: 'purple',
  },
  anatomy: {
    ...importedDecks.anatomy,
    icon: <Heart size={18} />,
    color: 'red',
  }
}

export default function FlashcardsPage() {
  const [selectedDeck, setSelectedDeck] = useState<keyof typeof flashcardDecks | null>(null)
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [knownCards, setKnownCards] = useState<Set<number>>(new Set())
  const [reviewCards, setReviewCards] = useState<Set<number>>(new Set())
  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)
  const [showKeyboardHints, setShowKeyboardHints] = useState(false)
  const [studyTime, setStudyTime] = useState(0)
  const [sessionComplete, setSessionComplete] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const deck = selectedDeck ? flashcardDecks[selectedDeck] : null
  const cards = deck?.cards || []
  const currentCard = cards[currentCardIndex]

  // Swipe handling
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-200, 200], [-25, 25])
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 1, 1, 1, 0.5])

  // Study timer
  useEffect(() => {
    if (!selectedDeck || sessionComplete) return
    const timer = setInterval(() => setStudyTime(t => t + 1), 1000)
    return () => clearInterval(timer)
  }, [selectedDeck, sessionComplete])

  // Keyboard shortcuts
  useEffect(() => {
    if (!selectedDeck) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return
      
      switch (e.key) {
        case ' ':
        case 'Enter':
          e.preventDefault()
          handleFlip()
          break
        case 'ArrowLeft':
          e.preventDefault()
          handlePrev()
          break
        case 'ArrowRight':
          e.preventDefault()
          handleNext()
          break
        case 'k':
        case 'g':
          if (isFlipped) handleKnown()
          break
        case 'r':
        case 'a':
          if (isFlipped) handleReview()
          break
        case 's':
          handleShuffle()
          break
        case 'Escape':
          handleBackToDecks()
          break
        case '?':
          setShowKeyboardHints(h => !h)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedDeck, isFlipped, currentCardIndex])

  const handleFlip = useCallback(() => setIsFlipped(f => !f), [])
  
  const handleNext = useCallback(() => {
    setIsFlipped(false)
    setCurrentCardIndex(prev => (prev + 1) % cards.length)
  }, [cards.length])

  const handlePrev = useCallback(() => {
    setIsFlipped(false)
    setCurrentCardIndex(prev => (prev - 1 + cards.length) % cards.length)
  }, [cards.length])

  const handleKnown = useCallback(() => {
    setKnownCards(prev => new Set([...prev, currentCardIndex]))
    setReviewCards(prev => {
      const newSet = new Set(prev)
      newSet.delete(currentCardIndex)
      return newSet
    })
    setStreak(s => {
      const newStreak = s + 1
      setMaxStreak(m => Math.max(m, newStreak))
      return newStreak
    })
    
    // Check for session complete
    const totalHandled = knownCards.size + reviewCards.size + 1
    if (totalHandled >= cards.length) {
      setSessionComplete(true)
    } else {
      handleNext()
    }
  }, [currentCardIndex, handleNext, cards.length, knownCards.size, reviewCards.size])

  const handleReview = useCallback(() => {
    setReviewCards(prev => new Set([...prev, currentCardIndex]))
    setKnownCards(prev => {
      const newSet = new Set(prev)
      newSet.delete(currentCardIndex)
      return newSet
    })
    setStreak(0)
    handleNext()
  }, [currentCardIndex, handleNext])

  const handleShuffle = useCallback(() => {
    setCurrentCardIndex(Math.floor(Math.random() * cards.length))
    setIsFlipped(false)
  }, [cards.length])

  const handleReset = useCallback(() => {
    setCurrentCardIndex(0)
    setIsFlipped(false)
    setKnownCards(new Set())
    setReviewCards(new Set())
    setStreak(0)
    setSessionComplete(false)
  }, [])

  const handleBackToDecks = useCallback(() => {
    setSelectedDeck(null)
    setCurrentCardIndex(0)
    setIsFlipped(false)
    setKnownCards(new Set())
    setReviewCards(new Set())
    setStreak(0)
    setMaxStreak(0)
    setStudyTime(0)
    setSessionComplete(false)
  }, [])

  // Swipe gesture handler
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (!isFlipped) {
      if (Math.abs(info.offset.x) > 50) {
        handleFlip()
      }
      return
    }
    
    if (info.offset.x > 100) {
      handleKnown()
    } else if (info.offset.x < -100) {
      handleReview()
    }
    x.set(0)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  // Session complete screen
  if (sessionComplete && selectedDeck) {
    const accuracy = Math.round((knownCards.size / cards.length) * 100)
    return (
      <div className={styles.flashcards}>
        <motion.div 
          className={styles.completeCard}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className={styles.completeIcon}>
            <Trophy size={48} />
          </div>
          <h1>Session Complete!</h1>
          <p>You've reviewed all {cards.length} cards</p>
          
          <div className={styles.completeStats}>
            <div className={styles.completeStat}>
              <span className={styles.statNumber}>{knownCards.size}</span>
              <span className={styles.statLabel}>Mastered</span>
            </div>
            <div className={styles.completeStat}>
              <span className={styles.statNumber}>{reviewCards.size}</span>
              <span className={styles.statLabel}>Need Review</span>
            </div>
            <div className={styles.completeStat}>
              <span className={styles.statNumber}>{accuracy}%</span>
              <span className={styles.statLabel}>Accuracy</span>
            </div>
          </div>

          <div className={styles.completeDetails}>
            <div className={styles.detailItem}>
              <Clock size={16} />
              <span>Study Time: {formatTime(studyTime)}</span>
            </div>
            <div className={styles.detailItem}>
              <Flame size={16} />
              <span>Best Streak: {maxStreak}</span>
            </div>
          </div>

          <div className={styles.completeActions}>
            <button onClick={handleReset} className={styles.primaryBtn}>
              <RotateCcw size={18} />
              Study Again
            </button>
            <button onClick={handleBackToDecks} className={styles.secondaryBtn}>
              Choose Different Deck
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  if (!selectedDeck) {
    return (
      <div className={styles.flashcards}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1>Flashcards</h1>
          <p>Master key concepts with spaced repetition</p>
        </motion.div>

        <motion.div 
          className={styles.deckGrid}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {Object.entries(flashcardDecks).map(([key, deck], idx) => (
            <motion.button
              key={key}
              onClick={() => setSelectedDeck(key as keyof typeof flashcardDecks)}
              className={`${styles.deckCard} ${styles[deck.color]}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={styles.deckIcon}>
                {deck.icon}
              </div>
              <h3>{deck.name}</h3>
              <span>{deck.cards.length} cards</span>
              <div className={styles.deckAction}>
                <Zap size={14} />
                Start
              </div>
            </motion.button>
          ))}
        </motion.div>

        <motion.section 
          className={styles.tips}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <h2>How to Use Flashcards Effectively</h2>
          <div className={styles.tipGrid}>
            <div className={styles.tipItem}>
              <Brain size={20} />
              <div>
                <strong>Active Recall</strong>
                <p>Answer before flipping for stronger memory</p>
              </div>
            </div>
            <div className={styles.tipItem}>
              <Keyboard size={20} />
              <div>
                <strong>Keyboard Shortcuts</strong>
                <p>Space to flip, ←/→ to navigate</p>
              </div>
            </div>
            <div className={styles.tipItem}>
              <Star size={20} />
              <div>
                <strong>Swipe Gestures</strong>
                <p>Swipe right for known, left for review</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    )
  }

  return (
    <div className={styles.flashcards} ref={containerRef}>
      <div className={styles.studyHeader}>
        <button onClick={handleBackToDecks} className={styles.backBtn}>
          <ChevronLeft size={18} />
          <span>Back</span>
        </button>
        <div className={styles.deckInfo}>
          <div className={`${styles.deckBadge} ${styles[deck!.color]}`}>
            {deck!.icon}
            <span>{deck!.name}</span>
          </div>
        </div>
        <div className={styles.studyMeta}>
          {streak > 0 && (
            <div className={styles.streakBadge}>
              <Flame size={14} />
              {streak}
            </div>
          )}
          <div className={styles.cardCount}>
            {currentCardIndex + 1}/{cards.length}
          </div>
        </div>
      </div>

      <div className={styles.progressStats}>
        <div className={styles.statPill}>
          <Check size={14} />
          <span>{knownCards.size}</span>
        </div>
        <div className={`${styles.statPill} ${styles.review}`}>
          <RotateCcw size={14} />
          <span>{reviewCards.size}</span>
        </div>
        <div className={`${styles.statPill} ${styles.remaining}`}>
          <span>{cards.length - knownCards.size - reviewCards.size} left</span>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCardIndex}
            className={`${styles.flashcard} ${isFlipped ? styles.flipped : ''}`}
            onClick={handleFlip}
            style={{ x, rotate, opacity }}
            drag={isFlipped ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <span className={styles.cardLabel}>Question</span>
                <p>{currentCard?.front}</p>
                <span className={styles.tapHint}>
                  <Keyboard size={12} />
                  Space to flip
                </span>
              </div>
              <div className={styles.cardBack}>
                <span className={styles.cardLabel}>Answer</span>
                <p>{currentCard?.back}</p>
                {isFlipped && (
                  <div className={styles.swipeHint}>
                    <span>← Review</span>
                    <span>Got it →</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.cardActions}>
        <button 
          onClick={handleReview}
          className={styles.reviewBtn}
          disabled={!isFlipped}
        >
          <X size={18} />
          Review
        </button>
        <button 
          onClick={handleKnown}
          className={styles.knownBtn}
          disabled={!isFlipped}
        >
          <Check size={18} />
          Got It!
        </button>
      </div>

      <div className={styles.navigation}>
        <button onClick={handlePrev} className={styles.navBtn} title="Previous (←)">
          <ChevronLeft size={20} />
        </button>
        <div className={styles.navActions}>
          <button onClick={handleShuffle} className={styles.shuffleBtn} title="Shuffle (S)">
            <Shuffle size={16} />
          </button>
          <button onClick={handleReset} className={styles.resetBtn} title="Reset">
            <RotateCcw size={16} />
          </button>
        </div>
        <button onClick={handleNext} className={styles.navBtn} title="Next (→)">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill}
          style={{ width: `${((knownCards.size + reviewCards.size) / cards.length) * 100}%` }}
        />
      </div>

      {/* Keyboard hints tooltip */}
      <AnimatePresence>
        {showKeyboardHints && (
          <motion.div 
            className={styles.keyboardHints}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <h4><Keyboard size={16} /> Keyboard Shortcuts</h4>
            <div className={styles.shortcutGrid}>
              <div><kbd>Space</kbd> Flip card</div>
              <div><kbd>←</kbd><kbd>→</kbd> Navigate</div>
              <div><kbd>K</kbd> Mark as known</div>
              <div><kbd>R</kbd> Mark for review</div>
              <div><kbd>S</kbd> Shuffle</div>
              <div><kbd>Esc</kbd> Exit</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
