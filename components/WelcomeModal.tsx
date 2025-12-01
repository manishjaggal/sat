'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronRight, Target, BookOpen, 
  Calendar, Trophy, Sparkles, X, Check, TrendingUp
} from 'lucide-react'
import styles from './WelcomeModal.module.css'

interface WelcomeModalProps {
  userName?: string
  onComplete?: () => void
}

const steps = [
  {
    icon: <TrendingUp size={48} />,
    title: 'Welcome to SAT Prep! 🎯',
    description: 'Your AI-powered study platform to boost your SAT score by 200+ points. Let\'s get you started on your path to 1500+!',
    color: 'coral'
  },
  {
    icon: <BookOpen size={48} />,
    title: 'Master Both Sections',
    description: 'Access comprehensive materials covering Reading & Writing and Math — everything you need for the Digital SAT.',
    color: 'teal'
  },
  {
    icon: <Target size={48} />,
    title: 'Practice Makes Perfect',
    description: 'Take unlimited adaptive practice tests, quick quizzes, and daily challenges. Get instant feedback with expert explanations.',
    color: 'coral'
  },
  {
    icon: <Trophy size={48} />,
    title: 'Track Your Progress',
    description: 'Stay motivated with streaks, XP points, and score predictions. Know exactly when you\'re ready for test day.',
    color: 'teal'
  }
]

const examDates = [
  'In 2 weeks',
  'In 1 month',
  'In 2 months',
  'In 3+ months',
  'Not sure yet'
]

const studyGoals = [
  '15 mins/day',
  '30 mins/day',
  '1 hour/day',
  '2+ hours/day'
]

export function WelcomeModal({ userName = 'there', onComplete }: WelcomeModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedExamDate, setSelectedExamDate] = useState('')
  const [selectedGoal, setSelectedGoal] = useState('')

  useEffect(() => {
    // Check if user has completed onboarding
    const hasCompletedOnboarding = localStorage.getItem('sat-onboarding-complete')
    if (!hasCompletedOnboarding) {
      setIsOpen(true)
    }
  }, [])

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handleComplete = () => {
    localStorage.setItem('sat-onboarding-complete', 'true')
    setIsOpen(false)
    onComplete?.()
  }

  const handleSkip = () => {
    localStorage.setItem('sat-onboarding-complete', 'true')
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className={styles.modal}
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
        >
          <button className={styles.skipBtn} onClick={handleSkip}>
            Skip <X size={16} />
          </button>

          {/* Progress dots */}
          <div className={styles.progress}>
            {[...steps, { title: 'setup' }].map((_, i) => (
              <div
                key={i}
                className={`${styles.dot} ${i === currentStep ? styles.active : ''} ${i < currentStep ? styles.completed : ''}`}
              />
            ))}
          </div>

          {/* Step content */}
          <AnimatePresence mode="wait">
            {currentStep < steps.length ? (
              <motion.div
                key={currentStep}
                className={styles.stepContent}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`${styles.iconWrapper} ${styles[steps[currentStep].color]}`}>
                  {steps[currentStep].icon}
                </div>
                <h2>{steps[currentStep].title}</h2>
                <p>{steps[currentStep].description}</p>
              </motion.div>
            ) : (
              <motion.div
                key="setup"
                className={styles.setupContent}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.iconWrapper}>
                  <Sparkles size={48} />
                </div>
                <h2>Let's personalize your experience</h2>
                
                <div className={styles.setupSection}>
                  <label>When is your SAT exam?</label>
                  <div className={styles.optionGrid}>
                    {examDates.map(date => (
                      <button
                        key={date}
                        className={`${styles.optionBtn} ${selectedExamDate === date ? styles.selected : ''}`}
                        onClick={() => setSelectedExamDate(date)}
                      >
                        {date}
                        {selectedExamDate === date && <Check size={14} />}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.setupSection}>
                  <label>Daily study goal?</label>
                  <div className={styles.optionGrid}>
                    {studyGoals.map(goal => (
                      <button
                        key={goal}
                        className={`${styles.optionBtn} ${selectedGoal === goal ? styles.selected : ''}`}
                        onClick={() => setSelectedGoal(goal)}
                      >
                        {goal}
                        {selectedGoal === goal && <Check size={14} />}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Actions */}
          <div className={styles.actions}>
            {currentStep < steps.length ? (
              <button className={styles.nextBtn} onClick={handleNext}>
                Continue
                <ChevronRight size={18} />
              </button>
            ) : (
              <button 
                className={styles.startBtn} 
                onClick={handleComplete}
                disabled={!selectedExamDate || !selectedGoal}
              >
                Start Learning
                <Sparkles size={18} />
              </button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
