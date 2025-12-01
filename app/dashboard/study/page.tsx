'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  BookOpen, Calculator, ChevronRight,
  Clock, CheckCircle2, Star, TrendingUp, Zap,
  Brain, Trophy, Flame, Calendar, ArrowRight, Target,
  PenTool, BarChart3, Shapes
} from 'lucide-react'
import styles from './study.module.css'

const subjects = [
  {
    id: 'reading-writing',
    name: 'Reading & Writing',
    icon: <BookOpen size={20} />,
    color: 'coral',
    description: 'Comprehension, vocabulary, grammar, and writing conventions',
    progress: 65,
    totalModules: 8,
    completedModules: 5,
    examWeight: '50%',
    estimatedTime: '20h',
    streak: 4,
    lastStudied: 'Today',
    scoreRange: '200-800',
    topics: ['Information & Ideas', 'Craft & Structure', 'Standard English Conventions', 'Expression of Ideas']
  },
  {
    id: 'math',
    name: 'Math',
    icon: <Calculator size={20} />,
    color: 'teal',
    description: 'Algebra, advanced math, problem-solving, and geometry',
    progress: 48,
    totalModules: 8,
    completedModules: 4,
    examWeight: '50%',
    estimatedTime: '25h',
    streak: 2,
    lastStudied: 'Yesterday',
    scoreRange: '200-800',
    topics: ['Algebra', 'Advanced Math', 'Problem-Solving & Data Analysis', 'Geometry & Trigonometry']
  }
]

const recommendedModules = [
  {
    title: 'Quadratic Equations',
    subject: 'math',
    subjectName: 'Math',
    reason: '🎯 Weak area',
    duration: '25 min',
    color: 'teal',
    xp: 50,
    icon: <Calculator size={16} />
  },
  {
    title: 'Vocabulary in Context',
    subject: 'reading-writing',
    subjectName: 'Reading & Writing',
    reason: '⭐ High-yield',
    duration: '20 min',
    color: 'coral',
    xp: 60,
    icon: <BookOpen size={16} />
  },
  {
    title: 'Linear Functions',
    subject: 'math',
    subjectName: 'Math',
    reason: '▶️ Continue',
    duration: '30 min',
    color: 'teal',
    xp: 45,
    icon: <TrendingUp size={16} />
  }
]

const mathTopics = [
  { name: 'Algebra', icon: <PenTool size={16} />, questions: 35, progress: 60 },
  { name: 'Advanced Math', icon: <BarChart3 size={16} />, questions: 35, progress: 40 },
  { name: 'Problem-Solving & Data', icon: <Target size={16} />, questions: 15, progress: 55 },
  { name: 'Geometry & Trig', icon: <Shapes size={16} />, questions: 15, progress: 35 }
]

const rwTopics = [
  { name: 'Information & Ideas', icon: <BookOpen size={16} />, questions: 26, progress: 70 },
  { name: 'Craft & Structure', icon: <PenTool size={16} />, questions: 28, progress: 65 },
  { name: 'English Conventions', icon: <CheckCircle2 size={16} />, questions: 26, progress: 60 },
  { name: 'Expression of Ideas', icon: <Zap size={16} />, questions: 20, progress: 55 }
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
  const predictedScore = Math.round(800 + (overallProgress / 100) * 800)

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
          <p>Master the Digital SAT with focused practice</p>
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
            <strong>{predictedScore}</strong>
            <span>predicted score</span>
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

      {/* SAT Sections */}
      <motion.section 
        className={styles.subjects}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        <div className={styles.subjectsHeader}>
          <h2>SAT Sections</h2>
          <span className={styles.totalScore}>Target: 1600</span>
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

                <div className={styles.topicsList}>
                  {subject.topics.slice(0, 3).map((topic, i) => (
                    <span key={i} className={styles.topicTag}>{topic}</span>
                  ))}
                  {subject.topics.length > 3 && (
                    <span className={styles.topicTag}>+{subject.topics.length - 3}</span>
                  )}
                </div>

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

      {/* Topic Breakdown */}
      <motion.section 
        className={styles.topicBreakdown}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <h2>Topic Breakdown</h2>
        <div className={styles.topicColumns}>
          <div className={styles.topicColumn}>
            <h3><Calculator size={16} /> Math Topics</h3>
            {mathTopics.map((topic, idx) => (
              <div key={idx} className={styles.topicItem}>
                <div className={styles.topicItemLeft}>
                  {topic.icon}
                  <span>{topic.name}</span>
                </div>
                <div className={styles.topicItemRight}>
                  <div className={styles.miniProgress}>
                    <div style={{ width: `${topic.progress}%` }} />
                  </div>
                  <span>{topic.progress}%</span>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.topicColumn}>
            <h3><BookOpen size={16} /> Reading & Writing Topics</h3>
            {rwTopics.map((topic, idx) => (
              <div key={idx} className={styles.topicItem}>
                <div className={styles.topicItemLeft}>
                  {topic.icon}
                  <span>{topic.name}</span>
                </div>
                <div className={styles.topicItemRight}>
                  <div className={styles.miniProgress}>
                    <div style={{ width: `${topic.progress}%` }} />
                  </div>
                  <span>{topic.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Study Streak */}
      <motion.section 
        className={styles.streakCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.25 }}
      >
        <div className={styles.streakIcon}>
          <Flame size={24} />
        </div>
        <div className={styles.streakInfo}>
          <strong>7 Day Study Streak! 🔥</strong>
          <p>Keep studying daily to boost your SAT score</p>
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
        transition={{ duration: 0.4, delay: 0.3 }}
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
            <span>Full SAT simulation</span>
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
