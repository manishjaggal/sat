'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { 
  BookOpen, Brain, Target, Clock, Award, Users, 
  ChevronRight, Star, Check, Menu, X, Sparkles,
  GraduationCap, TrendingUp, Shield, Zap, ArrowRight,
  Play, BarChart3, FileText, ChevronDown,
  Smartphone, Calculator, BookMarked, PenTool, Lightbulb, Trophy,
  CheckCircle2, Quote, Lock, Atom, Languages, Globe2,
  Rocket, BadgeCheck, Timer, Layers, MousePointerClick
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
    question: "What is the GED test?",
    answer: "The GED (General Educational Development) test is a group of four subject tests which, when passed, certify that the test taker has American or Canadian high school-level academic skills. It covers Reasoning Through Language Arts, Mathematical Reasoning, Science, and Social Studies."
  },
  {
    question: "How long does it take to prepare for the GED?",
    answer: "Preparation time varies based on your current skill level. Most students prepare for 3-6 months. Our adaptive learning system helps you study efficiently by focusing on areas where you need the most improvement."
  },
  {
    question: "What score do I need to pass the GED?",
    answer: "You need a minimum score of 145 on each of the four subjects to pass. A score of 165-174 is considered 'GED College Ready,' and 175+ is 'GED College Ready + Credit.' Our platform helps you achieve your target score."
  },
  {
    question: "Can I take the GED test online?",
    answer: "Yes! The GED can be taken online through OnVUE remote proctoring or at official testing centers. Our practice tests simulate both environments so you're fully prepared."
  },
  {
    question: "Is GED Prep mobile-friendly?",
    answer: "Absolutely! Our platform is fully optimized for mobile devices. Study on your phone, tablet, or computer – your progress syncs seamlessly across all devices."
  },
  {
    question: "What if I don't improve my score?",
    answer: "We offer a 100% money-back guarantee. If you complete our program and don't see improvement, we'll refund your subscription. We're that confident in our method."
  }
]

const stats = [
  { value: "98%", label: "Pass Rate", icon: <Trophy size={24} /> },
  { value: "100K+", label: "Students", icon: <Users size={24} /> },
  { value: "+47", label: "Avg Point Gain", icon: <TrendingUp size={24} /> },
  { value: "4.9★", label: "App Rating", icon: <Star size={24} /> }
]

const subjects = [
  {
    title: 'Language Arts',
    subtitle: 'Reading & Writing',
    icon: <Languages size={32} />,
    questions: '800+',
    topics: ['Reading Comprehension', 'Writing & Grammar', 'Essay Writing', 'Critical Analysis'],
    color: 'blue',
    time: '150 min'
  },
  {
    title: 'Mathematics',
    subtitle: 'Reasoning',
    icon: <Calculator size={32} />,
    questions: '650+',
    topics: ['Algebra', 'Geometry', 'Data Analysis', 'Quantitative Reasoning'],
    color: 'orange',
    time: '115 min'
  },
  {
    title: 'Science',
    subtitle: 'Life & Physical',
    icon: <Atom size={32} />,
    questions: '700+',
    topics: ['Life Science', 'Physical Science', 'Earth & Space', 'Scientific Method'],
    color: 'emerald',
    time: '90 min'
  },
  {
    title: 'Social Studies',
    subtitle: 'History & Civics',
    icon: <Globe2 size={32} />,
    questions: '600+',
    topics: ['U.S. History', 'Civics & Government', 'Economics', 'Geography'],
    color: 'purple',
    time: '70 min'
  }
]

const features = [
  {
    icon: <Brain />,
    title: 'AI-Powered Learning',
    description: 'Smart algorithms identify your weak areas and create a personalized study path that adapts in real-time.',
    gradient: 'blue'
  },
  {
    icon: <Target />,
    title: 'Exam-Identical Practice',
    description: '2,500+ questions that mirror the real GED in format, difficulty, and timing. No surprises on test day.',
    gradient: 'orange'
  },
  {
    icon: <BarChart3 />,
    title: 'Score Prediction',
    description: 'Know exactly when you\'re ready. Our algorithm predicts your actual GED score with 95% accuracy.',
    gradient: 'emerald'
  },
  {
    icon: <Lightbulb />,
    title: 'Video Explanations',
    description: 'Every question includes detailed video and text explanations so you truly understand the concepts.',
    gradient: 'purple'
  },
  {
    icon: <Timer />,
    title: 'Timed Practice',
    description: 'Build speed and confidence with realistic time constraints that prepare you for test day pressure.',
    gradient: 'blue'
  },
  {
    icon: <Layers />,
    title: 'Smart Flashcards',
    description: 'Spaced repetition flashcards help you memorize key concepts and formulas for maximum retention.',
    gradient: 'orange'
  }
]

