'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Zap, Clock, Trophy, Target, ChevronRight, Flame,
  Award, Star, CheckCircle2, XCircle, ArrowRight, RefreshCw,
  TrendingUp, Sparkles, Crown, Medal, Gift
} from 'lucide-react'
import { allQuestions, type Question } from '@/lib/questions'
import styles from './challenge.module.css'

// Get today's date string for consistent daily challenge
const getTodayString = () => new Date().toISOString().split('T')[0]

// Seed a random number generator with today's date
const seededRandom = (seed: string) => {
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return Math.abs(hash)
}

// Get today's 10 questions (same for everyone)
const getDailyQuestions = (): Question[] => {
  const today = getTodayString()
  const shuffled = [...allQuestions].sort((a, b) => {
    return seededRandom(today + a.id) - seededRandom(today + b.id)
  })
  return shuffled.slice(0, 10)
}

// Multiplier messages
const getMultiplierMessage = (streak: number) => {
  if (streak >= 10) return { text: 'LEGENDARY!', multiplier: 3.0, emoji: '👑' }
  if (streak >= 7) return { text: 'UNSTOPPABLE!', multiplier: 2.5, emoji: '🔥' }
  if (streak >= 5) return { text: 'ON FIRE!', multiplier: 2.0, emoji: '⚡' }
  if (streak >= 3) return { text: 'COMBO!', multiplier: 1.5, emoji: '✨' }
  return null
}

