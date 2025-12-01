'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { 
  BookOpen, Brain, Target, Clock, Award, Users, 
  ChevronRight, Star, Check, Menu, X, Sparkles,
  GraduationCap, TrendingUp, Shield, Zap, ArrowRight,
  Play, BarChart3, FileText, ChevronDown,
  Calculator, PenTool, Lightbulb, Trophy,
  CheckCircle2, Quote, Lock, Timer, MousePointerClick,
  Rocket, BadgeCheck, BookMarked, Layers, Percent
} from 'lucide-react'
import styles from './page.module.css'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
}

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12
    }
  }
}

const faqs = [
  {
    question: "What is the Digital SAT?",
    answer: "The Digital SAT is the new computerized version of the SAT, consisting of two sections: Reading & Writing and Math. It's adaptive, meaning the difficulty adjusts based on your performance. The test is 2 hours and 14 minutes long."
  },
  {
    question: "How long should I prepare for the SAT?",
    answer: "Most students prepare for 2-4 months. Our AI-powered platform accelerates your prep by identifying your weak areas and creating a personalized study path, helping you improve faster than traditional methods."
  },
  {
    question: "What score do I need for top colleges?",
    answer: "Top 20 universities typically look for scores of 1500+. However, many excellent schools accept scores in the 1200-1400 range. Our platform helps you set and achieve realistic score goals based on your target schools."
  },
  {
    question: "How accurate are your practice tests?",
    answer: "Our practice tests are designed to mirror the actual Digital SAT experience with 98% accuracy. Students report that our questions match the difficulty, format, and timing of the real exam."
  },
  {
    question: "Can I access SAT Prep on mobile?",
    answer: "Yes! Our platform is fully optimized for all devices. Study on your phone during commutes, on your tablet at home, or on your computer at school. Progress syncs across all devices instantly."
  },
  {
    question: "Do you offer a score improvement guarantee?",
    answer: "Absolutely. We guarantee a 200+ point improvement or your money back. Complete our recommended study plan, and if you don't see results, we'll refund your subscription in full."
  }
]

const stats = [
  { value: "200+", label: "Avg Score Boost", icon: <TrendingUp size={24} /> },
  { value: "50K+", label: "Students", icon: <Users size={24} /> },
  { value: "98%", label: "Accuracy", icon: <Target size={24} /> },
  { value: "4.9★", label: "App Rating", icon: <Star size={24} /> }
]

const subjects = [
  {
    title: 'Reading & Writing',
    subtitle: 'Evidence-Based',
    icon: <BookOpen size={32} />,
    questions: '1,200+',
    topics: ['Reading Comprehension', 'Craft & Structure', 'Standard English', 'Expression of Ideas'],
    color: 'coral',
    time: '64 min'
  },
  {
    title: 'Mathematics',
    subtitle: 'With Calculator',
    icon: <Calculator size={32} />,
    questions: '1,000+',
    topics: ['Algebra', 'Problem Solving', 'Advanced Math', 'Geometry & Trig'],
    color: 'teal',
    time: '70 min'
  }
]

const features = [
  {
    icon: <Brain />,
    title: 'Adaptive AI Learning',
    description: 'Our algorithm identifies your weaknesses in real-time and adjusts your study path to maximize score improvement.',
    gradient: 'coral'
  },
  {
    icon: <Target />,
    title: 'Digital SAT Simulation',
    description: '2,200+ questions that match the real Digital SAT format, difficulty, and adaptive structure exactly.',
    gradient: 'teal'
  },
  {
    icon: <BarChart3 />,
    title: 'Score Prediction',
    description: 'Know when you\'re ready. Our AI predicts your actual SAT score with 95% accuracy before test day.',
    gradient: 'coral'
  },
  {
    icon: <Lightbulb />,
    title: 'Video Explanations',
    description: 'Every question includes step-by-step video solutions from expert tutors who scored 1550+.',
    gradient: 'teal'
  },
  {
    icon: <Timer />,
    title: 'Timed Practice',
    description: 'Build speed and confidence with realistic time constraints that prepare you for test day pressure.',
    gradient: 'coral'
  },
  {
    icon: <Layers />,
    title: 'Smart Flashcards',
    description: 'Master vocabulary and key concepts with spaced repetition cards designed for maximum retention.',
    gradient: 'teal'
  }
]

