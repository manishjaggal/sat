'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  BookOpen, Target, Beaker, MessageSquare, ChevronRight,
  Clock, CheckCircle2, Lock, Star, TrendingUp, Zap,
  Brain, Trophy, Flame, Play, Calendar, ArrowRight
} from 'lucide-react'
import styles from './study.module.css'

const subjects = [
  {
    id: 'reading',
    name: 'Reading',
    icon: <BookOpen size={20} />,
    color: 'teal',
    description: 'Comprehension, analysis, and interpretation',
    progress: 68,
    totalModules: 8,
    completedModules: 5,
    examWeight: '39%',
    estimatedTime: '12h',
    streak: 3,
    lastStudied: 'Today'
  },
  {
    id: 'math',
    name: 'Mathematics',
    icon: <Target size={20} />,
    color: 'amber',
    description: 'Numbers, algebra, and data interpretation',
    progress: 42,
    totalModules: 10,
    completedModules: 4,
    examWeight: '25%',
    estimatedTime: '15h',
    streak: 0,
    lastStudied: '2 days ago'
  },
  {
    id: 'science',
    name: 'Science',
    icon: <Beaker size={20} />,
    color: 'coral',
    description: 'Anatomy, biology, and scientific reasoning',
    progress: 55,
    totalModules: 12,
    completedModules: 7,
    examWeight: '31%',
    estimatedTime: '18h',
    streak: 1,
    lastStudied: 'Yesterday'
  },
  {
    id: 'english',
    name: 'English',
    icon: <MessageSquare size={20} />,
    color: 'navy',
    description: 'Grammar, vocabulary, and conventions',
    progress: 71,
    totalModules: 6,
    completedModules: 4,
    examWeight: '22%',
    estimatedTime: '8h',
    streak: 5,
    lastStudied: 'Today'
  }
]

const recommendedModules = [
  {
    title: 'Ratios and Proportions',
    subject: 'math',
    subjectName: 'Mathematics',
    reason: '🎯 Weak area',
    duration: '25 min',
    color: 'amber',
    xp: 50
  },
  {
    title: 'Human Body Systems',
    subject: 'science',
    subjectName: 'Science',
    reason: '⭐ High-yield',
    duration: '35 min',
    color: 'coral',
    xp: 75
  },
  {
    title: 'Context Clues',
    subject: 'reading',
    subjectName: 'Reading',
    reason: '▶️ Continue',
    duration: '20 min',
    color: 'teal',
    xp: 40
  }
]

const dailyGoals = [
  { label: 'Study 30 min', current: 25, target: 30, completed: false },
  { label: 'Complete 1 lesson', current: 1, target: 1, completed: true },
  { label: 'Practice 20 questions', current: 15, target: 20, completed: false }
]

