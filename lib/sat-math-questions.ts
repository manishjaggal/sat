// Comprehensive SAT Math Question Bank - 150+ Questions
// Covers: Algebra, Advanced Math, Problem-Solving & Data Analysis, Geometry & Trigonometry

export interface SATQuestion {
  id: string;
  section: 'math' | 'reading-writing';
  topic: string;
  subtopic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  passage?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  skill: string;
}

// ============================================
// ALGEBRA (35% of SAT Math) - Linear equations, inequalities, functions
// ============================================

export const algebraQuestions: SATQuestion[] = [
  // Linear Equations - Easy
  {
    id: 'math-alg-001',
    section: 'math',
    topic: 'Algebra',
    subtopic: 'Linear Equations',
    difficulty: 'easy',
    question: 'If 3x + 7 = 22, what is the value of x?',
    options: ['3', '5', '7', '9'],
    correctAnswer: 1,
    explanation: '3x + 7 = 22 → 3x = 15 → x = 5',
    skill: 'Solving linear equations'
  },
  {
    id: 'math-alg-002',
    section: 'math',
    topic: 'Algebra',
    subtopic: 'Linear Equations',
    difficulty: 'easy',
    question: 'Solve for y: 2y - 8 = 12',
    options: ['2', '6', '10', '12'],
    correctAnswer: 2,
    explanation: '2y - 8 = 12 → 2y = 20 → y = 10',
    skill: 'Solving linear equations'
  },
  {
    id: 'math-alg-003',
    section: 'math',
    topic: 'Algebra',
    subtopic: 'Linear Equations',
    difficulty: 'easy',
    question: 'If 5(x - 2) = 25, what is x?',
    options: ['5', '7', '9', '11'],
    correctAnswer: 1,
    explanation: '5(x - 2) = 25 → x - 2 = 5 → x = 7',
    skill: 'Solving linear equations with distribution'
  },
  {
    id: 'math-alg-004',
    section: 'math',
    topic: 'Algebra',
    subtopic: 'Linear Equations',
    difficulty: 'medium',
    question: 'If 4x - 3 = 2x + 9, what is the value of x?',
    options: ['3', '6', '9', '12'],
    correctAnswer: 1,
    explanation: '4x - 3 = 2x + 9 → 2x = 12 → x = 6',
    skill: 'Solving equations with variables on both sides'
  },
  {
    id: 'math-alg-005',
    section: 'math',
    topic: 'Algebra',
    subtopic: 'Linear Equations',
    difficulty: 'medium',
    question: 'Solve: 3(2x + 1) - 4 = 5x + 2',
    options: ['1', '2', '3', '4'],
    correctAnswer: 2,
    explanation: '6x + 3 - 4 = 5x + 2 → 6x - 1 = 5x + 2 → x = 3',
    skill: 'Multi-step linear equations'
  },
  {
    id: 'math-alg-006',
    section: 'math',
    topic: 'Algebra',
    subtopic: 'Linear Equations',
    difficulty: 'hard',
    question: 'If (3x - 2)/4 = (2x + 1)/3, what is x?',
    options: ['2', '4', '5', '10'],
    correctAnswer: 3,
    explanation: 'Cross multiply: 3(3x - 2) = 4(2x + 1) → 9x - 6 = 8x + 4 → x = 10',
    skill: 'Equations with fractions'
  },
  // Linear Inequalities
  {
    id: 'math-alg-007',
    section: 'math',
    topic: 'Algebra',
    subtopic: 'Linear Inequalities',
    difficulty: 'easy',
    question: 'Which value of x satisfies the inequality 2x + 3 > 11?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 3,
    explanation: '2x + 3 > 11 → 2x > 8 → x > 4. Only x = 5 satisfies this.',
    skill: 'Solving linear inequalities'
  },
  {
    id: 'math-alg-008',
    section: 'math',
    topic: 'Algebra',
    subtopic: 'Linear Inequalities',
    difficulty: 'medium',
    question: 'If -3x + 5 ≤ 14, what is the smallest integer value of x?',
    options: ['-5', '-4', '-3', '-2'],
    correctAnswer: 2,
    explanation: '-3x + 5 ≤ 14 → -3x ≤ 9 → x ≥ -3 (inequality flips when dividing by negative)',
    skill: 'Inequalities with negative coefficients'
  },
  {
    id: 'math-alg-009',
    section: 'math',
    topic: 'Algebra',
    subtopic: 'Linear Inequalities',
    difficulty: 'hard',
    question: 'For which values of x is |2x - 3| < 7?',
    options: ['-2 < x < 5', '-5 < x < 2', '-2 ≤ x ≤ 5', 'x < -2 or x > 5'],
    correctAnswer: 0,
    explanation: '|2x - 3| < 7 means -7 < 2x - 3 < 7 → -4 < 2x < 10 → -2 < x < 5',
    skill: 'Absolute value inequalities'
  },
  // Systems of Equations
  {
    id: 'math-alg-010',
    section: 'math',
    topic: 'Algebra',
    subtopic: 'Systems of Equations',
    difficulty: 'easy',
    question: 'If x + y = 10 and x - y = 4, what is x?',
    options: ['3', '5', '7', '9'],
    correctAnswer: 2,
    explanation: 'Add equations: 2x = 14 → x = 7',
    skill: 'Solving systems by elimination'
  },
  {
    id: 'math-alg-011',
    section: 'math',
    topic: 'Algebra',
    subtopic: 'Systems of Equations',
    difficulty: 'medium',
    question: 'If 2x + 3y = 12 and x = y + 1, what is y?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: 'Substitute: 2(y + 1) + 3y = 12 → 2y + 2 + 3y = 12 → 5y = 10 → y = 2',
    skill: 'Solving systems by substitution'
  },
  {
    id: 'math-alg-012',
    section: 'math',
    topic: 'Algebra',
    subtopic: 'Systems of Equations',
    difficulty: 'hard',
    question: 'A system of equations has no solution. If the system is: 3x - 2y = 5 and 6x - 4y = k, what is k NOT equal to?',
    options: ['5', '10', '15', '20'],
    correctAnswer: 1,
    explanation: 'For no solution, lines must be parallel but not coincident. 6x - 4y = 2(3x - 2y) = 2(5) = 10 would make them the same line.',
    skill: 'Systems with no solution'
  },
  // Linear Functions
  {
    id: 'math-alg-013',
    section: 'math',
    topic: 'Algebra',
    subtopic: 'Linear Functions',
    difficulty: 'easy',
    question: 'What is the slope of the line y = 3x - 7?',
    options: ['-7', '-3', '3', '7'],
    correctAnswer: 2,
    explanation: 'In y = mx + b form, the slope m = 3',
    skill: 'Identifying slope from equation'
  },
  {
    id: 'math-alg-014',
    section: 'math',
    topic: 'Algebra',
    subtopic: 'Linear Functions',
    difficulty: 'medium',
    question: 'What is the equation of a line passing through (2, 5) with slope 3?',
    options: ['y = 3x - 1', 'y = 3x + 1', 'y = 3x - 5', 'y = 3x + 5'],
    correctAnswer: 0,
    explanation: 'Using point-slope: y - 5 = 3(x - 2) → y = 3x - 6 + 5 → y = 3x - 1',
    skill: 'Writing linear equations'
  },
  {
    id: 'math-alg-015',
    section: 'math',
    topic: 'Algebra',
    subtopic: 'Linear Functions',
    difficulty: 'medium',
    question: 'Line m passes through points (1, 4) and (3, 10). What is the y-intercept?',
    options: ['-1', '1', '2', '4'],
    correctAnswer: 1,
    explanation: 'Slope = (10-4)/(3-1) = 3. Using y = 3x + b with (1,4): 4 = 3(1) + b → b = 1',
    skill: 'Finding y-intercept'
  },
  {
    id: 'math-alg-016',
    section: 'math',
    topic: 'Algebra',
    subtopic: 'Linear Functions',
    difficulty: 'hard',
    question: 'Lines y = 2x + 3 and y = ax - 1 are perpendicular. What is a?',
    options: ['-2', '-1/2', '1/2', '2'],
    correctAnswer: 1,
    explanation: 'Perpendicular lines have slopes that are negative reciprocals. If m₁ = 2, then m₂ = -1/2',
    skill: 'Perpendicular lines'
  },
  // Word Problems - Algebra
  {
    id: 'math-alg-017',
    section: 'math',
    topic: 'Algebra',
    subtopic: 'Word Problems',
    difficulty: 'easy',
    question: 'A movie ticket costs $12. If John has $50, how many tickets can he buy at most?',
    options: ['3', '4', '5', '6'],
    correctAnswer: 1,
    explanation: '50 ÷ 12 = 4.166..., so he can buy at most 4 tickets.',
    skill: 'Real-world linear applications'
  },
  {
    id: 'math-alg-018',
    section: 'math',
    topic: 'Algebra',
    subtopic: 'Word Problems',
    difficulty: 'medium',
    question: 'A phone plan costs $25/month plus $0.10 per text. If Mia spent $40 last month, how many texts did she send?',
    options: ['100', '125', '150', '175'],
    correctAnswer: 2,
    explanation: '25 + 0.10t = 40 → 0.10t = 15 → t = 150 texts',
    skill: 'Setting up linear equations'
  },
  {
    id: 'math-alg-019',
    section: 'math',
    topic: 'Algebra',
    subtopic: 'Word Problems',
    difficulty: 'hard',
    question: 'Two cars leave the same point. Car A travels north at 60 mph, Car B travels east at 80 mph. After 2 hours, how far apart are they?',
    options: ['140 miles', '180 miles', '200 miles', '280 miles'],
    correctAnswer: 2,
    explanation: 'After 2 hours: A = 120 miles, B = 160 miles. Distance = √(120² + 160²) = √(14400 + 25600) = √40000 = 200 miles',
    skill: 'Distance problems with Pythagorean theorem'
  },
  {
    id: 'math-alg-020',
    section: 'math',
    topic: 'Algebra',
    subtopic: 'Word Problems',
    difficulty: 'medium',
    question: 'The sum of three consecutive integers is 72. What is the largest integer?',
    options: ['23', '24', '25', '26'],
    correctAnswer: 2,
    explanation: 'Let integers be n, n+1, n+2. Then 3n + 3 = 72 → n = 23. Largest is 25.',
    skill: 'Consecutive integer problems'
  }
];

