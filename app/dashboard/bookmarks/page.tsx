'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  Bookmark, BookmarkCheck, Search, Filter, Trash2,
  ChevronDown, CheckCircle2, XCircle, Tag, Clock,
  Folder, FolderPlus, Play, SortAsc, ArrowRight, 
  BookOpen, Calculator, Eye
} from 'lucide-react'
import styles from './bookmarks.module.css'

interface SavedQuestion {
  id: string;
  question: string;
  subject: 'reading-writing' | 'math';
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  savedAt: string;
  lastReviewed?: string;
  notes?: string;
  status: 'new' | 'reviewed' | 'mastered';
  folder?: string;
}

const savedQuestions: SavedQuestion[] = [
  {
    id: 'rw-003',
    question: 'Which choice best describes the main purpose of the passage?',
    subject: 'reading-writing',
    topic: 'Central Ideas',
    difficulty: 'hard',
    savedAt: 'Nov 30, 2024',
    status: 'new',
    notes: 'Focus on author\'s purpose vs main idea',
    folder: 'Must Review'
  },
  {
    id: 'math-005',
    question: 'Solve for x: 3(x - 4) + 2 = 2(x + 1)',
    subject: 'math',
    topic: 'Algebra',
    difficulty: 'hard',
    savedAt: 'Nov 29, 2024',
    lastReviewed: 'Nov 30, 2024',
    status: 'reviewed',
    folder: 'Math Focus'
  },
  {
    id: 'rw-015',
    question: 'As used in the passage, "undermine" most nearly means:',
    subject: 'reading-writing',
    topic: 'Words in Context',
    difficulty: 'medium',
    savedAt: 'Nov 28, 2024',
    status: 'new',
    folder: 'Vocabulary'
  },
  {
    id: 'math-023',
    question: 'If f(x) = 2x² - 3x + 1, what is f(-2)?',
    subject: 'math',
    topic: 'Advanced Math',
    difficulty: 'hard',
    savedAt: 'Nov 28, 2024',
    lastReviewed: 'Nov 29, 2024',
    status: 'mastered'
  },
  {
    id: 'math-029',
    question: 'A circle has a circumference of 16π. What is its area?',
    subject: 'math',
    topic: 'Geometry',
    difficulty: 'hard',
    savedAt: 'Nov 27, 2024',
    status: 'reviewed',
    notes: 'C = 2πr, so r = 8. Area = πr² = 64π',
    folder: 'Must Review'
  },
  {
    id: 'rw-025',
    question: 'Which choice provides the best transition between paragraphs?',
    subject: 'reading-writing',
    topic: 'Expression of Ideas',
    difficulty: 'medium',
    savedAt: 'Nov 27, 2024',
    status: 'new',
    folder: 'Transitions'
  },
  {
    id: 'rw-032',
    question: 'The author\'s use of the phrase "a double-edged sword" serves to:',
    subject: 'reading-writing',
    topic: 'Craft and Structure',
    difficulty: 'hard',
    savedAt: 'Nov 26, 2024',
    lastReviewed: 'Nov 28, 2024',
    status: 'mastered'
  },
  {
    id: 'math-041',
    question: 'What is the probability of selecting a red marble then a blue marble without replacement?',
    subject: 'math',
    topic: 'Problem-Solving & Data Analysis',
    difficulty: 'hard',
    savedAt: 'Nov 25, 2024',
    status: 'reviewed',
    notes: 'Dependent probability - multiply fractions',
    folder: 'Probability'
  }
];

const subjectIcons = {
  'reading-writing': <BookOpen size={16} />,
  'math': <Calculator size={16} />
}