export default function StudyPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const overallProgress = Math.round(subjects.reduce((sum, s) => sum + s.progress, 0) / subjects.length)
  const completedModules = subjects.reduce((sum, s) => sum + s.completedModules, 0)
  const totalModules = subjects.reduce((sum, s) => sum + s.totalModules, 0)

  return (
    <div className={styles.study}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div>
          <h1>Study Materials</h1>
          <p>Master each subject with lessons & practice</p>
        </div>
        <div className={styles.headerStats}>
          <div className={styles.progressCircle}>
            <svg viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="15.9" className={styles.progressBg} />
              <circle 
                cx="18" 
                cy="18" 
                r="15.9"
                className={styles.progressValue}
                strokeDasharray={`${overallProgress}, 100`}
              />
            </svg>
            <span>{overallProgress}%</span>
          </div>
          <div className={styles.progressInfo}>
            <strong>{completedModules}/{totalModules}</strong>
            <span>modules done</span>
          </div>
        </div>
      </motion.div>

      {/* Daily Goals */}
      <motion.section 
        className={styles.dailyGoals}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        <div className={styles.goalsHeader}>
          <h2>
            <Calendar size={16} />
            Today's Goals
          </h2>
          <span className={styles.goalsProgress}>
            {dailyGoals.filter(g => g.completed).length}/{dailyGoals.length}
          </span>
        </div>
        <div className={styles.goalsList}>
          {dailyGoals.map((goal, idx) => (
            <div 
              key={idx} 
              className={`${styles.goalItem} ${goal.completed ? styles.completed : ''}`}
            >
              <div className={styles.goalCheck}>
                {goal.completed ? <CheckCircle2 size={16} /> : <div className={styles.goalCircle} />}
              </div>
              <span className={styles.goalLabel}>{goal.label}</span>
              <span className={styles.goalCount}>
                {goal.current}/{goal.target}
              </span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Recommended Section */}
      <motion.section 
        className={styles.recommended}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h2>
          <Zap size={16} />
          Quick Start
        </h2>
        <div className={styles.recommendedGrid}>
          {recommendedModules.map((module, idx) => (
            <Link 
              key={idx}
              href={`/dashboard/study/${module.subject}`}
              className={`${styles.recommendedCard} ${styles[module.color]}`}
            >
              <div className={styles.recommendedHeader}>
                <span className={styles.recommendedSubject}>{module.subjectName}</span>
                <span className={styles.xpBadge}>+{module.xp} XP</span>
              </div>
              <h3>{module.title}</h3>
              <div className={styles.recommendedFooter}>
                <span className={styles.recommendedReason}>{module.reason}</span>
                <span className={styles.recommendedDuration}>
                  <Clock size={12} />
                  {module.duration}
                </span>
              </div>
              <ArrowRight size={16} className={styles.recommendedArrow} />
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Subjects Grid */}
      <motion.section 
        className={styles.subjects}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        <div className={styles.subjectsHeader}>
          <h2>All Subjects</h2>
        </div>
        <div className={styles.subjectsGrid}>
          {subjects.map((subject, idx) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 * idx }}
            >
              <Link 
                href={`/dashboard/study/${subject.id}`}
                className={`${styles.subjectCard} ${styles[subject.color]}`}
              >
                <div className={styles.subjectTop}>
                  <div className={styles.subjectIcon}>
                    {subject.icon}
                  </div>
                  <div className={styles.subjectBadges}>
                    <span className={styles.examWeight}>{subject.examWeight}</span>
                    {subject.streak > 0 && (
                      <span className={styles.streakBadge}>
                        <Flame size={10} />
                        {subject.streak}
                      </span>
                    )}
                  </div>
                </div>

                <h3>{subject.name}</h3>
                <p>{subject.description}</p>

                <div className={styles.subjectProgress}>
                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progressFill}
                      style={{ width: `${subject.progress}%` }}
                    />
                  </div>
                  <div className={styles.progressMeta}>
                    <span>{subject.completedModules}/{subject.totalModules} modules</span>
                    <span>{subject.progress}%</span>
                  </div>
                </div>

                <div className={styles.subjectFooter}>
                  <span className={styles.lastStudied}>
                    <Clock size={12} />
                    {subject.lastStudied}
                  </span>
                  <span className={styles.continueBtn}>
                    Continue
                    <ChevronRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Study Streak */}
      <motion.section 
        className={styles.streakCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className={styles.streakIcon}>
          <Flame size={24} />
        </div>
        <div className={styles.streakInfo}>
          <strong>7 Day Study Streak! 🔥</strong>
          <p>Keep studying daily to maintain your streak</p>
        </div>
        <div className={styles.streakDays}>
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, idx) => (
            <div 
              key={idx}
              className={`${styles.streakDay} ${idx < 5 ? styles.active : ''}`}
            >
              <span>{day}</span>
              {idx < 5 && <CheckCircle2 size={12} />}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Quick Actions */}
      <motion.section 
        className={styles.quickActions}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.25 }}
      >
        <Link href="/dashboard/flashcards" className={styles.actionCard}>
          <Brain size={20} />
          <div>
            <strong>Flashcards</strong>
            <span>Review key concepts</span>
          </div>
          <ChevronRight size={16} />
        </Link>
        <Link href="/dashboard/practice" className={styles.actionCard}>
          <Target size={20} />
          <div>
            <strong>Practice Test</strong>
            <span>Test your knowledge</span>
          </div>
          <ChevronRight size={16} />
        </Link>
        <Link href="/dashboard/notes" className={styles.actionCard}>
          <BookOpen size={20} />
          <div>
            <strong>Study Notes</strong>
            <span>Your saved notes</span>
          </div>
          <ChevronRight size={16} />
        </Link>
      </motion.section>
    </div>
  )
}
