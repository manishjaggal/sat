'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import {
  BookOpen, Target, Beaker, MessageSquare, ChevronRight,
  ChevronLeft, Clock, CheckCircle2, Lock, Play, Star,
  FileText, Brain, TrendingUp, Award
} from 'lucide-react'
import styles from './subject.module.css'

const subjectData = {
  reading: {
    name: 'Reading',
    icon: <BookOpen size={28} />,
    color: 'teal',
    description: 'Master reading comprehension, analysis, and interpretation of written passages',
    modules: [
      {
        id: 'r1',
        title: 'Key Ideas & Details',
        lessons: [
          { id: 'r1-1', title: 'Identifying Main Ideas', duration: '15 min', completed: true },
          { id: 'r1-2', title: 'Supporting Details', duration: '12 min', completed: true },
          { id: 'r1-3', title: 'Making Inferences', duration: '18 min', completed: true },
          { id: 'r1-4', title: 'Drawing Conclusions', duration: '15 min', completed: false },
        ],
        questions: 180
      },
      {
        id: 'r2',
        title: 'Craft & Structure',
        lessons: [
          { id: 'r2-1', title: 'Author\'s Purpose', duration: '14 min', completed: true },
          { id: 'r2-2', title: 'Tone and Mood', duration: '16 min', completed: false },
          { id: 'r2-3', title: 'Text Structure', duration: '20 min', completed: false },
          { id: 'r2-4', title: 'Point of View', duration: '12 min', completed: false },
        ],
        questions: 150
      },
      {
        id: 'r3',
        title: 'Integration of Knowledge',
        lessons: [
          { id: 'r3-1', title: 'Comparing Texts', duration: '18 min', completed: false },
          { id: 'r3-2', title: 'Evaluating Arguments', duration: '22 min', completed: false },
          { id: 'r3-3', title: 'Using Evidence', duration: '15 min', completed: false },
          { id: 'r3-4', title: 'Synthesizing Information', duration: '20 min', completed: false },
        ],
        questions: 170
      },
      {
        id: 'r4',
        title: 'Paragraph Comprehension',
        lessons: [
          { id: 'r4-1', title: 'Topic Sentences', duration: '10 min', completed: false },
          { id: 'r4-2', title: 'Paragraph Structure', duration: '14 min', completed: false },
          { id: 'r4-3', title: 'Transitional Words', duration: '12 min', completed: false },
        ],
        questions: 150
      }
    ]
  },
  math: {
    name: 'Mathematics',
    icon: <Target size={28} />,
    color: 'amber',
    description: 'Build confidence in arithmetic, algebra, and data analysis',
    modules: [
      {
        id: 'm1',
        title: 'Numbers & Operations',
        lessons: [
          { id: 'm1-1', title: 'Whole Numbers', duration: '12 min', completed: true },
          { id: 'm1-2', title: 'Fractions', duration: '18 min', completed: true },
          { id: 'm1-3', title: 'Decimals', duration: '15 min', completed: true },
          { id: 'm1-4', title: 'Percentages', duration: '16 min', completed: false },
          { id: 'm1-5', title: 'Order of Operations', duration: '14 min', completed: false },
        ],
        questions: 160
      },
      {
        id: 'm2',
        title: 'Algebra',
        lessons: [
          { id: 'm2-1', title: 'Variables & Expressions', duration: '15 min', completed: true },
          { id: 'm2-2', title: 'Solving Equations', duration: '20 min', completed: false },
          { id: 'm2-3', title: 'Inequalities', duration: '18 min', completed: false },
          { id: 'm2-4', title: 'Word Problems', duration: '25 min', completed: false },
        ],
        questions: 140
      },
      {
        id: 'm3',
        title: 'Ratios & Proportions',
        lessons: [
          { id: 'm3-1', title: 'Understanding Ratios', duration: '14 min', completed: false },
          { id: 'm3-2', title: 'Setting Up Proportions', duration: '16 min', completed: false },
          { id: 'm3-3', title: 'Rate Problems', duration: '18 min', completed: false },
          { id: 'm3-4', title: 'Scale & Conversion', duration: '15 min', completed: false },
        ],
        questions: 130
      },
      {
        id: 'm4',
        title: 'Measurement & Data',
        lessons: [
          { id: 'm4-1', title: 'Units of Measurement', duration: '12 min', completed: false },
          { id: 'm4-2', title: 'Converting Units', duration: '15 min', completed: false },
          { id: 'm4-3', title: 'Reading Charts & Graphs', duration: '18 min', completed: false },
          { id: 'm4-4', title: 'Mean, Median, Mode', duration: '16 min', completed: false },
        ],
        questions: 150
      }
    ]
  },
  science: {
    name: 'Science',
    icon: <Beaker size={28} />,
    color: 'coral',
    description: 'Understand body systems, biology, and scientific concepts',
    modules: [
      {
        id: 's1',
        title: 'Human Anatomy',
        lessons: [
          { id: 's1-1', title: 'Cardiovascular System', duration: '25 min', completed: true },
          { id: 's1-2', title: 'Respiratory System', duration: '22 min', completed: true },
          { id: 's1-3', title: 'Digestive System', duration: '24 min', completed: true },
          { id: 's1-4', title: 'Nervous System', duration: '28 min', completed: false },
          { id: 's1-5', title: 'Muscular System', duration: '20 min', completed: false },
          { id: 's1-6', title: 'Skeletal System', duration: '22 min', completed: false },
          { id: 's1-7', title: 'Endocrine System', duration: '24 min', completed: false },
          { id: 's1-8', title: 'Urinary System', duration: '18 min', completed: false },
        ],
        questions: 250
      },
      {
        id: 's2',
        title: 'Life Science',
        lessons: [
          { id: 's2-1', title: 'Cell Structure', duration: '20 min', completed: true },
          { id: 's2-2', title: 'Cell Division', duration: '22 min', completed: true },
          { id: 's2-3', title: 'Genetics Basics', duration: '25 min', completed: false },
          { id: 's2-4', title: 'DNA & RNA', duration: '24 min', completed: false },
        ],
        questions: 180
      },
      {
        id: 's3',
        title: 'Earth & Physical Science',
        lessons: [
          { id: 's3-1', title: 'Matter & Energy', duration: '18 min', completed: false },
          { id: 's3-2', title: 'Chemical Reactions', duration: '20 min', completed: false },
          { id: 's3-3', title: 'Acids and Bases', duration: '16 min', completed: false },
        ],
        questions: 140
      },
      {
        id: 's4',
        title: 'Scientific Reasoning',
        lessons: [
          { id: 's4-1', title: 'Scientific Method', duration: '15 min', completed: false },
          { id: 's4-2', title: 'Experimental Design', duration: '18 min', completed: false },
          { id: 's4-3', title: 'Data Interpretation', duration: '20 min', completed: false },
        ],
        questions: 150
      }
    ]
  },
  english: {
    name: 'English & Language',
    icon: <MessageSquare size={28} />,
    color: 'navy',
    description: 'Perfect your grammar, vocabulary, and language mechanics',
    modules: [
      {
        id: 'e1',
        title: 'Grammar',
        lessons: [
          { id: 'e1-1', title: 'Subject-Verb Agreement', duration: '14 min', completed: true },
          { id: 'e1-2', title: 'Pronoun Usage', duration: '12 min', completed: true },
          { id: 'e1-3', title: 'Verb Tenses', duration: '16 min', completed: true },
          { id: 'e1-4', title: 'Modifiers', duration: '14 min', completed: false },
        ],
        questions: 120
      },
      {
        id: 'e2',
        title: 'Sentence Structure',
        lessons: [
          { id: 'e2-1', title: 'Sentence Types', duration: '12 min', completed: true },
          { id: 'e2-2', title: 'Clauses & Phrases', duration: '18 min', completed: false },
          { id: 'e2-3', title: 'Parallel Structure', duration: '15 min', completed: false },
          { id: 'e2-4', title: 'Run-ons & Fragments', duration: '14 min', completed: false },
        ],
        questions: 110
      },
      {
        id: 'e3',
        title: 'Vocabulary',
        lessons: [
          { id: 'e3-1', title: 'Medical Prefixes', duration: '20 min', completed: false },
          { id: 'e3-2', title: 'Medical Suffixes', duration: '18 min', completed: false },
          { id: 'e3-3', title: 'Context Clues', duration: '15 min', completed: false },
          { id: 'e3-4', title: 'Word Relationships', duration: '16 min', completed: false },
        ],
        questions: 130
      },
      {
        id: 'e4',
        title: 'Spelling & Punctuation',
        lessons: [
          { id: 'e4-1', title: 'Commonly Misspelled Words', duration: '12 min', completed: false },
          { id: 'e4-2', title: 'Comma Rules', duration: '14 min', completed: false },
          { id: 'e4-3', title: 'Apostrophes', duration: '10 min', completed: false },
        ],
        questions: 90
      }
    ]
  }
}

