'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calendar, Clock, Target, BookOpen, CheckCircle2,
  ChevronLeft, ChevronRight, Plus, Edit3, Trash2,
  Bell, Award, TrendingUp, Zap, X, Play, Pause,
  RotateCcw, Timer, Beaker, MessageSquare, Check
} from 'lucide-react'
import styles from './planner.module.css'

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December']

interface StudyTask {
  id: string;
  title: string;
  subject: 'reading' | 'math' | 'science' | 'english' | 'practice';
  duration: number;
  completed: boolean;
  date: string;
}

const subjectOptions = [
  { value: 'reading', label: 'Reading', icon: <BookOpen size={16} /> },
  { value: 'math', label: 'Mathematics', icon: <Target size={16} /> },
  { value: 'science', label: 'Science', icon: <Beaker size={16} /> },
  { value: 'english', label: 'English', icon: <MessageSquare size={16} /> },
  { value: 'practice', label: 'Practice Test', icon: <Award size={16} /> },
]

const taskTemplates = [
  { title: 'Reading Comprehension', subject: 'reading', duration: 30 },
  { title: 'Math Practice', subject: 'math', duration: 45 },
  { title: 'Science Review', subject: 'science', duration: 40 },
  { title: 'Grammar & Vocabulary', subject: 'english', duration: 25 },
  { title: 'Full Practice Test', subject: 'practice', duration: 120 },
  { title: 'Flashcard Review', subject: 'reading', duration: 15 },
  { title: 'Weak Areas Focus', subject: 'math', duration: 30 },
]

const initialTasks: StudyTask[] = [
  { id: '1', title: 'Reading Comprehension', subject: 'reading', duration: 30, completed: true, date: '2024-12-01' },
  { id: '2', title: 'Math Practice', subject: 'math', duration: 45, completed: true, date: '2024-12-01' },
  { id: '3', title: 'Science: Anatomy', subject: 'science', duration: 40, completed: false, date: '2024-12-01' },
  { id: '4', title: 'Grammar Review', subject: 'english', duration: 25, completed: false, date: '2024-12-01' },
  { id: '5', title: 'Full Practice Test', subject: 'practice', duration: 120, completed: false, date: '2024-12-02' },
  { id: '6', title: 'Review Test Results', subject: 'practice', duration: 30, completed: false, date: '2024-12-03' },
  { id: '7', title: 'Math: Ratios', subject: 'math', duration: 35, completed: false, date: '2024-12-03' },
  { id: '8', title: 'Reading: Key Ideas', subject: 'reading', duration: 30, completed: false, date: '2024-12-04' },
]

