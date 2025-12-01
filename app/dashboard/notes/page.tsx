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
  subject: 'reading' | 'math' | 'science' | 'english' | 'general';
  tags: string[];
  createdAt: string;
  updatedAt: string;
  pinned: boolean;
}

const initialNotes: Note[] = [
  {
    id: '1',
    title: 'Key Medical Terminology Prefixes',
    content: `## Common Prefixes

- **hyper-** = over, excessive (hypertension, hyperglycemia)
- **hypo-** = under, below (hypotension, hypoglycemia)
- **brady-** = slow (bradycardia)
- **tachy-** = fast (tachycardia)
- **poly-** = many (polyuria)
- **oligo-** = few (oliguria)
- **a-/an-** = without (anemia, apnea)
- **anti-** = against (antibiotic)
- **bi-** = two (bilateral)
- **dys-** = difficult, painful (dyspnea)`,
    subject: 'english',
    tags: ['vocabulary', 'medical terms', 'prefixes'],
    createdAt: 'Nov 28, 2024',
    updatedAt: 'Nov 30, 2024',
    pinned: true
  },
  {
    id: '2',
    title: 'Cardiovascular System Notes',
    content: `## Heart Chambers

**Right side** (receives deoxygenated blood):
- Right atrium → receives from body via vena cava
- Right ventricle → pumps to lungs via pulmonary artery

**Left side** (receives oxygenated blood):
- Left atrium → receives from lungs via pulmonary veins
- Left ventricle → pumps to body via aorta (thickest wall!)

## Blood Flow Path
Body → Vena Cava → Right Atrium → Right Ventricle → Pulmonary Artery → Lungs → Pulmonary Veins → Left Atrium → Left Ventricle → Aorta → Body`,
    subject: 'science',
    tags: ['anatomy', 'heart', 'cardiovascular'],
    createdAt: 'Nov 27, 2024',
    updatedAt: 'Nov 29, 2024',
    pinned: true
  },
  {
    id: '3',
    title: 'Math Formulas - Quick Reference',
    content: `## Essential Formulas

**Percentages:**
- Percent change = ((New - Old) / Old) × 100
- Finding X% of Y = Y × (X/100)

**Ratios & Proportions:**
- Cross multiply: if a/b = c/d, then ad = bc

**Temperature Conversion:**
- F to C: C = (F - 32) × 5/9
- C to F: F = (C × 9/5) + 32

**Metric Conversions:**
- 1 kg = 1000 g = 2.2 lbs
- 1 L = 1000 mL
- 1 m = 100 cm = 1000 mm`,
    subject: 'math',
    tags: ['formulas', 'conversions', 'quick reference'],
    createdAt: 'Nov 26, 2024',
    updatedAt: 'Nov 26, 2024',
    pinned: false
  },
  {
    id: '4',
    title: 'Reading Comprehension Strategies',
    content: `## Key Strategies

1. **Preview the passage** - scan headings, first sentences
2. **Read the questions first** - know what to look for
3. **Identify main idea** - usually in first/last paragraph
4. **Look for signal words**:
   - Contrast: however, but, although
   - Addition: furthermore, also, moreover
   - Cause/effect: because, therefore, as a result
5. **Don't assume** - stick to what's stated
6. **Process of elimination** - rule out wrong answers

## Question Types
- Main idea questions
- Detail questions
- Inference questions
- Vocabulary in context
- Author's purpose`,
    subject: 'reading',
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
   - The patient *is* waiting.

2. **Compound subjects with AND** take plural verbs
   - The doctor and nurse *are* here.

3. **Collective nouns** usually take singular verbs
   - The group *is* meeting.

4. **Neither/Either...nor/or** - verb agrees with closest noun
   - Neither the nurses nor the doctor *is* available.

5. **Indefinite pronouns** (everyone, each, nobody) are singular
   - Everyone *needs* to sign in.

6. **Interrupting phrases** don't affect subject-verb agreement
   - The patient, along with her children, *was* discharged.`,
    subject: 'english',
    tags: ['grammar', 'subject-verb', 'rules'],
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
      case 'reading': return 'teal'
      case 'math': return 'amber'
      case 'science': return 'coral'
      case 'english': return 'navy'
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
          <p>Organize your study materials and key concepts</p>
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
          {['all', 'reading', 'math', 'science', 'english', 'general'].map(subject => (
            <button
              key={subject}
              className={`${styles.subjectBtn} ${selectedSubject === subject ? styles.active : ''}`}
              onClick={() => setSelectedSubject(subject)}
            >
              {subject === 'all' ? 'All' : subject.charAt(0).toUpperCase() + subject.slice(1)}
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
                  <option value="reading">Reading</option>
                  <option value="math">Math</option>
                  <option value="science">Science</option>
                  <option value="english">English</option>
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
                  {note.subject}
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

