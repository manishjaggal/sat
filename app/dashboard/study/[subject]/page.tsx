'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import {
  BookOpen, Calculator, ChevronRight,
  ChevronLeft, Clock, CheckCircle2, Play,
  FileText, Brain, TrendingUp, Award, Target,
  PenTool, BarChart3, Shapes, Zap
} from 'lucide-react'
import styles from './subject.module.css'

const subjectData = {
  'reading-writing': {
    name: 'Reading & Writing',
    icon: <BookOpen size={28} />,
    color: 'coral',
    description: 'Master reading comprehension, vocabulary in context, and standard English conventions',
    scoreRange: '200-800',
    timeLimit: '64 minutes',
    modules: [
      {
        id: 'rw1',
        title: 'Information and Ideas',
        description: 'Central ideas, textual evidence, and inferences',
        lessons: [
          { id: 'rw1-1', title: 'Central Ideas & Main Purpose', duration: '18 min', completed: true },
          { id: 'rw1-2', title: 'Supporting Details', duration: '15 min', completed: true },
          { id: 'rw1-3', title: 'Making Inferences', duration: '20 min', completed: true },
          { id: 'rw1-4', title: 'Textual Evidence', duration: '18 min', completed: false },
          { id: 'rw1-5', title: 'Data Interpretation in Passages', duration: '22 min', completed: false },
        ],
        questions: 52
      },
      {
        id: 'rw2',
        title: 'Craft and Structure',
        description: 'Words in context, text structure, and cross-text connections',
        lessons: [
          { id: 'rw2-1', title: 'Vocabulary in Context', duration: '20 min', completed: true },
          { id: 'rw2-2', title: 'Author\'s Purpose & Tone', duration: '18 min', completed: true },
          { id: 'rw2-3', title: 'Text Structure & Organization', duration: '22 min', completed: false },
          { id: 'rw2-4', title: 'Cross-Text Connections', duration: '25 min', completed: false },
          { id: 'rw2-5', title: 'Rhetorical Analysis', duration: '20 min', completed: false },
        ],
        questions: 56
      },
      {
        id: 'rw3',
        title: 'Standard English Conventions',
        description: 'Grammar, punctuation, and sentence structure',
        lessons: [
          { id: 'rw3-1', title: 'Subject-Verb Agreement', duration: '15 min', completed: true },
          { id: 'rw3-2', title: 'Pronoun Usage & Agreement', duration: '14 min', completed: false },
          { id: 'rw3-3', title: 'Punctuation Rules', duration: '18 min', completed: false },
          { id: 'rw3-4', title: 'Verb Tense & Mood', duration: '16 min', completed: false },
          { id: 'rw3-5', title: 'Sentence Structure & Boundaries', duration: '20 min', completed: false },
          { id: 'rw3-6', title: 'Modifiers & Parallel Structure', duration: '18 min', completed: false },
        ],
        questions: 52
      },
      {
        id: 'rw4',
        title: 'Expression of Ideas',
        description: 'Transitions, concision, and effective writing',
        lessons: [
          { id: 'rw4-1', title: 'Transition Words & Phrases', duration: '16 min', completed: false },
          { id: 'rw4-2', title: 'Logical Sequence', duration: '18 min', completed: false },
          { id: 'rw4-3', title: 'Concision & Wordiness', duration: '14 min', completed: false },
          { id: 'rw4-4', title: 'Sentence Combining', duration: '16 min', completed: false },
          { id: 'rw4-5', title: 'Style & Tone', duration: '15 min', completed: false },
        ],
        questions: 40
      }
    ]
  },
  math: {
    name: 'Math',
    icon: <Calculator size={28} />,
    color: 'teal',
    description: 'Build mastery in algebra, advanced math, problem-solving, and geometry',
    scoreRange: '200-800',
    timeLimit: '70 minutes',
    modules: [
      {
        id: 'm1',
        title: 'Algebra',
        description: 'Linear equations, inequalities, and functions',
        lessons: [
          { id: 'm1-1', title: 'Linear Equations', duration: '18 min', completed: true },
          { id: 'm1-2', title: 'Linear Inequalities', duration: '16 min', completed: true },
          { id: 'm1-3', title: 'Systems of Equations', duration: '22 min', completed: true },
          { id: 'm1-4', title: 'Linear Functions & Graphs', duration: '20 min', completed: false },
          { id: 'm1-5', title: 'Absolute Value', duration: '15 min', completed: false },
          { id: 'm1-6', title: 'Word Problems', duration: '25 min', completed: false },
        ],
        questions: 70
      },
      {
        id: 'm2',
        title: 'Advanced Math',
        description: 'Quadratics, polynomials, and exponentials',
        lessons: [
          { id: 'm2-1', title: 'Quadratic Equations', duration: '22 min', completed: true },
          { id: 'm2-2', title: 'Vertex Form & Parabolas', duration: '20 min', completed: false },
          { id: 'm2-3', title: 'Factoring Techniques', duration: '18 min', completed: false },
          { id: 'm2-4', title: 'Polynomial Operations', duration: '20 min', completed: false },
          { id: 'm2-5', title: 'Exponent Rules', duration: '16 min', completed: false },
          { id: 'm2-6', title: 'Exponential Growth & Decay', duration: '18 min', completed: false },
          { id: 'm2-7', title: 'Radicals & Rational Expressions', duration: '22 min', completed: false },
        ],
        questions: 70
      },
      {
        id: 'm3',
        title: 'Problem-Solving & Data Analysis',
        description: 'Ratios, percentages, and statistics',
        lessons: [
          { id: 'm3-1', title: 'Ratios & Proportions', duration: '16 min', completed: false },
          { id: 'm3-2', title: 'Percentages & Percent Change', duration: '18 min', completed: false },
          { id: 'm3-3', title: 'Mean, Median, Mode', duration: '15 min', completed: false },
          { id: 'm3-4', title: 'Data Interpretation', duration: '20 min', completed: false },
          { id: 'm3-5', title: 'Probability', duration: '18 min', completed: false },
          { id: 'm3-6', title: 'Scatterplots & Line of Best Fit', duration: '20 min', completed: false },
        ],
        questions: 30
      },
      {
        id: 'm4',
        title: 'Geometry & Trigonometry',
        description: 'Shapes, angles, and trigonometric ratios',
        lessons: [
          { id: 'm4-1', title: 'Area & Perimeter', duration: '15 min', completed: false },
          { id: 'm4-2', title: 'Circle Properties', duration: '18 min', completed: false },
          { id: 'm4-3', title: 'Right Triangles & Pythagorean Theorem', duration: '20 min', completed: false },
          { id: 'm4-4', title: 'Special Right Triangles', duration: '16 min', completed: false },
          { id: 'm4-5', title: 'Trigonometry (SOH CAH TOA)', duration: '22 min', completed: false },
          { id: 'm4-6', title: 'Volume & 3D Shapes', duration: '18 min', completed: false },
          { id: 'm4-7', title: 'Coordinate Geometry', duration: '20 min', completed: false },
        ],
        questions: 30
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
        <p>This subject doesn&apos;t exist in SAT prep.</p>
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
  const predictedSectionScore = Math.round(200 + (progress / 100) * 600)

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
                <Clock size={16} />
                {subject.timeLimit}
              </span>
              <span>
                <TrendingUp size={16} />
                {subject.scoreRange}
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
              <span>{predictedSectionScore}</span>
            </div>
            <span>Predicted Score</span>
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
        <Link href={`/dashboard/practice/${subjectKey === 'reading-writing' ? 'rw' : 'math'}-1`} className={styles.actionCard}>
          <div className={`${styles.actionIcon} ${styles.teal}`}>
            <Play size={20} />
          </div>
          <div>
            <strong>Practice Test</strong>
            <span>Full section simulation</span>
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
            <BarChart3 size={20} />
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
                    <p className={styles.moduleDescription}>{module.description}</p>
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
                      href={`/dashboard/practice/quick`}
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

      {/* SAT Tips */}
      <motion.section 
        className={styles.tips}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className={styles.tipCard}>
          <Award size={24} />
          <div>
            <strong>SAT Study Tip</strong>
            {subjectKey === 'reading-writing' ? (
              <p>For Reading & Writing, focus on understanding context. Read the passage carefully before looking at answer choices - the correct answer is always supported by the text.</p>
            ) : (
              <p>For Math, know your formulas cold and practice recognizing question patterns. The SAT gives you a reference sheet, but speed comes from memorization.</p>
            )}
          </div>
        </div>
      </motion.section>
    </div>
  )
}