export default function SubjectPage() {
  const params = useParams()
  const subjectKey = params.subject as keyof typeof subjectData
  const subject = subjectData[subjectKey]
  const [expandedModule, setExpandedModule] = useState<string | null>(subject?.modules[0]?.id || null)

  if (!subject) {
    return (
      <div className={styles.notFound}>
        <h1>Subject not found</h1>
        <Link href="/dashboard/study">Back to Study</Link>
      </div>
    )
  }

  const totalLessons = subject.modules.reduce((acc, m) => acc + m.lessons.length, 0)
  const completedLessons = subject.modules.reduce(
    (acc, m) => acc + m.lessons.filter(l => l.completed).length, 0
  )
  const progress = Math.round((completedLessons / totalLessons) * 100)
  const totalQuestions = subject.modules.reduce((acc, m) => acc + m.questions, 0)

  return (
    <div className={styles.subject}>
      {/* Header */}
      <div className={styles.header}>
        <Link href="/dashboard/study" className={styles.backLink}>
          <ChevronLeft size={18} />
          Back to Study
        </Link>
        
        <motion.div 
          className={`${styles.heroCard} ${styles[subject.color]}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className={styles.heroIcon}>
            {subject.icon}
          </div>
          <div className={styles.heroContent}>
            <h1>{subject.name}</h1>
            <p>{subject.description}</p>
            <div className={styles.heroStats}>
              <span>
                <FileText size={16} />
                {totalQuestions}+ questions
              </span>
              <span>
                <BookOpen size={16} />
                {totalLessons} lessons
              </span>
              <span>
                <CheckCircle2 size={16} />
                {completedLessons} completed
              </span>
            </div>
          </div>
          <div className={styles.heroProgress}>
            <div className={styles.progressCircle}>
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" className={styles.progressBg} />
                <circle 
                  cx="50" cy="50" r="45" 
                  className={styles.progressValue}
                  strokeDasharray="283"
                  strokeDashoffset={283 - (283 * progress) / 100}
                />
              </svg>
              <span>{progress}%</span>
            </div>
            <span>Progress</span>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div 
        className={styles.quickActions}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Link href={`/dashboard/practice/${subjectKey}-1`} className={styles.actionCard}>
          <div className={`${styles.actionIcon} ${styles.teal}`}>
            <Play size={20} />
          </div>
          <div>
            <strong>Practice Test</strong>
            <span>15 questions</span>
          </div>
          <ChevronRight size={18} />
        </Link>
        <Link href="/dashboard/flashcards" className={styles.actionCard}>
          <div className={`${styles.actionIcon} ${styles.amber}`}>
            <Brain size={20} />
          </div>
          <div>
            <strong>Flashcards</strong>
            <span>Review key concepts</span>
          </div>
          <ChevronRight size={18} />
        </Link>
        <Link href="/dashboard/progress" className={styles.actionCard}>
          <div className={`${styles.actionIcon} ${styles.coral}`}>
            <TrendingUp size={20} />
          </div>
          <div>
            <strong>View Progress</strong>
            <span>Detailed analytics</span>
          </div>
          <ChevronRight size={18} />
        </Link>
      </motion.div>

      {/* Modules */}
      <motion.section 
        className={styles.modules}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <h2>Learning Modules</h2>
        
        <div className={styles.moduleList}>
          {subject.modules.map((module, idx) => {
            const moduleCompleted = module.lessons.filter(l => l.completed).length
            const moduleProgress = Math.round((moduleCompleted / module.lessons.length) * 100)
            const isExpanded = expandedModule === module.id
            
            return (
              <div 
                key={module.id} 
                className={`${styles.moduleCard} ${isExpanded ? styles.expanded : ''}`}
              >
                <button 
                  className={styles.moduleHeader}
                  onClick={() => setExpandedModule(isExpanded ? null : module.id)}
                >
                  <div className={styles.moduleNumber}>{idx + 1}</div>
                  <div className={styles.moduleInfo}>
                    <h3>{module.title}</h3>
                    <div className={styles.moduleMeta}>
                      <span>{module.lessons.length} lessons</span>
                      <span>•</span>
                      <span>{module.questions} questions</span>
                    </div>
                  </div>
                  <div className={styles.moduleProgress}>
                    <div className={styles.progressBar}>
                      <div 
                        className={styles.progressFill}
                        style={{ width: `${moduleProgress}%` }}
                      />
                    </div>
                    <span>{moduleCompleted}/{module.lessons.length}</span>
                  </div>
                  <ChevronRight 
                    size={20} 
                    className={styles.moduleChevron}
                  />
                </button>
                
                {isExpanded && (
                  <motion.div 
                    className={styles.lessonList}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {module.lessons.map((lesson, lessonIdx) => (
                      <div 
                        key={lesson.id}
                        className={`${styles.lessonItem} ${lesson.completed ? styles.completed : ''}`}
                      >
                        <div className={styles.lessonCheck}>
                          {lesson.completed ? (
                            <CheckCircle2 size={20} />
                          ) : (
                            <div className={styles.lessonNumber}>{lessonIdx + 1}</div>
                          )}
                        </div>
                        <div className={styles.lessonInfo}>
                          <strong>{lesson.title}</strong>
                          <span>
                            <Clock size={12} />
                            {lesson.duration}
                          </span>
                        </div>
                        <button className={styles.startLesson}>
                          {lesson.completed ? 'Review' : 'Start'}
                        </button>
                      </div>
                    ))}
                    <Link 
                      href={`/dashboard/practice/${subjectKey}-1`}
                      className={styles.modulePractice}
                    >
                      <Target size={18} />
                      Practice {module.title}
                    </Link>
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>
      </motion.section>

      {/* Tips */}
      <motion.section 
        className={styles.tips}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className={styles.tipCard}>
          <Award size={24} />
          <div>
            <strong>Study Tip</strong>
            <p>Focus on completing one module at a time. Master each topic before moving to the next for better retention.</p>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

