'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import {
  Clock, Flag, ChevronLeft, ChevronRight, Check,
  AlertCircle, Pause, Play, X, BookOpen, HelpCircle,
  BarChart3, ArrowRight
} from 'lucide-react'
import { allQuestions, getRandomQuestions, Question } from '@/lib/questions'
import styles from './test.module.css'

export default function PracticeTestPage() {
  const params = useParams()
  const router = useRouter()
  const testId = params.testId as string
  
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<{ [key: string]: number }>({})
  const [flagged, setFlagged] = useState<Set<string>>(new Set())
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [showExitModal, setShowExitModal] = useState(false)
  const [showSubmitModal, setShowSubmitModal] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  // Initialize test
  useEffect(() => {
    let testQuestions: Question[] = []
    let time = 0

    if (testId.startsWith('full-')) {
      // Full SAT practice test - both sections
      testQuestions = getRandomQuestions(44) // 22 per section
      time = 64 * 60 // 64 minutes (SAT R&W time)
    } else if (testId.startsWith('rw') || testId.startsWith('reading')) {
      // Reading & Writing section
      testQuestions = getRandomQuestions(27, 'reading-writing')
      time = 32 * 60 // 32 minutes per module
    } else if (testId.startsWith('math')) {
      // Math section
      testQuestions = getRandomQuestions(22, 'math')
      time = 35 * 60 // 35 minutes per module
    } else {
      // Quick practice - 10 random questions
      testQuestions = getRandomQuestions(10)
      time = 10 * 60
    }

    setQuestions(testQuestions)
    setTimeRemaining(time)
  }, [testId])

  // Timer
  useEffect(() => {
    if (isPaused || isComplete || timeRemaining <= 0) return

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          handleSubmit()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isPaused, isComplete, timeRemaining])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const currentQuestion = questions[currentIndex]
  const answeredCount = Object.keys(answers).length
  const progress = questions.length > 0 ? (answeredCount / questions.length) * 100 : 0

  const selectAnswer = (optionIndex: number) => {
    if (isComplete) return
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: optionIndex }))
  }

  const toggleFlag = () => {
    setFlagged(prev => {
      const newSet = new Set(prev)
      if (newSet.has(currentQuestion.id)) {
        newSet.delete(currentQuestion.id)
      } else {
        newSet.add(currentQuestion.id)
      }
      return newSet
    })
  }

  const goToQuestion = (index: number) => {
    setCurrentIndex(index)
    setShowExplanation(false)
  }

  const goNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setShowExplanation(false)
    }
  }

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
      setShowExplanation(false)
    }
  }

  const handleSubmit = useCallback(() => {
    setIsComplete(true)
    setIsPaused(true)
  }, [])

  const calculateScore = () => {
    let correct = 0
    questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        correct++
      }
    })
    return {
      correct,
      total: questions.length,
      percentage: Math.round((correct / questions.length) * 100)
    }
  }

  if (questions.length === 0) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner} />
        <p>Loading practice test...</p>
      </div>
    )
  }

  if (isComplete) {
    const score = calculateScore()
    return (
      <div className={styles.resultsPage}>
        <motion.div 
          className={styles.resultsCard}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.resultsHeader}>
            <h1>Test Complete!</h1>
            <p>Here's how you did</p>
          </div>

          <div className={styles.scoreCircle}>
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" className={styles.scoreBg} />
              <circle 
                cx="50" cy="50" r="45" 
                className={styles.scoreValue}
                strokeDasharray="283"
                strokeDashoffset={283 - (283 * score.percentage) / 100}
              />
            </svg>
            <div className={styles.scoreText}>
              <strong>{score.percentage}%</strong>
              <span>{score.correct} / {score.total}</span>
            </div>
          </div>

          <div className={styles.resultStats}>
            <div className={styles.resultStat}>
              <span>Correct</span>
              <strong className={styles.correct}>{score.correct}</strong>
            </div>
            <div className={styles.resultStat}>
              <span>Incorrect</span>
              <strong className={styles.incorrect}>{score.total - score.correct}</strong>
            </div>
            <div className={styles.resultStat}>
              <span>Flagged</span>
              <strong>{flagged.size}</strong>
            </div>
          </div>

          <div className={styles.resultActions}>
            <button 
              onClick={() => {
                setCurrentIndex(0)
                setShowExplanation(true)
              }}
              className={styles.reviewBtn}
            >
              <BookOpen size={18} />
              Review Answers
            </button>
            <Link href="/dashboard/practice" className={styles.backBtn}>
              Back to Practice Tests
            </Link>
          </div>
        </motion.div>

        {/* Review Mode */}
        {showExplanation && (
          <motion.div 
            className={styles.reviewSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2>Question Review</h2>
            <div className={styles.reviewGrid}>
              {questions.map((q, idx) => (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`${styles.reviewItem} ${
                    answers[q.id] === q.correctAnswer ? styles.reviewCorrect : styles.reviewIncorrect
                  } ${currentIndex === idx ? styles.reviewActive : ''}`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            <div className={styles.reviewQuestion}>
              <div className={styles.reviewQuestionHeader}>
                <span>Question {currentIndex + 1}</span>
                <span className={answers[currentQuestion.id] === currentQuestion.correctAnswer ? styles.correct : styles.incorrect}>
                  {answers[currentQuestion.id] === currentQuestion.correctAnswer ? 'Correct' : 'Incorrect'}
                </span>
              </div>
              
              {currentQuestion.passage && (
                <div className={styles.passage}>
                  <p>{currentQuestion.passage}</p>
                </div>
              )}
              
              <p className={styles.questionText}>{currentQuestion.question}</p>
              
              <div className={styles.reviewOptions}>
                {currentQuestion.options.map((option, idx) => (
                  <div 
                    key={idx}
                    className={`${styles.reviewOption} ${
                      idx === currentQuestion.correctAnswer ? styles.optionCorrect : ''
                    } ${
                      idx === answers[currentQuestion.id] && idx !== currentQuestion.correctAnswer ? styles.optionWrong : ''
                    }`}
                  >
                    <span className={styles.optionLetter}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                    {idx === currentQuestion.correctAnswer && <Check size={16} />}
                    {idx === answers[currentQuestion.id] && idx !== currentQuestion.correctAnswer && <X size={16} />}
                  </div>
                ))}
              </div>

              <div className={styles.explanationBox}>
                <h4>Explanation</h4>
                <p>{currentQuestion.explanation}</p>
              </div>

              <div className={styles.reviewNav}>
                <button onClick={goPrev} disabled={currentIndex === 0}>
                  <ChevronLeft size={18} /> Previous
                </button>
                <button onClick={goNext} disabled={currentIndex === questions.length - 1}>
                  Next <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    )
  }

  return (
    <div className={styles.testPage}>
      {/* Header */}
      <header className={styles.testHeader}>
        <div className={styles.headerLeft}>
          <button onClick={() => setShowExitModal(true)} className={styles.exitBtn}>
            <X size={20} />
          </button>
          <div className={styles.testInfo}>
            <h1>Practice Test</h1>
            <span>Question {currentIndex + 1} of {questions.length}</span>
          </div>
        </div>

        <div className={styles.headerCenter}>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
          </div>
          <span>{answeredCount} of {questions.length} answered</span>
        </div>

        <div className={styles.headerRight}>
          <div className={`${styles.timer} ${timeRemaining < 300 ? styles.timerWarning : ''}`}>
            <Clock size={18} />
            <span>{formatTime(timeRemaining)}</span>
          </div>
          <button onClick={() => setIsPaused(!isPaused)} className={styles.pauseBtn}>
            {isPaused ? <Play size={18} /> : <Pause size={18} />}
          </button>
        </div>
      </header>

      <div className={styles.testContent}>
        {/* Question Navigator */}
        <aside className={styles.navigator}>
          <h3>Questions</h3>
          <div className={styles.navGrid}>
            {questions.map((q, idx) => (
              <button
                key={q.id}
                onClick={() => goToQuestion(idx)}
                className={`${styles.navItem} ${
                  currentIndex === idx ? styles.navCurrent : ''
                } ${
                  answers[q.id] !== undefined ? styles.navAnswered : ''
                } ${
                  flagged.has(q.id) ? styles.navFlagged : ''
                }`}
              >
                {idx + 1}
                {flagged.has(q.id) && <Flag size={8} className={styles.navFlag} />}
              </button>
            ))}
          </div>
          <div className={styles.navLegend}>
            <span><span className={styles.legendCurrent} /> Current</span>
            <span><span className={styles.legendAnswered} /> Answered</span>
            <span><span className={styles.legendFlagged} /> Flagged</span>
          </div>
        </aside>

        {/* Question Area */}
        <main className={styles.questionArea}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className={styles.questionCard}
            >
              <div className={styles.questionHeader}>
                <div className={styles.questionMeta}>
                  <span className={styles.subject}>{currentQuestion.subject}</span>
                  <span className={styles.topic}>{currentQuestion.topic}</span>
                  <span className={`${styles.difficulty} ${styles[currentQuestion.difficulty]}`}>
                    {currentQuestion.difficulty}
                  </span>
                </div>
                <button 
                  onClick={toggleFlag}
                  className={`${styles.flagBtn} ${flagged.has(currentQuestion.id) ? styles.flagged : ''}`}
                >
                  <Flag size={18} />
                  {flagged.has(currentQuestion.id) ? 'Flagged' : 'Flag for Review'}
                </button>
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
                    onClick={() => selectAnswer(idx)}
                    className={`${styles.option} ${answers[currentQuestion.id] === idx ? styles.selected : ''}`}
                  >
                    <span className={styles.optionLetter}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className={styles.optionText}>{option}</span>
                    {answers[currentQuestion.id] === idx && <Check size={18} />}
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className={styles.questionNav}>
            <button 
              onClick={goPrev} 
              disabled={currentIndex === 0}
              className={styles.navBtn}
            >
              <ChevronLeft size={20} />
              Previous
            </button>
            
            {currentIndex === questions.length - 1 ? (
              <button 
                onClick={() => setShowSubmitModal(true)}
                className={styles.submitBtn}
              >
                Submit Test
                <ArrowRight size={20} />
              </button>
            ) : (
              <button 
                onClick={goNext}
                className={styles.navBtn}
              >
                Next
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </main>
      </div>

      {/* Pause Overlay */}
      <AnimatePresence>
        {isPaused && !isComplete && (
          <motion.div 
            className={styles.pauseOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={styles.pauseCard}>
              <Pause size={48} />
              <h2>Test Paused</h2>
              <p>Take a break. Your progress is saved.</p>
              <button onClick={() => setIsPaused(false)} className={styles.resumeBtn}>
                <Play size={20} />
                Resume Test
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Exit Modal */}
      <AnimatePresence>
        {showExitModal && (
          <motion.div 
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className={styles.modalCard}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            >
              <AlertCircle size={48} className={styles.modalIcon} />
              <h2>Exit Practice Test?</h2>
              <p>Your progress will be lost. Are you sure you want to exit?</p>
              <div className={styles.modalActions}>
                <button onClick={() => setShowExitModal(false)} className={styles.cancelBtn}>
                  Continue Test
                </button>
                <Link href="/dashboard/practice" className={styles.confirmBtn}>
                  Exit Test
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit Modal */}
      <AnimatePresence>
        {showSubmitModal && (
          <motion.div 
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className={styles.modalCard}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            >
              <BarChart3 size={48} className={styles.modalIconSubmit} />
              <h2>Submit Test?</h2>
              <p>
                You've answered {answeredCount} of {questions.length} questions.
                {answeredCount < questions.length && (
                  <span className={styles.unanswered}>
                    {' '}({questions.length - answeredCount} unanswered)
                  </span>
                )}
              </p>
              <div className={styles.modalActions}>
                <button onClick={() => setShowSubmitModal(false)} className={styles.cancelBtn}>
                  Review Answers
                </button>
                <button onClick={handleSubmit} className={styles.submitConfirmBtn}>
                  Submit Test
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

