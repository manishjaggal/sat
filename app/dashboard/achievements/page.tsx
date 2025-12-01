'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Trophy, Lock, Star, Flame, Target, BookOpen,
  Award, Zap, Clock, TrendingUp, Calendar, Medal
} from 'lucide-react'
import styles from './achievements.module.css'

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'streak' | 'questions' | 'accuracy' | 'subject' | 'special';
  unlocked: boolean;
  progress?: number;
  maxProgress?: number;
  unlockedAt?: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

const achievements: Achievement[] = [
  // Streak achievements
  { id: 'streak-3', name: 'Getting Started', description: 'Study for 3 days in a row', icon: '🔥', category: 'streak', unlocked: true, unlockedAt: 'Nov 28, 2024', rarity: 'common' },
  { id: 'streak-7', name: 'Week Warrior', description: 'Study for 7 days in a row', icon: '🔥', category: 'streak', unlocked: true, unlockedAt: 'Nov 30, 2024', rarity: 'common' },
  { id: 'streak-14', name: 'Dedicated Learner', description: 'Study for 14 days in a row', icon: '🔥', category: 'streak', unlocked: false, progress: 7, maxProgress: 14, rarity: 'rare' },
  { id: 'streak-30', name: 'Month Master', description: 'Study for 30 days in a row', icon: '💪', category: 'streak', unlocked: false, progress: 7, maxProgress: 30, rarity: 'epic' },
  { id: 'streak-60', name: 'Unstoppable', description: 'Study for 60 days in a row', icon: '🌟', category: 'streak', unlocked: false, progress: 7, maxProgress: 60, rarity: 'legendary' },

  // Questions achievements
  { id: 'questions-50', name: 'First Steps', description: 'Answer 50 questions', icon: '📝', category: 'questions', unlocked: true, unlockedAt: 'Nov 25, 2024', rarity: 'common' },
  { id: 'questions-100', name: 'Century', description: 'Answer 100 questions', icon: '💯', category: 'questions', unlocked: true, unlockedAt: 'Nov 27, 2024', rarity: 'common' },
  { id: 'questions-250', name: 'Knowledge Seeker', description: 'Answer 250 questions', icon: '🎯', category: 'questions', unlocked: false, progress: 142, maxProgress: 250, rarity: 'rare' },
  { id: 'questions-500', name: 'Question Master', description: 'Answer 500 questions', icon: '🏆', category: 'questions', unlocked: false, progress: 142, maxProgress: 500, rarity: 'epic' },
  { id: 'questions-1000', name: 'Quiz Champion', description: 'Answer 1,000 questions', icon: '👑', category: 'questions', unlocked: false, progress: 142, maxProgress: 1000, rarity: 'legendary' },

  // Accuracy achievements
  { id: 'perfect-5', name: 'Perfect 5', description: 'Get 5 questions right in a row', icon: '⭐', category: 'accuracy', unlocked: true, unlockedAt: 'Nov 26, 2024', rarity: 'common' },
  { id: 'perfect-10', name: 'Perfect 10', description: 'Get 10 questions right in a row', icon: '⭐', category: 'accuracy', unlocked: true, unlockedAt: 'Nov 29, 2024', rarity: 'rare' },
  { id: 'perfect-25', name: 'Flawless', description: 'Get 25 questions right in a row', icon: '💫', category: 'accuracy', unlocked: false, progress: 10, maxProgress: 25, rarity: 'epic' },
  { id: 'score-80', name: '80% Club', description: 'Score 80%+ on a full practice test', icon: '🎖️', category: 'accuracy', unlocked: true, unlockedAt: 'Nov 30, 2024', rarity: 'rare' },
  { id: 'score-90', name: 'Elite Scorer', description: 'Score 90%+ on a full practice test', icon: '🥇', category: 'accuracy', unlocked: false, rarity: 'legendary' },

  // Subject achievements
  { id: 'reading-master', name: 'Reading Expert', description: 'Complete all Reading modules', icon: '📚', category: 'subject', unlocked: false, progress: 2, maxProgress: 5, rarity: 'rare' },
  { id: 'math-master', name: 'Math Whiz', description: 'Complete all Math modules', icon: '🔢', category: 'subject', unlocked: false, progress: 1, maxProgress: 5, rarity: 'rare' },
  { id: 'science-master', name: 'Science Star', description: 'Complete all Science modules', icon: '🔬', category: 'subject', unlocked: false, progress: 1, maxProgress: 4, rarity: 'rare' },
  { id: 'english-master', name: 'Grammar Guru', description: 'Complete all English modules', icon: '✍️', category: 'subject', unlocked: false, progress: 2, maxProgress: 4, rarity: 'rare' },

  // Special achievements
  { id: 'early-bird', name: 'Early Bird', description: 'Study before 7 AM', icon: '🌅', category: 'special', unlocked: true, unlockedAt: 'Nov 28, 2024', rarity: 'common' },
  { id: 'night-owl', name: 'Night Owl', description: 'Study after 10 PM', icon: '🦉', category: 'special', unlocked: true, unlockedAt: 'Nov 26, 2024', rarity: 'common' },
  { id: 'speed-demon', name: 'Speed Demon', description: 'Complete a quiz in under 2 minutes', icon: '⚡', category: 'special', unlocked: false, rarity: 'rare' },
  { id: 'daily-challenge', name: 'Daily Champion', description: 'Complete 7 daily challenges', icon: '🏅', category: 'special', unlocked: false, progress: 3, maxProgress: 7, rarity: 'rare' },
  { id: 'flashcard-master', name: 'Memory Master', description: 'Review 100 flashcards', icon: '🧠', category: 'special', unlocked: false, progress: 45, maxProgress: 100, rarity: 'rare' },
];

