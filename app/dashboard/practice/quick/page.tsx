'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  Target, Brain, Clock, ChevronRight, Check, X,
  ArrowRight, RotateCcw, Home, Zap, Flame, Trophy,
  Star, Bookmark, Volume2, Keyboard
} from 'lucide-react'
import { getRandomQuestions, Question } from '@/lib/questions'
import styles from './quick.module.css'

export default function QuickPracticePage() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type') || 'random'
  
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [score, setScore] = useState({ correct: 0, total: 0 })
  const [isComplete, setIsComplete] = useState(false)
  const [timeLeft, setTimeLeft] = useState(type === 'timed' ? 300 : 0)
  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)
  const [bookmarked, setBookmarked] = useState<Set<string>>(new Set())
  const [startTime] = useState(Date.now())

  useEffect(() => {
    const count = type === 'timed' ? 10 : 15
    setQuestions(getRandomQuestions(count))
  }, [type])

  useEffect(() => {
    if (type !== 'timed' || timeLeft <= 0 || isComplete) return
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsComplete(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [type, timeLeft, isComplete])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return
      
      if (!showAnswer) {
        if (e.key >= '1' && e.key <= '4') {
          e.preventDefault()
          handleSelect(parseInt(e.key) - 1)
        }
        if (e.key === 'Enter' && selectedAnswer !== null) {
          e.preventDefault()
          handleCheck()
        }
      } else {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleNext()
        }
      }
      
      if (e.key === 'b') {
        toggleBookmark()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [showAnswer, selectedAnswer, currentIndex])

  const currentQuestion = questions[currentIndex]

  const handleSelect = (idx: number) => {
    if (showAnswer) return
    setSelectedAnswer(idx)
  }

  const handleCheck = useCallback(() => {
    if (selectedAnswer === null) return
    setShowAnswer(true)
    
    const isCorrect = selectedAnswer === currentQuestion?.correctAnswer
    setScore(prev => ({
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      total: prev.total + 1
    }))
    
    if (isCorrect) {
      setStreak(s => {
        const newStreak = s + 1
        setMaxStreak(m => Math.max(m, newStreak))
        return newStreak
      })
    } else {
      setStreak(0)
    }
  }, [selectedAnswer, currentQuestion])

  const handleNext = useCallback(() => {
    if (currentIndex >= questions.length - 1) {
      setIsComplete(true)
    } else {
      setCurrentIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowAnswer(false)
    }
  }, [currentIndex, questions.length])

  const handleRestart = () => {
    setQuestions(getRandomQuestions(type === 'timed' ? 10 : 15))
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setShowAnswer(false)
    setScore({ correct: 0, total: 0 })
    setIsComplete(false)
    setTimeLeft(type === 'timed' ? 300 : 0)
    setStreak(0)
    setMaxStreak(0)
  }

  const toggleBookmark = () => {
    if (!currentQuestion) return
    setBookmarked(prev => {
      const newSet = new Set(prev)
      if (newSet.has(currentQuestion.id)) {
        newSet.delete(currentQuestion.id)
      } else {
        newSet.add(currentQuestion.id)
      }
      return newSet
    })
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getTypeInfo = () => {
    switch (type) {
      case 'weak':
        return { title: 'Weak Areas', icon: <Target size={18} />, color: 'coral', desc: 'Focus on your weakest topics' }
      case 'timed':
        return { title: 'Speed Sprint', icon: <Zap size={18} />, color: 'amber', desc: '10 questions in 5 minutes' }
      default:
        return { title: 'Random Mix', icon: <Brain size={18} />, color: 'teal', desc: 'Mixed questions from all subjects' }
    }
  }

  const typeInfo = getTypeInfo()

  if (questions.length === 0) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner} />
        <p>Loading questions...</p>
      </div>
    )
  }

  if (isComplete) {
    const percentage = Math.round((score.correct / score.total) * 100)
    const elapsedTime = Math.round((Date.now() - startTime) / 1000)
    const avgTime = Math.round(elapsedTime / score.total)
    
    return (
      <div className={styles.complete}>
        <motion.div 
          className={styles.completeCard}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className={`${styles.completeIcon} ${styles[typeInfo.color]}`}>
            <Trophy size={32} />
          </div>
          <h1>Practice Complete!</h1>
          
          <div className={styles.scoreDisplay}>
            <div className={styles.scoreCircle}>
              <svg viewBox="0 0 36 36">
                <circle className={styles.scoreBg} cx="18" cy="18" r="15.9" />
                <circle 
                  className={styles.scoreFill} 
                  cx="18" cy="18" r="15.9"
                  strokeDasharray={`${percentage}, 100`}
                />
              </svg>
              <span className={styles.scoreValue}>{percentage}%</span>
            </div>
            <p>{score.correct}/{score.total} correct</p>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <Clock size={18} />
              <div>
                <strong>{formatTime(elapsedTime)}</strong>
                <span>Total Time</span>
              </div>
            </div>
            <div className={styles.statItem}>
              <Zap size={18} />
              <div>
                <strong>{avgTime}s</strong>
                <span>Avg/Question</span>
              </div>
            </div>
            <div className={styles.statItem}>
              <Flame size={18} />
              <div>
                <strong>{maxStreak}</strong>
                <span>Best Streak</span>
              </div>
            </div>
            <div className={styles.statItem}>
              <Bookmark size={18} />
              <div>
                <strong>{bookmarked.size}</strong>
                <span>Saved</span>
              </div>
            </div>
          </div>

          {percentage >= 80 && (
            <div className={styles.achievement}>
              <Star size={18} />
              <span>Great performance! Keep it up!</span>
            </div>
          )}

          <div className={styles.completeActions}>
            <button onClick={handleRestart} className={styles.restartBtn}>
              <RotateCcw size={16} />
              Practice Again
            </button>
            <Link href="/dashboard/practice" className={styles.backBtn}>
              All Practice
            </Link>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className={styles.quick}>
      <div className={styles.header}>
        <Link href="/dashboard/practice" className={styles.backLink}>
          ← Back
        </Link>
        <div className={`${styles.typeBadge} ${styles[typeInfo.color]}`}>
          {typeInfo.icon}
          <span>{typeInfo.title}</span>
        </div>
        <div className={styles.headerRight}>
          {streak > 1 && (
            <div className={styles.streakBadge}>
              <Flame size={14} />
              {streak}
            </div>
          )}
          {type === 'timed' && (
            <div className={`${styles.timer} ${timeLeft < 60 ? styles.warning : ''}`}>
              <Clock size={14} />
              {formatTime(timeLeft)}
            </div>
          )}
          <div className={styles.progress}>
            {currentIndex + 1}/{questions.length}
          </div>
        </div>
      </div>

      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill}
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      <div className={styles.scoreBar}>
        <span className={styles.correct}>
          <Check size={12} /> {score.correct}
        </span>
        <span className={styles.incorrect}>
          <X size={12} /> {score.total - score.correct}
        </span>
        <button 
          className={`${styles.bookmarkBtn} ${bookmarked.has(currentQuestion?.id) ? styles.active : ''}`}
          onClick={toggleBookmark}
          title="Bookmark (B)"
        >
          <Bookmark size={14} />
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          className={styles.questionCard}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <div className={styles.questionMeta}>
            <span className={`${styles.subject} ${styles[currentQuestion.subject]}`}>
              {currentQuestion.subject}
            </span>
            <span className={styles.topic}>{currentQuestion.topic}</span>
          </div>

          {currentQuestion.passage && (
            <div className={styles.passage}>
              <p>{currentQuestion.passage}</p>
            </div>
          )}

          <p className={styles.questionText}>{currentQuestion.question}</p>

          <div className={styles.options}>
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`${styles.option} ${
                  selectedAnswer === idx ? styles.selected : ''
                } ${
                  showAnswer && idx === currentQuestion.correctAnswer ? styles.correct : ''
                } ${
                  showAnswer && selectedAnswer === idx && idx !== currentQuestion.correctAnswer ? styles.wrong : ''
                }`}
                disabled={showAnswer}
              >
                <span className={styles.optionLetter}>
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className={styles.optionText}>{option}</span>
                {showAnswer && idx === currentQuestion.correctAnswer && <Check size={16} />}
                {showAnswer && selectedAnswer === idx && idx !== currentQuestion.correctAnswer && <X size={16} />}
              </button>
            ))}
          </div>

          {showAnswer && (
            <motion.div 
              className={styles.explanation}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h4>Explanation</h4>
              <p>{currentQuestion.explanation}</p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className={styles.actions}>
        {!showAnswer ? (
          <button 
            onClick={handleCheck}
            className={styles.checkBtn}
            disabled={selectedAnswer === null}
          >
            Check Answer
            <span className={styles.shortcutHint}>Enter</span>
          </button>
        ) : (
          <button onClick={handleNext} className={styles.nextBtn}>
            {currentIndex >= questions.length - 1 ? 'See Results' : 'Next'}
            <ArrowRight size={16} />
          </button>
        )}
      </div>

      <div className={styles.keyboardHint}>
        <Keyboard size={12} />
        <span>Press 1-4 to select • Enter to continue</span>
      </div>
    </div>
  )
}
