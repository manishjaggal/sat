'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { 
  BookOpen, Brain, Target, Clock, Award, Users, 
  ChevronRight, Star, Check, Menu, X, Sparkles,
  GraduationCap, TrendingUp, Shield, Zap, ArrowRight,
  Play, BarChart3, FileText, MessageCircle, ChevronDown,
  Laptop, Smartphone, Calendar, HeartPulse, Beaker,
  Calculator, BookMarked, PenTool, Lightbulb, Trophy,
  CheckCircle2, ArrowUpRight, Quote, Globe, Lock
} from 'lucide-react'
import styles from './page.module.css'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const faqs = [
  {
    question: "What is the ATI TEAS exam?",
    answer: "The ATI TEAS (Test of Essential Academic Skills) is a standardized test used by nursing schools to assess applicants' readiness for nursing programs. It covers four subjects: Reading, Mathematics, Science, and English & Language Usage."
  },
  {
    question: "How many questions are on the TEAS exam?",
    answer: "The TEAS 7 exam contains 170 questions total: 45 Reading, 38 Math, 50 Science, and 37 English questions. You'll have 209 minutes to complete all sections."
  },
  {
    question: "What score do I need to pass the TEAS?",
    answer: "Passing scores vary by school, but most competitive nursing programs look for scores of 70% or higher. Top programs often require 80%+. Our platform helps you target the score you need."
  },
  {
    question: "How is TEAS Prep different from other study tools?",
    answer: "We offer adaptive learning that identifies your weak areas, exam-identical question formats, detailed explanations for every answer, and a predicted score feature so you know when you're ready."
  },
  {
    question: "Can I access TEAS Prep on my phone?",
    answer: "Yes! Our platform is fully mobile-optimized. Study anywhere with our responsive web app that works perfectly on phones, tablets, and computers."
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer: "Absolutely. We offer a 30-day money-back guarantee and a score improvement guarantee. If you don't improve your score, we'll refund your subscription."
  }
]

const comparisons = [
  { feature: "Practice Questions", us: "2,500+", others: "500-1,000" },
  { feature: "Full Practice Exams", us: "8", others: "2-3" },
  { feature: "Adaptive Learning", us: true, others: false },
  { feature: "Predicted Score", us: true, others: false },
  { feature: "Detailed Explanations", us: true, others: "Partial" },
  { feature: "Mobile Optimized", us: true, others: "Limited" },
  { feature: "Score Guarantee", us: true, others: false },
  { feature: "Price", us: "$49", others: "$79-149" }
]

