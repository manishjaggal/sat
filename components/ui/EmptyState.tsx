'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { 
  FileText, BookOpen, Bookmark, StickyNote, 
  Calendar, Trophy, Target, Inbox
} from 'lucide-react'
import styles from './EmptyState.module.css'

interface EmptyStateProps {
  icon?: ReactNode
  title: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
  type?: 'default' | 'search' | 'bookmarks' | 'notes' | 'calendar' | 'achievements'
}

const typeIcons = {
  default: <Inbox size={40} />,
  search: <Target size={40} />,
  bookmarks: <Bookmark size={40} />,
  notes: <StickyNote size={40} />,
  calendar: <Calendar size={40} />,
  achievements: <Trophy size={40} />
}

export function EmptyState({ 
  icon, 
  title, 
  description, 
  action,
  type = 'default' 
}: EmptyStateProps) {
  return (
    <motion.div 
      className={styles.emptyState}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.iconWrapper}>
        {icon || typeIcons[type]}
      </div>
      <h3 className={styles.title}>{title}</h3>
      {description && (
        <p className={styles.description}>{description}</p>
      )}
      {action && (
        <button 
          className={styles.actionBtn}
          onClick={action.onClick}
        >
          {action.label}
        </button>
      )}
    </motion.div>
  )
}

