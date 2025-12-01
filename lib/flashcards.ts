// SAT Flashcard Decks - Comprehensive Study Materials

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface FlashcardDeck {
  name: string;
  description: string;
  icon: string;
  cards: Flashcard[];
}

export const flashcardDecks: Record<string, FlashcardDeck> = {
  // SAT VOCABULARY FLASHCARDS
  vocabulary: {
    name: 'SAT Vocabulary',
    description: 'Essential vocabulary words for Reading & Writing',
    icon: '📚',
    cards: [
      { id: 'v1', front: 'Ambiguous', back: 'Having more than one possible meaning or interpretation; unclear. Example: "The ambiguous instructions left everyone confused."', difficulty: 'medium' },
      { id: 'v2', front: 'Analogous', back: 'Comparable in certain respects; similar or equivalent in function. Example: "The relationship is analogous to that of a parent and child."', difficulty: 'medium' },
      { id: 'v3', front: 'Anomaly', back: 'Something that deviates from what is standard, normal, or expected. Example: "The warm weather in December was an anomaly."', difficulty: 'medium' },
      { id: 'v4', front: 'Antithesis', back: 'The exact opposite; a contrast or opposition of ideas. Example: "His behavior was the antithesis of what we expected."', difficulty: 'hard' },
      { id: 'v5', front: 'Articulate', back: 'Able to express oneself clearly and effectively; well-spoken. Example: "She gave an articulate presentation on climate change."', difficulty: 'easy' },
      { id: 'v6', front: 'Bolster', back: 'To support, strengthen, or reinforce. Example: "The new evidence bolstered her argument."', difficulty: 'medium' },
      { id: 'v7', front: 'Candid', back: 'Truthful and straightforward; frank and honest. Example: "He gave a candid assessment of the situation."', difficulty: 'easy' },
      { id: 'v8', front: 'Comprehensive', back: 'Complete and including all or nearly all elements; thorough. Example: "The report provided a comprehensive analysis."', difficulty: 'easy' },
      { id: 'v9', front: 'Concise', back: 'Expressing much in few words; brief but comprehensive. Example: "Her concise summary covered all the key points."', difficulty: 'easy' },
      { id: 'v10', front: 'Conjecture', back: 'An opinion or conclusion based on incomplete information; a guess. Example: "Without evidence, it remains mere conjecture."', difficulty: 'medium' },
      { id: 'v11', front: 'Corroborate', back: 'To confirm or give support to a statement, theory, or finding. Example: "The witness testimony corroborated the defendant\'s alibi."', difficulty: 'medium' },
      { id: 'v12', front: 'Discrepancy', back: 'A lack of compatibility or similarity; an inconsistency. Example: "There was a discrepancy between the two accounts."', difficulty: 'medium' },
      { id: 'v13', front: 'Empirical', back: 'Based on observation or experience rather than theory or pure logic. Example: "The study provides empirical evidence for the hypothesis."', difficulty: 'medium' },
      { id: 'v14', front: 'Enhance', back: 'To intensify, increase, or improve the quality, value, or extent of. Example: "The software update enhanced performance."', difficulty: 'easy' },
      { id: 'v15', front: 'Ephemeral', back: 'Lasting for a very short time; transient. Example: "Fame can be ephemeral in the age of social media."', difficulty: 'hard' },
      { id: 'v16', front: 'Exacerbate', back: 'To make a problem, bad situation, or negative feeling worse. Example: "The drought exacerbated the food shortage."', difficulty: 'hard' },
      { id: 'v17', front: 'Explicit', back: 'Stated clearly and in detail, leaving no room for confusion or doubt. Example: "The instructions were explicit about the deadline."', difficulty: 'easy' },
      { id: 'v18', front: 'Facilitate', back: 'To make an action or process easier; to assist. Example: "Technology can facilitate communication."', difficulty: 'easy' },
      { id: 'v19', front: 'Fervent', back: 'Having or displaying passionate intensity. Example: "She was a fervent supporter of education reform."', difficulty: 'medium' },
      { id: 'v20', front: 'Futile', back: 'Incapable of producing any useful result; pointless. Example: "Their attempts to negotiate proved futile."', difficulty: 'easy' },
      { id: 'v21', front: 'Implicit', back: 'Implied though not directly expressed; understood. Example: "There was an implicit agreement between them."', difficulty: 'medium' },
      { id: 'v22', front: 'Mitigate', back: 'To make less severe, serious, or painful. Example: "Steps were taken to mitigate the environmental impact."', difficulty: 'medium' },
      { id: 'v23', front: 'Nuanced', back: 'Characterized by subtle shades of meaning or expression. Example: "Her nuanced performance captured the character\'s complexity."', difficulty: 'medium' },
      { id: 'v24', front: 'Paradox', back: 'A seemingly contradictory statement that may nonetheless be true. Example: "It\'s a paradox that standing still can be moving backward."', difficulty: 'medium' },
      { id: 'v25', front: 'Pragmatic', back: 'Dealing with things sensibly and realistically; practical. Example: "We need a pragmatic approach to solving this problem."', difficulty: 'medium' },
      { id: 'v26', front: 'Precedent', back: 'An earlier event or action that serves as an example or guide. Example: "The court ruling set a precedent for future cases."', difficulty: 'medium' },
      { id: 'v27', front: 'Substantiate', back: 'To provide evidence to support or prove the truth of something. Example: "Can you substantiate your claims with data?"', difficulty: 'medium' },
      { id: 'v28', front: 'Undermine', back: 'To weaken or damage, especially gradually. Example: "The scandal undermined public trust in the government."', difficulty: 'easy' },
      { id: 'v29', front: 'Verbose', back: 'Using or expressed in more words than are needed. Example: "His verbose writing style made the essay difficult to read."', difficulty: 'medium' },
      { id: 'v30', front: 'Vindicate', back: 'To clear someone of blame or suspicion; to justify. Example: "The new evidence vindicated the accused."', difficulty: 'hard' }
    ]
  },

  // SAT GRAMMAR & CONVENTIONS
  grammar: {
    name: 'Grammar & Conventions',
    description: 'Rules for Standard English Conventions',
    icon: '✍️',
    cards: [
      { id: 'g1', front: 'Subject-Verb Agreement', back: 'Singular subjects take singular verbs; plural subjects take plural verbs. Watch for words between subject and verb that might confuse. Example: "The group of students IS meeting" (group is singular).', difficulty: 'easy' },
      { id: 'g2', front: 'Pronoun-Antecedent Agreement', back: 'Pronouns must agree with their antecedents in number and gender. Example: "Each student must bring THEIR book" is informal; formal writing uses "his or her."', difficulty: 'medium' },
      { id: 'g3', front: 'Semicolon Usage', back: 'Use semicolons to: 1) Join two related independent clauses without a conjunction. 2) Separate list items containing commas. Example: "She studied hard; she passed the test."', difficulty: 'medium' },
      { id: 'g4', front: 'Colon Usage', back: 'Use a colon after a COMPLETE sentence to introduce a list, explanation, or elaboration. Never use a colon after "such as" or "including." Example: "She had one goal: to win."', difficulty: 'medium' },
      { id: 'g5', front: 'Dangling Modifier', back: 'A modifying phrase that doesn\'t clearly modify any word in the sentence. The subject should immediately follow the modifier. Wrong: "Walking to school, the rain started." Right: "Walking to school, I got caught in the rain."', difficulty: 'medium' },
      { id: 'g6', front: 'Parallel Structure', back: 'Items in a list or comparison should have the same grammatical form. Wrong: "I like reading, to write, and swimming." Right: "I like reading, writing, and swimming."', difficulty: 'medium' },
      { id: 'g7', front: 'Who vs. Whom', back: '"Who" is for subjects (he/she/they). "Whom" is for objects (him/her/them). Test: Replace with he/him. "Who did it?" (He did it.) "To whom was it given?" (It was given to him.)', difficulty: 'medium' },
      { id: 'g8', front: 'Comma Splice', back: 'Error: Joining two independent clauses with only a comma. Fix with: 1) Period, 2) Semicolon, 3) Comma + conjunction. Wrong: "I studied, I passed." Right: "I studied, and I passed."', difficulty: 'easy' },
      { id: 'g9', front: 'Run-on Sentence', back: 'Two independent clauses joined without proper punctuation or conjunction. Fix by adding punctuation (period, semicolon) or a coordinating conjunction.', difficulty: 'easy' },
      { id: 'g10', front: 'Fragment', back: 'An incomplete sentence missing a subject, verb, or complete thought. Often starts with subordinating conjunctions (because, although). Fix by combining with a main clause.', difficulty: 'easy' },
      { id: 'g11', front: 'Affect vs. Effect', back: 'AFFECT is usually a VERB (to influence). EFFECT is usually a NOUN (a result). "The medication affects the patient." "The effect was positive."', difficulty: 'easy' },
      { id: 'g12', front: 'Its vs. It\'s', back: 'ITS = possessive (no apostrophe, like his/her). IT\'S = contraction of "it is" or "it has." "The dog wagged its tail." "It\'s a nice day."', difficulty: 'easy' },
      { id: 'g13', front: 'Fewer vs. Less', back: 'FEWER for countable nouns (fewer books, fewer people). LESS for uncountable nouns (less water, less time, less money).', difficulty: 'easy' },
      { id: 'g14', front: 'Past Perfect Tense', back: 'HAD + past participle. Shows an action completed before another past action. Example: "By the time we arrived, the movie HAD STARTED."', difficulty: 'medium' },
      { id: 'g15', front: 'Apostrophe Rules', back: 'Singular possessive: add \'s (dog\'s). Plural possessive: add \' after s (dogs\'). Irregular plural: add \'s (children\'s). Never use apostrophes for plurals.', difficulty: 'easy' },
      { id: 'g16', front: 'Transition: Addition', back: 'Words that add information: furthermore, moreover, in addition, also, additionally. Example: "The study was thorough; moreover, it was well-documented."', difficulty: 'easy' },
      { id: 'g17', front: 'Transition: Contrast', back: 'Words that show contrast: however, nevertheless, nonetheless, on the other hand, yet, but. Example: "The plan seemed perfect; however, it failed."', difficulty: 'easy' },
      { id: 'g18', front: 'Transition: Cause/Effect', back: 'Words showing cause/effect: therefore, consequently, as a result, thus, hence. Example: "It rained heavily; therefore, the game was canceled."', difficulty: 'easy' },
      { id: 'g19', front: 'Transition: Example', back: 'Words that introduce examples: for instance, for example, specifically, in particular. Example: "Many fruits are healthy; for example, apples contain fiber."', difficulty: 'easy' },
      { id: 'g20', front: 'Wordiness', back: 'Avoid redundancy and unnecessary words. Wrong: "In my personal opinion, I think that..." Right: "I believe..." Wrong: "Due to the fact that" Right: "Because"', difficulty: 'medium' }
    ]
  },

  // SAT ALGEBRA FLASHCARDS
  algebra: {
    name: 'Algebra',
    description: 'Essential algebra formulas and concepts',
    icon: '📐',
    cards: [
      { id: 'a1', front: 'Slope-Intercept Form', back: 'y = mx + b, where m is the slope and b is the y-intercept. Use to quickly identify slope and where line crosses y-axis.', difficulty: 'easy' },
      { id: 'a2', front: 'Point-Slope Form', back: 'y - y₁ = m(x - x₁), where m is slope and (x₁, y₁) is a point. Use when you know a point and slope.', difficulty: 'medium' },
      { id: 'a3', front: 'Standard Form of Linear Equation', back: 'Ax + By = C, where A, B, C are integers. To find x-intercept: set y=0. To find y-intercept: set x=0.', difficulty: 'medium' },
      { id: 'a4', front: 'Slope Formula', back: 'm = (y₂ - y₁)/(x₂ - x₁) = rise/run. Positive slope: line goes up. Negative slope: line goes down. Zero slope: horizontal. Undefined: vertical.', difficulty: 'easy' },
      { id: 'a5', front: 'Parallel Lines', back: 'Have EQUAL slopes (m₁ = m₂). Never intersect. Same direction, different y-intercepts.', difficulty: 'easy' },
      { id: 'a6', front: 'Perpendicular Lines', back: 'Have slopes that are NEGATIVE RECIPROCALS (m₁ × m₂ = -1). If one slope is 2, perpendicular slope is -1/2.', difficulty: 'medium' },
      { id: 'a7', front: 'System of Equations - Substitution', back: 'Solve one equation for a variable, substitute into the other. Example: If x = 2y, substitute into 3x + y = 14.', difficulty: 'medium' },
      { id: 'a8', front: 'System of Equations - Elimination', back: 'Add or subtract equations to eliminate one variable. Multiply equations if needed to make coefficients match.', difficulty: 'medium' },
      { id: 'a9', front: 'No Solution (Systems)', back: 'Parallel lines (same slope, different y-intercepts). When solved, you get a FALSE statement like 0 = 5.', difficulty: 'medium' },
      { id: 'a10', front: 'Infinite Solutions (Systems)', back: 'Same line (identical equations). When solved, you get a TRUE statement like 0 = 0 or 3 = 3.', difficulty: 'medium' },
      { id: 'a11', front: 'Absolute Value Equations', back: '|x| = a has two solutions: x = a and x = -a (if a > 0). |x - 3| = 5 means x - 3 = 5 OR x - 3 = -5.', difficulty: 'medium' },
      { id: 'a12', front: 'Absolute Value Inequalities (<)', back: '|x| < a becomes -a < x < a (compound inequality). |x - 2| < 3 becomes -3 < x - 2 < 3, so -1 < x < 5.', difficulty: 'hard' },
      { id: 'a13', front: 'Absolute Value Inequalities (>)', back: '|x| > a becomes x < -a OR x > a. |x + 1| > 4 becomes x + 1 < -4 OR x + 1 > 4, so x < -5 OR x > 3.', difficulty: 'hard' },
      { id: 'a14', front: 'Function Notation', back: 'f(x) means "f of x" - the output when x is the input. f(3) means substitute 3 for x. If f(x) = 2x + 1, then f(3) = 7.', difficulty: 'easy' },
      { id: 'a15', front: 'Domain', back: 'All possible INPUT values (x-values) for a function. Restrictions: no division by zero, no negative under even roots.', difficulty: 'medium' },
      { id: 'a16', front: 'Range', back: 'All possible OUTPUT values (y-values) for a function. Look at the graph\'s vertical extent or analyze the function.', difficulty: 'medium' },
      { id: 'a17', front: 'Inequality: Flip the Sign', back: 'When multiplying or dividing by a NEGATIVE number, REVERSE the inequality sign. -2x > 6 becomes x < -3.', difficulty: 'easy' },
      { id: 'a18', front: 'Distance Formula', back: 'd = √[(x₂-x₁)² + (y₂-y₁)²]. Derived from Pythagorean theorem. Find distance between two points.', difficulty: 'medium' },
      { id: 'a19', front: 'Midpoint Formula', back: 'Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2). Average of x-coordinates and y-coordinates.', difficulty: 'easy' },
      { id: 'a20', front: 'Linear Equation Word Problem', back: 'Identify: starting value (y-intercept), rate of change (slope). Example: $50 base + $0.10/mile → y = 0.10x + 50', difficulty: 'medium' }
    ]
  },

  // SAT ADVANCED MATH
  advancedMath: {
    name: 'Advanced Math',
    description: 'Quadratics, polynomials, and exponentials',
    icon: '🔢',
    cards: [
      { id: 'am1', front: 'Quadratic Formula', back: 'x = (-b ± √(b² - 4ac)) / 2a, for ax² + bx + c = 0. Memorize this formula!', difficulty: 'medium' },
      { id: 'am2', front: 'Discriminant', back: 'b² - 4ac determines nature of roots. > 0: two real solutions. = 0: one real solution. < 0: no real solutions (complex).', difficulty: 'medium' },
      { id: 'am3', front: 'Vertex Form', back: 'y = a(x - h)² + k, where (h, k) is the vertex. a > 0: parabola opens UP (minimum). a < 0: opens DOWN (maximum).', difficulty: 'medium' },
      { id: 'am4', front: 'Finding Vertex from Standard Form', back: 'For y = ax² + bx + c: x-coordinate = -b/(2a). Substitute to find y-coordinate.', difficulty: 'medium' },
      { id: 'am5', front: 'Factoring: Difference of Squares', back: 'a² - b² = (a + b)(a - b). Example: x² - 9 = (x + 3)(x - 3).', difficulty: 'easy' },
      { id: 'am6', front: 'Factoring: Perfect Square Trinomial', back: 'a² + 2ab + b² = (a + b)². a² - 2ab + b² = (a - b)². Example: x² + 6x + 9 = (x + 3)².', difficulty: 'medium' },
      { id: 'am7', front: 'Sum of Roots', back: 'For ax² + bx + c = 0, sum of roots = -b/a. Example: x² - 5x + 6 = 0, sum = 5.', difficulty: 'hard' },
      { id: 'am8', front: 'Product of Roots', back: 'For ax² + bx + c = 0, product of roots = c/a. Example: x² - 5x + 6 = 0, product = 6.', difficulty: 'hard' },
      { id: 'am9', front: 'Exponent: Product Rule', back: 'aᵐ × aⁿ = aᵐ⁺ⁿ. Same base, ADD exponents. Example: 2³ × 2⁴ = 2⁷.', difficulty: 'easy' },
      { id: 'am10', front: 'Exponent: Quotient Rule', back: 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ. Same base, SUBTRACT exponents. Example: x⁵ ÷ x² = x³.', difficulty: 'easy' },
      { id: 'am11', front: 'Exponent: Power Rule', back: '(aᵐ)ⁿ = aᵐⁿ. Power of a power, MULTIPLY exponents. Example: (x²)³ = x⁶.', difficulty: 'easy' },
      { id: 'am12', front: 'Zero and Negative Exponents', back: 'a⁰ = 1 (any nonzero number). a⁻ⁿ = 1/aⁿ. Example: 5⁰ = 1, 2⁻³ = 1/8.', difficulty: 'easy' },
      { id: 'am13', front: 'Fractional Exponents', back: 'a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ. Example: 8^(2/3) = ³√(8²) = ³√64 = 4, OR (³√8)² = 2² = 4.', difficulty: 'medium' },
      { id: 'am14', front: 'Exponential Growth', back: 'y = a(1 + r)ᵗ, where a = initial, r = rate, t = time. Doubles: y = a(2)^(t/d), d = doubling time.', difficulty: 'medium' },
      { id: 'am15', front: 'Exponential Decay', back: 'y = a(1 - r)ᵗ, or y = a(1/2)^(t/h), where h = half-life. Amount decreases over time.', difficulty: 'medium' },
      { id: 'am16', front: 'Simplifying Radicals', back: 'Factor out perfect squares. √75 = √(25 × 3) = 5√3. √(x⁶) = x³.', difficulty: 'easy' },
      { id: 'am17', front: 'Rationalizing Denominator', back: 'Multiply by conjugate or matching radical. 1/√3 = √3/3. 1/(2+√3) = (2-√3)/((2+√3)(2-√3)) = (2-√3)/1.', difficulty: 'medium' },
      { id: 'am18', front: 'Polynomial Long Division', back: 'Divide polynomials like long division with numbers. Used to factor or find remainders.', difficulty: 'hard' },
      { id: 'am19', front: 'Remainder Theorem', back: 'When p(x) is divided by (x - a), the remainder equals p(a). Example: p(x) ÷ (x - 2), remainder = p(2).', difficulty: 'hard' },
      { id: 'am20', front: 'Factor Theorem', back: 'If p(a) = 0, then (x - a) is a factor of p(x). Example: if p(3) = 0, then (x - 3) is a factor.', difficulty: 'hard' }
    ]
  },

  // SAT GEOMETRY & TRIGONOMETRY
  geometry: {
    name: 'Geometry & Trigonometry',
    description: 'Shapes, angles, and trigonometric ratios',
    icon: '📐',
    cards: [
      { id: 'geo1', front: 'Pythagorean Theorem', back: 'a² + b² = c², where c is the hypotenuse. Common triples: 3-4-5, 5-12-13, 8-15-17, 7-24-25.', difficulty: 'easy' },
      { id: 'geo2', front: '30-60-90 Triangle', back: 'Sides in ratio 1 : √3 : 2. Short leg : Long leg : Hypotenuse. If short leg = x, long leg = x√3, hypotenuse = 2x.', difficulty: 'medium' },
      { id: 'geo3', front: '45-45-90 Triangle', back: 'Sides in ratio 1 : 1 : √2. Leg : Leg : Hypotenuse. If leg = x, hypotenuse = x√2.', difficulty: 'medium' },
      { id: 'geo4', front: 'SOH CAH TOA', back: 'Sin = Opposite/Hypotenuse. Cos = Adjacent/Hypotenuse. Tan = Opposite/Adjacent. Remember: Some Old Horse...', difficulty: 'easy' },
      { id: 'geo5', front: 'Special Angle: 30°', back: 'sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3 = √3/3.', difficulty: 'medium' },
      { id: 'geo6', front: 'Special Angle: 45°', back: 'sin 45° = √2/2, cos 45° = √2/2, tan 45° = 1.', difficulty: 'medium' },
      { id: 'geo7', front: 'Special Angle: 60°', back: 'sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3.', difficulty: 'medium' },
      { id: 'geo8', front: 'Circle: Area', back: 'A = πr². Remember: "Area equals pie are squared."', difficulty: 'easy' },
      { id: 'geo9', front: 'Circle: Circumference', back: 'C = 2πr = πd. Distance around the circle.', difficulty: 'easy' },
      { id: 'geo10', front: 'Arc Length', back: 'Arc = (θ/360°) × 2πr, where θ is the central angle in degrees. Fraction of circumference.', difficulty: 'medium' },
      { id: 'geo11', front: 'Sector Area', back: 'Sector = (θ/360°) × πr². Fraction of circle area. Like a "pizza slice."', difficulty: 'medium' },
      { id: 'geo12', front: 'Central Angle and Arc', back: 'Central angle = arc measure (in degrees). An inscribed angle is HALF the central angle.', difficulty: 'medium' },
      { id: 'geo13', front: 'Inscribed Angle', back: 'Inscribed angle = (1/2) × intercepted arc. An inscribed angle that intercepts a semicircle is 90°.', difficulty: 'medium' },
      { id: 'geo14', front: 'Triangle Angle Sum', back: 'Sum of interior angles = 180°. If two angles are known, subtract from 180° to find the third.', difficulty: 'easy' },
      { id: 'geo15', front: 'Exterior Angle Theorem', back: 'An exterior angle of a triangle equals the sum of the two non-adjacent interior angles.', difficulty: 'medium' },
      { id: 'geo16', front: 'Similar Triangles', back: 'Corresponding angles are equal, sides are proportional. If triangles are similar with ratio k, areas have ratio k².', difficulty: 'medium' },
      { id: 'geo17', front: 'Area of Triangle', back: 'A = (1/2) × base × height. Height must be perpendicular to base.', difficulty: 'easy' },
      { id: 'geo18', front: 'Volume of Rectangular Prism', back: 'V = length × width × height = lwh.', difficulty: 'easy' },
      { id: 'geo19', front: 'Volume of Cylinder', back: 'V = πr²h. Area of base times height.', difficulty: 'easy' },
      { id: 'geo20', front: 'Volume of Cone', back: 'V = (1/3)πr²h. One-third of cylinder with same base and height.', difficulty: 'medium' },
      { id: 'geo21', front: 'Volume of Sphere', back: 'V = (4/3)πr³. Surface area = 4πr².', difficulty: 'medium' },
      { id: 'geo22', front: 'Parallel Lines + Transversal', back: 'Corresponding angles are equal. Alternate interior angles are equal. Same-side interior angles are supplementary (sum to 180°).', difficulty: 'medium' },
      { id: 'geo23', front: 'Complementary vs. Supplementary', back: 'Complementary angles sum to 90°. Supplementary angles sum to 180°.', difficulty: 'easy' },
      { id: 'geo24', front: 'Vertical Angles', back: 'Opposite angles formed by intersecting lines are EQUAL. They form an X shape.', difficulty: 'easy' },
      { id: 'geo25', front: 'Polygon Interior Angles', back: 'Sum = (n - 2) × 180°, where n = number of sides. Each angle of regular polygon = sum ÷ n.', difficulty: 'medium' }
    ]
  },

  // SAT DATA ANALYSIS
  dataAnalysis: {
    name: 'Data Analysis',
    description: 'Statistics, probability, and data interpretation',
    icon: '📊',
    cards: [
      { id: 'd1', front: 'Mean (Average)', back: 'Sum of all values ÷ number of values. Affected by outliers.', difficulty: 'easy' },
      { id: 'd2', front: 'Median', back: 'Middle value when data is ordered. For even count: average of two middle values. NOT affected by outliers.', difficulty: 'easy' },
      { id: 'd3', front: 'Mode', back: 'Most frequently occurring value. A set can have no mode, one mode, or multiple modes.', difficulty: 'easy' },
      { id: 'd4', front: 'Range', back: 'Maximum value - minimum value. Measures spread of data.', difficulty: 'easy' },
      { id: 'd5', front: 'Standard Deviation', back: 'Measures how spread out data is from the mean. Low SD = data clustered near mean. High SD = data spread out.', difficulty: 'medium' },
      { id: 'd6', front: 'Probability Formula', back: 'P(event) = favorable outcomes ÷ total possible outcomes. Always between 0 and 1 (or 0% to 100%).', difficulty: 'easy' },
      { id: 'd7', front: 'Independent Events', back: 'Events where one doesn\'t affect the other. P(A and B) = P(A) × P(B). Example: flipping two coins.', difficulty: 'medium' },
      { id: 'd8', front: 'Dependent Events', back: 'When one event affects the probability of another. P(A then B) = P(A) × P(B|A). Example: drawing cards without replacement.', difficulty: 'medium' },
      { id: 'd9', front: 'Percent Change', back: '((New - Original) / Original) × 100%. Positive = increase, negative = decrease.', difficulty: 'easy' },
      { id: 'd10', front: 'Percent of a Number', back: 'To find x% of y: convert to decimal (x/100) and multiply by y. 25% of 80 = 0.25 × 80 = 20.', difficulty: 'easy' },
      { id: 'd11', front: 'Ratio', back: 'Comparison of two quantities. a:b or a/b. Scale up/down by multiplying both parts by same number.', difficulty: 'easy' },
      { id: 'd12', front: 'Proportion', back: 'Equation stating two ratios are equal: a/b = c/d. Cross multiply to solve: ad = bc.', difficulty: 'easy' },
      { id: 'd13', front: 'Unit Rate', back: 'Rate with denominator of 1. Find by dividing. Example: 150 miles in 3 hours = 50 miles per hour.', difficulty: 'easy' },
      { id: 'd14', front: 'Scatterplot: Positive Correlation', back: 'As x increases, y increases. Points slope upward left to right.', difficulty: 'easy' },
      { id: 'd15', front: 'Scatterplot: Negative Correlation', back: 'As x increases, y decreases. Points slope downward left to right.', difficulty: 'easy' },
      { id: 'd16', front: 'Line of Best Fit', back: 'Line that best represents the data trend. Used to make predictions. Minimize distance to all points.', difficulty: 'medium' },
      { id: 'd17', front: 'Margin of Error', back: 'Range of values likely to include true population value. Larger sample = smaller margin of error.', difficulty: 'medium' },
      { id: 'd18', front: 'Random Sample', back: 'Every member of population has equal chance of being selected. Reduces bias, increases reliability.', difficulty: 'easy' },
      { id: 'd19', front: 'Conditional Probability', back: 'P(A|B) = probability of A given that B has occurred. Use information about B to adjust probability.', difficulty: 'hard' },
      { id: 'd20', front: 'Two-Way Table', back: 'Displays frequencies for two categorical variables. Sum of row = row total, sum of column = column total.', difficulty: 'medium' }
    ]
  },

  // SAT READING STRATEGIES
  reading: {
    name: 'Reading Strategies',
    description: 'Comprehension and analysis techniques',
    icon: '📖',
    cards: [
      { id: 'r1', front: 'Main Idea', back: 'The central point the author wants to communicate. Look in introduction and conclusion. Ask: "What is this passage mainly about?"', difficulty: 'easy' },
      { id: 'r2', front: 'Author\'s Purpose', back: 'Why the author wrote the text: to INFORM (teach), PERSUADE (convince), ENTERTAIN (amuse), or EXPLAIN (clarify). Look at tone and content.', difficulty: 'easy' },
      { id: 'r3', front: 'Inference', back: 'A conclusion drawn from evidence, not directly stated. Must be supported by text. Ask: "What can I logically conclude?"', difficulty: 'medium' },
      { id: 'r4', front: 'Context Clues', back: 'Use surrounding words to determine meaning. Look for: definitions, examples, synonyms, antonyms, or explanations near the unknown word.', difficulty: 'easy' },
      { id: 'r5', front: 'Textual Evidence', back: 'Specific quotes or references that support an answer. "According to the passage..." or "The author states..."', difficulty: 'easy' },
      { id: 'r6', front: 'Tone', back: 'Author\'s attitude toward the subject. Identified through word choice and style. Examples: objective, critical, enthusiastic, skeptical.', difficulty: 'medium' },
      { id: 'r7', front: 'Structure: Cause & Effect', back: 'Shows how one event leads to another. Signal words: because, therefore, as a result, consequently, since.', difficulty: 'easy' },
      { id: 'r8', front: 'Structure: Compare & Contrast', back: 'Shows similarities and differences. Signal words: similarly, however, unlike, whereas, on the other hand, both.', difficulty: 'easy' },
      { id: 'r9', front: 'Structure: Chronological', back: 'Events in time order. Signal words: first, then, next, finally, before, after, during, dates.', difficulty: 'easy' },
      { id: 'r10', front: 'Structure: Problem & Solution', back: 'Presents a problem and how to solve it. Signal words: problem, issue, solution, resolve, address.', difficulty: 'easy' },
      { id: 'r11', front: 'Cross-Text Questions', back: 'Compare how two passages relate. Look for: agreement, disagreement, different perspectives on same topic, or complementary information.', difficulty: 'hard' },
      { id: 'r12', front: 'Data in Passages', back: 'Graphs, tables, charts may accompany text. Read labels, axes, and titles carefully. Connect data to passage claims.', difficulty: 'medium' },
      { id: 'r13', front: 'Wrong Answer Types', back: 'Common traps: too extreme, too narrow, too broad, contradicts passage, not supported by evidence, true but not relevant.', difficulty: 'medium' },
      { id: 'r14', front: 'Active Reading', back: 'Annotate as you read. Underline key points, circle unfamiliar words, note paragraph purposes. Increases comprehension.', difficulty: 'easy' },
      { id: 'r15', front: 'Rhetorical Analysis', back: 'How author uses language to persuade. Look for: emotional appeals, logical reasoning, credibility, word choice, figurative language.', difficulty: 'hard' }
    ]
  }
};

// Helper function to get all flashcards
export const getAllFlashcards = () => {
  return Object.values(flashcardDecks).flatMap(deck => deck.cards);
};

// Helper function to get flashcards by difficulty
export const getFlashcardsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard') => {
  return getAllFlashcards().filter(card => card.difficulty === difficulty);
};

// Helper function to get random flashcards
export const getRandomFlashcards = (count: number, deckId?: string) => {
  const cards = deckId ? flashcardDecks[deckId]?.cards || [] : getAllFlashcards();
  const shuffled = [...cards].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// Get deck names for UI
export const getDeckNames = () => {
  return Object.entries(flashcardDecks).map(([id, deck]) => ({
    id,
    name: deck.name,
    icon: deck.icon,
    cardCount: deck.cards.length
  }));
};