const stats = [
  { value: "94%", label: "Pass Rate", description: "of students pass on first try" },
  { value: "50K+", label: "Students", description: "have used our platform" },
  { value: "+12", label: "Avg Score Boost", description: "point improvement" },
  { value: "4.9/5", label: "Rating", description: "from 10,000+ reviews" }
]

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className={styles.landing}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={`container ${styles.navContent}`}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoMark}>
              <GraduationCap size={24} />
            </div>
            <span className={styles.logoText}>TEAS<span>Prep</span></span>
          </Link>

          <div className={styles.navLinks}>
            <a href="#features">Features</a>
            <a href="#subjects">Subjects</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className={styles.navActions}>
            <Link href="/login" className={styles.navLogin}>Sign In</Link>
            <Link href="/dashboard" className="btn btn-primary">
              Start Free Trial
            </Link>
          </div>

          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className={styles.mobileMenu}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#subjects" onClick={() => setMobileMenuOpen(false)}>Subjects</a>
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <hr />
              <Link href="/login">Sign In</Link>
              <Link href="/dashboard" className="btn btn-primary">Start Free Trial</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroShape1} />
          <div className={styles.heroShape2} />
          <div className={styles.heroShape3} />
          <div className={styles.heroGrid} />
        </div>
        
        <div className={`container ${styles.heroContent}`}>
          <motion.div 
            className={styles.heroText}
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div className={styles.heroBadge} variants={fadeInUp}>
              <Sparkles size={14} />
              <span>Trusted by 50,000+ nursing students</span>
            </motion.div>

            <motion.h1 variants={fadeInUp}>
              Ace Your <span className={styles.highlight}>TEAS Exam</span> on the First Try
            </motion.h1>

            <motion.p variants={fadeInUp}>
              Master every section with adaptive practice tests, detailed explanations, 
              and proven study strategies. Built by nursing educators, designed for your success.
            </motion.p>

            <motion.div className={styles.heroActions} variants={fadeInUp}>
              <Link href="/dashboard" className="btn btn-primary">
                Start Free Trial
                <ArrowRight size={18} />
              </Link>
              <Link href="#demo" className={`btn btn-secondary ${styles.heroVideo}`}>
                <Play size={18} />
                See Demo
              </Link>
            </motion.div>

            <motion.div className={styles.heroTrust} variants={fadeInUp}>
              <div className={styles.heroAvatars}>
                <div className={styles.avatarStack}>
                  <span>JM</span>
                  <span>SK</span>
                  <span>AR</span>
                  <span>TC</span>
                  <span>+50K</span>
                </div>
              </div>
              <div className={styles.heroRating}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span>4.9/5 from 10,000+ reviews</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.mockupCard}>
              <div className={styles.mockupHeader}>
                <div className={styles.mockupDots}>
                  <span /><span /><span />
                </div>
                <span>Practice Test — Reading</span>
              </div>
              <div className={styles.mockupContent}>
                <div className={styles.mockupQuestion}>
                  <div className={styles.questionProgress}>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{ width: '27%' }} />
                    </div>
                    <span>12 of 45</span>
                  </div>
                  <p>Based on the passage, which inference can be made about the author's perspective on preventive healthcare?</p>
                </div>
                <div className={styles.mockupOptions}>
                  <div className={styles.option}>
                    <span className={styles.optionLetter}>A</span>
                    <span>It reduces long-term healthcare costs</span>
                  </div>
                  <div className={`${styles.option} ${styles.optionSelected}`}>
                    <span className={styles.optionLetter}>B</span>
                    <span>It should be prioritized over treatment</span>
                    <Check size={16} />
                  </div>
                  <div className={styles.option}>
                    <span className={styles.optionLetter}>C</span>
                    <span>It is undervalued by medical professionals</span>
                  </div>
                  <div className={styles.option}>
                    <span className={styles.optionLetter}>D</span>
                    <span>It applies mainly to chronic conditions</span>
                  </div>
                </div>
                <div className={styles.mockupActions}>
                  <button className={styles.prevBtn}>Previous</button>
                  <button className={styles.nextBtn}>Next Question</button>
                </div>
              </div>
            </div>
            <div className={styles.floatingCard1}>
              <TrendingUp size={20} />
              <div>
                <strong>+23%</strong>
                <span>Score Improvement</span>
              </div>
            </div>
            <div className={styles.floatingCard2}>
              <Award size={20} />
              <span>Ready for exam!</span>
            </div>
            <div className={styles.floatingCard3}>
              <CheckCircle2 size={18} />
              <span>847 questions completed</span>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <div className={styles.statsBar}>
          <div className="container">
            <div className={styles.statsGrid}>
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  className={styles.statItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                  <p>{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className={styles.trustBar}>
        <div className="container">
          <p>Students from top nursing programs trust us</p>
          <div className={styles.trustLogos}>
            <span>Johns Hopkins</span>
            <span>Duke University</span>
            <span>UCLA Nursing</span>
            <span>NYU Rory Meyers</span>
            <span>Penn Nursing</span>
            <span>Columbia</span>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className={styles.demo}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionLabel}>See It In Action</span>
            <h2>Experience the TEAS Prep difference</h2>
            <p>Watch how our adaptive learning platform helps you master every concept</p>
          </motion.div>

          <motion.div 
            className={styles.demoContainer}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.demoVideo}>
              <div className={styles.demoPlaceholder}>
                <div className={styles.playButton}>
                  <Play size={32} />
                </div>
                <span>Watch 2-minute demo</span>
              </div>
            </div>
            <div className={styles.demoFeatures}>
              <div className={styles.demoFeature}>
                <div className={styles.demoIcon}>
                  <Brain size={20} />
                </div>
                <div>
                  <strong>Adaptive Learning Engine</strong>
                  <p>Questions adjust to your skill level in real-time</p>
                </div>
              </div>
              <div className={styles.demoFeature}>
                <div className={styles.demoIcon}>
                  <BarChart3 size={20} />
                </div>
                <div>
                  <strong>Predicted Score</strong>
                  <p>Know exactly when you're ready for the real exam</p>
                </div>
              </div>
              <div className={styles.demoFeature}>
                <div className={styles.demoIcon}>
                  <Lightbulb size={20} />
                </div>
                <div>
                  <strong>Detailed Explanations</strong>
                  <p>Understand the "why" behind every answer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionLabel}>Why TEAS Prep</span>
            <h2>Everything you need to succeed</h2>
            <p>Our comprehensive platform combines proven study methods with modern technology</p>
          </motion.div>

          <div className={styles.featureGrid}>
            {[
              {
                icon: <Brain />,
                title: 'Adaptive Learning',
                description: 'Our AI identifies your weak areas and creates personalized study plans that evolve with your progress.',
                color: 'teal'
              },
              {
                icon: <Target />,
                title: 'Exam-Identical Questions',
                description: 'Practice with 2,500+ questions that mirror the actual TEAS format, difficulty, and timing.',
                color: 'amber'
              },
              {
                icon: <FileText />,
                title: 'Detailed Explanations',
                description: 'Understand not just the right answer, but why—with step-by-step breakdowns for every question.',
                color: 'coral'
              },
              {
                icon: <BarChart3 />,
                title: 'Predicted Score',
                description: 'Our algorithm predicts your actual TEAS score so you know exactly when you\'re ready.',
                color: 'navy'
              },
              {
                icon: <Clock />,
                title: 'Timed Practice',
                description: 'Build speed and stamina with realistic time constraints that prepare you for test day pressure.',
                color: 'teal'
              },
              {
                icon: <BookMarked />,
                title: 'Flashcards',
                description: 'Master key concepts with our spaced repetition flashcard system for maximum retention.',
                color: 'amber'
              },
              {
                icon: <Calendar />,
                title: 'Study Planner',
                description: 'Get a personalized study schedule based on your exam date and current skill level.',
                color: 'coral'
              },
              {
                icon: <MessageCircle />,
                title: 'Expert Support',
                description: 'Get help from nursing educators who understand the TEAS inside and out.',
                color: 'navy'
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                className={styles.featureCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <div className={`${styles.featureIcon} ${styles[feature.color]}`}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section id="subjects" className={styles.subjects}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionLabel}>Complete Coverage</span>
            <h2>Master all four TEAS sections</h2>
            <p>Comprehensive preparation for every subject area on the exam</p>
          </motion.div>

          <div className={styles.subjectGrid}>
            {[
              {
                title: 'Reading',
                icon: <BookOpen size={28} />,
                questions: '650+',
                topics: ['Key Ideas & Details', 'Craft & Structure', 'Integration of Knowledge', 'Paragraph Comprehension'],
                color: 'teal',
                percentage: 39,
                description: 'Master reading comprehension, analysis, and interpretation skills'
              },
              {
                title: 'Mathematics',
                icon: <Calculator size={28} />,
                questions: '580+',
                topics: ['Numbers & Algebra', 'Measurement & Data', 'Ratios & Proportions', 'Word Problems'],
                color: 'amber',
                percentage: 25,
                description: 'Build confidence in arithmetic, algebra, and data analysis'
              },
              {
                title: 'Science',
                icon: <Beaker size={28} />,
                questions: '720+',
                topics: ['Human Anatomy', 'Life Science', 'Earth & Physical Science', 'Scientific Reasoning'],
                color: 'coral',
                percentage: 31,
                description: 'Understand body systems, biology, and scientific concepts'
              },
              {
                title: 'English & Language',
                icon: <PenTool size={28} />,
                questions: '450+',
                topics: ['Grammar & Vocabulary', 'Sentence Structure', 'Spelling & Punctuation', 'Contextual Words'],
                color: 'navy',
                percentage: 22,
                description: 'Perfect your grammar, vocabulary, and language mechanics'
              }
            ].map((subject, idx) => (
              <motion.div 
                key={idx}
                className={`${styles.subjectCard} ${styles[subject.color]}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className={styles.subjectIcon}>
                  {subject.icon}
                </div>
                <div className={styles.subjectHeader}>
                  <h3>{subject.title}</h3>
                  <span className={styles.subjectQuestions}>{subject.questions} questions</span>
                </div>
                <p className={styles.subjectDescription}>{subject.description}</p>
                <ul className={styles.subjectTopics}>
                  {subject.topics.map((topic, i) => (
                    <li key={i}>
                      <Check size={14} />
                      {topic}
                    </li>
                  ))}
                </ul>
                <div className={styles.subjectFooter}>
                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progressFill}
                      style={{ width: `${subject.percentage}%` }}
                    />
                  </div>
                  <span>{subject.percentage}% of exam</span>
                </div>
                <Link href={`/dashboard/study/${subject.title.toLowerCase()}`} className={styles.subjectLink}>
                  Start Studying <ChevronRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className={styles.howItWorks}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionLabel}>Your Path to Success</span>
            <h2>Three steps to TEAS mastery</h2>
          </motion.div>

          <div className={styles.stepsGrid}>
            {[
              {
                step: '01',
                title: 'Take the Diagnostic',
                description: 'Start with our diagnostic test to identify your baseline and create your personalized study plan.',
                icon: <Target size={24} />
              },
              {
                step: '02',
                title: 'Study & Practice',
                description: 'Work through targeted lessons and practice questions, focusing on your weak areas first.',
                icon: <BookOpen size={24} />
              },
              {
                step: '03',
                title: 'Track & Improve',
                description: 'Monitor your progress with detailed analytics and take full practice exams until you\'re ready.',
                icon: <TrendingUp size={24} />
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className={styles.stepCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <div className={styles.stepIcon}>{item.icon}</div>
                <span className={styles.stepNumber}>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {idx < 2 && <div className={styles.stepConnector} />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className={styles.comparison}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionLabel}>Compare</span>
            <h2>Why students choose us</h2>
            <p>See how TEAS Prep stacks up against other study options</p>
          </motion.div>

          <motion.div 
            className={styles.comparisonTable}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.tableHeader}>
              <div></div>
              <div className={styles.usColumn}>TEAS Prep</div>
              <div>Other Options</div>
            </div>
            {comparisons.map((row, idx) => (
              <div key={idx} className={styles.tableRow}>
                <div className={styles.featureName}>{row.feature}</div>
                <div className={styles.usValue}>
                  {typeof row.us === 'boolean' ? (
                    row.us ? <CheckCircle2 size={20} /> : <X size={20} />
                  ) : (
                    row.us
                  )}
                </div>
                <div className={styles.othersValue}>
                  {typeof row.others === 'boolean' ? (
                    row.others ? <CheckCircle2 size={20} /> : <X size={20} />
                  ) : (
                    row.others
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className={styles.testimonials}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionLabel}>Success Stories</span>
            <h2>What our students say</h2>
          </motion.div>

          <div className={styles.testimonialGrid}>
            {[
              {
                quote: "I was scoring in the 60s on practice tests elsewhere. After 3 weeks with TEAS Prep, I scored an 84 on my actual exam. The detailed explanations made all the difference.",
                name: "Maria Santos",
                school: "UCLA School of Nursing",
                score: "84.0",
                image: "MS"
              },
              {
                quote: "The adaptive learning feature is incredible. It knew exactly what I needed to work on and helped me focus my limited study time. I couldn't have done it without this platform.",
                name: "James Chen",
                school: "Johns Hopkins SON",
                score: "91.3",
                image: "JC"
              },
              {
                quote: "As a working mom, I needed flexible study options. The mobile app let me practice during lunch breaks and commutes. I passed on my first try with flying colors!",
                name: "Ashley Thompson",
                school: "Duke University SON",
                score: "87.7",
                image: "AT"
              },
              {
                quote: "The predicted score feature was spot on. It said I was ready at 82%, and I got an 83% on the actual exam. No more guessing if you're prepared!",
                name: "Marcus Williams",
                school: "NYU Rory Meyers",
                score: "83.0",
                image: "MW"
              },
              {
                quote: "I struggled with math my whole life, but the step-by-step explanations finally made it click. Went from failing math sections to scoring 78%!",
                name: "Emily Rodriguez",
                school: "Penn Nursing",
                score: "85.2",
                image: "ER"
              },
              {
                quote: "Best investment I made for my nursing career. The science section prep was incredibly thorough. Got into my dream program at Columbia!",
                name: "David Kim",
                school: "Columbia Nursing",
                score: "89.4",
                image: "DK"
              }
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx}
                className={styles.testimonialCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className={styles.testimonialTop}>
                  <Quote size={24} className={styles.quoteIcon} />
                  <div className={styles.testimonialStars}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className={styles.testimonialQuote}>"{testimonial.quote}"</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>{testimonial.image}</div>
                  <div className={styles.authorInfo}>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.school}</span>
                  </div>
                  <div className={styles.testimonialScore}>
                    <span>Score</span>
                    <strong>{testimonial.score}</strong>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className={styles.platform}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionLabel}>Study Anywhere</span>
            <h2>Works on all your devices</h2>
            <p>Seamlessly switch between desktop, tablet, and mobile</p>
          </motion.div>

          <div className={styles.platformGrid}>
            <motion.div 
              className={styles.platformCard}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Laptop size={32} />
              <h3>Desktop</h3>
              <p>Full dashboard experience with comprehensive analytics</p>
            </motion.div>
            <motion.div 
              className={styles.platformCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Smartphone size={32} />
              <h3>Mobile</h3>
              <p>Practice on-the-go with our optimized mobile experience</p>
            </motion.div>
            <motion.div 
              className={styles.platformCard}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Globe size={32} />
              <h3>Anywhere</h3>
              <p>Access your account from any browser, anytime</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className={styles.pricing}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionLabel}>Simple Pricing</span>
            <h2>Choose your prep plan</h2>
            <p>All plans include full access to our question bank and study materials</p>
          </motion.div>

          <div className={styles.pricingGrid}>
            {[
              {
                name: 'Starter',
                price: 29,
                period: '1 month',
                description: 'Perfect for quick reviews before your exam',
                features: [
                  'Full question bank (2,500+ questions)',
                  '2 full practice exams',
                  'Basic analytics dashboard',
                  'Email support',
                  'Mobile access'
                ],
                popular: false
              },
              {
                name: 'Complete',
                price: 49,
                period: '3 months',
                description: 'Most popular choice for thorough preparation',
                features: [
                  'Everything in Starter',
                  '8 full practice exams',
                  'Adaptive learning engine',
                  'Predicted score feature',
                  'Advanced analytics & insights',
                  'Personalized study plan',
                  'Priority support',
                  'Flashcards access',
                  'Score improvement guarantee'
                ],
                popular: true
              },
              {
                name: 'Premium',
                price: 79,
                period: '6 months',
                description: 'Extended access for comprehensive mastery',
                features: [
                  'Everything in Complete',
                  '1-on-1 tutor session (30 min)',
                  'Custom study schedule',
                  'Weakness deep dives',
                  'Extended guarantee',
                  'Lifetime access to updates'
                ],
                popular: false
              }
            ].map((plan, idx) => (
              <motion.div 
                key={idx}
                className={`${styles.pricingCard} ${plan.popular ? styles.pricingPopular : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {plan.popular && <span className={styles.popularBadge}>Most Popular</span>}
                <div className={styles.pricingHeader}>
                  <h3>{plan.name}</h3>
                  <div className={styles.pricingAmount}>
                    <span className={styles.currency}>$</span>
                    <span className={styles.price}>{plan.price}</span>
                    <span className={styles.period}>/{plan.period}</span>
                  </div>
                  <p>{plan.description}</p>
                </div>
                <ul className={styles.pricingFeatures}>
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <Check size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/dashboard" 
                  className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>

          <div className={styles.guarantees}>
            <div className={styles.guaranteeItem}>
              <Shield size={20} />
              <span>30-day money-back guarantee</span>
            </div>
            <div className={styles.guaranteeItem}>
              <Lock size={20} />
              <span>Secure payment</span>
            </div>
            <div className={styles.guaranteeItem}>
              <Trophy size={20} />
              <span>Score improvement guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className={styles.faq}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionLabel}>FAQ</span>
            <h2>Frequently asked questions</h2>
            <p>Everything you need to know about TEAS Prep</p>
          </motion.div>

          <div className={styles.faqList}>
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                className={`${styles.faqItem} ${openFaq === idx ? styles.faqOpen : ''}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <button 
                  className={styles.faqQuestion}
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown size={20} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      className={styles.faqAnswer}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <motion.div 
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to start your nursing journey?</h2>
            <p>Join 50,000+ students who trusted TEAS Prep to achieve their dreams.</p>
            <div className={styles.ctaActions}>
              <Link href="/dashboard" className="btn btn-accent">
                Start Your Free Trial
                <ArrowRight size={18} />
              </Link>
              <span>No credit card required • 7-day free trial</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <Link href="/" className={styles.logo}>
                <div className={styles.logoMark}>
                  <GraduationCap size={24} />
                </div>
                <span className={styles.logoText}>TEAS<span>Prep</span></span>
              </Link>
              <p>Helping future nurses succeed since 2019. We're committed to making quality test preparation accessible to everyone.</p>
              <div className={styles.footerSocial}>
                <a href="#" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="#" aria-label="YouTube">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className={styles.footerLinks}>
              <div>
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#subjects">Subjects</a>
                <Link href="/dashboard">Dashboard</Link>
                <a href="#">Mobile App</a>
              </div>
              <div>
                <h4>Company</h4>
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Blog</a>
                <a href="#">Press Kit</a>
                <a href="#">Contact</a>
              </div>
              <div>
                <h4>Resources</h4>
                <a href="#">Help Center</a>
                <a href="#">Study Tips</a>
                <a href="#">TEAS Guide</a>
                <a href="#">FAQs</a>
                <a href="#">Community</a>
              </div>
              <div>
                <h4>Legal</h4>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
                <a href="#">Refund Policy</a>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; {new Date().getFullYear()} TEAS Prep. All rights reserved.</p>
            <div className={styles.footerLegal}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
