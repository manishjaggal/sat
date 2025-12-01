'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  Play, Clock, Target, FileText, ChevronRight, Filter,
  CheckCircle2, XCircle, TrendingUp, Award, Brain, Zap,
  BookOpen, Beaker, MessageSquare, BarChart3, Star, Flame,
  Timer, Trophy, ArrowRight, X
} from 'lucide-react'
import styles from './practice.module.css'

const practiceTests = [
  {
    id: 'full-1',
    type: 'Full Test',
    title: 'Full Practice Exam #1',
    questions: 170,
    duration: '209 min',
    difficulty: 'Exam Level',
    completed: true,
    score: 76,
    date: 'Nov 15, 2024',
    improvement: null
  },
  {
    id: 'full-2',
    type: 'Full Test',
    title: 'Full Practice Exam #2',
    questions: 170,
    duration: '209 min',
    difficulty: 'Exam Level',
    completed: true,
    score: 82,
    date: 'Nov 22, 2024',
    improvement: +6
  },
  {
    id: 'full-3',
    type: 'Full Test',
    title: 'Full Practice Exam #3',
    questions: 170,
    duration: '209 min',
    difficulty: 'Exam Level',
    completed: false
  },
  {
    id: 'full-4',
    type: 'Full Test',
    title: 'Full Practice Exam #4',
    questions: 170,
    duration: '209 min',
    difficulty: 'Exam Level',
    completed: false
  }
]

const subjectTests = [
  {
    id: 'reading-1',
    subject: 'Language Arts',
    icon: <BookOpen size={18} />,
    title: 'Reading & Writing',
    questions: 50,
    duration: '150 min',
    color: 'teal',
    attempts: 3,
    bestScore: 84,
    topics: ['Comprehension', 'Writing', 'Grammar']
  },
  {
    id: 'math-1',
    subject: 'Math Reasoning',
    icon: <Target size={18} />,
    title: 'Mathematical Reasoning',
    questions: 46,
    duration: '115 min',
    color: 'amber',
    attempts: 2,
    bestScore: 72,
    topics: ['Algebra', 'Geometry', 'Data Analysis']
  },
  {
    id: 'science-1',
    subject: 'Science',
    icon: <Beaker size={18} />,
    title: 'Science Reasoning',
    questions: 40,
    duration: '90 min',
    color: 'coral',
    attempts: 1,
    bestScore: 78,
    topics: ['Life Science', 'Physical Science', 'Earth Science']
  },
  {
    id: 'english-1',
    subject: 'Social Studies',
    icon: <MessageSquare size={18} />,
    title: 'Social Studies',
    questions: 28,
    duration: '28 min',
    color: 'navy',
    attempts: 2,
    bestScore: 88,
    topics: ['Grammar', 'Spelling', 'Punctuation']
  }
]

const quickPractice = [
  {
    id: 'weak',
    icon: <Target size={20} />,
    title: 'Weak Areas',
    description: 'Focus on your lowest topics',
    questions: 15,
    color: 'coral'
  },
  {
    id: 'random',
    icon: <Brain size={20} />,
    title: 'Random Mix',
    description: 'Mixed questions for variety',
    questions: 20,
    color: 'teal'
  },
  {
    id: 'timed',
    icon: <Timer size={20} />,
    title: 'Speed Sprint',
    description: '10 questions in 5 minutes',
    questions: 10,
    color: 'amber'
  }
]

