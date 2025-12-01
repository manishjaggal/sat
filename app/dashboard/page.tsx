'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  BookOpen, Target, Clock, TrendingUp, ChevronRight,
  Play, CheckCircle2, Circle, Flame, Award, BarChart3,
  Brain, FileText, Calculator, PenTool, Zap, Star,
  Calendar, Trophy, Sparkles, Gift, ArrowRight, Timer
} from 'lucide-react'
import styles from './page.module.css'

const subjects = [
  { 
    name: 'Reading & Writing', 
    icon: <BookOpen size={18} />, 
    progress: 68, 
    color: 'coral',
    questions: 45,
    href: '/dashboard/study/reading-writing'
  },
  { 
    name: 'Mathematics', 
    icon: <Calculator size={18} />, 
    progress: 42, 
    color: 'teal',
    questions: 32,
    href: '/dashboard/study/math'
  },
]

const motivationalQuotes = [
  { quote: "Every question you practice brings you closer to 1500+!", emoji: "🎯" },
  { quote: "You're doing amazing! Keep that momentum going!", emoji: "🚀" },
  { quote: "Success is the sum of small efforts repeated daily.", emoji: "✨" },
  { quote: "The SAT exam won't know what hit it!", emoji: "💪" },
  { quote: "Believe in yourself - you've got this!", emoji: "⭐" },
]