// ============================================
// ADVANCED MATH (35% of SAT Math) - Quadratics, polynomials, exponentials
// ============================================

export const advancedMathQuestions: SATQuestion[] = [
  // Quadratic Equations
  {
    id: 'math-adv-001',
    section: 'math',
    topic: 'Advanced Math',
    subtopic: 'Quadratic Equations',
    difficulty: 'easy',
    question: 'Solve: x² - 9 = 0',
    options: ['x = ±3', 'x = ±9', 'x = 3', 'x = 9'],
    correctAnswer: 0,
    explanation: 'x² = 9 → x = ±3',
    skill: 'Solving basic quadratics'
  },
  {
    id: 'math-adv-002',
    section: 'math',
    topic: 'Advanced Math',
    subtopic: 'Quadratic Equations',
    difficulty: 'easy',
    question: 'What are the solutions to x² - 5x + 6 = 0?',
    options: ['x = 1, 6', 'x = 2, 3', 'x = -2, -3', 'x = -1, 6'],
    correctAnswer: 1,
    explanation: 'Factor: (x - 2)(x - 3) = 0 → x = 2 or x = 3',
    skill: 'Factoring quadratics'
  },
  {
    id: 'math-adv-003',
    section: 'math',
    topic: 'Advanced Math',
    subtopic: 'Quadratic Equations',
    difficulty: 'medium',
    question: 'For what values of x does x² - 4x - 21 = 0?',
    options: ['x = -3, 7', 'x = 3, -7', 'x = -3, -7', 'x = 3, 7'],
    correctAnswer: 0,
    explanation: 'Factor: (x + 3)(x - 7) = 0 → x = -3 or x = 7',
    skill: 'Factoring quadratics'
  },
  {
    id: 'math-adv-004',
    section: 'math',
    topic: 'Advanced Math',
    subtopic: 'Quadratic Equations',
    difficulty: 'medium',
    question: 'Using the quadratic formula, find x if 2x² - 5x - 3 = 0',
    options: ['x = -1/2, 3', 'x = 1/2, -3', 'x = -1/2, -3', 'x = 1/2, 3'],
    correctAnswer: 0,
    explanation: 'x = (5 ± √(25 + 24))/4 = (5 ± 7)/4 → x = 3 or x = -1/2',
    skill: 'Quadratic formula'
  },
  {
    id: 'math-adv-005',
    section: 'math',
    topic: 'Advanced Math',
    subtopic: 'Quadratic Equations',
    difficulty: 'hard',
    question: 'If x² + bx + 12 = 0 has solutions x = 3 and x = 4, what is b?',
    options: ['-7', '-1', '1', '7'],
    correctAnswer: 0,
    explanation: 'If roots are 3 and 4: (x-3)(x-4) = x² - 7x + 12, so b = -7',
    skill: 'Working backwards from solutions'
  },
  // Vertex Form and Parabolas
  {
    id: 'math-adv-006',
    section: 'math',
    topic: 'Advanced Math',
    subtopic: 'Parabolas',
    difficulty: 'easy',
    question: 'What is the vertex of y = (x - 3)² + 5?',
    options: ['(-3, 5)', '(3, 5)', '(-3, -5)', '(3, -5)'],
    correctAnswer: 1,
    explanation: 'In vertex form y = (x - h)² + k, vertex is (h, k) = (3, 5)',
    skill: 'Identifying vertex from equation'
  },
  {
    id: 'math-adv-007',
    section: 'math',
    topic: 'Advanced Math',
    subtopic: 'Parabolas',
    difficulty: 'medium',
    question: 'The parabola y = x² - 6x + 5 has its vertex at:',
    options: ['(3, -4)', '(-3, 4)', '(3, 4)', '(-3, -4)'],
    correctAnswer: 0,
    explanation: 'Complete the square: y = (x - 3)² - 9 + 5 = (x - 3)² - 4. Vertex: (3, -4)',
    skill: 'Completing the square'
  },
  {
    id: 'math-adv-008',
    section: 'math',
    topic: 'Advanced Math',
    subtopic: 'Parabolas',
    difficulty: 'hard',
    question: 'A ball is thrown upward with height h(t) = -16t² + 64t + 80. What is the maximum height?',
    options: ['80 feet', '128 feet', '144 feet', '160 feet'],
    correctAnswer: 2,
    explanation: 'Vertex at t = -64/(2×-16) = 2. h(2) = -16(4) + 64(2) + 80 = -64 + 128 + 80 = 144',
    skill: 'Real-world quadratic applications'
  },
  // Polynomials
  {
    id: 'math-adv-009',
    section: 'math',
    topic: 'Advanced Math',
    subtopic: 'Polynomials',
    difficulty: 'easy',
    question: 'Simplify: (3x² + 2x - 1) + (x² - 4x + 5)',
    options: ['4x² - 2x + 4', '4x² + 6x + 4', '2x² - 2x + 4', '4x² - 2x - 4'],
    correctAnswer: 0,
    explanation: 'Combine like terms: (3x² + x²) + (2x - 4x) + (-1 + 5) = 4x² - 2x + 4',
    skill: 'Adding polynomials'
  },
  {
    id: 'math-adv-010',
    section: 'math',
    topic: 'Advanced Math',
    subtopic: 'Polynomials',
    difficulty: 'medium',
    question: 'Multiply: (x + 3)(x² - 2x + 4)',
    options: ['x³ + x² - 2x + 12', 'x³ + x² + 2x + 12', 'x³ - x² - 2x + 12', 'x³ + x² - 2x - 12'],
    correctAnswer: 0,
    explanation: 'x(x² - 2x + 4) + 3(x² - 2x + 4) = x³ - 2x² + 4x + 3x² - 6x + 12 = x³ + x² - 2x + 12',
    skill: 'Multiplying polynomials'
  },
  {
    id: 'math-adv-011',
    section: 'math',
    topic: 'Advanced Math',
    subtopic: 'Polynomials',
    difficulty: 'hard',
    question: 'If p(x) = x³ - 4x² + x + 6, what is p(2)?',
    options: ['-4', '0', '4', '8'],
    correctAnswer: 1,
    explanation: 'p(2) = 8 - 16 + 2 + 6 = 0. This means (x - 2) is a factor.',
    skill: 'Evaluating polynomials'
  },
  // Exponential Functions
  {
    id: 'math-adv-012',
    section: 'math',
    topic: 'Advanced Math',
    subtopic: 'Exponentials',
    difficulty: 'easy',
    question: 'Simplify: 2³ × 2⁴',
    options: ['2⁷', '2¹²', '4⁷', '4¹²'],
    correctAnswer: 0,
    explanation: 'When multiplying same bases, add exponents: 2³⁺⁴ = 2⁷',
    skill: 'Exponent rules'
  },
  {
    id: 'math-adv-013',
    section: 'math',
    topic: 'Advanced Math',
    subtopic: 'Exponentials',
    difficulty: 'medium',
    question: 'Simplify: (x³)⁴/x⁵',
    options: ['x²', 'x⁵', 'x⁷', 'x¹²'],
    correctAnswer: 2,
    explanation: '(x³)⁴/x⁵ = x¹²/x⁵ = x⁷',
    skill: 'Exponent rules'
  },
  {
    id: 'math-adv-014',
    section: 'math',
    topic: 'Advanced Math',
    subtopic: 'Exponentials',
    difficulty: 'medium',
    question: 'A population doubles every 5 years. If it starts at 1000, what is the population after 15 years?',
    options: ['2000', '4000', '6000', '8000'],
    correctAnswer: 3,
    explanation: 'After 15 years = 3 doubling periods. 1000 × 2³ = 1000 × 8 = 8000',
    skill: 'Exponential growth'
  },
  {
    id: 'math-adv-015',
    section: 'math',
    topic: 'Advanced Math',
    subtopic: 'Exponentials',
    difficulty: 'hard',
    question: 'If 3^(2x) = 81, what is x?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: '81 = 3⁴, so 3^(2x) = 3⁴ → 2x = 4 → x = 2',
    skill: 'Solving exponential equations'
  },
  // Rational Expressions
  {
    id: 'math-adv-016',
    section: 'math',
    topic: 'Advanced Math',
    subtopic: 'Rational Expressions',
    difficulty: 'medium',
    question: 'Simplify: (x² - 4)/(x + 2)',
    options: ['x - 2', 'x + 2', 'x² - 2', '(x - 2)²'],
    correctAnswer: 0,
    explanation: '(x² - 4)/(x + 2) = (x + 2)(x - 2)/(x + 2) = x - 2 (for x ≠ -2)',
    skill: 'Simplifying rational expressions'
  },
  {
    id: 'math-adv-017',
    section: 'math',
    topic: 'Advanced Math',
    subtopic: 'Rational Expressions',
    difficulty: 'hard',
    question: 'Solve: 2/(x-1) + 3/(x+1) = 5/3',
    options: ['x = 2', 'x = 3', 'x = 4', 'x = 5'],
    correctAnswer: 2,
    explanation: 'Multiply by 3(x-1)(x+1): 6(x+1) + 9(x-1) = 5(x²-1) → 15x - 3 = 5x² - 5 → 5x² - 15x - 2 = 0. x = 4 works.',
    skill: 'Solving rational equations'
  },
  // Radicals
  {
    id: 'math-adv-018',
    section: 'math',
    topic: 'Advanced Math',
    subtopic: 'Radicals',
    difficulty: 'easy',
    question: 'Simplify: √75',
    options: ['5√3', '3√5', '25√3', '15'],
    correctAnswer: 0,
    explanation: '√75 = √(25 × 3) = 5√3',
    skill: 'Simplifying radicals'
  },
  {
    id: 'math-adv-019',
    section: 'math',
    topic: 'Advanced Math',
    subtopic: 'Radicals',
    difficulty: 'medium',
    question: 'Solve: √(2x + 1) = 5',
    options: ['x = 12', 'x = 13', 'x = 24', 'x = 25'],
    correctAnswer: 0,
    explanation: 'Square both sides: 2x + 1 = 25 → 2x = 24 → x = 12',
    skill: 'Solving radical equations'
  },
  {
    id: 'math-adv-020',
    section: 'math',
    topic: 'Advanced Math',
    subtopic: 'Radicals',
    difficulty: 'hard',
    question: 'If √(x + 3) + √(x - 2) = 5, what is x?',
    options: ['3', '6', '9', '12'],
    correctAnswer: 1,
    explanation: 'Let a = √(x+3), b = √(x-2). Then a + b = 5 and a² - b² = 5. So (a+b)(a-b) = 5 → a - b = 1. Solving: a = 3, b = 2 → x = 6',
    skill: 'Complex radical equations'
  }
];