export default function PracticePage() {
  const [selectedTest, setSelectedTest] = useState<typeof subjectTests[0] | null>(null)

  const completedTests = practiceTests.filter(t => t.completed).length
  const avgScore = Math.round(practiceTests.filter(t => t.completed).reduce((sum, t) => sum + (t.score || 0), 0) / completedTests)

  return (
    <div className={styles.practice}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div>
          <h1>Practice Tests</h1>
          <p>Build exam readiness with timed practice</p>
        </div>
        <div className={styles.headerStats}>
          <div className={styles.headerStat}>
            <div className={styles.statIcon}>
              <Trophy size={16} />
            </div>
            <div>
              <strong>{avgScore}%</strong>
              <span>Avg Score</span>
            </div>
          </div>
          <div className={styles.headerStat}>
            <div className={styles.statIcon}>
              <FileText size={16} />
            </div>
            <div>
              <strong>{completedTests}</strong>
              <span>Completed</span>
            </div>
          </div>
          <div className={styles.headerStat}>
            <div className={styles.statIcon}>
              <Flame size={16} />
            </div>
            <div>
              <strong>7</strong>
              <span>Day Streak</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Practice Section */}
      <motion.section 
        className={styles.quickSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h2>Quick Practice</h2>
        <div className={styles.quickGrid}>
          {quickPractice.map((item) => (
            <Link
              key={item.id}
              href={`/dashboard/practice/quick?type=${item.id}`}
              className={`${styles.quickCard} ${styles[item.color]}`}
            >
              <div className={styles.quickIcon}>
                {item.icon}
              </div>
              <div className={styles.quickInfo}>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
                <span className={styles.questionCount}>{item.questions} questions</span>
              </div>
              <ArrowRight size={18} className={styles.quickArrow} />
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Daily Challenge Banner */}
      <motion.div 
        className={styles.challengeBanner}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        <div className={styles.challengeContent}>
          <div className={styles.challengeIcon}>
            <Zap size={20} />
          </div>
          <div className={styles.challengeInfo}>
            <strong>Daily Challenge Available!</strong>
            <span>10 questions • Earn bonus XP • Compete on leaderboard</span>
          </div>
        </div>
        <Link href="/dashboard/challenge" className={styles.challengeBtn}>
          Start Challenge
          <ArrowRight size={16} />
        </Link>
      </motion.div>

      {/* Full Practice Tests */}
      <motion.section 
        className={styles.section}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className={styles.sectionHeader}>
          <h2>Full Practice Exams</h2>
          <span className={styles.sectionBadge}>Simulates real GED</span>
        </div>
        <div className={styles.testsGrid}>
          {practiceTests.map((test, idx) => (
            <motion.div
              key={test.id}
              className={`${styles.testCard} ${test.completed ? styles.completed : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 * idx }}
            >
              <div className={styles.testHeader}>
                <span className={styles.testType}>{test.type}</span>
                {test.completed && (
                  <span className={styles.testDate}>{test.date}</span>
                )}
              </div>
              
              <h3>{test.title}</h3>
              
              <div className={styles.testMeta}>
                <span>
                  <FileText size={12} />
                  {test.questions}Q
                </span>
                <span>
                  <Clock size={12} />
                  {test.duration}
                </span>
              </div>

              {test.completed ? (
                <div className={styles.testResult}>
                  <div className={styles.scoreDisplay}>
                    <span className={styles.scoreValue}>{test.score}%</span>
                    {test.improvement && (
                      <span className={styles.improvement}>+{test.improvement}%</span>
                    )}
                  </div>
                  <div className={styles.testActions}>
                    <Link href={`/dashboard/practice/${test.id}/review`} className={styles.reviewBtn}>
                      Review
                    </Link>
                    <Link href={`/dashboard/practice/${test.id}`} className={styles.retakeBtn}>
                      Retake
                    </Link>
                  </div>
                </div>
              ) : (
                <Link href={`/dashboard/practice/${test.id}`} className={styles.startBtn}>
                  <Play size={16} />
                  Start
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Subject Tests */}
      <motion.section 
        className={styles.section}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className={styles.sectionHeader}>
          <h2>Subject Practice</h2>
          <span className={styles.sectionBadge}>Focus areas</span>
        </div>
        <div className={styles.subjectTestsGrid}>
          {subjectTests.map((test, idx) => (
            <motion.button
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 * idx }}
              className={`${styles.subjectTestCard} ${styles[test.color]}`}
              onClick={() => setSelectedTest(test)}
            >
              <div className={styles.subjectTestIcon}>
                {test.icon}
              </div>
              <div className={styles.subjectTestInfo}>
                <span className={styles.subjectLabel}>{test.subject}</span>
                <h3>{test.title}</h3>
                <div className={styles.subjectTestMeta}>
                  <span>{test.questions}Q</span>
                  <span>•</span>
                  <span>{test.duration}</span>
                </div>
              </div>
              <div className={styles.subjectTestStats}>
                {test.attempts > 0 ? (
                  <>
                    <div className={styles.bestScore}>
                      <strong>{test.bestScore}%</strong>
                      <span>Best</span>
                    </div>
                  </>
                ) : (
                  <span className={styles.notAttempted}>New</span>
                )}
              </div>
              <ChevronRight size={18} className={styles.subjectArrow} />
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* Test Preview Modal */}
      <AnimatePresence>
        {selectedTest && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTest(null)}
          >
            <motion.div
              className={styles.modal}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className={styles.modalClose}
                onClick={() => setSelectedTest(null)}
              >
                <X size={20} />
              </button>

              <div className={`${styles.modalHeader} ${styles[selectedTest.color]}`}>
                <div className={styles.modalIcon}>
                  {selectedTest.icon}
                </div>
                <div>
                  <span className={styles.modalSubject}>{selectedTest.subject}</span>
                  <h2>{selectedTest.title}</h2>
                </div>
              </div>

              <div className={styles.modalBody}>
                <div className={styles.modalStats}>
                  <div className={styles.modalStat}>
                    <FileText size={18} />
                    <div>
                      <strong>{selectedTest.questions}</strong>
                      <span>Questions</span>
                    </div>
                  </div>
                  <div className={styles.modalStat}>
                    <Clock size={18} />
                    <div>
                      <strong>{selectedTest.duration}</strong>
                      <span>Duration</span>
                    </div>
                  </div>
                  {selectedTest.attempts > 0 && (
                    <div className={styles.modalStat}>
                      <Trophy size={18} />
                      <div>
                        <strong>{selectedTest.bestScore}%</strong>
                        <span>Best Score</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className={styles.topicsSection}>
                  <h3>Topics Covered</h3>
                  <div className={styles.topicsList}>
                    {selectedTest.topics.map((topic, idx) => (
                      <span key={idx} className={styles.topicTag}>
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedTest.attempts > 0 && (
                  <div className={styles.historySection}>
                    <h3>Previous Attempts</h3>
                    <div className={styles.attemptsList}>
                      <div className={styles.attemptItem}>
                        <span>Attempt {selectedTest.attempts}</span>
                        <strong>{selectedTest.bestScore}%</strong>
                      </div>
                      {selectedTest.attempts > 1 && (
                        <div className={styles.attemptItem}>
                          <span>Attempt {selectedTest.attempts - 1}</span>
                          <strong>{selectedTest.bestScore - 5}%</strong>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.modalFooter}>
                <Link 
                  href={`/dashboard/practice/${selectedTest.id}`}
                  className={styles.startTestBtn}
                  onClick={() => setSelectedTest(null)}
                >
                  <Play size={18} />
                  {selectedTest.attempts > 0 ? 'Retake Test' : 'Start Test'}
                </Link>
                {selectedTest.attempts > 0 && (
                  <Link 
                    href={`/dashboard/practice/${selectedTest.id}/review`}
                    className={styles.reviewTestBtn}
                    onClick={() => setSelectedTest(null)}
                  >
                    Review Last Attempt
                  </Link>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Performance Tips */}
      <motion.section 
        className={styles.tipsSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <div className={styles.tipCard}>
          <Award size={20} />
          <div>
            <strong>Pro Tip</strong>
            <p>Score 80%+ on full exams to be GED-ready!</p>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