export default function BookmarksPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSubject, setSelectedSubject] = useState<string>('all')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')
  const [selectedFolder, setSelectedFolder] = useState<string>('all')
  const [showFilters, setShowFilters] = useState(false)
  const [questions, setQuestions] = useState(savedQuestions)
  const [sortBy, setSortBy] = useState<'date' | 'subject' | 'difficulty'>('date')
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null)

  // Get unique folders
  const folders = useMemo(() => {
    const folderSet = new Set(questions.map(q => q.folder).filter(Boolean))
    return Array.from(folderSet) as string[]
  }, [questions])

  const filteredQuestions = useMemo(() => {
    return questions
      .filter(q => {
        const matchesSearch = q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             q.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             (q.notes?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false)
        const matchesSubject = selectedSubject === 'all' || q.subject === selectedSubject
        const matchesStatus = selectedStatus === 'all' || q.status === selectedStatus
        const matchesFolder = selectedFolder === 'all' || q.folder === selectedFolder || (selectedFolder === 'unfiled' && !q.folder)
        return matchesSearch && matchesSubject && matchesStatus && matchesFolder
      })
      .sort((a, b) => {
        if (sortBy === 'subject') return a.subject.localeCompare(b.subject)
        if (sortBy === 'difficulty') {
          const order = { easy: 1, medium: 2, hard: 3 }
          return order[b.difficulty] - order[a.difficulty]
        }
        return 0 // Keep original order for date
      })
  }, [questions, searchTerm, selectedSubject, selectedStatus, selectedFolder, sortBy])

  const getSubjectColor = (subject: string) => {
    switch (subject) {
      case 'reading-writing': return 'coral'
      case 'math': return 'teal'
      default: return 'teal'
    }
  }

  const removeBookmark = (id: string) => {
    setQuestions(questions.filter(q => q.id !== id))
  }

  const updateStatus = (id: string, newStatus: SavedQuestion['status']) => {
    setQuestions(questions.map(q => 
      q.id === id ? { ...q, status: newStatus, lastReviewed: newStatus !== 'new' ? new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : q.lastReviewed } : q
    ))
  }

  const statusCounts = {
    new: questions.filter(q => q.status === 'new').length,
    reviewed: questions.filter(q => q.status === 'reviewed').length,
    mastered: questions.filter(q => q.status === 'mastered').length
  }

  const subjectCounts = {
    'reading-writing': questions.filter(q => q.subject === 'reading-writing').length,
    'math': questions.filter(q => q.subject === 'math').length
  }

  return (
    <div className={styles.bookmarks}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className={styles.headerTop}>
          <div>
            <h1>
              <BookmarkCheck size={24} />
              Saved Questions
            </h1>
            <p>{questions.length} questions saved for review</p>
          </div>

          <Link href="/dashboard/practice/quick?type=bookmarks" className={styles.practiceAllBtn}>
            <Play size={16} />
            Practice All
          </Link>
        </div>

        <div className={styles.statsBar}>
          <div className={styles.statusCards}>
            <button 
              className={`${styles.statusCard} ${styles.new} ${selectedStatus === 'new' ? styles.active : ''}`}
              onClick={() => setSelectedStatus(selectedStatus === 'new' ? 'all' : 'new')}
            >
              <span className={styles.statusCount}>{statusCounts.new}</span>
              <span className={styles.statusLabel}>New</span>
            </button>
            <button 
              className={`${styles.statusCard} ${styles.reviewed} ${selectedStatus === 'reviewed' ? styles.active : ''}`}
              onClick={() => setSelectedStatus(selectedStatus === 'reviewed' ? 'all' : 'reviewed')}
            >
              <span className={styles.statusCount}>{statusCounts.reviewed}</span>
              <span className={styles.statusLabel}>Reviewed</span>
            </button>
            <button 
              className={`${styles.statusCard} ${styles.mastered} ${selectedStatus === 'mastered' ? styles.active : ''}`}
              onClick={() => setSelectedStatus(selectedStatus === 'mastered' ? 'all' : 'mastered')}
            >
              <span className={styles.statusCount}>{statusCounts.mastered}</span>
              <span className={styles.statusLabel}>Mastered</span>
            </button>
          </div>

          <div className={styles.subjectPills}>
            {Object.entries(subjectCounts).map(([subject, count]) => (
              <button
                key={subject}
                className={`${styles.subjectPill} ${styles[getSubjectColor(subject)]} ${selectedSubject === subject ? styles.active : ''}`}
                onClick={() => setSelectedSubject(selectedSubject === subject ? 'all' : subject)}
              >
                {subjectIcons[subject as keyof typeof subjectIcons]}
                <span>{count}</span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Search and Filters */}
      <motion.div 
        className={styles.controls}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className={styles.searchBar}>
          <Search size={18} />
          <input
            type="text"
            placeholder="Search questions, topics, notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className={styles.controlBtns}>
          <select 
            className={styles.sortSelect}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'date' | 'subject' | 'difficulty')}
          >
            <option value="date">Sort by Date</option>
            <option value="subject">Sort by Subject</option>
            <option value="difficulty">Sort by Difficulty</option>
          </select>

          <button 
            className={`${styles.filterToggle} ${showFilters ? styles.active : ''}`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={16} />
            <ChevronDown size={14} className={showFilters ? styles.rotated : ''} />
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {showFilters && (
          <motion.div 
            className={styles.filtersPanel}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className={styles.filterGroup}>
              <label><Folder size={14} /> Folder</label>
              <div className={styles.filterOptions}>
                <button
                  className={`${styles.filterBtn} ${selectedFolder === 'all' ? styles.active : ''}`}
                  onClick={() => setSelectedFolder('all')}
                >
                  All
                </button>
                <button
                  className={`${styles.filterBtn} ${selectedFolder === 'unfiled' ? styles.active : ''}`}
                  onClick={() => setSelectedFolder('unfiled')}
                >
                  Unfiled
                </button>
                {folders.map(folder => (
                  <button
                    key={folder}
                    className={`${styles.filterBtn} ${selectedFolder === folder ? styles.active : ''}`}
                    onClick={() => setSelectedFolder(folder)}
                  >
                    {folder}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Questions List */}
      <div className={styles.questionsList}>
        {filteredQuestions.length === 0 ? (
          <motion.div 
            className={styles.emptyState}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Bookmark size={48} />
            <h3>No saved questions found</h3>
            <p>Bookmark questions during practice to review them later</p>
          </motion.div>
        ) : (
          filteredQuestions.map((q, index) => (
            <motion.div
              key={q.id}
              className={`${styles.questionCard} ${expandedQuestion === q.id ? styles.expanded : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              layout
            >
              <div 
                className={styles.cardMain}
                onClick={() => setExpandedQuestion(expandedQuestion === q.id ? null : q.id)}
              >
                <div className={styles.cardLeft}>
                  <div className={`${styles.subjectIcon} ${styles[getSubjectColor(q.subject)]}`}>
                    {subjectIcons[q.subject]}
                  </div>
                  <div className={styles.questionInfo}>
                    <p className={styles.questionText}>{q.question}</p>
                    <div className={styles.metaRow}>
                      <span className={styles.topicTag}>{q.topic}</span>
                      <span className={`${styles.difficultyTag} ${styles[q.difficulty]}`}>
                        {q.difficulty}
                      </span>
                      {q.folder && (
                        <span className={styles.folderTag}>
                          <Folder size={10} />
                          {q.folder}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className={styles.cardRight}>
                  <div className={`${styles.statusBadge} ${styles[q.status]}`}>
                    {q.status === 'new' && <Bookmark size={12} />}
                    {q.status === 'reviewed' && <Clock size={12} />}
                    {q.status === 'mastered' && <CheckCircle2 size={12} />}
                    {q.status}
                  </div>
                  <ChevronDown size={16} className={styles.expandIcon} />
                </div>
              </div>

              <AnimatePresence>
                {expandedQuestion === q.id && (
                  <motion.div 
                    className={styles.cardExpanded}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    {q.notes && (
                      <div className={styles.notesSection}>
                        <Tag size={14} />
                        <span>{q.notes}</span>
                      </div>
                    )}

                    <div className={styles.timestamps}>
                      <span>Saved: {q.savedAt}</span>
                      {q.lastReviewed && <span>Last reviewed: {q.lastReviewed}</span>}
                    </div>

                    <div className={styles.actionRow}>
                      <div className={styles.statusButtons}>
                        <button
                          className={`${styles.statusBtn} ${q.status === 'new' ? styles.active : ''}`}
                          onClick={() => updateStatus(q.id, 'new')}
                        >
                          New
                        </button>
                        <button
                          className={`${styles.statusBtn} ${q.status === 'reviewed' ? styles.active : ''}`}
                          onClick={() => updateStatus(q.id, 'reviewed')}
                        >
                          Reviewed
                        </button>
                        <button
                          className={`${styles.statusBtn} ${q.status === 'mastered' ? styles.active : ''}`}
                          onClick={() => updateStatus(q.id, 'mastered')}
                        >
                          Mastered
                        </button>
                      </div>

                      <button 
                        className={styles.removeBtn}
                        onClick={() => removeBookmark(q.id)}
                      >
                        <Trash2 size={14} />
                        Remove
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))
        )}
      </div>

      {/* Quick Actions */}
      {filteredQuestions.length > 0 && (
        <motion.div 
          className={styles.quickActions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <button className={styles.actionBtn}>
            <Play size={16} />
            Practice {selectedStatus !== 'all' ? selectedStatus : 'All'} ({filteredQuestions.length})
          </button>
          {statusCounts.new > 0 && selectedStatus === 'all' && (
            <button className={`${styles.actionBtn} ${styles.secondary}`}>
              Focus on New ({statusCounts.new})
            </button>
          )}
        </motion.div>
      )}
    </div>
  )
}
