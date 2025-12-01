'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  TrendingUp, Target, Clock, Brain, Calendar,
  CheckCircle2, XCircle, BookOpen, Beaker, MessageSquare,
  Award, Flame, BarChart3, ArrowUp, ArrowDown, Zap,
  Trophy, Star, ChevronDown, Activity, PieChart
} from 'lucide-react'
import styles from './progress.module.css'

const weeklyData = [
  { day: 'Mon', score: 72, time: 45, questions: 32 },
  { day: 'Tue', score: 74, time: 60, questions: 45 },
  { day: 'Wed', score: 78, time: 55, questions: 38 },
  { day: 'Thu', score: 76, time: 40, questions: 28 },
  { day: 'Fri', score: 82, time: 70, questions: 52 },
  { day: 'Sat', score: 85, time: 90, questions: 68 },
  { day: 'Sun', score: 84, time: 30, questions: 22 }
]

const subjectPerformance = [
  { name: 'Language Arts', score: 82, change: +4, accuracy: 78, color: 'teal', icon: <BookOpen size={18} />, mastered: 45, total: 60 },
  { name: 'Math Reasoning', score: 68, change: +8, accuracy: 65, color: 'amber', icon: <Target size={18} />, mastered: 28, total: 50 },
  { name: 'Science', score: 75, change: +3, accuracy: 72, color: 'coral', icon: <Beaker size={18} />, mastered: 35, total: 55 },
  { name: 'Social Studies', score: 88, change: +2, accuracy: 85, color: 'navy', icon: <MessageSquare size={18} />, mastered: 42, total: 45 }
]

const weakAreas = [
  { topic: 'Algebraic Equations', subject: 'Math', accuracy: 45, questions: 12 },
  { topic: 'Scientific Reasoning', subject: 'Science', accuracy: 52, questions: 18 },
  { topic: 'Reading Comprehension', subject: 'Language Arts', accuracy: 58, questions: 25 },
  { topic: 'Ratios & Proportions', subject: 'Math', accuracy: 60, questions: 15 }
]

const strongAreas = [
  { topic: 'U.S. History', subject: 'Social Studies', accuracy: 92, questions: 35 },
  { topic: 'Civics & Government', subject: 'Social Studies', accuracy: 88, questions: 42 },
  { topic: 'Life Science', subject: 'Science', accuracy: 85, questions: 38 },
  { topic: 'Key Ideas & Details', subject: 'Language Arts', accuracy: 84, questions: 28 }
]

const recentTests = [
  { date: 'Nov 28', type: 'Full Practice', score: 82, time: '52 min', questions: 50, trend: 'up' },
  { date: 'Nov 25', type: 'Math Quiz', score: 72, time: '18 min', questions: 15, trend: 'up' },
  { date: 'Nov 22', type: 'Full Practice', score: 76, time: '48 min', questions: 50, trend: 'down' },
  { date: 'Nov 20', type: 'Science Quiz', score: 78, time: '15 min', questions: 15, trend: 'up' }
]

const milestones = [
  { name: '100 Questions', achieved: true, date: 'Oct 15' },
  { name: '500 Questions', achieved: true, date: 'Nov 10' },
  { name: '1,000 Questions', achieved: false, progress: 84.7 },
  { name: '7-Day Streak', achieved: true, date: 'Nov 28' },
  { name: '14-Day Streak', achieved: false, progress: 50 },
  { name: '80% Overall', achieved: false, progress: 92.5 }
]