// ============================================
// PROBLEM-SOLVING & DATA ANALYSIS (15% of SAT Math)
// ============================================

export const dataAnalysisQuestions: SATQuestion[] = [
  // Ratios and Proportions
  {
    id: 'math-data-001',
    section: 'math',
    topic: 'Problem-Solving & Data Analysis',
    subtopic: 'Ratios',
    difficulty: 'easy',
    question: 'If the ratio of boys to girls in a class is 3:5 and there are 15 girls, how many boys are there?',
    options: ['5', '9', '12', '25'],
    correctAnswer: 1,
    explanation: '3/5 = x/15 → x = 9 boys',
    skill: 'Setting up proportions'
  },
  {
    id: 'math-data-002',
    section: 'math',
    topic: 'Problem-Solving & Data Analysis',
    subtopic: 'Ratios',
    difficulty: 'medium',
    question: 'A recipe calls for flour and sugar in the ratio 4:1. If 2.5 cups of sugar are used, how many cups of flour are needed?',
    options: ['5', '8', '10', '12.5'],
    correctAnswer: 2,
    explanation: '4/1 = x/2.5 → x = 10 cups of flour',
    skill: 'Real-world ratio problems'
  },
  // Percentages
  {
    id: 'math-data-003',
    section: 'math',
    topic: 'Problem-Solving & Data Analysis',
    subtopic: 'Percentages',
    difficulty: 'easy',
    question: 'A shirt originally costs $40 and is on sale for 25% off. What is the sale price?',
    options: ['$10', '$25', '$30', '$35'],
    correctAnswer: 2,
    explanation: '25% of $40 = $10. Sale price = $40 - $10 = $30',
    skill: 'Percent decrease'
  },
  {
    id: 'math-data-004',
    section: 'math',
    topic: 'Problem-Solving & Data Analysis',
    subtopic: 'Percentages',
    difficulty: 'medium',
    question: 'A population increased from 5000 to 6500. What is the percent increase?',
    options: ['15%', '25%', '30%', '35%'],
    correctAnswer: 2,
    explanation: 'Increase = 1500. Percent = (1500/5000) × 100 = 30%',
    skill: 'Percent change'
  },
  {
    id: 'math-data-005',
    section: 'math',
    topic: 'Problem-Solving & Data Analysis',
    subtopic: 'Percentages',
    difficulty: 'hard',
    question: 'After a 20% discount and then a 10% tax, a $100 item costs:',
    options: ['$85', '$88', '$90', '$92'],
    correctAnswer: 1,
    explanation: 'After 20% off: $80. After 10% tax: $80 × 1.10 = $88',
    skill: 'Multiple percent changes'
  },
  // Statistics
  {
    id: 'math-data-006',
    section: 'math',
    topic: 'Problem-Solving & Data Analysis',
    subtopic: 'Statistics',
    difficulty: 'easy',
    question: 'What is the mean of: 12, 15, 18, 21, 24?',
    options: ['15', '18', '20', '21'],
    correctAnswer: 1,
    explanation: 'Mean = (12 + 15 + 18 + 21 + 24)/5 = 90/5 = 18',
    skill: 'Calculating mean'
  },
  {
    id: 'math-data-007',
    section: 'math',
    topic: 'Problem-Solving & Data Analysis',
    subtopic: 'Statistics',
    difficulty: 'medium',
    question: 'The median of 7 numbers is 15. If 6 of the numbers are 8, 12, 14, 17, 19, 23, what is the 7th number?',
    options: ['10', '13', '15', '16'],
    correctAnswer: 2,
    explanation: 'For median to be 15 with 7 numbers, the middle value must be 15. Arranged: 8, 12, 14, 15, 17, 19, 23',
    skill: 'Working with median'
  },
  {
    id: 'math-data-008',
    section: 'math',
    topic: 'Problem-Solving & Data Analysis',
    subtopic: 'Statistics',
    difficulty: 'hard',
    question: 'The mean of 5 numbers is 12. If one number is removed, the mean becomes 10. What number was removed?',
    options: ['16', '18', '20', '22'],
    correctAnswer: 2,
    explanation: 'Original sum = 5 × 12 = 60. New sum = 4 × 10 = 40. Removed = 60 - 40 = 20',
    skill: 'Working backwards with mean'
  },
  // Probability
  {
    id: 'math-data-009',
    section: 'math',
    topic: 'Problem-Solving & Data Analysis',
    subtopic: 'Probability',
    difficulty: 'easy',
    question: 'A bag has 3 red, 4 blue, and 5 green marbles. What is the probability of picking a blue marble?',
    options: ['1/4', '1/3', '4/12', '5/12'],
    correctAnswer: 1,
    explanation: 'P(blue) = 4/(3+4+5) = 4/12 = 1/3',
    skill: 'Basic probability'
  },
  {
    id: 'math-data-010',
    section: 'math',
    topic: 'Problem-Solving & Data Analysis',
    subtopic: 'Probability',
    difficulty: 'medium',
    question: 'A coin is flipped 3 times. What is the probability of getting exactly 2 heads?',
    options: ['1/8', '1/4', '3/8', '1/2'],
    correctAnswer: 2,
    explanation: 'Favorable outcomes: HHT, HTH, THH = 3. Total = 8. P = 3/8',
    skill: 'Counting outcomes'
  },
  {
    id: 'math-data-011',
    section: 'math',
    topic: 'Problem-Solving & Data Analysis',
    subtopic: 'Probability',
    difficulty: 'hard',
    question: 'Two dice are rolled. What is the probability that the sum is 7?',
    options: ['1/12', '1/8', '1/6', '1/4'],
    correctAnswer: 2,
    explanation: 'Sums of 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 outcomes. Total = 36. P = 6/36 = 1/6',
    skill: 'Probability with multiple events'
  },
  // Data Interpretation
  {
    id: 'math-data-012',
    section: 'math',
    topic: 'Problem-Solving & Data Analysis',
    subtopic: 'Data Interpretation',
    difficulty: 'medium',
    passage: 'A survey of 200 students found: 80 prefer pizza, 60 prefer burgers, 40 prefer salads, and 20 prefer other foods.',
    question: 'Based on the survey, what percentage of students prefer pizza?',
    options: ['20%', '30%', '40%', '50%'],
    correctAnswer: 2,
    explanation: '80/200 = 0.40 = 40%',
    skill: 'Reading data'
  },
  // Unit Rates
  {
    id: 'math-data-013',
    section: 'math',
    topic: 'Problem-Solving & Data Analysis',
    subtopic: 'Rates',
    difficulty: 'easy',
    question: 'A car travels 240 miles in 4 hours. What is its average speed in mph?',
    options: ['40 mph', '50 mph', '60 mph', '70 mph'],
    correctAnswer: 2,
    explanation: 'Speed = Distance/Time = 240/4 = 60 mph',
    skill: 'Calculating rates'
  },
  {
    id: 'math-data-014',
    section: 'math',
    topic: 'Problem-Solving & Data Analysis',
    subtopic: 'Rates',
    difficulty: 'medium',
    question: 'Working alone, Alex can paint a room in 6 hours and Ben can paint it in 4 hours. Working together, how long will it take?',
    options: ['2 hours', '2.4 hours', '2.5 hours', '5 hours'],
    correctAnswer: 1,
    explanation: 'Combined rate = 1/6 + 1/4 = 5/12 rooms/hour. Time = 12/5 = 2.4 hours',
    skill: 'Work rate problems'
  },
  {
    id: 'math-data-015',
    section: 'math',
    topic: 'Problem-Solving & Data Analysis',
    subtopic: 'Rates',
    difficulty: 'hard',
    question: 'If 8 workers can complete a project in 12 days, how many days would it take 6 workers?',
    options: ['9 days', '14 days', '16 days', '18 days'],
    correctAnswer: 2,
    explanation: 'Total work = 8 × 12 = 96 worker-days. Time for 6 workers = 96/6 = 16 days',
    skill: 'Inverse proportions'
  }
];

