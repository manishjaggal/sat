'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  GraduationCap, Home, BookOpen, FileText, BarChart3,
  Settings, LogOut, Menu, X, ChevronDown, User, Bell,
  Flame, Zap, Calendar, Trophy, Bookmark, StickyNote,
  Layers, Search
} from 'lucide-react'
import { ToastProvider } from '@/components/ui/Toast'
import { WelcomeModal } from '@/components/WelcomeModal'
import styles from './layout.module.css'

const navItems = [
  { href: '/dashboard', icon: Home, label: 'Dashboard', exact: true },
  { href: '/dashboard/study', icon: BookOpen, label: 'Study' },
  { href: '/dashboard/practice', icon: FileText, label: 'Practice Tests' },
  { href: '/dashboard/flashcards', icon: Layers, label: 'Flashcards' },
  { href: '/dashboard/challenge', icon: Zap, label: 'Daily Challenge' },
  { href: '/dashboard/progress', icon: BarChart3, label: 'Progress' },
  { href: '/dashboard/planner', icon: Calendar, label: 'Study Planner' },
  { href: '/dashboard/bookmarks', icon: Bookmark, label: 'Saved Questions' },
  { href: '/dashboard/notes', icon: StickyNote, label: 'Notes' },
  { href: '/dashboard/achievements', icon: Trophy, label: 'Achievements' },
]

// Bottom nav items for mobile - most used features
const bottomNavItems = [
  { href: '/dashboard', icon: Home, label: 'Home', exact: true },
  { href: '/dashboard/study', icon: BookOpen, label: 'Study' },
  { href: '/dashboard/challenge', icon: Zap, label: 'Challenge' },
  { href: '/dashboard/practice', icon: FileText, label: 'Practice' },
  { href: '/dashboard/progress', icon: BarChart3, label: 'Progress' },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Track scroll for header shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus when route changes
  useEffect(() => {
    setSidebarOpen(false)
    setUserMenuOpen(false)
    setSearchOpen(false)
  }, [pathname])

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [sidebarOpen])

  const isActive = (href: string, exact?: boolean) => {
    if (exact) return pathname === href
    return pathname.startsWith(href)
  }

  return (
    <ToastProvider>
    <div className={styles.layout}>
      {/* Welcome Modal for new users */}
      <WelcomeModal userName="Sarah" />
      
      {/* Mobile Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoMark}>
              <GraduationCap size={20} />
            </div>
            <span className={styles.logoText}>TEAS<span>Prep</span></span>
          </Link>
          <button 
            className={styles.closeSidebar}
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className={styles.nav}>
          <ul>
            {navItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.href, item.exact)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${active ? styles.navLinkActive : ''}`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                    {active && (
                      <motion.div 
                        className={styles.activeIndicator}
                        layoutId="activeNav"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className={styles.sidebarFooter}>
          <div className={styles.streakCard}>
            <div className={styles.streakIcon}>
              <Flame size={18} />
            </div>
            <div className={styles.streakInfo}>
              <strong>7 Day Streak!</strong>
              <span>Keep it going</span>
            </div>
          </div>

          <Link href="/dashboard/settings" className={styles.settingsLink}>
            <Settings size={18} />
            <span>Settings</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className={styles.main}>
        {/* Top Bar */}
        <header className={`${styles.topBar} ${scrolled ? styles.topBarScrolled : ''}`}>
          <button 
            className={styles.menuBtn}
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          <Link href="/dashboard" className={styles.mobileLogo}>
            <div className={styles.logoMark}>
              <GraduationCap size={18} />
            </div>
          </Link>

          <div className={styles.searchWrapper}>
            <Search size={18} className={styles.searchIcon} />
            <input 
              type="text" 
              placeholder="Search questions, topics..." 
              className={styles.searchInput}
            />
          </div>

          <div className={styles.topBarActions}>
            <button 
              className={styles.mobileSearchBtn}
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            <button className={styles.notificationBtn} aria-label="Notifications">
              <Bell size={20} />
              <span className={styles.notificationDot} />
            </button>

            <div className={styles.userMenu}>
              <button 
                className={styles.userBtn}
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                aria-label="User menu"
              >
                <div className={styles.avatar}>
                  <User size={16} />
                </div>
                <span className={styles.userName}>Sarah M.</span>
                <ChevronDown size={14} className={userMenuOpen ? styles.rotated : ''} />
              </button>

              <AnimatePresence>
                {userMenuOpen && (
                  <motion.div
                    className={styles.dropdown}
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div className={styles.dropdownHeader}>
                      <div className={styles.dropdownAvatar}>
                        <User size={20} />
                      </div>
                      <div>
                        <strong>Sarah Mitchell</strong>
                        <span>sarah@example.com</span>
                      </div>
                    </div>
                    <hr />
                    <Link href="/dashboard/settings">
                      <Settings size={16} />
                      Settings
                    </Link>
                    <Link href="/dashboard/achievements">
                      <Trophy size={16} />
                      Achievements
                    </Link>
                    <hr />
                    <Link href="/" className={styles.signOut}>
                      <LogOut size={16} />
                      Sign Out
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        {/* Mobile Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div 
              className={styles.mobileSearch}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              <div className={styles.mobileSearchInner}>
                <Search size={18} />
                <input 
                  type="text" 
                  placeholder="Search questions, topics..." 
                  autoFocus
                />
                <button onClick={() => setSearchOpen(false)}>
                  <X size={18} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Page Content */}
        <main className={styles.content}>
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        </main>

        {/* Mobile Bottom Navigation */}
        <nav className={styles.bottomNav}>
          {bottomNavItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href, item.exact)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.bottomNavItem} ${active ? styles.bottomNavActive : ''}`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
                {active && (
                  <motion.div 
                    className={styles.bottomNavIndicator}
                    layoutId="bottomNav"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
    </ToastProvider>
  )
}