export default function ChallengePage() {
  const [challengeStarted, setChallengeStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)
  const [timeLeft, setTimeLeft] = useState(30)
  const [challengeComplete, setChallengeComplete] = useState(false)
  const [answers, setAnswers] = useState<{ correct: boolean, time: number, points: number }[]>([])
  const [showBonus, setShowBonus] = useState<{ points: number, message: string } | null>(null)
  const [dayStreak, setDayStreak] = useState(5) // Mock day streak
  const [xp, setXp] = useState(0)
  
  const dailyQuestions = getDailyQuestions()
  const question = dailyQuestions[currentQuestion]

  // Timer
  useEffect(() => {
    if (!challengeStarted || showResult || challengeComplete) return
    
    if (timeLeft <= 0) {
      handleAnswer(-1) // Time's up
      return
    }
    
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1)
    }, 1000)
    
    return () => clearInterval(timer)
  }, [challengeStarted, timeLeft, showResult, challengeComplete])

  const startChallenge = () => {
    setChallengeStarted(true)
    setTimeLeft(30)
  }

  const calculatePoints = useCallback((answerTime: number, currentStreak: number) => {
    // Base points (faster = more points)
    let basePoints = Math.max(50, Math.floor((30 - answerTime) * 10))
    
    // Streak multiplier
    const multiplierInfo = getMultiplierMessage(currentStreak)
    if (multiplierInfo) {
      basePoints = Math.floor(basePoints * multiplierInfo.multiplier)
    }
    
    // Perfect time bonus (under 5 seconds)
    if (answerTime < 5) {
      basePoints += 100
    }
    
    return basePoints
  }, [])

  const handleAnswer = (index: number) => {
    if (showResult) return
    
    setSelectedAnswer(index)
    setShowResult(true)
    
    const isCorrect = index === question.correctAnswer
    const answerTime = 30 - timeLeft
    
    if (isCorrect) {
      const newStreak = streak + 1
      const points = calculatePoints(answerTime, newStreak)
      
      setScore(prev => prev + points)
      setStreak(newStreak)
      setMaxStreak(m => Math.max(m, newStreak))
      setXp(prev => prev + Math.floor(points / 10))
      
      // Show bonus for streaks
      const multiplierInfo = getMultiplierMessage(newStreak)
      if (multiplierInfo) {
        setShowBonus({ points, message: `${multiplierInfo.emoji} ${multiplierInfo.text} x${multiplierInfo.multiplier}` })
        setTimeout(() => setShowBonus(null), 1500)
      }
      
      setAnswers(prev => [...prev, { correct: true, time: answerTime, points }])
    } else {
      setStreak(0)
      setAnswers(prev => [...prev, { correct: false, time: answerTime, points: 0 }])
    }
  }

  const nextQuestion = () => {
    if (currentQuestion >= dailyQuestions.length - 1) {
      setChallengeComplete(true)
    } else {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
      setTimeLeft(30)
    }
  }

  const getTimeColor = () => {
    if (timeLeft > 20) return 'green'
    if (timeLeft > 10) return 'amber'
    return 'red'
  }

  const correctAnswers = answers.filter(a => a.correct).length
  const avgTime = answers.length > 0 
    ? Math.round(answers.reduce((sum, a) => sum + a.time, 0) / answers.length)
    : 0

  // Calculate achievements
  const getAchievements = () => {
    const achievements = []
    if (correctAnswers === 10) achievements.push({ icon: '💯', name: 'Perfect Score', desc: 'All 10 correct!' })
    if (correctAnswers >= 8) achievements.push({ icon: '🎯', name: 'Sharpshooter', desc: '80%+ accuracy' })
    if (maxStreak >= 5) achievements.push({ icon: '🔥', name: 'Hot Streak', desc: '5+ in a row' })
    if (maxStreak >= 10) achievements.push({ icon: '👑', name: 'Legendary', desc: '10 streak!' })
    if (avgTime < 10) achievements.push({ icon: '⚡', name: 'Speed Demon', desc: 'Avg under 10s' })
    if (score >= 2500) achievements.push({ icon: '🏆', name: 'High Scorer', desc: '2500+ points' })
    return achievements
  }

  // Challenge Complete Screen
  if (challengeComplete) {
    const achievements = getAchievements()
    const accuracy = Math.round((correctAnswers / dailyQuestions.length) * 100)
    
    return (
      <div className={styles.challenge}>
        <motion.div 
          className={styles.completeCard}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 20 }}
        >
          <div className={styles.confetti}>
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.span 
                key={i}
                className={styles.confettiPiece}
                initial={{ y: -20, opacity: 1, rotate: 0 }}
                animate={{ 
                  y: 400, 
                  opacity: 0, 
                  rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
                  x: (Math.random() - 0.5) * 400
                }}
                transition={{ 
                  duration: 3 + Math.random() * 2, 
                  delay: Math.random() * 0.5,
                  ease: "easeOut"
                }}
                style={{ 
                  left: `${Math.random() * 100}%`,
                  background: ['#1a5f5a', '#c4841d', '#c75c4c', '#2c3e50', '#f59e0b'][Math.floor(Math.random() * 5)]
                }}
              />
            ))}
          </div>

          <motion.div 
            className={styles.trophyContainer}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <Trophy className={styles.trophyIcon} size={48} />
          </motion.div>
          
          <h1>Challenge Complete!</h1>
          <p className={styles.dateLabel}>
            {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <motion.div 
            className={styles.finalScore}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <span className={styles.scoreNumber}>{score.toLocaleString()}</span>
            <span className={styles.scoreLabel}>Total Points</span>
          </motion.div>

          <div className={styles.xpEarned}>
            <Sparkles size={16} />
            <span>+{xp} XP earned</span>
          </div>

          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <CheckCircle2 size={20} />
              <strong>{correctAnswers}/{dailyQuestions.length}</strong>
              <span>Correct</span>
            </div>
            <div className={styles.statItem}>
              <Clock size={20} />
              <strong>{avgTime}s</strong>
              <span>Avg Time</span>
            </div>
            <div className={styles.statItem}>
              <Flame size={20} />
              <strong>{maxStreak}</strong>
              <span>Best Streak</span>
            </div>
            <div className={styles.statItem}>
              <Target size={20} />
              <strong>{accuracy}%</strong>
              <span>Accuracy</span>
            </div>
          </div>

          {achievements.length > 0 && (
            <div className={styles.achievements}>
              <h3>Achievements Earned</h3>
              <div className={styles.achievementGrid}>
                {achievements.map((achievement, idx) => (
                  <motion.div 
                    key={achievement.name}
                    className={styles.achievement}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7 + idx * 0.15 }}
                  >
                    <span className={styles.achievementIcon}>{achievement.icon}</span>
                    <strong>{achievement.name}</strong>
                    <span>{achievement.desc}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          <div className={styles.dayStreakBonus}>
            <Flame size={20} />
            <div>
              <strong>{dayStreak + 1} Day Streak!</strong>
              <span>+50 bonus XP tomorrow</span>
            </div>
          </div>

          <p className={styles.comeBack}>
            Come back tomorrow for a new challenge!
          </p>
        </motion.div>
      </div>
    )
  }

  // Start Screen
  if (!challengeStarted) {
    return (
      <div className={styles.challenge}>
        <motion.div 
          className={styles.startCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.dailyBadge}>
            <Zap size={18} />
            Daily Challenge
          </div>
          
          <h1>Ready for Today's Challenge?</h1>
          <p className={styles.dateLabel}>
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </p>

          <div className={styles.challengeInfo}>
            <div className={styles.infoItem}>
              <Target size={20} />
              <strong>10 Questions</strong>
              <span>Mixed subjects</span>
            </div>
            <div className={styles.infoItem}>
              <Clock size={20} />
              <strong>30 Seconds</strong>
              <span>Per question</span>
            </div>
            <div className={styles.infoItem}>
              <TrendingUp size={20} />
              <strong>Combos</strong>
              <span>Build streaks</span>
            </div>
          </div>

          <div className={styles.streakInfo}>
            <Flame size={20} />
            <div>
              <strong>{dayStreak} Day Streak</strong>
              <span>Don't break it!</span>
            </div>
          </div>

          <div className={styles.bonusInfo}>
            <Gift size={16} />
            <span>Streak bonus: +{dayStreak * 10}% points today!</span>
          </div>

          <button className={styles.startButton} onClick={startChallenge}>
            <Zap size={18} />
            Start Challenge
            <ChevronRight size={18} />
          </button>

          <div className={styles.leaderboard}>
            <h3>Today's Top Scores</h3>
            <div className={styles.leaders}>
              <div className={styles.leader}>
                <span className={styles.rank}>🥇</span>
                <span className={styles.name}>Sarah M.</span>
                <span className={styles.points}>2,850</span>
              </div>
              <div className={styles.leader}>
                <span className={styles.rank}>🥈</span>
                <span className={styles.name}>James K.</span>
                <span className={styles.points}>2,720</span>
              </div>
              <div className={styles.leader}>
                <span className={styles.rank}>🥉</span>
                <span className={styles.name}>Emily R.</span>
                <span className={styles.points}>2,650</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  // Active Challenge
  return (
    <div className={styles.challenge}>
      {/* Bonus Animation */}
      <AnimatePresence>
        {showBonus && (
          <motion.div 
            className={styles.bonusPopup}
            initial={{ scale: 0, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <span className={styles.bonusMessage}>{showBonus.message}</span>
            <span className={styles.bonusPoints}>+{showBonus.points}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.progress}>
          <span>Q{currentQuestion + 1}/{dailyQuestions.length}</span>
          <div className={styles.progressBar}>
            <motion.div 
              className={styles.progressFill}
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / dailyQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className={styles.scoreDisplay}>
          <Star size={16} />
          <span>{score.toLocaleString()}</span>
        </div>

        {streak > 1 && (
          <motion.div 
            className={styles.streakDisplay}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            key={streak}
          >
            <Flame size={16} />
            <span>×{streak}</span>
          </motion.div>
        )}
      </div>

      {/* Timer */}
      <motion.div 
        className={`${styles.timer} ${styles[getTimeColor()]}`}
        key={currentQuestion}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
      >
        <span>{timeLeft}</span>
        <svg className={styles.timerRing} viewBox="0 0 36 36">
          <path
            className={styles.timerCircle}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            strokeDasharray={`${(timeLeft / 30) * 100}, 100`}
          />
        </svg>
      </motion.div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentQuestion}
          className={styles.questionCard}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.2 }}
        >
          <div className={styles.questionMeta}>
            <span className={`${styles.subjectTag} ${styles[question.subject]}`}>
              {question.subject}
            </span>
            <span className={styles.topicTag}>{question.topic}</span>
          </div>

          {question.passage && (
            <div className={styles.passage}>
              <p>{question.passage}</p>
            </div>
          )}

          <h2 className={styles.questionText}>{question.question}</h2>

          <div className={styles.options}>
            {question.options.map((option, index) => {
              let optionClass = styles.option
              if (showResult) {
                if (index === question.correctAnswer) {
                  optionClass += ` ${styles.correct}`
                } else if (index === selectedAnswer && index !== question.correctAnswer) {
                  optionClass += ` ${styles.incorrect}`
                }
              } else if (selectedAnswer === index) {
                optionClass += ` ${styles.selected}`
              }

              return (
                <motion.button
                  key={index}
                  className={optionClass}
                  onClick={() => handleAnswer(index)}
                  disabled={showResult}
                  whileHover={!showResult ? { scale: 1.01 } : {}}
                  whileTap={!showResult ? { scale: 0.99 } : {}}
                >
                  <span className={styles.optionLetter}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className={styles.optionText}>{option}</span>
                  {showResult && index === question.correctAnswer && (
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                  )}
                  {showResult && index === selectedAnswer && index !== question.correctAnswer && (
                    <XCircle size={18} className={styles.xIcon} />
                  )}
                </motion.button>
              )
            })}
          </div>

          {showResult && (
            <motion.div 
              className={styles.resultSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className={`${styles.resultBanner} ${selectedAnswer === question.correctAnswer ? styles.correctBanner : styles.incorrectBanner}`}>
                {selectedAnswer === question.correctAnswer ? (
                  <>
                    <CheckCircle2 size={20} />
                    <span>Correct! +{answers[answers.length - 1]?.points || 0}</span>
                  </>
                ) : (
                  <>
                    <XCircle size={20} />
                    <span>Incorrect - Streak lost</span>
                  </>
                )}
              </div>

              <div className={styles.explanation}>
                <strong>Explanation</strong>
                <p>{question.explanation}</p>
              </div>

              <button className={styles.nextButton} onClick={nextQuestion}>
                {currentQuestion < dailyQuestions.length - 1 ? 'Next' : 'Results'}
                <ArrowRight size={16} />
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