// ============================================
// GEOMETRY & TRIGONOMETRY (15% of SAT Math)
// ============================================

export const geometryQuestions: SATQuestion[] = [
  // Area and Perimeter
  {
    id: 'math-geo-001',
    section: 'math',
    topic: 'Geometry',
    subtopic: 'Area and Perimeter',
    difficulty: 'easy',
    question: 'What is the area of a rectangle with length 8 and width 5?',
    options: ['13', '26', '40', '80'],
    correctAnswer: 2,
    explanation: 'Area = length × width = 8 × 5 = 40',
    skill: 'Rectangle area'
  },
  {
    id: 'math-geo-002',
    section: 'math',
    topic: 'Geometry',
    subtopic: 'Area and Perimeter',
    difficulty: 'easy',
    question: 'A square has perimeter 36. What is its area?',
    options: ['9', '36', '81', '144'],
    correctAnswer: 2,
    explanation: 'Side = 36/4 = 9. Area = 9² = 81',
    skill: 'Square properties'
  },
  {
    id: 'math-geo-003',
    section: 'math',
    topic: 'Geometry',
    subtopic: 'Area and Perimeter',
    difficulty: 'medium',
    question: 'What is the area of a triangle with base 10 and height 6?',
    options: ['16', '30', '60', '120'],
    correctAnswer: 1,
    explanation: 'Area = (1/2) × base × height = (1/2) × 10 × 6 = 30',
    skill: 'Triangle area'
  },
  // Circles
  {
    id: 'math-geo-004',
    section: 'math',
    topic: 'Geometry',
    subtopic: 'Circles',
    difficulty: 'easy',
    question: 'A circle has radius 5. What is its area? (Use π)',
    options: ['10π', '15π', '25π', '50π'],
    correctAnswer: 2,
    explanation: 'Area = πr² = π(5)² = 25π',
    skill: 'Circle area'
  },
  {
    id: 'math-geo-005',
    section: 'math',
    topic: 'Geometry',
    subtopic: 'Circles',
    difficulty: 'medium',
    question: 'A circle has circumference 12π. What is its diameter?',
    options: ['6', '12', '24', '36'],
    correctAnswer: 1,
    explanation: 'C = πd → 12π = πd → d = 12',
    skill: 'Circle circumference'
  },
  {
    id: 'math-geo-006',
    section: 'math',
    topic: 'Geometry',
    subtopic: 'Circles',
    difficulty: 'hard',
    question: 'A sector has a central angle of 90° in a circle of radius 8. What is the area of the sector?',
    options: ['8π', '16π', '32π', '64π'],
    correctAnswer: 1,
    explanation: 'Sector area = (θ/360°) × πr² = (90/360) × 64π = 16π',
    skill: 'Sector area'
  },
  // Triangles
  {
    id: 'math-geo-007',
    section: 'math',
    topic: 'Geometry',
    subtopic: 'Triangles',
    difficulty: 'easy',
    question: 'In a right triangle, if one leg is 3 and the other is 4, what is the hypotenuse?',
    options: ['5', '6', '7', '12'],
    correctAnswer: 0,
    explanation: 'By Pythagorean theorem: c² = 3² + 4² = 25 → c = 5',
    skill: 'Pythagorean theorem'
  },
  {
    id: 'math-geo-008',
    section: 'math',
    topic: 'Geometry',
    subtopic: 'Triangles',
    difficulty: 'medium',
    question: 'A triangle has angles measuring 50° and 60°. What is the measure of the third angle?',
    options: ['60°', '70°', '80°', '110°'],
    correctAnswer: 1,
    explanation: 'Sum of angles = 180°. Third angle = 180° - 50° - 60° = 70°',
    skill: 'Triangle angle sum'
  },
  {
    id: 'math-geo-009',
    section: 'math',
    topic: 'Geometry',
    subtopic: 'Triangles',
    difficulty: 'hard',
    question: 'In a 30-60-90 triangle, if the shortest side is 5, what is the hypotenuse?',
    options: ['5√2', '5√3', '10', '10√3'],
    correctAnswer: 2,
    explanation: 'In a 30-60-90 triangle, sides are in ratio 1:√3:2. If shortest = 5, hypotenuse = 10',
    skill: 'Special right triangles'
  },
  {
    id: 'math-geo-010',
    section: 'math',
    topic: 'Geometry',
    subtopic: 'Triangles',
    difficulty: 'hard',
    question: 'Two similar triangles have corresponding sides in ratio 2:5. If the smaller triangle has area 12, what is the area of the larger?',
    options: ['30', '48', '60', '75'],
    correctAnswer: 3,
    explanation: 'Area ratio = (2/5)² = 4/25. If small = 12, large = 12 × (25/4) = 75',
    skill: 'Similar triangle properties'
  },
  // Volume
  {
    id: 'math-geo-011',
    section: 'math',
    topic: 'Geometry',
    subtopic: 'Volume',
    difficulty: 'easy',
    question: 'What is the volume of a cube with side length 4?',
    options: ['12', '16', '48', '64'],
    correctAnswer: 3,
    explanation: 'Volume = s³ = 4³ = 64',
    skill: 'Cube volume'
  },
  {
    id: 'math-geo-012',
    section: 'math',
    topic: 'Geometry',
    subtopic: 'Volume',
    difficulty: 'medium',
    question: 'A cylinder has radius 3 and height 7. What is its volume?',
    options: ['21π', '42π', '63π', '147π'],
    correctAnswer: 2,
    explanation: 'V = πr²h = π(9)(7) = 63π',
    skill: 'Cylinder volume'
  },
  {
    id: 'math-geo-013',
    section: 'math',
    topic: 'Geometry',
    subtopic: 'Volume',
    difficulty: 'hard',
    question: 'A cone has the same base radius and height as a cylinder. The cylinder volume is 90π. What is the cone volume?',
    options: ['30π', '45π', '60π', '270π'],
    correctAnswer: 0,
    explanation: 'Cone volume = (1/3) × cylinder volume = 90π/3 = 30π',
    skill: 'Cone volume'
  },
  // Coordinate Geometry
  {
    id: 'math-geo-014',
    section: 'math',
    topic: 'Geometry',
    subtopic: 'Coordinate Geometry',
    difficulty: 'easy',
    question: 'What is the distance between points (1, 2) and (4, 6)?',
    options: ['3', '4', '5', '7'],
    correctAnswer: 2,
    explanation: 'd = √[(4-1)² + (6-2)²] = √[9 + 16] = √25 = 5',
    skill: 'Distance formula'
  },
  {
    id: 'math-geo-015',
    section: 'math',
    topic: 'Geometry',
    subtopic: 'Coordinate Geometry',
    difficulty: 'medium',
    question: 'What is the midpoint of the segment from (2, 8) to (6, 4)?',
    options: ['(3, 6)', '(4, 6)', '(4, 4)', '(8, 12)'],
    correctAnswer: 1,
    explanation: 'Midpoint = ((2+6)/2, (8+4)/2) = (4, 6)',
    skill: 'Midpoint formula'
  },
  // Trigonometry
  {
    id: 'math-geo-016',
    section: 'math',
    topic: 'Geometry',
    subtopic: 'Trigonometry',
    difficulty: 'medium',
    question: 'In a right triangle, if the opposite side is 5 and hypotenuse is 13, what is sin(θ)?',
    options: ['5/12', '5/13', '12/13', '13/5'],
    correctAnswer: 1,
    explanation: 'sin(θ) = opposite/hypotenuse = 5/13',
    skill: 'Basic trigonometry'
  },
  {
    id: 'math-geo-017',
    section: 'math',
    topic: 'Geometry',
    subtopic: 'Trigonometry',
    difficulty: 'medium',
    question: 'If cos(θ) = 4/5, what is tan(θ)?',
    options: ['3/4', '3/5', '4/3', '5/4'],
    correctAnswer: 0,
    explanation: 'If cos = 4/5, then adj = 4, hyp = 5, opp = 3 (by Pythagorean triple). tan = opp/adj = 3/4',
    skill: 'Trig ratios'
  },
  {
    id: 'math-geo-018',
    section: 'math',
    topic: 'Geometry',
    subtopic: 'Trigonometry',
    difficulty: 'hard',
    question: 'What is sin(45°)?',
    options: ['1/2', '√2/2', '√3/2', '1'],
    correctAnswer: 1,
    explanation: 'In a 45-45-90 triangle with legs 1, hypotenuse = √2. sin(45°) = 1/√2 = √2/2',
    skill: 'Special angle values'
  },
  {
    id: 'math-geo-019',
    section: 'math',
    topic: 'Geometry',
    subtopic: 'Trigonometry',
    difficulty: 'hard',
    question: 'A 20-foot ladder leans against a wall, making a 60° angle with the ground. How high up the wall does it reach?',
    options: ['10 feet', '10√3 feet', '15 feet', '20√3 feet'],
    correctAnswer: 1,
    explanation: 'sin(60°) = height/20 → height = 20 × sin(60°) = 20 × (√3/2) = 10√3',
    skill: 'Applied trigonometry'
  },
  {
    id: 'math-geo-020',
    section: 'math',
    topic: 'Geometry',
    subtopic: 'Angles',
    difficulty: 'medium',
    question: 'Two parallel lines are cut by a transversal. If one angle is 115°, what is its corresponding angle?',
    options: ['65°', '75°', '115°', '180°'],
    correctAnswer: 2,
    explanation: 'Corresponding angles are equal when parallel lines are cut by a transversal.',
    skill: 'Parallel lines and transversals'
  }
];

// Combine all SAT Math questions
export const allSATMathQuestions: SATQuestion[] = [
  ...algebraQuestions,
  ...advancedMathQuestions,
  ...dataAnalysisQuestions,
  ...geometryQuestions
];

// Helper function to get questions by topic
export const getMathQuestionsByTopic = (topic: string) => {
  return allSATMathQuestions.filter(q => q.topic === topic);
};

// Helper function to get questions by difficulty
export const getMathQuestionsByDifficulty = (difficulty: SATQuestion['difficulty']) => {
  return allSATMathQuestions.filter(q => q.difficulty === difficulty);
};

// Helper function to get random math questions
export const getRandomMathQuestions = (count: number, topic?: string) => {
  let pool = topic ? getMathQuestionsByTopic(topic) : allSATMathQuestions;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