const testimonials = [
  {
    quote: "I went from 1180 to 1520 in just 8 weeks. The adaptive practice tests were incredibly effective — it felt like having a personal tutor available 24/7.",
    name: "Emma Rodriguez",
    role: "Stanford '28",
    score: "1520",
    avatar: "ER"
  },
  {
    quote: "The score prediction feature was spot-on. It told me I was ready for 1450+, and I scored 1480 on the real test. Incredibly accurate platform.",
    name: "David Kim",
    role: "MIT '28",
    score: "1480",
    avatar: "DK"
  },
  {
    quote: "As an international student, I needed flexibility. SAT Prep let me study during bus rides and lunch breaks. Improved 280 points while balancing school!",
    name: "Priya Sharma",
    role: "Columbia '28",
    score: "1510",
    avatar: "PS"
  }
]

const brands = [
  "Harvard", "Stanford", "MIT", "Yale", "Princeton", "Columbia", "Brown", "Penn"
]

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.landing}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={`container ${styles.navContent}`}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoMark}>
              <span>S</span>
            </div>
            <span className={styles.logoText}>SAT Prep</span>
          </Link>

          <div className={styles.navLinks}>
            <a href="#features">Features</a>
            <a href="#subjects">Subjects</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className={styles.navActions}>
            <Link href="/login" className={styles.navLogin}>Log In</Link>
            <Link href="/dashboard" className={styles.navCta}>
              Start Free
              <ArrowRight size={16} />
            </Link>
          </div>

          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

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
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <div className={styles.mobileMenuActions}>
                <Link href="/login">Log In</Link>
                <Link href="/dashboard" className="btn btn-primary">Start Free Trial</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroBg1} />
          <div className={styles.heroBg2} />
          <div className={styles.heroPattern} />
        </div>
        
        <div className={`container ${styles.heroContainer}`}>
          <motion.div 
            className={styles.heroContent}
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div className={styles.heroBadge} variants={fadeInUp}>
              <Sparkles size={14} />
              <span>New: Digital SAT 2024 Updated</span>
            </motion.div>

            <motion.h1 variants={fadeInUp}>
              Score Higher on the
              <span className={styles.heroHighlight}> SAT</span>
              <br />with AI-Powered Prep
            </motion.h1>

            <motion.p variants={fadeInUp}>
              Join 50,000+ students who boosted their scores by 200+ points. 
              Our adaptive learning platform personalizes your study plan 
              for maximum improvement in minimum time.
            </motion.p>

            <motion.div className={styles.heroButtons} variants={fadeInUp}>
              <Link href="/dashboard" className={styles.heroPrimary}>
                <span>Start Free Trial</span>
                <ArrowRight size={18} />
              </Link>
              <a href="#demo" className={styles.heroSecondary}>
                <div className={styles.playIcon}>
                  <Play size={16} fill="currentColor" />
                </div>
                <span>Watch Demo</span>
              </a>
            </motion.div>

            <motion.div className={styles.heroSocial} variants={fadeInUp}>
              <div className={styles.avatarRow}>
                {['ER', 'DK', 'PS', 'JC', 'AM'].map((initials, i) => (
                  <div key={i} className={styles.heroAvatar}>
                    {initials}
                  </div>
                ))}
              </div>
              <div className={styles.heroRating}>
                <div className={styles.heroStars}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span>4.9/5 from 12,000+ reviews</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className={styles.heroVisual}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.heroCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardDots}>
                  <span /><span /><span />
                </div>
                <span className={styles.cardTitle}>SAT Practice — Math Section</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.questionMeta}>
                  <span className={styles.questionNum}>Question 15 of 22</span>
                  <div className={styles.questionTimer}>
                    <Timer size={14} />
                    <span>18:32</span>
                  </div>
                </div>
                <p className={styles.questionText}>
                  If f(x) = 3x² - 2x + 5, what is the value of f(3) - f(1)?
                </p>
                <div className={styles.optionsList}>
                  {[
                    { letter: 'A', text: '18' },
                    { letter: 'B', text: '20', correct: true },
                    { letter: 'C', text: '22' },
                    { letter: 'D', text: '24' }
                  ].map((opt, i) => (
                    <div 
                      key={i} 
                      className={`${styles.option} ${opt.correct ? styles.optionCorrect : ''}`}
                    >
                      <span className={styles.optionLetter}>{opt.letter}</span>
                      <span>{opt.text}</span>
                      {opt.correct && <CheckCircle2 size={18} />}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.floatCard1}>
              <div className={styles.floatIcon}>
                <TrendingUp size={18} />
              </div>
              <div>
                <strong>Score Prediction</strong>
                <span>1,480 / 1,600</span>
              </div>
            </div>

            <div className={styles.floatCard2}>
              <div className={styles.floatIconAlt}>
                <Zap size={16} />
              </div>
              <span>Ready for 1500+!</span>
            </div>

            <div className={styles.floatCard3}>
              <BadgeCheck size={18} />
              <span>847 questions mastered</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Bar */}
      <section className={styles.brandBar}>
        <div className={styles.brandBarContent}>
          <span className={styles.brandLabel}>Students accepted to</span>
          <div className={styles.brandList}>
            {brands.map((brand, idx) => (
              <span key={idx} className={styles.brand}>{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                className={styles.statCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className={styles.statIcon}>{stat.icon}</div>
                <div className={styles.statContent}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.sectionTag}>Why SAT Prep</span>
            <h2>Everything you need to ace the SAT</h2>
            <p>Our comprehensive platform combines proven strategies with cutting-edge AI technology</p>
          </motion.div>

          <div className={styles.featuresGrid}>
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                className={`${styles.featureCard} ${styles[feature.gradient]}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <div className={styles.featureIcon}>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.sectionTag}>Complete Coverage</span>
            <h2>Master both Digital SAT sections</h2>
            <p>Comprehensive preparation aligned with the 2024 Digital SAT format</p>
          </motion.div>

          <div className={styles.subjectsGrid}>
            {subjects.map((subject, idx) => (
              <motion.div 
                key={idx}
                className={`${styles.subjectCard} ${styles[subject.color]}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <div className={styles.subjectTop}>
                  <div className={styles.subjectIcon}>
                    {subject.icon}
                  </div>
                  <div className={styles.subjectMeta}>
                    <span>{subject.questions} questions</span>
                    <span>{subject.time}</span>
                  </div>
                </div>
                
                <div className={styles.subjectInfo}>
                  <h3>{subject.title}</h3>
                  <span className={styles.subjectSub}>{subject.subtitle}</span>
                </div>

                <ul className={styles.subjectTopics}>
                  {subject.topics.map((topic, i) => (
                    <li key={i}>
                      <Check size={14} />
                      {topic}
                    </li>
                  ))}
                </ul>

                <Link 
                  href={`/dashboard/study/${subject.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} 
                  className={styles.subjectLink}
                >
                  Start Learning
                  <ChevronRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.howItWorks}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.sectionTag}>How It Works</span>
            <h2>Three steps to your dream score</h2>
          </motion.div>

          <div className={styles.stepsRow}>
            {[
              {
                num: '01',
                icon: <MousePointerClick size={28} />,
                title: 'Take the Diagnostic',
                description: 'Our AI-powered diagnostic identifies your exact strengths and weaknesses in just 20 minutes.'
              },
              {
                num: '02',
                icon: <Rocket size={28} />,
                title: 'Follow Your Plan',
                description: 'Get a personalized study plan with daily targets, adaptive practice, and progress tracking.'
              },
              {
                num: '03',
                icon: <Trophy size={28} />,
                title: 'Ace the SAT',
                description: 'When our score predictor shows you\'re ready, take the test with confidence and achieve your goal.'
              }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                className={styles.stepCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <div className={styles.stepNum}>{step.num}</div>
                <div className={styles.stepIcon}>{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.sectionTag}>Success Stories</span>
            <h2>Real students, real results</h2>
          </motion.div>

          <div className={styles.testimonialSlider}>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTestimonial}
                className={styles.testimonialCard}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <Quote size={40} className={styles.quoteIcon} />
                <p className={styles.testimonialQuote}>
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <div className={styles.authorInfo}>
                    <strong>{testimonials[activeTestimonial].name}</strong>
                    <span>{testimonials[activeTestimonial].role}</span>
                  </div>
                  <div className={styles.authorScore}>
                    <span>SAT Score</span>
                    <strong>{testimonials[activeTestimonial].score}</strong>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className={styles.testimonialDots}>
              {testimonials.map((_, idx) => (
                <button 
                  key={idx}
                  className={`${styles.dot} ${idx === activeTestimonial ? styles.dotActive : ''}`}
                  onClick={() => setActiveTestimonial(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className={styles.pricing}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.sectionTag}>Simple Pricing</span>
            <h2>Invest in your future</h2>
            <p>All plans include full access to 2,200+ practice questions</p>
          </motion.div>

          <div className={styles.pricingGrid}>
            {[
              {
                name: 'Monthly',
                price: 39,
                period: 'month',
                description: 'Perfect for focused prep',
                features: [
                  'Full question bank access',
                  '3 full practice exams',
                  'Basic analytics',
                  'Mobile app access'
                ],
                popular: false
              },
              {
                name: 'Complete',
                price: 79,
                period: '3 months',
                description: 'Most popular choice',
                features: [
                  'Everything in Monthly',
                  '10 full practice exams',
                  'AI-powered study plan',
                  'Score prediction',
                  'Video explanations',
                  'Priority support',
                  '200+ point guarantee'
                ],
                popular: true
              },
              {
                name: 'Premium',
                price: 129,
                period: '6 months',
                description: 'For serious students',
                features: [
                  'Everything in Complete',
                  '1-on-1 tutor session',
                  'Essay review & feedback',
                  'College application tips',
                  'Lifetime access'
                ],
                popular: false
              }
            ].map((plan, idx) => (
              <motion.div 
                key={idx}
                className={`${styles.pricingCard} ${plan.popular ? styles.pricingPopular : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {plan.popular && <div className={styles.popularTag}>Most Popular</div>}
                <div className={styles.pricingHeader}>
                  <h3>{plan.name}</h3>
                  <div className={styles.pricingAmount}>
                    <span className={styles.currency}>$</span>
                    <span className={styles.priceValue}>{plan.price}</span>
                    <span className={styles.pricePeriod}>/{plan.period}</span>
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
                  className={`${styles.pricingBtn} ${plan.popular ? styles.pricingBtnPrimary : ''}`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>

          <div className={styles.guarantees}>
            <div className={styles.guaranteeItem}>
              <Shield size={18} />
              <span>30-day money-back guarantee</span>
            </div>
            <div className={styles.guaranteeItem}>
              <Lock size={18} />
              <span>Secure payment</span>
            </div>
            <div className={styles.guaranteeItem}>
              <Trophy size={18} />
              <span>200+ point guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={styles.faq}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.sectionTag}>FAQ</span>
            <h2>Common questions</h2>
          </motion.div>

          <div className={styles.faqList}>
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                className={`${styles.faqItem} ${openFaq === idx ? styles.faqOpen : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
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

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <motion.div 
            className={styles.ctaCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.ctaContent}>
              <h2>Ready to boost your SAT score?</h2>
              <p>Join 50,000+ students who transformed their college prospects with SAT Prep.</p>
              <div className={styles.ctaButtons}>
                <Link href="/dashboard" className={styles.ctaPrimary}>
                  Start Free Trial
                  <ArrowRight size={18} />
                </Link>
                <span className={styles.ctaNote}>No credit card required • 7-day free trial</span>
              </div>
            </div>
            <div className={styles.ctaVisual}>
              <div className={styles.scoreCircle}>
                <span className={styles.scoreLabel}>Target</span>
                <span className={styles.scoreValue}>1500+</span>
              </div>
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
                  <span>S</span>
                </div>
                <span className={styles.logoText}>SAT Prep</span>
              </Link>
              <p>Empowering students to achieve their dream scores and unlock opportunities at top universities since 2020.</p>
            </div>
            <div className={styles.footerLinks}>
              <div>
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a href="#subjects">Subjects</a>
                <a href="#pricing">Pricing</a>
                <Link href="/dashboard">Dashboard</Link>
              </div>
              <div>
                <h4>Resources</h4>
                <a href="#">Study Tips</a>
                <a href="#">SAT Guide</a>
                <a href="#">Blog</a>
                <a href="#">Help Center</a>
              </div>
              <div>
                <h4>Company</h4>
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Contact</a>
                <a href="#">Press</a>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; {new Date().getFullYear()} SAT Prep. All rights reserved.</p>
            <div className={styles.footerLegal}>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