const testimonials = [
  {
    quote: "I dropped out of high school 15 years ago. GED Prep made it possible for me to finally get my diploma while working full-time. The mobile app was a game-changer!",
    name: "Marcus Johnson",
    role: "Passed all 4 subjects",
    score: "172 avg",
    avatar: "MJ"
  },
  {
    quote: "The practice tests were almost identical to the real exam. I walked in confident and passed on my first try. Best investment I've ever made in myself.",
    name: "Sarah Chen",
    role: "First-time passer",
    score: "168 avg",
    avatar: "SC"
  },
  {
    quote: "As a mom of three, I needed flexibility. I studied during lunch breaks and after the kids went to bed. Passed in just 2 months!",
    name: "Jennifer Williams",
    role: "Working parent",
    score: "159 avg",
    avatar: "JW"
  }
]

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.landing}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={`container ${styles.navContent}`}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoMark}>
              <GraduationCap size={22} />
            </div>
            <span className={styles.logoText}>GED<span>Prep</span></span>
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
          <div className={styles.heroGrid} />
        </div>
        
        <div className={`container ${styles.heroContainer}`}>
          <motion.div 
            className={styles.heroContent}
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div className={styles.heroPill} variants={fadeInUp}>
              <Sparkles size={14} />
              <span>Trusted by 100,000+ students</span>
              <div className={styles.pillGlow} />
            </motion.div>

            <motion.h1 variants={fadeInUp}>
              Your Path to a
              <span className={styles.heroHighlight}> High School Diploma</span>
              <br />Starts Here
            </motion.h1>

            <motion.p variants={fadeInUp}>
              Master all four GED subjects with AI-powered practice tests, 
              personalized study plans, and expert-crafted content. 
              Join over 100,000 students who passed on their first try.
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
                {['DM', 'AK', 'JR', 'TS', 'LM'].map((initials, i) => (
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
                <span>4.9/5 from 15,000+ reviews</span>
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
                <span className={styles.cardTitle}>Practice Test — Mathematics</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.questionMeta}>
                  <span className={styles.questionNum}>Question 8 of 25</span>
                  <div className={styles.questionTimer}>
                    <Timer size={14} />
                    <span>12:45</span>
                  </div>
                </div>
                <p className={styles.questionText}>
                  A store offers a 25% discount on all items. If a jacket originally costs $80, what is the sale price?
                </p>
                <div className={styles.optionsList}>
                  {[
                    { letter: 'A', text: '$55' },
                    { letter: 'B', text: '$60', correct: true },
                    { letter: 'C', text: '$65' },
                    { letter: 'D', text: '$70' }
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
                <span>172 / 200</span>
              </div>
            </div>

            <div className={styles.floatCard2}>
              <div className={styles.floatIconAlt}>
                <Zap size={16} />
              </div>
              <span>Ready to pass!</span>
            </div>

            <div className={styles.floatCard3}>
              <BadgeCheck size={18} />
              <span>847 questions completed</span>
            </div>
          </motion.div>
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
            <span className={styles.sectionTag}>Why GED Prep</span>
            <h2>Everything you need to pass</h2>
            <p>Our comprehensive platform combines proven study methods with cutting-edge technology</p>
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
            <h2>Master all four GED subjects</h2>
            <p>Comprehensive preparation aligned with the latest GED test requirements</p>
          </motion.div>

          <div className={styles.subjectsGrid}>
            {subjects.map((subject, idx) => (
              <motion.div 
                key={idx}
                className={`${styles.subjectCard} ${styles[subject.color]}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
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
                  href={`/dashboard/study/${subject.title.toLowerCase().replace(' ', '-')}`} 
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
            <h2>Three steps to your diploma</h2>
          </motion.div>

          <div className={styles.stepsRow}>
            {[
              {
                num: '01',
                icon: <MousePointerClick size={28} />,
                title: 'Take the Diagnostic',
                description: 'Our diagnostic test identifies your strengths and areas needing improvement in just 30 minutes.'
              },
              {
                num: '02',
                icon: <Rocket size={28} />,
                title: 'Follow Your Plan',
                description: 'Get a personalized study plan with daily goals, practice tests, and video lessons tailored to you.'
              },
              {
                num: '03',
                icon: <Trophy size={28} />,
                title: 'Pass Your GED',
                description: 'When our score predictor shows you\'re ready, schedule your test and pass with confidence.'
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
                {idx < 2 && <div className={styles.stepLine} />}
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
            <h2>Join thousands who passed</h2>
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
                    <span>Score</span>
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
            <p>All plans include full access to 2,500+ practice questions</p>
          </motion.div>

          <div className={styles.pricingGrid}>
            {[
              {
                name: 'Basic',
                price: 29,
                period: 'month',
                description: 'Great for quick prep',
                features: [
                  'Full question bank access',
                  '2 full practice exams',
                  'Basic progress tracking',
                  'Mobile app access'
                ],
                popular: false
              },
              {
                name: 'Complete',
                price: 49,
                period: '3 months',
                description: 'Most popular choice',
                features: [
                  'Everything in Basic',
                  '8 full practice exams',
                  'AI-powered study plan',
                  'Score prediction',
                  'Video explanations',
                  'Priority support',
                  'Pass guarantee'
                ],
                popular: true
              },
              {
                name: 'Premium',
                price: 79,
                period: '6 months',
                description: 'Complete mastery',
                features: [
                  'Everything in Complete',
                  '1-on-1 tutor session',
                  'Essay review & feedback',
                  'Extended access',
                  'Lifetime updates'
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
              <span>Pass guarantee</span>
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
              <h2>Ready to earn your diploma?</h2>
              <p>Join 100,000+ students who transformed their lives with GED Prep.</p>
              <div className={styles.ctaButtons}>
                <Link href="/dashboard" className={styles.ctaPrimary}>
                  Start Free Trial
                  <ArrowRight size={18} />
                </Link>
                <span className={styles.ctaNote}>No credit card required • 7-day free trial</span>
              </div>
            </div>
            <div className={styles.ctaVisual}>
              <GraduationCap size={120} />
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
                  <GraduationCap size={20} />
                </div>
                <span className={styles.logoText}>GED<span>Prep</span></span>
              </Link>
              <p>Empowering adults to achieve their educational goals since 2019. Your diploma is within reach.</p>
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
                <a href="#">GED Guide</a>
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
            <p>&copy; {new Date().getFullYear()} GED Prep. All rights reserved.</p>
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