export default function DashboardHome() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [quoteIndex, setQuoteIndex] = useState(0)
  const [showDailyTip, setShowDailyTip] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    setQuoteIndex(Math.floor(Math.random() * motivationalQuotes.length))
  }, [])

  const getGreeting = () => {
    const hour = currentTime.getHours()
    if (hour < 12) return { text: 'Good morning', emoji: '☀️' }
    if (hour < 17) return { text: 'Good afternoon', emoji: '🌤️' }
    return { text: 'Good evening', emoji: '🌙' }
  }

  const greeting = getGreeting()
  const currentQuote = motivationalQuotes[quoteIndex]
  const dayStreak = 7
  const totalXP = 2450
  const level = Math.floor(totalXP / 500) + 1
  const xpProgress = (totalXP % 500) / 500 * 100

  return (
    <div className={styles.dashboard}>
      {/* Daily Challenge Banner */}
      <AnimatePresence>
        {showDailyTip && (
          <motion.div 
            className={styles.dailyBanner}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className={styles.bannerContent}>
              <div className={styles.bannerLeft}>
                <Zap size={20} />
                <div>
                  <strong>Daily Challenge Available!</strong>
                  <span>10 questions • Earn bonus XP today</span>
                </div>
              </div>
              <div className={styles.bannerActions}>
                <Link href="/dashboard/challenge" className={styles.bannerBtn}>
                  Start Now
                  <ArrowRight size={14} />
                </Link>
                <button onClick={() => setShowDailyTip(false)} className={styles.bannerClose}>
                  Later
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Welcome Header */}
      <motion.div 
        className={styles.welcome}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className={styles.welcomeMain}>
          <div className={styles.welcomeText}>
            <span className={styles.greeting}>{greeting.emoji} {greeting.text}</span>
            <h1>Sarah!</h1>
          </div>
          <p className={styles.motivationalQuote}>
            {currentQuote.emoji} {currentQuote.quote}
          </p>
        </div>
        
        <div className={styles.welcomeStats}>
          <div className={styles.levelBadge}>
            <div className={styles.levelIcon}>
              <Star size={16} />
              <span>{level}</span>
            </div>
            <div className={styles.levelInfo}>
              <span>Level {level}</span>
              <div className={styles.xpBar}>
                <div className={styles.xpFill} style={{ width: `${xpProgress}%` }} />
              </div>
              <span className={styles.xpText}>{totalXP % 500}/{500} XP</span>
            </div>
          </div>
          
          <Link href="/dashboard/practice" className={styles.startTestBtn}>
            <Play size={16} />
            Practice Test
          </Link>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div 
        className={styles.statsGrid}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.coral}`}>
            <TrendingUp size={18} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Predicted Score</span>
            <strong className={styles.statValue}>1,380</strong>
            <span className={styles.statChange}>+45 this week</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.teal}`}>
            <Clock size={18} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Study Time</span>
            <strong className={styles.statValue}>12.5h</strong>
            <span className={styles.statChange}>This week</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.amber}`}>
            <Brain size={18} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Questions Done</span>
            <strong className={styles.statValue}>847</strong>
            <span className={styles.statChange}>143 this week</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.fire}`}>
            <Flame size={18} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Day Streak</span>
            <strong className={styles.statValue}>{dayStreak} 🔥</strong>
            <span className={styles.statChange}>Personal best!</span>
          </div>
        </div>
      </motion.div>

      <div className={styles.mainGrid}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          {/* Subject Progress */}
          <motion.section 
            className={styles.section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className={styles.sectionHeader}>
              <h2>Section Progress</h2>
              <Link href="/dashboard/study" className={styles.sectionLink}>
                View All <ChevronRight size={14} />
              </Link>
            </div>

            <div className={styles.subjectGrid}>
              {subjects.map((subject, idx) => (
                <Link 
                  key={idx} 
                  href={subject.href}
                  className={`${styles.subjectCard} ${styles[subject.color]}`}
                >
                  <div className={styles.subjectIcon}>
                    {subject.icon}
                  </div>
                  <div className={styles.subjectInfo}>
                    <strong>{subject.name}</strong>
                    <span>{subject.questions} to go</span>
                  </div>
                  <div className={styles.progressRing}>
                    <svg viewBox="0 0 36 36">
                      <path
                        className={styles.progressBg}
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className={styles.progressValue}
                        strokeDasharray={`${subject.progress}, 100`}
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span>{subject.progress}%</span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>

          {/* Continue Learning */}
          <motion.section 
            className={styles.section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className={styles.sectionHeader}>
              <h2>Continue Learning</h2>
            </div>

            <div className={styles.continueCard}>
              <div className={styles.continueContent}>
                <span className={styles.continueLabel}>Mathematics</span>
                <h3>Quadratic Equations</h3>
                <p>Master solving quadratics — a key skill for SAT Math.</p>
                <div className={styles.continueProgress}>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: '65%' }} />
                  </div>
                  <span>65%</span>
                </div>
              </div>
              <Link href="/dashboard/study/math" className={styles.continueBtn}>
                Continue
                <ChevronRight size={16} />
              </Link>
            </div>
          </motion.section>

          {/* Weekly Goal */}
          <motion.section 
            className={styles.section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className={styles.sectionHeader}>
              <h2>Weekly Goal</h2>
              <span className={styles.goalBadge}>4/5 days</span>
            </div>

            <div className={styles.weekGrid}>
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, idx) => (
                <div 
                  key={idx} 
                  className={`${styles.dayCircle} ${idx < 4 ? styles.dayCompleted : idx === 4 ? styles.dayCurrent : ''}`}
                >
                  <span className={styles.dayLabel}>{day}</span>
                  {idx < 4 && <CheckCircle2 size={16} />}
                  {idx >= 4 && <Circle size={16} />}
                </div>
              ))}
            </div>

            <p className={styles.goalText}>
              🎯 Complete 1 more day to earn your weekly badge!
            </p>
          </motion.section>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          {/* Quick Actions */}
          <motion.section 
            className={styles.quickActionsCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            <h2>Quick Start</h2>
            <div className={styles.quickGrid}>
              <Link href="/dashboard/challenge" className={`${styles.quickBtn} ${styles.challenge}`}>
                <Zap size={20} />
                <span>Daily Challenge</span>
              </Link>
              <Link href="/dashboard/flashcards" className={`${styles.quickBtn} ${styles.flashcards}`}>
                <Brain size={20} />
                <span>Flashcards</span>
              </Link>
              <Link href="/dashboard/practice/quick?type=weak" className={`${styles.quickBtn} ${styles.weak}`}>
                <Target size={20} />
                <span>Weak Areas</span>
              </Link>
              <Link href="/dashboard/practice/quick?type=timed" className={`${styles.quickBtn} ${styles.timed}`}>
                <Timer size={20} />
                <span>Speed Run</span>
              </Link>
            </div>
          </motion.section>

          {/* Upcoming Tasks */}
          <motion.section 
            className={styles.section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className={styles.sectionHeader}>
              <h2>Today's Tasks</h2>
            </div>

            <div className={styles.tasksList}>
              <div className={styles.taskItem}>
                <div className={`${styles.taskPriority} ${styles.high}`} />
                <div className={styles.taskInfo}>
                  <strong>Complete Math Module 3</strong>
                  <span>Due today</span>
                </div>
                <div className={styles.taskXP}>+50 XP</div>
              </div>
              <div className={styles.taskItem}>
                <div className={`${styles.taskPriority} ${styles.medium}`} />
                <div className={styles.taskInfo}>
                  <strong>Daily Challenge</strong>
                  <span>10 questions</span>
                </div>
                <div className={styles.taskXP}>+100 XP</div>
              </div>
              <div className={styles.taskItem}>
                <div className={`${styles.taskPriority} ${styles.low}`} />
                <div className={styles.taskInfo}>
                  <strong>Review 20 Flashcards</strong>
                  <span>Optional</span>
                </div>
                <div className={styles.taskXP}>+25 XP</div>
              </div>
            </div>
          </motion.section>

          {/* Recent Activity */}
          <motion.section 
            className={styles.section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            <div className={styles.sectionHeader}>
              <h2>Recent Activity</h2>
            </div>

            <div className={styles.activityList}>
              <div className={styles.activityItem}>
                <div className={styles.activityIcon}>
                  <FileText size={16} />
                </div>
                <div className={styles.activityInfo}>
                  <strong>Reading Practice</strong>
                  <span>2 hours ago</span>
                </div>
                <div className={styles.activityScore}>82%</div>
              </div>
              <div className={styles.activityItem}>
                <div className={styles.activityIcon}>
                  <Calculator size={16} />
                </div>
                <div className={styles.activityInfo}>
                  <strong>Algebra Lesson</strong>
                  <span>Yesterday</span>
                </div>
                <div className={styles.activityCompleted}>
                  <CheckCircle2 size={16} />
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={styles.activityIcon}>
                  <Zap size={16} />
                </div>
                <div className={styles.activityInfo}>
                  <strong>Daily Challenge</strong>
                  <span>Yesterday</span>
                </div>
                <div className={styles.activityScore}>90%</div>
              </div>
            </div>
          </motion.section>

          {/* Achievement Progress */}
          <motion.section 
            className={styles.achievementCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className={styles.achievementIcon}>
              <Trophy size={20} />
            </div>
            <div className={styles.achievementInfo}>
              <strong>Next Achievement</strong>
              <p>Complete 1,000 questions</p>
              <div className={styles.achievementProgress}>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: '84.7%' }} />
                </div>
                <span>847 / 1,000</span>
              </div>
            </div>
            <div className={styles.achievementReward}>
              <Gift size={16} />
              <span>+200 XP</span>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
