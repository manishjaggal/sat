'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FileText, Plus, Search, Folder, Edit3, Trash2,
  Calendar, Tag, ChevronDown, X, Check, Clock
} from 'lucide-react'
import styles from './notes.module.css'

interface Note {
  id: string;
  title: string;
  content: string;
  subject: 'reading-writing' | 'math' | 'general';
  tags: string[];
  createdAt: string;
  updatedAt: string;
  pinned: boolean;
}

const initialNotes: Note[] = [
  {
    id: '1',
    title: 'SAT Vocabulary - High Frequency Words',
    content: `## Essential SAT Words

- **Ambiguous** = unclear, open to multiple interpretations
- **Bolster** = to support or strengthen
- **Candid** = honest and straightforward
- **Discrepancy** = difference, inconsistency
- **Ephemeral** = lasting for a very short time
- **Facilitate** = to make easier
- **Mitigate** = to make less severe
- **Nuanced** = subtle, with fine distinctions
- **Pragmatic** = practical, focused on results
- **Substantiate** = to provide evidence for`,
    subject: 'reading-writing',
    tags: ['vocabulary', 'high-frequency', 'definitions'],
    createdAt: 'Nov 28, 2024',
    updatedAt: 'Nov 30, 2024',
    pinned: true
  },
  {
    id: '2',
    title: 'Quadratic Formula & Applications',
    content: `## The Quadratic Formula

**x = (-b ± √(b² - 4ac)) / 2a**

For ax² + bx + c = 0

## Discriminant (b² - 4ac)
- > 0: Two real solutions
- = 0: One real solution (repeated root)
- < 0: No real solutions (complex)

## Vertex Form
y = a(x - h)² + k
- Vertex at (h, k)
- a > 0: opens up (minimum)
- a < 0: opens down (maximum)

## Finding Vertex from Standard Form
x = -b/(2a)`,
    subject: 'math',
    tags: ['quadratics', 'formulas', 'algebra'],
    createdAt: 'Nov 27, 2024',
    updatedAt: 'Nov 29, 2024',
    pinned: true
  },
  {
    id: '3',
    title: 'SAT Math Formulas - Quick Reference',
    content: `## Essential Formulas

**Geometry:**
- Circle Area: A = πr²
- Circle Circumference: C = 2πr
- Triangle Area: A = ½bh
- Pythagorean: a² + b² = c²

**Special Triangles:**
- 30-60-90: 1 : √3 : 2
- 45-45-90: 1 : 1 : √2

**Trigonometry:**
- sin = opposite/hypotenuse
- cos = adjacent/hypotenuse
- tan = opposite/adjacent

**Statistics:**
- Mean = sum/count
- Probability = favorable/total`,
    subject: 'math',
    tags: ['formulas', 'geometry', 'quick reference'],
    createdAt: 'Nov 26, 2024',
    updatedAt: 'Nov 26, 2024',
    pinned: false
  },
  {
    id: '4',
    title: 'Reading Comprehension Strategies',
    content: `## Key Strategies

1. **Read the blurb first** - context about passage
2. **Skim for structure** - main idea of each paragraph
3. **Read questions before passage** - know what to look for
4. **Underline key transitions**:
   - Contrast: however, but, although, yet
   - Addition: furthermore, moreover, also
   - Cause/effect: therefore, consequently

## Question Types
- Main idea/purpose
- Inference (what's implied)
- Vocabulary in context
- Evidence support
- Cross-text connections

## Answer Strategy
- Eliminate obviously wrong answers
- Look for evidence in text
- Don't overthink - answer is in the passage!`,
    subject: 'reading-writing',
    tags: ['strategies', 'comprehension', 'test tips'],
    createdAt: 'Nov 25, 2024',
    updatedAt: 'Nov 28, 2024',
    pinned: false
  },
  {
    id: '5',
    title: 'Grammar Rules - Subject-Verb Agreement',
    content: `## Key Rules

1. **Singular subjects** take singular verbs
   - The student *is* studying.

2. **Compound subjects with AND** take plural verbs
   - The teacher and student *are* here.

3. **Collective nouns** usually take singular verbs
   - The team *is* winning.

4. **Neither/Either...nor/or** - verb agrees with closest noun
   - Neither the students nor the teacher *is* available.

5. **Indefinite pronouns** (everyone, each, nobody) are singular
   - Everyone *needs* to sign in.

6. **Interrupting phrases** don't affect agreement
   - The book, along with the notes, *was* helpful.`,
    subject: 'reading-writing',
    tags: ['grammar', 'subject-verb', 'conventions'],
    createdAt: 'Nov 24, 2024',
    updatedAt: 'Nov 24, 2024',
    pinned: false
  }
];

