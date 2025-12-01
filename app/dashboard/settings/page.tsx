'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  User, Mail, Bell, Shield, Moon, Sun, Globe, Volume2, VolumeX,
  ChevronRight, Check, Camera, Trash2, Keyboard, Timer, Zap,
  Target, BookOpen, Award, Download, HelpCircle, MessageCircle
} from 'lucide-react'
import styles from './settings.module.css'

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    studyReminders: true,
    weeklyReport: false,
    streakReminders: true,
    challengeNotifs: true
  })
  const [preferences, setPreferences] = useState({
    darkMode: false,
    soundEffects: true,
    autoNextQuestion: false,
    showTimer: true,
    showExplanations: true,
    keyboardShortcuts: true,
    compactMode: false
  })
  const [studySettings, setStudySettings] = useState({
    dailyGoal: 30,
    sessionLength: 25,
    breakLength: 5,
    focusSubject: 'all'
  })

  return (
    <div className={styles.settings}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1>Settings</h1>
        <p>Manage your preferences</p>
      </motion.div>

      <div className={styles.content}>
        {/* Profile Section */}
        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <h2>
            <User size={18} />
            Profile
          </h2>
          
          <div className={styles.profileCard}>
            <div className={styles.avatarSection}>
              <div className={styles.avatar}>
                <span>SM</span>
                <button className={styles.avatarBtn}>
                  <Camera size={14} />
                </button>
              </div>
              <div className={styles.avatarInfo}>
                <strong>Sarah Mitchell</strong>
                <span>Member since Nov 2024</span>
              </div>
            </div>
            
            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <label>Full Name</label>
                <input type="text" defaultValue="Sarah Mitchell" />
              </div>
              <div className={styles.inputGroup}>
                <label>Email</label>
                <input type="email" defaultValue="sarah.mitchell@email.com" />
              </div>
              <div className={styles.inputGroup}>
                <label>Target Exam Date</label>
                <input type="date" defaultValue="2025-01-15" />
              </div>
              <div className={styles.inputGroup}>
                <label>Study Goal (hrs/week)</label>
                <select defaultValue="15">
                  <option value="5">5 hours</option>
                  <option value="10">10 hours</option>
                  <option value="15">15 hours</option>
                  <option value="20">20 hours</option>
                  <option value="25">25 hours</option>
                </select>
              </div>
            </div>
            
            <button className={styles.saveBtn}>Save Changes</button>
          </div>
        </motion.section>

        {/* Study Preferences */}
        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h2>
            <BookOpen size={18} />
            Study Preferences
          </h2>
          
          <div className={styles.optionsList}>
            <div className={styles.optionItem}>
              <div className={styles.optionInfo}>
                <strong>Daily Goal</strong>
                <span>Questions per day</span>
              </div>
              <select 
                className={styles.selectInline}
                value={studySettings.dailyGoal}
                onChange={(e) => setStudySettings({...studySettings, dailyGoal: parseInt(e.target.value)})}
              >
                <option value="10">10 questions</option>
                <option value="20">20 questions</option>
                <option value="30">30 questions</option>
                <option value="50">50 questions</option>
                <option value="100">100 questions</option>
              </select>
            </div>
            
            <div className={styles.optionItem}>
              <div className={styles.optionInfo}>
                <strong>Focus Subject</strong>
                <span>Priority study area</span>
              </div>
              <select 
                className={styles.selectInline}
                value={studySettings.focusSubject}
                onChange={(e) => setStudySettings({...studySettings, focusSubject: e.target.value})}
              >
                <option value="all">All Subjects</option>
                <option value="reading">Reading</option>
                <option value="math">Mathematics</option>
                <option value="science">Science</option>
                <option value="english">English</option>
                <option value="weak">Weak Areas</option>
              </select>
            </div>

            <div className={styles.optionItem}>
              <div className={styles.optionInfo}>
                <strong>Study Session Length</strong>
                <span>Pomodoro timer duration</span>
              </div>
              <select 
                className={styles.selectInline}
                value={studySettings.sessionLength}
                onChange={(e) => setStudySettings({...studySettings, sessionLength: parseInt(e.target.value)})}
              >
                <option value="15">15 minutes</option>
                <option value="25">25 minutes</option>
                <option value="30">30 minutes</option>
                <option value="45">45 minutes</option>
                <option value="60">60 minutes</option>
              </select>
            </div>

            <div className={styles.optionItem}>
              <div className={styles.optionInfo}>
                <strong>Break Length</strong>
                <span>Rest between sessions</span>
              </div>
              <select 
                className={styles.selectInline}
                value={studySettings.breakLength}
                onChange={(e) => setStudySettings({...studySettings, breakLength: parseInt(e.target.value)})}
              >
                <option value="5">5 minutes</option>
                <option value="10">10 minutes</option>
                <option value="15">15 minutes</option>
              </select>
            </div>
          </div>
        </motion.section>

        {/* Practice Settings */}
        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <h2>
            <Target size={18} />
            Practice Settings
          </h2>
          
          <div className={styles.optionsList}>
            <div className={styles.optionItem}>
              <div className={styles.optionInfo}>
                <strong>Show Timer</strong>
                <span>Display countdown during practice</span>
              </div>
              <button 
                className={`${styles.toggle} ${preferences.showTimer ? styles.active : ''}`}
                onClick={() => setPreferences({...preferences, showTimer: !preferences.showTimer})}
              >
                <span className={styles.toggleHandle} />
              </button>
            </div>

            <div className={styles.optionItem}>
              <div className={styles.optionInfo}>
                <strong>Auto Next Question</strong>
                <span>Move to next after answering</span>
              </div>
              <button 
                className={`${styles.toggle} ${preferences.autoNextQuestion ? styles.active : ''}`}
                onClick={() => setPreferences({...preferences, autoNextQuestion: !preferences.autoNextQuestion})}
              >
                <span className={styles.toggleHandle} />
              </button>
            </div>

            <div className={styles.optionItem}>
              <div className={styles.optionInfo}>
                <strong>Show Explanations</strong>
                <span>Display after each answer</span>
              </div>
              <button 
                className={`${styles.toggle} ${preferences.showExplanations ? styles.active : ''}`}
                onClick={() => setPreferences({...preferences, showExplanations: !preferences.showExplanations})}
              >
                <span className={styles.toggleHandle} />
              </button>
            </div>

            <div className={styles.optionItem}>
              <div className={styles.optionInfo}>
                <strong>Keyboard Shortcuts</strong>
                <span>Use 1-4 for answer selection</span>
              </div>
              <button 
                className={`${styles.toggle} ${preferences.keyboardShortcuts ? styles.active : ''}`}
                onClick={() => setPreferences({...preferences, keyboardShortcuts: !preferences.keyboardShortcuts})}
              >
                <span className={styles.toggleHandle} />
              </button>
            </div>
          </div>
        </motion.section>

        {/* Notifications Section */}
        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h2>
            <Bell size={18} />
            Notifications
          </h2>
          
          <div className={styles.optionsList}>
            <div className={styles.optionItem}>
              <div className={styles.optionInfo}>
                <strong>Email Notifications</strong>
                <span>Updates via email</span>
              </div>
              <button 
                className={`${styles.toggle} ${notifications.email ? styles.active : ''}`}
                onClick={() => setNotifications({...notifications, email: !notifications.email})}
              >
                <span className={styles.toggleHandle} />
              </button>
            </div>
            
            <div className={styles.optionItem}>
              <div className={styles.optionInfo}>
                <strong>Push Notifications</strong>
                <span>Device notifications</span>
              </div>
              <button 
                className={`${styles.toggle} ${notifications.push ? styles.active : ''}`}
                onClick={() => setNotifications({...notifications, push: !notifications.push})}
              >
                <span className={styles.toggleHandle} />
              </button>
            </div>
            
            <div className={styles.optionItem}>
              <div className={styles.optionInfo}>
                <strong>Study Reminders</strong>
                <span>Daily study nudges</span>
              </div>
              <button 
                className={`${styles.toggle} ${notifications.studyReminders ? styles.active : ''}`}
                onClick={() => setNotifications({...notifications, studyReminders: !notifications.studyReminders})}
              >
                <span className={styles.toggleHandle} />
              </button>
            </div>

            <div className={styles.optionItem}>
              <div className={styles.optionInfo}>
                <strong>Streak Reminders</strong>
                <span>Don't lose your streak!</span>
              </div>
              <button 
                className={`${styles.toggle} ${notifications.streakReminders ? styles.active : ''}`}
                onClick={() => setNotifications({...notifications, streakReminders: !notifications.streakReminders})}
              >
                <span className={styles.toggleHandle} />
              </button>
            </div>
            
            <div className={styles.optionItem}>
              <div className={styles.optionInfo}>
                <strong>Daily Challenge</strong>
                <span>New challenge alerts</span>
              </div>
              <button 
                className={`${styles.toggle} ${notifications.challengeNotifs ? styles.active : ''}`}
                onClick={() => setNotifications({...notifications, challengeNotifs: !notifications.challengeNotifs})}
              >
                <span className={styles.toggleHandle} />
              </button>
            </div>

            <div className={styles.optionItem}>
              <div className={styles.optionInfo}>
                <strong>Weekly Report</strong>
                <span>Progress summary</span>
              </div>
              <button 
                className={`${styles.toggle} ${notifications.weeklyReport ? styles.active : ''}`}
                onClick={() => setNotifications({...notifications, weeklyReport: !notifications.weeklyReport})}
              >
                <span className={styles.toggleHandle} />
              </button>
            </div>
          </div>
        </motion.section>

        {/* Appearance */}
        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <h2>
            <Globe size={18} />
            Appearance
          </h2>
          
          <div className={styles.optionsList}>
            <div className={styles.optionItem}>
              <div className={styles.optionInfo}>
                <strong>Dark Mode</strong>
                <span>Switch themes</span>
              </div>
              <button 
                className={`${styles.toggle} ${preferences.darkMode ? styles.active : ''}`}
                onClick={() => setPreferences({...preferences, darkMode: !preferences.darkMode})}
              >
                <span className={styles.toggleHandle}>
                  {preferences.darkMode ? <Moon size={10} /> : <Sun size={10} />}
                </span>
              </button>
            </div>

            <div className={styles.optionItem}>
              <div className={styles.optionInfo}>
                <strong>Sound Effects</strong>
                <span>Answer feedback sounds</span>
              </div>
              <button 
                className={`${styles.toggle} ${preferences.soundEffects ? styles.active : ''}`}
                onClick={() => setPreferences({...preferences, soundEffects: !preferences.soundEffects})}
              >
                <span className={styles.toggleHandle}>
                  {preferences.soundEffects ? <Volume2 size={10} /> : <VolumeX size={10} />}
                </span>
              </button>
            </div>

            <div className={styles.optionItem}>
              <div className={styles.optionInfo}>
                <strong>Compact Mode</strong>
                <span>Denser interface</span>
              </div>
              <button 
                className={`${styles.toggle} ${preferences.compactMode ? styles.active : ''}`}
                onClick={() => setPreferences({...preferences, compactMode: !preferences.compactMode})}
              >
                <span className={styles.toggleHandle} />
              </button>
            </div>
            
            <div className={styles.optionItem}>
              <div className={styles.optionInfo}>
                <strong>Time Zone</strong>
                <span>Local time zone</span>
              </div>
              <select className={styles.selectInline} defaultValue="pst">
                <option value="est">Eastern (EST)</option>
                <option value="cst">Central (CST)</option>
                <option value="mst">Mountain (MST)</option>
                <option value="pst">Pacific (PST)</option>
              </select>
            </div>
          </div>
        </motion.section>

        {/* Data & Privacy */}
        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <h2>
            <Shield size={18} />
            Data & Privacy
          </h2>
          
          <div className={styles.optionsList}>
            <button className={styles.linkItem}>
              <div className={styles.optionInfo}>
                <strong>Change Password</strong>
                <span>Update account password</span>
              </div>
              <ChevronRight size={16} />
            </button>
            
            <button className={styles.linkItem}>
              <div className={styles.optionInfo}>
                <strong>Two-Factor Auth</strong>
                <span>Extra security layer</span>
              </div>
              <ChevronRight size={16} />
            </button>

            <button className={styles.linkItem}>
              <div className={styles.optionInfo}>
                <strong>Export Data</strong>
                <span>Download your progress</span>
              </div>
              <Download size={16} />
            </button>
            
            <button className={styles.linkItem}>
              <div className={styles.optionInfo}>
                <strong>Privacy Policy</strong>
                <span>How we use your data</span>
              </div>
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.section>

        {/* Support */}
        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
        >
          <h2>
            <HelpCircle size={18} />
            Support
          </h2>
          
          <div className={styles.optionsList}>
            <button className={styles.linkItem}>
              <div className={styles.optionInfo}>
                <strong>Help Center</strong>
                <span>FAQs and guides</span>
              </div>
              <ChevronRight size={16} />
            </button>
            
            <button className={styles.linkItem}>
              <div className={styles.optionInfo}>
                <strong>Contact Support</strong>
                <span>Get help from our team</span>
              </div>
              <MessageCircle size={16} />
            </button>
            
            <button className={styles.linkItem}>
              <div className={styles.optionInfo}>
                <strong>Keyboard Shortcuts</strong>
                <span>View all shortcuts</span>
              </div>
              <Keyboard size={16} />
            </button>
          </div>
        </motion.section>

        {/* Subscription Section */}
        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <h2>
            <Award size={18} />
            Subscription
          </h2>
          
          <div className={styles.subscriptionCard}>
            <div className={styles.planInfo}>
              <span className={styles.planBadge}>Complete Plan</span>
              <strong>$49 / 3 months</strong>
              <span>Renews Feb 15, 2025</span>
            </div>
            <div className={styles.planActions}>
              <button className={styles.planBtn}>Manage Plan</button>
              <button className={styles.planBtnSecondary}>Invoices</button>
            </div>
          </div>
        </motion.section>

        {/* Danger Zone */}
        <motion.section 
          className={`${styles.section} ${styles.dangerSection}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
        >
          <h2>Danger Zone</h2>
          
          <div className={styles.dangerCard}>
            <div className={styles.optionInfo}>
              <strong>Delete Account</strong>
              <span>Permanently remove account</span>
            </div>
            <button className={styles.deleteBtn}>
              <Trash2 size={14} />
              Delete
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