export default function ProgressPage() {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'all'>('week')
  const maxScore = Math.max(...weeklyData.map(d => d.score))
  const predictedScore = 79
  const overallProgress = 62

  const totalQuestions = weeklyData.reduce((sum, d) => sum + d.questions, 0)
  const totalTime = weeklyData.reduce((sum, d) => sum + d.time, 0)
  const avgScore = Math.round(weeklyData.reduce((sum, d) => sum + d.score, 0) / weeklyData.length)

  return (
    <div className={styles.progress}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div>
          <h1>Your Progress</h1>
          <p>Track your improvement and identify growth areas</p>
        </div>
        <div className={styles.timeRangeSelector}>
          {(['week', 'month', 'all'] as const).map(range => (
            <button
              key={range}
              className={`${styles.rangeBtn} ${timeRange === range ? styles.active : ''}`}
              onClick={() => setTimeRange(range)}
            >
              {range === 'week' ? 'This Week' : range === 'month' ? 'This Month' : 'All Time'}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Score Overview */}
      <motion.div 
        className={styles.scoreOverview}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        <div className={styles.mainScore}>
          <div className={styles.scoreCircle}>
            <svg viewBox="0 0 100 100">
              <circle className={styles.scoreBg} cx="50" cy="50" r="45" />
              <circle
                className={styles.scoreFill}
                cx="50"
                cy="50"
                r="45"
                strokeDasharray={`${predictedScore * 2.83}, 283`}
              />
            </svg>
            <div className={styles.scoreInner}>
              <span className={styles.scoreValue}>{predictedScore}</span>
              <span className={styles.scoreLabel}>Predicted</span>
            </div>
          </div>
          <div className={styles.scoreInfo}>
            <h2>Predicted GED Score</h2>
            <div className={styles.scoreTrend}>
              <ArrowUp size={16} />
              <span>+4.2 this week</span>
            </div>
            <p>Based on your performance across {totalQuestions} questions this week</p>
          </div>
        </div>

        <div className={styles.quickStats}>
          <div className={styles.quickStat}>
            <div className={styles.quickStatIcon}>
              <Brain size={18} />
            </div>
            <div className={styles.quickStatInfo}>
              <strong>{totalQuestions}</strong>
              <span>Questions</span>
            </div>
          </div>
          <div className={styles.quickStat}>
            <div className={styles.quickStatIcon}>
              <Clock size={18} />
            </div>
            <div className={styles.quickStatInfo}>
              <strong>{Math.round(totalTime / 60)}h {totalTime % 60}m</strong>
              <span>Study Time</span>
            </div>
          </div>
          <div className={styles.quickStat}>
            <div className={styles.quickStatIcon}>
              <Target size={18} />
            </div>
            <div className={styles.quickStatInfo}>
              <strong>{avgScore}%</strong>
              <span>Avg Score</span>
            </div>
          </div>
          <div className={styles.quickStat}>
            <div className={styles.quickStatIcon}>
              <Flame size={18} />
            </div>
            <div className={styles.quickStatInfo}>
              <strong>7 days</strong>
              <span>Streak</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className={styles.mainGrid}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          {/* Weekly Performance Chart */}
          <motion.section 
            className={styles.section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className={styles.sectionHeader}>
              <h2>
                <Activity size={18} />
                Weekly Performance
              </h2>
            </div>

            <div className={styles.chart}>
              <div className={styles.chartBars}>
                {weeklyData.map((day, idx) => (
                  <div key={idx} className={styles.chartBar}>
                    <div className={styles.barContainer}>
                      <motion.div 
                        className={styles.bar}
                        initial={{ height: 0 }}
                        animate={{ height: `${(day.score / maxScore) * 100}%` }}
                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                      >
                        <span className={styles.barValue}>{day.score}%</span>
                      </motion.div>
                    </div>
                    <span className={styles.barLabel}>{day.day}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Subject Performance */}
          <motion.section 
            className={styles.section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <div className={styles.sectionHeader}>
              <h2>
                <PieChart size={18} />
                Subject Breakdown
              </h2>
            </div>
            <div className={styles.subjectList}>
              {subjectPerformance.map((subject, idx) => (
                <div key={idx} className={styles.subjectItem}>
                  <div className={`${styles.subjectIcon} ${styles[subject.color]}`}>
                    {subject.icon}
                  </div>
                  <div className={styles.subjectInfo}>
                    <div className={styles.subjectHeader}>
                      <strong>{subject.name}</strong>
                      <span className={styles.subjectChange}>
                        <ArrowUp size={10} />
                        {subject.change}%
                      </span>
                    </div>
                    <div className={styles.subjectBar}>
                      <motion.div 
                        className={styles.subjectFill}
                        initial={{ width: 0 }}
                        animate={{ width: `${subject.score}%` }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                      />
                    </div>
                    <div className={styles.subjectMeta}>
                      <span>{subject.score}% mastery</span>
                      <span className={styles.dot}>•</span>
                      <span>{subject.accuracy}% accuracy</span>
                      <span className={styles.dot}>•</span>
                      <span>{subject.mastered}/{subject.total} topics</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Milestones */}
          <motion.section 
            className={styles.section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className={styles.sectionHeader}>
              <h2>
                <Trophy size={18} />
                Milestones
              </h2>
            </div>
            <div className={styles.milestoneGrid}>
              {milestones.map((milestone, idx) => (
                <div 
                  key={idx} 
                  className={`${styles.milestone} ${milestone.achieved ? styles.achieved : ''}`}
                >
                  <div className={styles.milestoneIcon}>
                    {milestone.achieved ? (
                      <CheckCircle2 size={16} />
                    ) : (
                      <Star size={16} />
                    )}
                  </div>
                  <div className={styles.milestoneInfo}>
                    <strong>{milestone.name}</strong>
                    {milestone.achieved ? (
                      <span className={styles.achievedDate}>{milestone.date}</span>
                    ) : (
                      <div className={styles.milestoneProgress}>
                        <div className={styles.milestoneBar}>
                          <div 
                            className={styles.milestoneFill}
                            style={{ width: `${milestone.progress}%` }}
                          />
                        </div>
                        <span>{milestone.progress}%</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          {/* Recent Tests */}
          <motion.section 
            className={styles.section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12 }}
          >
            <div className={styles.sectionHeader}>
              <h2>
                <BarChart3 size={18} />
                Recent Tests
              </h2>
            </div>
            <div className={styles.testsList}>
              {recentTests.map((test, idx) => (
                <div key={idx} className={styles.testItem}>
                  <div className={styles.testInfo}>
                    <strong>{test.type}</strong>
                    <span>{test.date} • {test.time} • {test.questions} Q</span>
                  </div>
                  <div className={styles.testScore}>
                    <span className={`${styles.testTrend} ${styles[test.trend]}`}>
                      {test.trend === 'up' ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                    </span>
                    <strong>{test.score}%</strong>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Areas to Improve */}
          <motion.section 
            className={styles.section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.17 }}
          >
            <div className={styles.sectionHeader}>
              <h2>
                <XCircle size={18} className={styles.weakIcon} />
                Focus Areas
              </h2>
            </div>
            <div className={styles.areasList}>
              {weakAreas.map((area, idx) => (
                <div key={idx} className={styles.areaItem}>
                  <div className={styles.areaInfo}>
                    <strong>{area.topic}</strong>
                    <span>{area.subject} • {area.questions} questions</span>
                  </div>
                  <div className={styles.areaScore}>
                    <span className={styles.weak}>{area.accuracy}%</span>
                  </div>
                </div>
              ))}
            </div>
            <button className={styles.practiceWeakBtn}>
              <Zap size={16} />
              Practice Weak Areas
            </button>
          </motion.section>

          {/* Strengths */}
          <motion.section 
            className={styles.section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.22 }}
          >
            <div className={styles.sectionHeader}>
              <h2>
                <CheckCircle2 size={18} className={styles.strongIcon} />
                Your Strengths
              </h2>
            </div>
            <div className={styles.areasList}>
              {strongAreas.map((area, idx) => (
                <div key={idx} className={styles.areaItem}>
                  <div className={styles.areaInfo}>
                    <strong>{area.topic}</strong>
                    <span>{area.subject} • {area.questions} questions</span>
                  </div>
                  <div className={styles.areaScore}>
                    <span className={styles.strong}>{area.accuracy}%</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Achievements */}
          <motion.section 
            className={styles.achievementSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.27 }}
          >
            <div className={styles.sectionHeader}>
              <h2>
                <Award size={18} />
                Recent Badges
              </h2>
            </div>
            <div className={styles.achievementGrid}>
              <div className={styles.achievement}>
                <div className={`${styles.achievementBadge} ${styles.fire}`}>
                  <Flame size={18} />
                </div>
                <span>7-Day Streak</span>
              </div>
              <div className={styles.achievement}>
                <div className={`${styles.achievementBadge} ${styles.target}`}>
                  <Target size={18} />
                </div>
                <span>80% Club</span>
              </div>
              <div className={styles.achievement}>
                <div className={`${styles.achievementBadge} ${styles.brain}`}>
                  <Brain size={18} />
                </div>
                <span>500 Questions</span>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
