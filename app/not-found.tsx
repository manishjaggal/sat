'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Search, ArrowLeft } from 'lucide-react'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.illustration}>
          <span className={styles.code}>404</span>
          <div className={styles.magnifier}>
            <Search size={48} />
          </div>
        </div>
        
        <h1>Page Not Found</h1>
        <p>
          Oops! The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track to your TEAS prep.
        </p>
        
        <div className={styles.actions}>
          <Link href="/dashboard" className={styles.primaryBtn}>
            <Home size={18} />
            Go to Dashboard
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className={styles.secondaryBtn}
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        <div className={styles.suggestions}>
          <h3>Popular pages:</h3>
          <div className={styles.links}>
            <Link href="/dashboard/study">Study Materials</Link>
            <Link href="/dashboard/practice">Practice Tests</Link>
            <Link href="/dashboard/flashcards">Flashcards</Link>
            <Link href="/dashboard/progress">Progress</Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

