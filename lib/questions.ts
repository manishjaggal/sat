// Comprehensive SAT Question Bank - 300+ Questions
// Digital SAT Format: Math and Reading & Writing sections

import { allSATMathQuestions, SATQuestion, getRandomMathQuestions, getMathQuestionsByTopic, getMathQuestionsByDifficulty } from './sat-math-questions';
import { allSATReadingWritingQuestions, getRandomReadingWritingQuestions, getReadingWritingQuestionsByTopic, getReadingWritingQuestionsByDifficulty } from './sat-reading-writing-questions';

// Re-export the SATQuestion type
export type { SATQuestion };

// Legacy Question interface for backwards compatibility
export interface Question {
  id: string;
  subject: 'reading-writing' | 'math';
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  passage?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

// Convert SAT questions to legacy format
const convertToLegacyFormat = (satQ: SATQuestion): Question => ({
  id: satQ.id,
  subject: satQ.section,
  topic: satQ.topic,
  difficulty: satQ.difficulty,
  question: satQ.question,
  passage: satQ.passage,
  options: satQ.options,
  correctAnswer: satQ.correctAnswer,
  explanation: satQ.explanation
});

// All questions in legacy format
export const allQuestions: Question[] = [
  ...allSATMathQuestions.map(convertToLegacyFormat),
  ...allSATReadingWritingQuestions.map(convertToLegacyFormat)
];

// Reading & Writing questions (combined for SAT)
export const readingQuestions: Question[] = allSATReadingWritingQuestions.map(convertToLegacyFormat);

// Math questions
export const mathQuestions: Question[] = allSATMathQuestions.map(convertToLegacyFormat);

// Helper functions
export const getQuestionsBySubject = (subject: Question['subject']) => {
  return allQuestions.filter(q => q.subject === subject);
};

export const getQuestionsByTopic = (topic: string) => {
  return allQuestions.filter(q => q.topic === topic);
};

export const getQuestionsByDifficulty = (difficulty: Question['difficulty']) => {
  return allQuestions.filter(q => q.difficulty === difficulty);
};

export const getRandomQuestions = (count: number, subject?: Question['subject']) => {
  const pool = subject ? getQuestionsBySubject(subject) : allQuestions;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export const getWeakAreaQuestions = (count: number) => {
  // Simulate weak areas - in real app would be based on user performance
  const hardQuestions = allQuestions.filter(q => q.difficulty === 'hard' || q.difficulty === 'medium');
  const shuffled = [...hardQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// SAT Subject info - Digital SAT Structure
export const subjectInfo = {
  'reading-writing': {
    name: 'Reading and Writing',
    shortName: 'R&W',
    totalQuestions: readingQuestions.length,
    topics: [
      'Information and Ideas',
      'Craft and Structure', 
      'Standard English Conventions',
      'Expression of Ideas'
    ],
    subtopics: {
      'Information and Ideas': ['Central Ideas', 'Textual Evidence', 'Inferences'],
      'Craft and Structure': ['Words in Context', 'Text Structure', 'Purpose', 'Cross-Text Connections'],
      'Standard English Conventions': ['Subject-Verb Agreement', 'Pronouns', 'Punctuation', 'Verb Tense', 'Sentence Structure', 'Modifiers', 'Possessives'],
      'Expression of Ideas': ['Transitions', 'Sentence Combining', 'Concision', 'Logical Sequence', 'Precision', 'Style and Tone']
    },
    examPercentage: 50,
    timeMinutes: 64,
    description: 'Tests reading comprehension, vocabulary in context, and writing conventions.',
    modules: 2,
    questionsPerModule: 27,
    scoreRange: '200-800'
  },
  math: {
    name: 'Math',
    shortName: 'Math',
    totalQuestions: mathQuestions.length,
    topics: [
      'Algebra',
      'Advanced Math',
      'Problem-Solving & Data Analysis',
      'Geometry'
    ],
    subtopics: {
      'Algebra': ['Linear Equations', 'Linear Inequalities', 'Systems of Equations', 'Linear Functions', 'Word Problems'],
      'Advanced Math': ['Quadratic Equations', 'Parabolas', 'Polynomials', 'Exponentials', 'Rational Expressions', 'Radicals'],
      'Problem-Solving & Data Analysis': ['Ratios', 'Percentages', 'Statistics', 'Probability', 'Data Interpretation', 'Rates'],
      'Geometry': ['Area and Perimeter', 'Circles', 'Triangles', 'Volume', 'Coordinate Geometry', 'Trigonometry', 'Angles']
    },
    examPercentage: 50,
    timeMinutes: 70,
    description: 'Tests algebra, problem-solving, data analysis, and advanced math concepts.',
    modules: 2,
    questionsPerModule: 22,
    scoreRange: '200-800',
    calculatorAllowed: true
  }
};

// SAT Score information
export const satScoreInfo = {
  totalScore: {
    min: 400,
    max: 1600,
    description: 'Combined score from Reading & Writing and Math sections'
  },
  sectionScore: {
    min: 200,
    max: 800,
    description: 'Individual section score'
  },
  percentiles: {
    1600: 99,
    1550: 99,
    1500: 98,
    1450: 96,
    1400: 94,
    1350: 91,
    1300: 87,
    1250: 82,
    1200: 76,
    1150: 69,
    1100: 61,
    1050: 52,
    1000: 43,
    950: 34,
    900: 26
  },
  averageScore: 1050,
  collegeReady: 1010
};

// Flashcard decks for SAT
export const flashcardDecks = {
  'reading-writing': {
    name: 'Reading & Writing',
    cards: [
      // Vocabulary
      { front: 'Ambiguous', back: 'Having more than one possible meaning; unclear or inexact.' },
      { front: 'Analogous', back: 'Comparable in certain respects; similar or equivalent.' },
      { front: 'Anomaly', back: 'Something that deviates from the norm; an irregularity.' },
      { front: 'Antithesis', back: 'The direct opposite; a contrast or opposition of ideas.' },
      { front: 'Articulate', back: 'Expressing oneself clearly and effectively; well-spoken.' },
      { front: 'Bolster', back: 'To support, strengthen, or reinforce.' },
      { front: 'Candid', back: 'Truthful and straightforward; frank and honest.' },
      { front: 'Comprehensive', back: 'Complete and including all elements; thorough.' },
      { front: 'Concise', back: 'Expressing much in few words; brief but comprehensive.' },
      { front: 'Conjecture', back: 'An opinion or conclusion based on incomplete information; a guess.' },
      { front: 'Corroborate', back: 'To confirm or give support to a statement or theory.' },
      { front: 'Discrepancy', back: 'A lack of compatibility or similarity; an inconsistency.' },
      { front: 'Empirical', back: 'Based on observation or experience rather than theory.' },
      { front: 'Enhance', back: 'To intensify, increase, or improve quality or value.' },
      { front: 'Ephemeral', back: 'Lasting for a very short time; transient.' },
      { front: 'Explicit', back: 'Stated clearly and in detail; leaving no room for doubt.' },
      { front: 'Implicit', back: 'Implied though not directly expressed; understood.' },
      { front: 'Mitigate', back: 'To make less severe, serious, or painful.' },
      { front: 'Nuanced', back: 'Characterized by subtle distinctions or variations.' },
      { front: 'Paradox', back: 'A seemingly contradictory statement that may be true.' },
      { front: 'Pragmatic', back: 'Dealing with things sensibly and realistically; practical.' },
      { front: 'Precedent', back: 'An earlier event that serves as an example or guide.' },
      { front: 'Substantiate', back: 'To provide evidence to support or prove the truth of.' },
      { front: 'Undermine', back: 'To weaken or damage, especially gradually.' },
      // Grammar Rules
      { front: 'Subject-Verb Agreement', back: 'Singular subjects take singular verbs; plural subjects take plural verbs. The subject, not words between subject and verb, determines agreement.' },
      { front: 'Semicolon Usage', back: 'Use semicolons to join two related independent clauses without a conjunction, or to separate list items that contain commas.' },
      { front: 'Colon Usage', back: 'Use a colon after a complete sentence to introduce a list, explanation, or elaboration. The preceding clause must be independent.' },
      { front: 'Dangling Modifier', back: 'A modifying phrase that doesn\'t clearly refer to what it modifies. The subject should immediately follow the introductory phrase.' },
      { front: 'Parallel Structure', back: 'Items in a list or comparison should have the same grammatical form (all nouns, all gerunds, etc.).' },
      { front: 'Who vs. Whom', back: 'Use "who" for subjects (who did it?) and "whom" for objects (to whom was it given?).' }
    ]
  },
  math: {
    name: 'Math',
    cards: [
      // Algebra
      { front: 'Slope-Intercept Form', back: 'y = mx + b, where m is the slope and b is the y-intercept.' },
      { front: 'Point-Slope Form', back: 'y - y₁ = m(x - x₁), where m is the slope and (x₁, y₁) is a point on the line.' },
      { front: 'Standard Form', back: 'Ax + By = C, where A, B, and C are constants.' },
      { front: 'Perpendicular Lines', back: 'Have slopes that are negative reciprocals. If m₁ = a/b, then m₂ = -b/a.' },
      { front: 'Parallel Lines', back: 'Have equal slopes. If m₁ = m₂, lines are parallel.' },
      // Quadratics
      { front: 'Quadratic Formula', back: 'x = (-b ± √(b² - 4ac)) / 2a, where ax² + bx + c = 0' },
      { front: 'Vertex Form', back: 'y = a(x - h)² + k, where (h, k) is the vertex of the parabola.' },
      { front: 'Discriminant', back: 'b² - 4ac determines the nature of roots: >0 = two real roots, =0 = one root, <0 = no real roots.' },
      { front: 'Vertex Formula', back: 'For y = ax² + bx + c, vertex x-coordinate = -b/(2a).' },
      { front: 'Sum of Roots', back: 'For ax² + bx + c = 0, sum of roots = -b/a.' },
      { front: 'Product of Roots', back: 'For ax² + bx + c = 0, product of roots = c/a.' },
      // Exponents
      { front: 'Product Rule', back: 'aᵐ × aⁿ = aᵐ⁺ⁿ (same base, add exponents).' },
      { front: 'Quotient Rule', back: 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ (same base, subtract exponents).' },
      { front: 'Power Rule', back: '(aᵐ)ⁿ = aᵐⁿ (multiply exponents).' },
      { front: 'Zero Exponent', back: 'a⁰ = 1 (any nonzero number to the zero power equals 1).' },
      { front: 'Negative Exponent', back: 'a⁻ⁿ = 1/aⁿ (reciprocal of positive exponent).' },
      // Geometry
      { front: 'Pythagorean Theorem', back: 'a² + b² = c², where c is the hypotenuse of a right triangle.' },
      { front: '30-60-90 Triangle', back: 'Sides are in ratio 1 : √3 : 2 (short leg : long leg : hypotenuse).' },
      { front: '45-45-90 Triangle', back: 'Sides are in ratio 1 : 1 : √2 (leg : leg : hypotenuse).' },
      { front: 'Circle Area', back: 'A = πr² (pi times radius squared).' },
      { front: 'Circle Circumference', back: 'C = 2πr = πd (2 pi times radius, or pi times diameter).' },
      { front: 'Arc Length', back: 'Arc = (θ/360°) × 2πr, where θ is the central angle.' },
      { front: 'Sector Area', back: 'Sector = (θ/360°) × πr², where θ is the central angle.' },
      // Trigonometry
      { front: 'SOH CAH TOA', back: 'Sin = Opposite/Hypotenuse, Cos = Adjacent/Hypotenuse, Tan = Opposite/Adjacent.' },
      { front: 'sin 30°', back: '1/2' },
      { front: 'sin 45°', back: '√2/2' },
      { front: 'sin 60°', back: '√3/2' },
      { front: 'cos 30°', back: '√3/2' },
      { front: 'cos 45°', back: '√2/2' },
      { front: 'cos 60°', back: '1/2' },
      // Data Analysis
      { front: 'Mean', back: 'Average = Sum of all values ÷ Number of values.' },
      { front: 'Median', back: 'Middle value when data is ordered. For even count, average of two middle values.' },
      { front: 'Mode', back: 'Most frequently occurring value in a data set.' },
      { front: 'Range', back: 'Maximum value - Minimum value.' },
      { front: 'Probability', back: 'P(event) = Number of favorable outcomes ÷ Total number of outcomes.' },
      { front: 'Percent Change', back: '((New - Original) / Original) × 100%.' }
    ]
  }
};

// Achievement badges for SAT prep
export const achievements = [
  { id: 'streak-7', name: '7-Day Streak', description: 'Study for 7 days in a row', icon: '🔥' },
  { id: 'streak-30', name: 'Month Warrior', description: 'Study for 30 days in a row', icon: '🏆' },
  { id: 'questions-100', name: 'Century', description: 'Answer 100 questions', icon: '💯' },
  { id: 'questions-500', name: 'Question Master', description: 'Answer 500 questions', icon: '🎯' },
  { id: 'questions-1000', name: 'Quiz Champion', description: 'Answer 1,000 questions', icon: '👑' },
  { id: 'perfect-10', name: 'Perfect 10', description: 'Get 10 questions right in a row', icon: '⭐' },
  { id: 'perfect-25', name: 'Flawless', description: 'Get 25 questions right in a row', icon: '💫' },
  { id: 'score-1200', name: '1200 Club', description: 'Score 1200+ on a practice test', icon: '🎖️' },
  { id: 'score-1400', name: 'Elite Scorer', description: 'Score 1400+ on a practice test', icon: '🥇' },
  { id: 'score-1500', name: 'Top 1%', description: 'Score 1500+ on a practice test', icon: '🏅' },
  { id: 'rw-master', name: 'R&W Expert', description: 'Complete all Reading & Writing modules', icon: '📚' },
  { id: 'math-master', name: 'Math Whiz', description: 'Complete all Math modules', icon: '🔢' },
  { id: 'early-bird', name: 'Early Bird', description: 'Study before 7 AM', icon: '🌅' },
  { id: 'night-owl', name: 'Night Owl', description: 'Study after 10 PM', icon: '🦉' },
  { id: 'flashcard-master', name: 'Memory Master', description: 'Review 100 flashcards', icon: '🧠' },
  { id: 'first-practice', name: 'First Steps', description: 'Complete your first practice test', icon: '🎉' }
];

// Practice test structure for Digital SAT
export const practiceTestStructure = {
  readingWriting: {
    modules: 2,
    questionsPerModule: 27,
    timePerModule: 32, // minutes
    adaptiveSecondModule: true
  },
  math: {
    modules: 2,
    questionsPerModule: 22,
    timePerModule: 35, // minutes
    adaptiveSecondModule: true,
    calculatorAllowed: true
  },
  totalTime: 134, // minutes (2h 14m)
  totalQuestions: 98
};

// Export helper functions for new SAT format
export {
  getRandomMathQuestions,
  getMathQuestionsByTopic,
  getMathQuestionsByDifficulty,
  getRandomReadingWritingQuestions,
  getReadingWritingQuestionsByTopic,
  getReadingWritingQuestionsByDifficulty,
  allSATMathQuestions,
  allSATReadingWritingQuestions
};