const categoryLabels = {
  streak: 'Study Streaks',
  questions: 'Questions Answered',
  accuracy: 'Accuracy & Performance',
  subject: 'Subject Mastery',
  special: 'Special Achievements'
};

const rarityColors = {
  common: '#6b7280',
  rare: '#3b82f6',
  epic: '#8b5cf6',
  legendary: '#f59e0b'
};

export default function AchievementsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  
  const unlockedCount = achievements.filter(a => a.unlocked).length
  const totalAchievements = achievements.length
  const totalPoints = achievements.filter(a => a.unlocked).reduce((sum, a) => {
    const points = { common: 10, rare: 25, epic: 50, legendary: 100 }
    return sum + points[a.rarity]
  }, 0)

  const categories = ['all', 'streak', 'questions', 'accuracy', 'subject', 'special']
  
  const filteredAchievements = selectedCategory === 'all' 
    ? achievements 
    : achievements.filter(a => a.category === selectedCategory)

  const groupedAchievements = selectedCategory === 'all'
    ? Object.keys(categoryLabels).reduce((acc, cat) => {
        acc[cat] = achievements.filter(a => a.category === cat)
        return acc
      }, {} as Record<string, Achievement[]>)
    : { [selectedCategory]: filteredAchievements }

  return (
    <div className={styles.achievements}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className={styles.headerContent}>
          <Trophy size={32} className={styles.headerIcon} />
          <div>
            <h1>Achievements</h1>
            <p>Track your progress and earn rewards</p>
          </div>
        </div>

        <div className={styles.statsRow}>
          <div className={styles.statBox}>
            <span className={styles.statNumber}>{unlockedCount}</span>
            <span className={styles.statLabel}>Unlocked</span>
          </div>
          <div className={styles.statDivider}>/</div>
          <div className={styles.statBox}>
            <span className={styles.statNumber}>{totalAchievements}</span>
            <span className={styles.statLabel}>Total</span>
          </div>
          <div className={styles.statBox} style={{ marginLeft: 'auto' }}>
            <span className={styles.statNumber}>{totalPoints}</span>
            <span className={styles.statLabel}>Points</span>
          </div>
        </div>
      </motion.div>

      {/* Category Filter */}
      <div className={styles.filterBar}>
        {categories.map(cat => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${selectedCategory === cat ? styles.active : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat === 'all' ? 'All' : categoryLabels[cat as keyof typeof categoryLabels]}
          </button>
        ))}
      </div>

      {/* Achievements Grid */}
      <div className={styles.achievementsContent}>
        {Object.entries(groupedAchievements).map(([category, categoryAchievements]) => (
          <motion.section 
            key={category}
            className={styles.categorySection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {selectedCategory === 'all' && (
              <h2 className={styles.categoryTitle}>
                {categoryLabels[category as keyof typeof categoryLabels]}
              </h2>
            )}

            <div className={styles.achievementsGrid}>
              {categoryAchievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  className={`${styles.achievementCard} ${achievement.unlocked ? styles.unlocked : styles.locked}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  style={{ 
                    '--rarity-color': rarityColors[achievement.rarity]
                  } as React.CSSProperties}
                >
                  <div className={styles.achievementIcon}>
                    {achievement.unlocked ? (
                      <span className={styles.emoji}>{achievement.icon}</span>
                    ) : (
                      <Lock size={24} className={styles.lockIcon} />
                    )}
                  </div>

                  <div className={styles.achievementInfo}>
                    <h3>{achievement.name}</h3>
                    <p>{achievement.description}</p>

                    {achievement.progress !== undefined && !achievement.unlocked && (
                      <div className={styles.progressSection}>
                        <div className={styles.progressBar}>
                          <div 
                            className={styles.progressFill}
                            style={{ width: `${(achievement.progress / (achievement.maxProgress || 1)) * 100}%` }}
                          />
                        </div>
                        <span className={styles.progressText}>
                          {achievement.progress} / {achievement.maxProgress}
                        </span>
                      </div>
                    )}

                    {achievement.unlocked && achievement.unlockedAt && (
                      <span className={styles.unlockedDate}>
                        Unlocked {achievement.unlockedAt}
                      </span>
                    )}
                  </div>

                  <span className={`${styles.rarityBadge} ${styles[achievement.rarity]}`}>
                    {achievement.rarity}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      {/* Rarity Legend */}
      <div className={styles.legend}>
        <h3>Rarity</h3>
        <div className={styles.legendItems}>
          <span className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.common}`} />
            Common (10 pts)
          </span>
          <span className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.rare}`} />
            Rare (25 pts)
          </span>
          <span className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.epic}`} />
            Epic (50 pts)
          </span>
          <span className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.legendary}`} />
            Legendary (100 pts)
          </span>
        </div>
      </div>
    </div>
  )
}

