'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Mail, Lock, Eye, EyeOff, ArrowRight, Check, 
  User, Sparkles, Shield, Zap, Award, TrendingUp
} from 'lucide-react'
import styles from './login.module.css'

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      window.location.href = '/dashboard'
    }, 1000)
  }

  const passwordStrength = () => {
    if (password.length === 0) return 0
    if (password.length < 6) return 1
    if (password.length < 10) return 2
    return 3
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Left Side - Form */}
        <motion.div 
          className={styles.formSection}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className={styles.logo}>
            <div className={styles.logoMark}>
              <span>S</span>
            </div>
            <span className={styles.logoText}>SAT Prep</span>
          </Link>

          <div className={styles.formContent}>
            <div className={styles.formHeader}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={isLogin ? 'login' : 'signup'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <h1>{isLogin ? 'Welcome back' : 'Create account'}</h1>
                  <p>
                    {isLogin 
                      ? 'Continue your SAT prep journey' 
                      : 'Start your path to 1500+'
                    }
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className={styles.tabs}>
              <button 
                className={`${styles.tab} ${isLogin ? styles.active : ''}`}
                onClick={() => setIsLogin(true)}
              >
                Sign In
              </button>
              <button 
                className={`${styles.tab} ${!isLogin ? styles.active : ''}`}
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <AnimatePresence>
                {!isLogin && (
                  <motion.div 
                    className={styles.inputGroup}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <label>Full Name</label>
                    <div className={styles.inputWrapper}>
                      <User size={16} />
                      <input 
                        type="text" 
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div className={styles.inputGroup}>
                <label>Email</label>
                <div className={styles.inputWrapper}>
                  <Mail size={16} />
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Password</label>
                <div className={styles.inputWrapper}>
                  <Lock size={16} />
                  <input 
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button 
                    type="button"
                    className={styles.eyeBtn}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {!isLogin && password.length > 0 && (
                  <div className={styles.passwordStrength}>
                    <div className={styles.strengthBars}>
                      {[1, 2, 3].map((level) => (
                        <div 
                          key={level}
                          className={`${styles.strengthBar} ${passwordStrength() >= level ? styles.active : ''}`}
                          data-level={passwordStrength()}
                        />
                      ))}
                    </div>
                    <span>
                      {passwordStrength() === 1 && 'Weak'}
                      {passwordStrength() === 2 && 'Good'}
                      {passwordStrength() === 3 && 'Strong'}
                    </span>
                  </div>
                )}
              </div>

              {isLogin && (
                <div className={styles.formOptions}>
                  <label className={styles.checkbox}>
                    <input type="checkbox" />
                    <span className={styles.checkmark}><Check size={10} /></span>
                    Remember me
                  </label>
                  <a href="#" className={styles.forgotLink}>Forgot password?</a>
                </div>
              )}

              <AnimatePresence>
                {!isLogin && (
                  <motion.div 
                    className={styles.inputGroup}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <label>Confirm Password</label>
                    <div className={styles.inputWrapper}>
                      <Lock size={16} />
                      <input 
                        type="password"
                        placeholder="Confirm your password"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button 
                type="submit" 
                className={`${styles.submitBtn} ${isLoading ? styles.loading : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className={styles.spinner} />
                ) : (
                  <>
                    {isLogin ? 'Sign In' : 'Create Account'}
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>

            <div className={styles.divider}>
              <span>or continue with</span>
            </div>

            <div className={styles.socialBtns}>
              <button className={styles.socialBtn}>
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
              <button className={styles.socialBtn}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.218.682-.486 0-.24-.009-.875-.013-1.713-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.532 1.03 1.532 1.03.891 1.529 2.341 1.088 2.91.833.091-.646.349-1.086.635-1.337-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.254-.447-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.547 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.335-.012 2.415-.012 2.741 0 .269.18.579.688.481A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                GitHub
              </button>
            </div>

            <p className={styles.terms}>
              By continuing, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
            </p>
          </div>
        </motion.div>

        {/* Right Side - Visual */}
        <motion.div 
          className={styles.visualSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.visualContent}>
            <div className={styles.features}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <Zap size={18} />
                </div>
                <div>
                  <strong>AI-Powered Learning</strong>
                  <span>Personalized to your level</span>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <Shield size={18} />
                </div>
                <div>
                  <strong>Real SAT Experience</strong>
                  <span>Exam-identical practice</span>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <TrendingUp size={18} />
                </div>
                <div>
                  <strong>200+ Point Boost</strong>
                  <span>Guaranteed improvement</span>
                </div>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <Sparkles className={styles.quoteIcon} size={20} />
              <p>"SAT Prep helped me improve from 1180 to 1520. The adaptive practice tests were spot-on for the real exam!"</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.avatar}>ER</div>
                <div>
                  <strong>Emma Rodriguez</strong>
                  <span>Stanford '28</span>
                </div>
              </div>
            </div>

            <div className={styles.statsCard}>
              <div className={styles.statItem}>
                <strong>50K+</strong>
                <span>Students</span>
              </div>
              <div className={styles.statItem}>
                <strong>4.9★</strong>
                <span>Rating</span>
              </div>
              <div className={styles.statItem}>
                <strong>200+</strong>
                <span>Avg Gain</span>
              </div>
            </div>
          </div>

          <div className={styles.visualBackground}>
            <div className={styles.visualShape1} />
            <div className={styles.visualShape2} />
            <div className={styles.visualPattern} />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