export default function PlannerPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [tasks, setTasks] = useState<StudyTask[]>(initialTasks)
  const [showAddModal, setShowAddModal] = useState(false)
  const [editingTask, setEditingTask] = useState<StudyTask | null>(null)
  const [showTimer, setShowTimer] = useState(false)
  const [timerTask, setTimerTask] = useState<StudyTask | null>(null)
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [examDate] = useState('2025-01-15')
  
  // New task form state
  const [newTask, setNewTask] = useState({
    title: '',
    subject: 'reading' as StudyTask['subject'],
    duration: 30
  })

  const today = new Date()
  const todayStr = formatDate(today)
  const examDateObj = new Date(examDate)
  const daysUntilExam = Math.ceil((examDateObj.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

  // Timer effect
  useEffect(() => {
    if (!isTimerRunning || timeRemaining <= 0) return
    
    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          setIsTimerRunning(false)
          // Play notification sound or show alert
          if (timerTask) {
            handleCompleteTask(timerTask.id)
          }
          return 0
        }
        return prev - 1
      })
    }, 1000)
    
    return () => clearInterval(interval)
  }, [isTimerRunning, timeRemaining, timerTask])

  function formatDate(date: Date) {
    return date.toISOString().split('T')[0]
  }

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const navigateMonth = (direction: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1))
  }

  const getTasksForDate = (dateStr: string) => {
    return tasks.filter(t => t.date === dateStr)
  }

  const getSubjectColor = (subject: string) => {
    switch (subject) {
      case 'reading': return 'teal'
      case 'math': return 'amber'
      case 'science': return 'coral'
      case 'english': return 'navy'
      case 'practice': return 'purple'
      default: return 'teal'
    }
  }

  const getSubjectIcon = (subject: string) => {
    switch (subject) {
      case 'reading': return <BookOpen size={16} />
      case 'math': return <Target size={16} />
      case 'science': return <Beaker size={16} />
      case 'english': return <MessageSquare size={16} />
      case 'practice': return <Award size={16} />
      default: return <BookOpen size={16} />
    }
  }

  const handleAddTask = () => {
    if (!newTask.title.trim()) return
    
    const task: StudyTask = {
      id: Date.now().toString(),
      title: newTask.title,
      subject: newTask.subject,
      duration: newTask.duration,
      completed: false,
      date: formatDate(selectedDate)
    }
    
    setTasks([...tasks, task])
    setNewTask({ title: '', subject: 'reading', duration: 30 })
    setShowAddModal(false)
  }

  const handleUpdateTask = () => {
    if (!editingTask) return
    
    setTasks(tasks.map(t => 
      t.id === editingTask.id ? editingTask : t
    ))
    setEditingTask(null)
  }

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  const handleCompleteTask = (id: string) => {
    setTasks(tasks.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ))
  }

  const handleStartTimer = (task: StudyTask) => {
    setTimerTask(task)
    setTimeRemaining(task.duration * 60)
    setShowTimer(true)
    setIsTimerRunning(true)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleQuickAdd = (template: typeof taskTemplates[0]) => {
    const task: StudyTask = {
      id: Date.now().toString(),
      title: template.title,
      subject: template.subject as StudyTask['subject'],
      duration: template.duration,
      completed: false,
      date: formatDate(selectedDate)
    }
    setTasks([...tasks, task])
  }

  const selectedDateTasks = getTasksForDate(formatDate(selectedDate))
  const todayTasks = getTasksForDate(todayStr)
  const completedToday = todayTasks.filter(t => t.completed).length
  const totalDurationToday = todayTasks.reduce((sum, t) => sum + t.duration, 0)

  // Weekly stats
  const weekStart = new Date(today)
  weekStart.setDate(today.getDate() - today.getDay())
  const weekTasks = tasks.filter(t => {
    const taskDate = new Date(t.date)
    return taskDate >= weekStart && taskDate <= today
  })
  const weeklyMinutes = weekTasks.reduce((sum, t) => t.completed ? sum + t.duration : sum, 0)
  const weeklyCompleted = weekTasks.filter(t => t.completed).length

  const renderCalendar = () => {
    const days = []
    const daysInMonth = getDaysInMonth(currentDate)
    const firstDay = getFirstDayOfMonth(currentDate)

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className={styles.emptyDay} />)
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
      const dateStr = formatDate(date)
      const dayTasks = getTasksForDate(dateStr)
      const isToday = todayStr === dateStr
      const isSelected = formatDate(selectedDate) === dateStr
      const hasTasks = dayTasks.length > 0
      const allComplete = dayTasks.length > 0 && dayTasks.every(t => t.completed)

      days.push(
        <button
          key={day}
          onClick={() => setSelectedDate(date)}
          className={`${styles.calendarDay} ${isToday ? styles.today : ''} ${isSelected ? styles.selected : ''}`}
        >
          <span className={styles.dayNumber}>{day}</span>
          {hasTasks && (
            <div className={styles.taskIndicators}>
              {allComplete ? (
                <CheckCircle2 size={10} className={styles.completedIndicator} />
              ) : (
                dayTasks.slice(0, 3).map((task, i) => (
                  <span key={i} className={`${styles.taskDot} ${styles[getSubjectColor(task.subject)]}`} />
                ))
              )}
            </div>
          )}
        </button>
      )
    }

    return days
  }

  return (
    <div className={styles.planner}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <h1>Study Planner</h1>
          <p>Plan and track your study sessions</p>
        </div>
        <div className={styles.examCountdown}>
          <div className={styles.countdownNumber}>{daysUntilExam}</div>
          <div className={styles.countdownLabel}>
            <span>days to</span>
            <strong>TEAS Exam</strong>
          </div>
        </div>
      </motion.div>

      <div className={styles.mainGrid}>
        <div className={styles.leftColumn}>
          {/* Calendar */}
          <motion.section 
            className={styles.calendar}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className={styles.calendarHeader}>
              <button onClick={() => navigateMonth(-1)} className={styles.navBtn}>
                <ChevronLeft size={18} />
              </button>
              <h2>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
              <button onClick={() => navigateMonth(1)} className={styles.navBtn}>
                <ChevronRight size={18} />
              </button>
            </div>

            <div className={styles.calendarWeekdays}>
              {daysOfWeek.map(day => (
                <div key={day} className={styles.weekday}>{day}</div>
              ))}
            </div>

            <div className={styles.calendarGrid}>
              {renderCalendar()}
            </div>

            <div className={styles.calendarLegend}>
              <span><span className={`${styles.legendDot} ${styles.teal}`} /> Read</span>
              <span><span className={`${styles.legendDot} ${styles.amber}`} /> Math</span>
              <span><span className={`${styles.legendDot} ${styles.coral}`} /> Sci</span>
              <span><span className={`${styles.legendDot} ${styles.navy}`} /> Eng</span>
            </div>
          </motion.section>

          {/* Selected Day Tasks */}
          <motion.section 
            className={styles.selectedDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <div className={styles.selectedDayHeader}>
              <h3>
                {selectedDate.toLocaleDateString('en-US', { 
                  weekday: 'short', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </h3>
              <button 
                className={styles.addTaskBtn}
                onClick={() => setShowAddModal(true)}
              >
                <Plus size={14} />
                Add
              </button>
            </div>

            {selectedDateTasks.length > 0 ? (
              <div className={styles.taskList}>
                {selectedDateTasks.map(task => (
                  <div 
                    key={task.id} 
                    className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`}
                  >
                    <button 
                      className={styles.taskCheck}
                      onClick={() => handleCompleteTask(task.id)}
                    >
                      {task.completed ? (
                        <CheckCircle2 size={18} />
                      ) : (
                        <div className={`${styles.taskCheckEmpty} ${styles[getSubjectColor(task.subject)]}`} />
                      )}
                    </button>
                    <div className={styles.taskInfo}>
                      <strong>{task.title}</strong>
                      <span><Clock size={10} /> {task.duration}m</span>
                    </div>
                    <div className={styles.taskActions}>
                      {!task.completed && (
                        <button 
                          className={styles.startBtn}
                          onClick={() => handleStartTimer(task)}
                          title="Start timer"
                        >
                          <Play size={12} />
                        </button>
                      )}
                      <button 
                        className={styles.taskAction}
                        onClick={() => setEditingTask(task)}
                      >
                        <Edit3 size={12} />
                      </button>
                      <button 
                        className={styles.taskAction}
                        onClick={() => handleDeleteTask(task.id)}
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.noTasks}>
                <Calendar size={24} />
                <p>No tasks for this day</p>
              </div>
            )}

            {/* Quick Add Templates */}
            <div className={styles.quickAdd}>
              <span className={styles.quickAddLabel}>Quick add:</span>
              <div className={styles.quickAddBtns}>
                {taskTemplates.slice(0, 4).map((template, i) => (
                  <button
                    key={i}
                    className={`${styles.quickAddBtn} ${styles[getSubjectColor(template.subject)]}`}
                    onClick={() => handleQuickAdd(template)}
                  >
                    {template.title.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </motion.section>
        </div>

        <div className={styles.rightColumn}>
          {/* Today's Progress */}
          <motion.section 
            className={styles.todayProgress}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2>Today's Progress</h2>
            <div className={styles.progressCircle}>
              <svg viewBox="0 0 100 100">
                <circle className={styles.progressBg} cx="50" cy="50" r="40" />
                <circle
                  className={styles.progressFill}
                  cx="50"
                  cy="50"
                  r="40"
                  strokeDasharray={`${todayTasks.length > 0 ? (completedToday / todayTasks.length) * 251 : 0}, 251`}
                />
              </svg>
              <div className={styles.progressText}>
                <strong>{completedToday}/{todayTasks.length}</strong>
                <span>tasks</span>
              </div>
            </div>
            <div className={styles.todayStats}>
              <div className={styles.todayStat}>
                <Clock size={14} />
                <span>{totalDurationToday}m planned</span>
              </div>
              <div className={styles.todayStat}>
                <CheckCircle2 size={14} />
                <span>{todayTasks.filter(t => t.completed).reduce((s, t) => s + t.duration, 0)}m done</span>
              </div>
            </div>
          </motion.section>

          {/* Week Stats */}
          <motion.section 
            className={styles.weeklyStats}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <h2>This Week</h2>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <TrendingUp size={18} />
                <div>
                  <strong>{Math.round(weeklyMinutes / 60 * 10) / 10}h</strong>
                  <span>Study</span>
                </div>
              </div>
              <div className={styles.statCard}>
                <CheckCircle2 size={18} />
                <div>
                  <strong>{weeklyCompleted}</strong>
                  <span>Done</span>
                </div>
              </div>
              <div className={styles.statCard}>
                <Zap size={18} />
                <div>
                  <strong>7</strong>
                  <span>Streak</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Pomodoro Timer */}
          <motion.section 
            className={styles.pomodoroSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className={styles.pomodoroHeader}>
              <Timer size={18} />
              <h2>Focus Timer</h2>
            </div>
            <button
              className={styles.pomodoroBtn}
              onClick={() => {
                setTimerTask(null)
                setTimeRemaining(25 * 60)
                setShowTimer(true)
              }}
            >
              <Play size={16} />
              Start 25min Session
            </button>
          </motion.section>

          {/* Reminder Settings */}
          <motion.section 
            className={styles.reminders}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <div className={styles.reminderHeader}>
              <Bell size={16} />
              <h2>Reminders</h2>
            </div>
            <label className={styles.reminderToggle}>
              <input type="checkbox" defaultChecked />
              <span className={styles.toggle} />
              <span>Daily reminder (9 AM)</span>
            </label>
            <label className={styles.reminderToggle}>
              <input type="checkbox" defaultChecked />
              <span className={styles.toggle} />
              <span>Streak alerts</span>
            </label>
          </motion.section>
        </div>
      </div>

      {/* Add/Edit Task Modal */}
      <AnimatePresence>
        {(showAddModal || editingTask) && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setShowAddModal(false)
              setEditingTask(null)
            }}
          >
            <motion.div
              className={styles.modal}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <h3>{editingTask ? 'Edit Task' : 'Add Task'}</h3>
                <button 
                  className={styles.modalClose}
                  onClick={() => {
                    setShowAddModal(false)
                    setEditingTask(null)
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              <div className={styles.modalBody}>
                <div className={styles.inputGroup}>
                  <label>Task Title</label>
                  <input
                    type="text"
                    placeholder="e.g., Reading Practice"
                    value={editingTask ? editingTask.title : newTask.title}
                    onChange={e => editingTask 
                      ? setEditingTask({...editingTask, title: e.target.value})
                      : setNewTask({...newTask, title: e.target.value})
                    }
                  />
                </div>

                <div className={styles.inputRow}>
                  <div className={styles.inputGroup}>
                    <label>Subject</label>
                    <select
                      value={editingTask ? editingTask.subject : newTask.subject}
                      onChange={e => editingTask
                        ? setEditingTask({...editingTask, subject: e.target.value as StudyTask['subject']})
                        : setNewTask({...newTask, subject: e.target.value as StudyTask['subject']})
                      }
                    >
                      {subjectOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Duration</label>
                    <select
                      value={editingTask ? editingTask.duration : newTask.duration}
                      onChange={e => editingTask
                        ? setEditingTask({...editingTask, duration: parseInt(e.target.value)})
                        : setNewTask({...newTask, duration: parseInt(e.target.value)})
                      }
                    >
                      <option value={15}>15 min</option>
                      <option value={25}>25 min</option>
                      <option value={30}>30 min</option>
                      <option value={45}>45 min</option>
                      <option value={60}>60 min</option>
                      <option value={90}>90 min</option>
                      <option value={120}>2 hours</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className={styles.modalFooter}>
                <button 
                  className={styles.cancelBtn}
                  onClick={() => {
                    setShowAddModal(false)
                    setEditingTask(null)
                  }}
                >
                  Cancel
                </button>
                <button 
                  className={styles.saveBtn}
                  onClick={editingTask ? handleUpdateTask : handleAddTask}
                >
                  <Check size={16} />
                  {editingTask ? 'Update' : 'Add Task'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Timer Modal */}
      <AnimatePresence>
        {showTimer && (
          <motion.div
            className={styles.timerOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.timerModal}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <button 
                className={styles.timerClose}
                onClick={() => {
                  setShowTimer(false)
                  setIsTimerRunning(false)
                }}
              >
                <X size={20} />
              </button>

              {timerTask && (
                <div className={styles.timerTask}>
                  <span className={`${styles.timerTaskBadge} ${styles[getSubjectColor(timerTask.subject)]}`}>
                    {getSubjectIcon(timerTask.subject)}
                    {timerTask.subject}
                  </span>
                  <h3>{timerTask.title}</h3>
                </div>
              )}

              <div className={styles.timerDisplay}>
                <svg viewBox="0 0 100 100" className={styles.timerRing}>
                  <circle className={styles.timerBg} cx="50" cy="50" r="45" />
                  <circle
                    className={styles.timerProgress}
                    cx="50"
                    cy="50"
                    r="45"
                    strokeDasharray={`${(timeRemaining / ((timerTask?.duration || 25) * 60)) * 283}, 283`}
                  />
                </svg>
                <div className={styles.timerTime}>
                  {formatTime(timeRemaining)}
                </div>
              </div>

              <div className={styles.timerControls}>
                <button
                  className={styles.timerControlBtn}
                  onClick={() => setTimeRemaining((timerTask?.duration || 25) * 60)}
                >
                  <RotateCcw size={20} />
                </button>
                <button
                  className={`${styles.timerPlayBtn} ${isTimerRunning ? styles.paused : ''}`}
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                >
                  {isTimerRunning ? <Pause size={24} /> : <Play size={24} />}
                </button>
                <button
                  className={styles.timerControlBtn}
                  onClick={() => {
                    if (timerTask) {
                      handleCompleteTask(timerTask.id)
                    }
                    setShowTimer(false)
                    setIsTimerRunning(false)
                  }}
                >
                  <Check size={20} />
                </button>
              </div>

              <p className={styles.timerTip}>
                {isTimerRunning ? 'Stay focused! You got this!' : 'Press play to start'}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