export default function NotesPage() {
  const [notes, setNotes] = useState(initialNotes)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSubject, setSelectedSubject] = useState<string>('all')
  const [showNewNote, setShowNewNote] = useState(false)
  const [editingNote, setEditingNote] = useState<Note | null>(null)
  const [newNote, setNewNote] = useState({
    title: '',
    content: '',
    subject: 'general' as Note['subject'],
    tags: [] as string[],
    tagInput: ''
  })

  const filteredNotes = notes
    .filter(note => {
      const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesSubject = selectedSubject === 'all' || note.subject === selectedSubject
      return matchesSearch && matchesSubject
    })
    .sort((a, b) => {
      if (a.pinned && !b.pinned) return -1
      if (!a.pinned && b.pinned) return 1
      return 0
    })

  const getSubjectColor = (subject: string) => {
    switch (subject) {
      case 'reading-writing': return 'coral'
      case 'math': return 'teal'
      default: return 'gray'
    }
  }

  const handleAddTag = () => {
    if (newNote.tagInput.trim() && !newNote.tags.includes(newNote.tagInput.trim())) {
      setNewNote({
        ...newNote,
        tags: [...newNote.tags, newNote.tagInput.trim()],
        tagInput: ''
      })
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setNewNote({
      ...newNote,
      tags: newNote.tags.filter(tag => tag !== tagToRemove)
    })
  }

  const handleSaveNote = () => {
    if (!newNote.title.trim()) return

    const note: Note = {
      id: Date.now().toString(),
      title: newNote.title,
      content: newNote.content,
      subject: newNote.subject,
      tags: newNote.tags,
      createdAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      updatedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      pinned: false
    }

    setNotes([note, ...notes])
    setNewNote({ title: '', content: '', subject: 'general', tags: [], tagInput: '' })
    setShowNewNote(false)
  }

  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  const handleTogglePin = (id: string) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, pinned: !note.pinned } : note
    ))
  }

  return (
    <div className={styles.notes}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div>
          <h1>
            <FileText size={28} />
            Study Notes
          </h1>
          <p>Organize your SAT study materials and key concepts</p>
        </div>

        <button 
          className={styles.newNoteBtn}
          onClick={() => setShowNewNote(true)}
        >
          <Plus size={18} />
          New Note
        </button>
      </motion.div>

      {/* Controls */}
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
            placeholder="Search notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className={styles.subjectFilter}>
          {['all', 'reading-writing', 'math', 'general'].map(subject => (
            <button
              key={subject}
              className={`${styles.subjectBtn} ${selectedSubject === subject ? styles.active : ''}`}
              onClick={() => setSelectedSubject(subject)}
            >
              {subject === 'all' ? 'All' : subject === 'reading-writing' ? 'R&W' : subject.charAt(0).toUpperCase() + subject.slice(1)}
            </button>
          ))}
        </div>
      </motion.div>

      {/* New Note Modal */}
      <AnimatePresence>
        {showNewNote && (
          <motion.div 
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowNewNote(false)}
          >
            <motion.div 
              className={styles.modal}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <h2>New Note</h2>
                <button 
                  className={styles.closeBtn}
                  onClick={() => setShowNewNote(false)}
                >
                  <X size={20} />
                </button>
              </div>

              <div className={styles.modalBody}>
                <input
                  type="text"
                  placeholder="Note title..."
                  value={newNote.title}
                  onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                  className={styles.titleInput}
                />

                <select
                  value={newNote.subject}
                  onChange={(e) => setNewNote({ ...newNote, subject: e.target.value as Note['subject'] })}
                  className={styles.subjectSelect}
                >
                  <option value="general">General</option>
                  <option value="reading-writing">Reading & Writing</option>
                  <option value="math">Math</option>
                </select>

                <textarea
                  placeholder="Write your notes here... (Markdown supported)"
                  value={newNote.content}
                  onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                  className={styles.contentInput}
                />

                <div className={styles.tagsSection}>
                  <label>Tags</label>
                  <div className={styles.tagInput}>
                    <input
                      type="text"
                      placeholder="Add a tag..."
                      value={newNote.tagInput}
                      onChange={(e) => setNewNote({ ...newNote, tagInput: e.target.value })}
                      onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                    />
                    <button onClick={handleAddTag}>
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className={styles.tagsList}>
                    {newNote.tags.map(tag => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                        <button onClick={() => handleRemoveTag(tag)}>
                          <X size={12} />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.modalFooter}>
                <button 
                  className={styles.cancelBtn}
                  onClick={() => setShowNewNote(false)}
                >
                  Cancel
                </button>
                <button 
                  className={styles.saveBtn}
                  onClick={handleSaveNote}
                  disabled={!newNote.title.trim()}
                >
                  <Check size={18} />
                  Save Note
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notes Grid */}
      <div className={styles.notesGrid}>
        {filteredNotes.length === 0 ? (
          <motion.div 
            className={styles.emptyState}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FileText size={48} />
            <h3>No notes found</h3>
            <p>Create your first note to start organizing your study materials</p>
            <button 
              className={styles.newNoteBtn}
              onClick={() => setShowNewNote(true)}
            >
              <Plus size={18} />
              Create Note
            </button>
          </motion.div>
        ) : (
          filteredNotes.map((note, index) => (
            <motion.div
              key={note.id}
              className={`${styles.noteCard} ${note.pinned ? styles.pinned : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className={styles.noteHeader}>
                <span className={`${styles.subjectBadge} ${styles[getSubjectColor(note.subject)]}`}>
                  {note.subject === 'reading-writing' ? 'R&W' : note.subject}
                </span>
                <div className={styles.noteActions}>
                  <button
                    className={`${styles.pinBtn} ${note.pinned ? styles.active : ''}`}
                    onClick={() => handleTogglePin(note.id)}
                    title={note.pinned ? 'Unpin' : 'Pin to top'}
                  >
                    📌
                  </button>
                  <button 
                    className={styles.deleteBtn}
                    onClick={() => handleDeleteNote(note.id)}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>

              <h3>{note.title}</h3>
              
              <div className={styles.notePreview}>
                {note.content.slice(0, 150)}...
              </div>

              <div className={styles.noteTags}>
                {note.tags.map(tag => (
                  <span key={tag} className={styles.noteTag}>
                    <Tag size={10} />
                    {tag}
                  </span>
                ))}
              </div>

              <div className={styles.noteFooter}>
                <span>
                  <Clock size={12} />
                  {note.updatedAt}
                </span>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  )
}
