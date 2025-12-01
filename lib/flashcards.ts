// Extended Flashcard Decks

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
  // READING FLASHCARDS
  reading: {
    name: 'Reading Comprehension',
    description: 'Key concepts for reading passages',
    icon: '📖',
    cards: [
      { id: 'r1', front: 'Main Idea', back: 'The central point or most important concept the author wants to communicate. Often found in the introduction or conclusion.', difficulty: 'easy' },
      { id: 'r2', front: 'Supporting Details', back: 'Specific facts, examples, statistics, or information that help explain or prove the main idea.', difficulty: 'easy' },
      { id: 'r3', front: 'Inference', back: 'A conclusion drawn from evidence and reasoning, not directly stated in the text. "Reading between the lines."', difficulty: 'medium' },
      { id: 'r4', front: 'Context Clues', back: 'Words or phrases surrounding an unknown word that help determine its meaning through examples, definitions, or contrast.', difficulty: 'easy' },
      { id: 'r5', front: 'Author\'s Purpose', back: 'The reason an author writes: to INFORM (teach), PERSUADE (convince), ENTERTAIN (amuse), or EXPLAIN (clarify).', difficulty: 'easy' },
      { id: 'r6', front: 'Tone', back: 'The author\'s attitude toward the subject, revealed through word choice, style, and figurative language (e.g., objective, critical, sympathetic).', difficulty: 'medium' },
      { id: 'r7', front: 'Primary Source', back: 'Original, firsthand account or evidence created during the time being studied (diaries, original research, interviews).', difficulty: 'easy' },
      { id: 'r8', front: 'Secondary Source', back: 'Source that analyzes, interprets, or summarizes information from primary sources (textbooks, reviews, encyclopedias).', difficulty: 'easy' },
      { id: 'r9', front: 'Bias', back: 'A prejudice or inclination that prevents objective consideration. Look for loaded language, one-sided arguments, or omitted information.', difficulty: 'medium' },
      { id: 'r10', front: 'Theme', back: 'The underlying message or central idea that runs throughout a piece of writing; the "lesson" or insight about life.', difficulty: 'medium' },
      { id: 'r11', front: 'Cause and Effect', back: 'Text structure showing how one event (cause) leads to another (effect). Signal words: because, therefore, as a result.', difficulty: 'easy' },
      { id: 'r12', front: 'Compare and Contrast', back: 'Text structure showing similarities (compare) and differences (contrast). Signal words: similarly, however, unlike, both.', difficulty: 'easy' },
      { id: 'r13', front: 'Chronological Order', back: 'Text structure presenting events in time order. Signal words: first, then, next, finally, dates.', difficulty: 'easy' },
      { id: 'r14', front: 'Problem and Solution', back: 'Text structure presenting a problem and one or more solutions. Signal words: problem, solution, resolve, as a result.', difficulty: 'easy' },
      { id: 'r15', front: 'Fact vs. Opinion', back: 'Fact: Can be proven true or false. Opinion: Personal belief or judgment that cannot be proven. Look for words like "I think" or "should."', difficulty: 'medium' },
      { id: 'r16', front: 'Summary', back: 'A brief restatement of main points in your own words. Includes only essential information, not minor details.', difficulty: 'easy' },
      { id: 'r17', front: 'Paraphrase', back: 'Restating text in your own words while keeping the same meaning and level of detail. Different from summary (which condenses).', difficulty: 'medium' },
      { id: 'r18', front: 'Logical Conclusion', back: 'A judgment based on evidence and reasoning presented in the text. Must be supported by information given.', difficulty: 'medium' },
      { id: 'r19', front: 'Generalization', back: 'A broad statement based on specific examples. Valid generalizations are supported by evidence; hasty generalizations are not.', difficulty: 'hard' },
      { id: 'r20', front: 'Connotation vs. Denotation', back: 'Denotation: Dictionary definition. Connotation: Emotional association. Example: "Home" (neutral) vs. "shack" (negative).', difficulty: 'medium' }
    ]
  },

  // MATH FLASHCARDS
  math: {
    name: 'Mathematics',
    description: 'Essential formulas and concepts',
    icon: '🔢',
    cards: [
      { id: 'm1', front: 'Ratio', back: 'A comparison of two quantities. Written as a:b, a/b, or "a to b." Example: 3 nurses to 12 patients = 3:12 = 1:4', difficulty: 'easy' },
      { id: 'm2', front: 'Proportion', back: 'An equation stating two ratios are equal: a/b = c/d. Solve by cross-multiplying: a×d = b×c', difficulty: 'easy' },
      { id: 'm3', front: 'Percent to Decimal', back: 'Divide by 100 (move decimal 2 places left). 25% = 0.25, 7.5% = 0.075, 150% = 1.50', difficulty: 'easy' },
      { id: 'm4', front: 'Decimal to Percent', back: 'Multiply by 100 (move decimal 2 places right). 0.45 = 45%, 0.08 = 8%, 1.25 = 125%', difficulty: 'easy' },
      { id: 'm5', front: 'Percent Change Formula', back: '((New - Old) / Old) × 100. Positive = increase, negative = decrease. Example: 50→60 = (10/50)×100 = 20% increase', difficulty: 'medium' },
      { id: 'm6', front: 'Mean (Average)', back: 'Sum of all values divided by the count. Example: (10+15+20)/3 = 45/3 = 15', difficulty: 'easy' },
      { id: 'm7', front: 'Median', back: 'Middle value when numbers are ordered. If even count, average the two middle numbers. Example: 2,4,6,8 → (4+6)/2 = 5', difficulty: 'easy' },
      { id: 'm8', front: 'Mode', back: 'Most frequently occurring value. A set can have no mode, one mode, or multiple modes.', difficulty: 'easy' },
      { id: 'm9', front: 'Range', back: 'Difference between highest and lowest values. Range = Maximum - Minimum', difficulty: 'easy' },
      { id: 'm10', front: 'Order of Operations', back: 'PEMDAS: Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right)', difficulty: 'easy' },
      { id: 'm11', front: 'Fraction to Decimal', back: 'Divide numerator by denominator. 3/4 = 3÷4 = 0.75, 1/8 = 0.125', difficulty: 'easy' },
      { id: 'm12', front: 'Adding Fractions (Same Denominator)', back: 'Add numerators, keep denominator. 2/5 + 1/5 = 3/5', difficulty: 'easy' },
      { id: 'm13', front: 'Adding Fractions (Different Denominators)', back: 'Find LCD, convert, then add. 1/4 + 1/3 = 3/12 + 4/12 = 7/12', difficulty: 'medium' },
      { id: 'm14', front: 'Multiplying Fractions', back: 'Multiply numerators × numerators, denominators × denominators. 2/3 × 4/5 = 8/15', difficulty: 'easy' },
      { id: 'm15', front: 'Dividing Fractions', back: 'Multiply by the reciprocal. 2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6', difficulty: 'medium' },
      { id: 'm16', front: 'Temperature: F to C', back: 'C = (F - 32) × 5/9. Example: 98.6°F = (98.6-32) × 5/9 = 37°C', difficulty: 'medium' },
      { id: 'm17', front: 'Temperature: C to F', back: 'F = (C × 9/5) + 32. Example: 37°C = (37 × 1.8) + 32 = 98.6°F', difficulty: 'medium' },
      { id: 'm18', front: 'Weight: lbs to kg', back: 'Divide by 2.2. 154 lbs ÷ 2.2 = 70 kg', difficulty: 'easy' },
      { id: 'm19', front: 'Weight: kg to lbs', back: 'Multiply by 2.2. 70 kg × 2.2 = 154 lbs', difficulty: 'easy' },
      { id: 'm20', front: 'Metric Prefixes', back: 'kilo- (1000), centi- (1/100), milli- (1/1000). 1 kg = 1000g, 1 m = 100 cm, 1 L = 1000 mL', difficulty: 'easy' },
      { id: 'm21', front: 'Linear Equation', back: 'Equation of form y = mx + b. m = slope (rise/run), b = y-intercept (where line crosses y-axis)', difficulty: 'medium' },
      { id: 'm22', front: 'Solving for x', back: 'Isolate x by doing inverse operations to both sides. Addition↔Subtraction, Multiplication↔Division', difficulty: 'medium' },
      { id: 'm23', front: 'Distributive Property', back: 'a(b + c) = ab + ac. Example: 3(x + 4) = 3x + 12', difficulty: 'medium' },
      { id: 'm24', front: 'Finding X% of Y', back: 'Convert percent to decimal, multiply by Y. 25% of 80 = 0.25 × 80 = 20', difficulty: 'easy' },
      { id: 'm25', front: 'Perimeter of Rectangle', back: 'P = 2L + 2W or P = 2(L + W). Add all sides.', difficulty: 'easy' },
      { id: 'm26', front: 'Area of Rectangle', back: 'A = Length × Width', difficulty: 'easy' },
      { id: 'm27', front: 'Area of Triangle', back: 'A = (1/2) × base × height', difficulty: 'easy' },
      { id: 'm28', front: 'Volume of Rectangular Solid', back: 'V = Length × Width × Height', difficulty: 'medium' },
      { id: 'm29', front: 'Circumference of Circle', back: 'C = 2πr or C = πd (where d = diameter = 2r)', difficulty: 'medium' },
      { id: 'm30', front: 'Area of Circle', back: 'A = πr² (π ≈ 3.14)', difficulty: 'medium' }
    ]
  },

  // SCIENCE FLASHCARDS
  science: {
    name: 'Science',
    description: 'Anatomy, biology, and scientific concepts',
    icon: '🔬',
    cards: [
      { id: 's1', front: 'Cardiovascular System', back: 'Heart and blood vessels. Circulates blood, oxygen, nutrients, and removes waste. Heart → Arteries → Capillaries → Veins → Heart', difficulty: 'easy' },
      { id: 's2', front: 'Respiratory System', back: 'Lungs, trachea, bronchi, alveoli. Gas exchange: O₂ in, CO₂ out. Nose/mouth → Pharynx → Larynx → Trachea → Bronchi → Alveoli', difficulty: 'easy' },
      { id: 's3', front: 'Blood Flow Through Heart', back: 'Body → Vena cava → R. Atrium → R. Ventricle → Pulmonary artery → Lungs → Pulmonary veins → L. Atrium → L. Ventricle → Aorta → Body', difficulty: 'medium' },
      { id: 's4', front: 'Four Heart Chambers', back: 'Right Atrium (receives deoxygenated blood), Right Ventricle (pumps to lungs), Left Atrium (receives oxygenated blood), Left Ventricle (pumps to body)', difficulty: 'easy' },
      { id: 's5', front: 'Red Blood Cells (RBCs)', back: 'Erythrocytes. Contain hemoglobin, carry oxygen. No nucleus. Made in bone marrow. Live ~120 days.', difficulty: 'easy' },
      { id: 's6', front: 'White Blood Cells (WBCs)', back: 'Leukocytes. Fight infection and disease. Types: neutrophils, lymphocytes, monocytes, eosinophils, basophils.', difficulty: 'easy' },
      { id: 's7', front: 'Platelets', back: 'Thrombocytes. Cell fragments that help blood clot. Made in bone marrow.', difficulty: 'easy' },
      { id: 's8', front: 'Blood Types', back: 'A, B, AB, O. Based on antigens. O- is universal donor, AB+ is universal recipient. Rh factor: + or -', difficulty: 'medium' },
      { id: 's9', front: 'Mitosis', back: 'Cell division producing 2 identical daughter cells with same chromosome count (diploid). Phases: Prophase, Metaphase, Anaphase, Telophase (PMAT)', difficulty: 'medium' },
      { id: 's10', front: 'Meiosis', back: 'Cell division producing 4 gametes with half the chromosomes (haploid). Two divisions. Allows genetic diversity through crossing over.', difficulty: 'medium' },
      { id: 's11', front: 'DNA Structure', back: 'Double helix. Sugar-phosphate backbone. Base pairs: A-T (adenine-thymine), G-C (guanine-cytosine). Nucleotides: sugar + phosphate + base', difficulty: 'medium' },
      { id: 's12', front: 'Transcription', back: 'DNA → mRNA. Occurs in nucleus. RNA polymerase reads DNA template and builds complementary mRNA strand.', difficulty: 'hard' },
      { id: 's13', front: 'Translation', back: 'mRNA → Protein. Occurs at ribosomes. tRNA brings amino acids. Codons (3 bases) code for specific amino acids.', difficulty: 'hard' },
      { id: 's14', front: 'Homeostasis', back: 'Body\'s ability to maintain stable internal conditions despite external changes. Examples: temperature regulation, blood pH, glucose levels.', difficulty: 'easy' },
      { id: 's15', front: 'Enzyme', back: 'Protein that speeds up (catalyzes) chemical reactions. Substrate fits into active site like lock and key. Not consumed in reaction.', difficulty: 'medium' },
      { id: 's16', front: 'ATP', back: 'Adenosine triphosphate. Primary energy currency of cells. Made mainly in mitochondria through cellular respiration.', difficulty: 'medium' },
      { id: 's17', front: 'Osmosis', back: 'Movement of water across a semipermeable membrane from LOW solute concentration to HIGH solute concentration.', difficulty: 'medium' },
      { id: 's18', front: 'Diffusion', back: 'Movement of molecules from HIGH concentration to LOW concentration. Passive (no energy required). Example: oxygen entering cells.', difficulty: 'easy' },
      { id: 's19', front: 'Active Transport', back: 'Movement of molecules against concentration gradient (LOW to HIGH). Requires energy (ATP). Example: sodium-potassium pump.', difficulty: 'medium' },
      { id: 's20', front: 'Nervous System Divisions', back: 'Central (CNS): brain + spinal cord. Peripheral (PNS): all other nerves. Autonomic: sympathetic (fight/flight) + parasympathetic (rest/digest).', difficulty: 'medium' },
      { id: 's21', front: 'Neuron Structure', back: 'Cell body (soma), Dendrites (receive signals), Axon (sends signals), Myelin sheath (insulation), Axon terminals (release neurotransmitters).', difficulty: 'medium' },
      { id: 's22', front: 'Endocrine System', back: 'Hormone-secreting glands. Hormones travel in blood to target organs. Slower but longer-lasting than nervous system.', difficulty: 'easy' },
      { id: 's23', front: 'Insulin vs. Glucagon', back: 'Insulin: lowers blood sugar (produced when glucose HIGH). Glucagon: raises blood sugar (produced when glucose LOW). Both from pancreas.', difficulty: 'medium' },
      { id: 's24', front: 'Thyroid Hormones', back: 'T3 and T4 regulate metabolism. Hypothyroidism: slow metabolism, weight gain. Hyperthyroidism: fast metabolism, weight loss.', difficulty: 'medium' },
      { id: 's25', front: 'Immune Response Types', back: 'Innate: nonspecific, immediate (skin, inflammation). Adaptive: specific, develops memory (B cells/antibodies, T cells).', difficulty: 'medium' },
      { id: 's26', front: 'Antibodies', back: 'Y-shaped proteins made by B cells. Bind to specific antigens. Mark pathogens for destruction. Provide immunity.', difficulty: 'medium' },
      { id: 's27', front: 'Scientific Method', back: 'Observation → Question → Hypothesis → Experiment → Analyze Data → Conclusion. Hypothesis must be testable and falsifiable.', difficulty: 'easy' },
      { id: 's28', front: 'Control Group vs. Experimental Group', back: 'Control: doesn\'t receive treatment, baseline for comparison. Experimental: receives the treatment/variable being tested.', difficulty: 'easy' },
      { id: 's29', front: 'Independent vs. Dependent Variable', back: 'Independent: what researcher changes/manipulates. Dependent: what is measured/observed (depends on independent variable).', difficulty: 'medium' },
      { id: 's30', front: 'pH Scale', back: '0-14 scale. 7 is neutral. Below 7 is acidic. Above 7 is basic (alkaline). Each number is 10x more acidic/basic.', difficulty: 'easy' }
    ]
  },

  // ENGLISH FLASHCARDS
  english: {
    name: 'English & Language',
    description: 'Grammar, vocabulary, and medical terminology',
    icon: '✍️',
    cards: [
      { id: 'e1', front: 'Subject-Verb Agreement', back: 'Singular subjects take singular verbs. Plural subjects take plural verbs. "The patient is..." vs. "The patients are..."', difficulty: 'easy' },
      { id: 'e2', front: 'Prefix: hyper-', back: 'Means "over, excessive, above normal." Examples: hypertension (high BP), hyperglycemia (high blood sugar), hyperactive.', difficulty: 'easy' },
      { id: 'e3', front: 'Prefix: hypo-', back: 'Means "under, below normal, deficient." Examples: hypotension (low BP), hypoglycemia (low blood sugar), hypothermia.', difficulty: 'easy' },
      { id: 'e4', front: 'Prefix: brady-', back: 'Means "slow." Examples: bradycardia (slow heart rate), bradypnea (slow breathing).', difficulty: 'easy' },
      { id: 'e5', front: 'Prefix: tachy-', back: 'Means "fast, rapid." Examples: tachycardia (fast heart rate), tachypnea (rapid breathing).', difficulty: 'easy' },
      { id: 'e6', front: 'Suffix: -itis', back: 'Means "inflammation." Examples: appendicitis, arthritis, bronchitis, hepatitis, gastritis.', difficulty: 'easy' },
      { id: 'e7', front: 'Suffix: -ectomy', back: 'Means "surgical removal." Examples: appendectomy, mastectomy, cholecystectomy (gallbladder removal).', difficulty: 'easy' },
      { id: 'e8', front: 'Suffix: -otomy', back: 'Means "surgical incision/cutting into." Examples: tracheotomy, craniotomy, thoracotomy.', difficulty: 'medium' },
      { id: 'e9', front: 'Suffix: -ostomy', back: 'Means "creating an opening." Examples: colostomy, tracheostomy, ileostomy.', difficulty: 'medium' },
      { id: 'e10', front: 'Suffix: -ology', back: 'Means "study of." Examples: cardiology, neurology, oncology, radiology.', difficulty: 'easy' },
      { id: 'e11', front: 'Suffix: -pathy', back: 'Means "disease, suffering." Examples: neuropathy, myopathy, cardiomyopathy.', difficulty: 'medium' },
      { id: 'e12', front: 'Suffix: -emia', back: 'Means "blood condition." Examples: anemia, septicemia, hyperglycemia, leukemia.', difficulty: 'medium' },
      { id: 'e13', front: 'Suffix: -uria', back: 'Means "urine condition." Examples: hematuria (blood in urine), polyuria (excessive urination), dysuria (painful urination).', difficulty: 'medium' },
      { id: 'e14', front: 'Root: cardi/cardio', back: 'Means "heart." Examples: cardiac, cardiology, tachycardia, cardiovascular.', difficulty: 'easy' },
      { id: 'e15', front: 'Root: neur/neuro', back: 'Means "nerve." Examples: neurology, neuron, neuropathy, neurologist.', difficulty: 'easy' },
      { id: 'e16', front: 'Root: hepat/hepato', back: 'Means "liver." Examples: hepatitis, hepatomegaly, hepatic.', difficulty: 'easy' },
      { id: 'e17', front: 'Root: nephr/nephro', back: 'Means "kidney." Examples: nephritis, nephrologist, nephron.', difficulty: 'easy' },
      { id: 'e18', front: 'Root: derm/dermat', back: 'Means "skin." Examples: dermatology, dermatitis, hypodermic.', difficulty: 'easy' },
      { id: 'e19', front: 'Affect vs. Effect', back: 'Affect: verb (to influence). Effect: noun (a result). "The medication affects the patient." "The effect was positive."', difficulty: 'medium' },
      { id: 'e20', front: 'Their/There/They\'re', back: 'Their: possessive. There: location. They\'re: contraction of "they are."', difficulty: 'easy' },
      { id: 'e21', front: 'Its vs. It\'s', back: 'Its: possessive (no apostrophe). It\'s: contraction of "it is" or "it has."', difficulty: 'easy' },
      { id: 'e22', front: 'Who vs. Whom', back: 'Who: subject (he/she). Whom: object (him/her). "Who treated the patient?" "To whom was it given?"', difficulty: 'medium' },
      { id: 'e23', front: 'Fewer vs. Less', back: 'Fewer: countable nouns (fewer patients). Less: uncountable nouns (less time, less money).', difficulty: 'medium' },
      { id: 'e24', front: 'Parallel Structure', back: 'Items in a list should have the same grammatical form. Wrong: "reading, to write, running." Right: "reading, writing, running."', difficulty: 'medium' },
      { id: 'e25', front: 'Dangling Modifier', back: 'A phrase that doesn\'t clearly modify any word. Wrong: "Walking to the room, the chart was reviewed." (The chart wasn\'t walking.)', difficulty: 'medium' },
      { id: 'e26', front: 'Comma Splice', back: 'Error joining two independent clauses with only a comma. Fix with: period, semicolon, or comma + conjunction.', difficulty: 'medium' },
      { id: 'e27', front: 'Semicolon Use', back: 'Joins two related independent clauses without a conjunction. "The patient was tired; she needed rest."', difficulty: 'medium' },
      { id: 'e28', front: 'Colon Use', back: 'Introduces a list after a complete sentence, or introduces an explanation. Follows an independent clause.', difficulty: 'medium' },
      { id: 'e29', front: 'Prefix: anti-', back: 'Means "against." Examples: antibiotic, antiseptic, antipyretic (fever reducer), anticoagulant.', difficulty: 'easy' },
      { id: 'e30', front: 'Prefix: peri-', back: 'Means "around." Examples: pericardium (around heart), perinatal (around birth), peripheral.', difficulty: 'medium' }
    ]
  },

  // SOCIAL STUDIES FLASHCARDS
  socialStudies: {
    name: 'Social Studies',
    description: 'U.S. History, Civics, Economics, and Geography',
    icon: '🏛️',
    cards: [
      { id: 'ss1', front: 'Declaration of Independence (1776)', back: 'Document declaring American independence from Britain. Written primarily by Thomas Jefferson. States that "all men are created equal" with unalienable rights.', difficulty: 'easy' },
      { id: 'ss2', front: 'U.S. Constitution', back: 'Supreme law of the United States. Establishes the framework of government with three branches. Ratified in 1788.', difficulty: 'easy' },
      { id: 'ss3', front: 'Bill of Rights', back: 'First 10 amendments to the Constitution. Protects individual liberties like freedom of speech, religion, and the right to bear arms.', difficulty: 'easy' },
      { id: 'ss4', front: 'Three Branches of Government', back: 'Legislative (Congress - makes laws), Executive (President - enforces laws), Judicial (Courts - interprets laws). System of checks and balances.', difficulty: 'easy' },
      { id: 'ss5', front: 'Civil War (1861-1865)', back: 'War between Northern (Union) and Southern (Confederate) states. Main issues: slavery and states\' rights. Union victory led to abolition of slavery.', difficulty: 'medium' },
      { id: 'ss6', front: 'Emancipation Proclamation', back: 'Executive order by President Lincoln (1863). Declared slaves in Confederate states to be free. Symbolic turning point of Civil War.', difficulty: 'medium' },
      { id: 'ss7', front: '13th Amendment', back: 'Abolished slavery in the United States (1865).', difficulty: 'easy' },
      { id: 'ss8', front: '14th Amendment', back: 'Grants citizenship to all persons born in U.S. Guarantees equal protection under the law (1868).', difficulty: 'medium' },
      { id: 'ss9', front: '15th Amendment', back: 'Prohibits denying the right to vote based on race, color, or previous servitude (1870).', difficulty: 'medium' },
      { id: 'ss10', front: '19th Amendment', back: 'Gave women the right to vote (1920). Result of the women\'s suffrage movement.', difficulty: 'easy' },
      { id: 'ss11', front: 'Supply and Demand', back: 'Economic principle: when supply is high and demand is low, prices fall. When demand is high and supply is low, prices rise.', difficulty: 'easy' },
      { id: 'ss12', front: 'GDP (Gross Domestic Product)', back: 'Total value of all goods and services produced within a country in a year. Measure of economic health.', difficulty: 'medium' },
      { id: 'ss13', front: 'Inflation', back: 'General increase in prices over time, reducing purchasing power of money.', difficulty: 'easy' },
      { id: 'ss14', front: 'Federal Reserve', back: 'Central bank of the United States. Controls monetary policy, sets interest rates, regulates banks.', difficulty: 'medium' },
      { id: 'ss15', front: 'Electoral College', back: 'System for electing the President. Each state has electors equal to its Congressional representation. 270 votes needed to win.', difficulty: 'medium' },
      { id: 'ss16', front: 'Federalism', back: 'System of government where power is divided between national and state governments.', difficulty: 'medium' },
      { id: 'ss17', front: 'Great Depression', back: 'Severe worldwide economic depression (1929-1939). Started with stock market crash. Led to New Deal programs under FDR.', difficulty: 'medium' },
      { id: 'ss18', front: 'World War II', back: 'Global war (1939-1945). U.S. joined after Pearl Harbor attack (1941). Allied powers defeated Axis powers.', difficulty: 'easy' },
      { id: 'ss19', front: 'Cold War', back: 'Period of tension between U.S. and Soviet Union (1947-1991). Competition without direct military conflict. Ended with Soviet collapse.', difficulty: 'medium' },
      { id: 'ss20', front: 'Civil Rights Movement', back: '1950s-1960s movement for racial equality. Key figures: MLK Jr., Rosa Parks. Led to Civil Rights Act (1964) and Voting Rights Act (1965).', difficulty: 'easy' },
      { id: 'ss21', front: 'Checks and Balances', back: 'System where each branch of government can limit the powers of the other branches. Prevents any one branch from becoming too powerful.', difficulty: 'easy' },
      { id: 'ss22', front: 'Veto', back: 'President\'s power to reject a bill passed by Congress. Can be overridden by 2/3 vote in both houses.', difficulty: 'easy' },
      { id: 'ss23', front: 'Judicial Review', back: 'Power of courts to declare laws unconstitutional. Established by Marbury v. Madison (1803).', difficulty: 'medium' },
      { id: 'ss24', front: 'Capitalism', back: 'Economic system based on private ownership, free markets, and profit motive. Limited government intervention.', difficulty: 'easy' },
      { id: 'ss25', front: 'Socialism', back: 'Economic system where means of production are owned collectively or by the state. Goal of reducing inequality.', difficulty: 'medium' },
      { id: 'ss26', front: 'Monopoly', back: 'When one company controls an entire market, eliminating competition. Often regulated by antitrust laws.', difficulty: 'easy' },
      { id: 'ss27', front: 'Primary vs. General Election', back: 'Primary: voters choose party candidates. General: voters choose between party nominees for office.', difficulty: 'easy' },
      { id: 'ss28', front: 'Immigration', back: 'Movement of people into a country. U.S. history shaped by waves of immigration. Ellis Island was major entry point (1892-1954).', difficulty: 'easy' },
      { id: 'ss29', front: 'Industrial Revolution', back: 'Period of rapid industrialization (1760-1840). Shift from agricultural to manufacturing economy. Major changes in transportation, technology.', difficulty: 'medium' },
      { id: 'ss30', front: 'Manifest Destiny', back: 'Belief that U.S. expansion across North America was justified and inevitable. Drove westward expansion in 1800s.', difficulty: 'medium' }
    ]
  },

  // U.S. GOVERNMENT FLASHCARDS
  government: {
    name: 'U.S. Government',
    description: 'Civics, government structure, and citizenship',
    icon: '🇺🇸',
    cards: [
      { id: 'g1', front: 'Congress', back: 'Legislative branch. Bicameral: Senate (100 members, 2 per state, 6-year terms) and House of Representatives (435 members based on population, 2-year terms).', difficulty: 'easy' },
      { id: 'g2', front: 'President\'s Powers', back: 'Commander-in-chief of military, makes treaties, appoints judges and cabinet, signs/vetoes bills, grants pardons.', difficulty: 'easy' },
      { id: 'g3', front: 'Supreme Court', back: 'Highest court in U.S. 9 justices appointed for life. Final interpreter of the Constitution.', difficulty: 'easy' },
      { id: 'g4', front: 'How a Bill Becomes Law', back: 'Introduced in Congress → Committee review → Debate/vote in both houses → Sent to President → Signs (law) or vetoes.', difficulty: 'medium' },
      { id: 'g5', front: 'Amendment Process', back: 'Proposed by 2/3 of Congress or national convention. Ratified by 3/4 of state legislatures.', difficulty: 'medium' },
      { id: 'g6', front: 'First Amendment', back: 'Protects freedom of religion, speech, press, assembly, and petition. Cornerstone of civil liberties.', difficulty: 'easy' },
      { id: 'g7', front: 'Second Amendment', back: 'Right to keep and bear arms.', difficulty: 'easy' },
      { id: 'g8', front: 'Fourth Amendment', back: 'Protection against unreasonable searches and seizures. Requires warrants based on probable cause.', difficulty: 'medium' },
      { id: 'g9', front: 'Fifth Amendment', back: 'Right against self-incrimination, double jeopardy. Guarantees due process. Requires just compensation for taken property.', difficulty: 'medium' },
      { id: 'g10', front: 'Sixth Amendment', back: 'Right to speedy public trial, impartial jury, know charges, confront witnesses, and have legal counsel.', difficulty: 'medium' },
      { id: 'g11', front: 'Impeachment', back: 'House brings charges (impeaches). Senate holds trial. 2/3 Senate vote required to remove from office. Presidents Clinton and Trump were impeached but not removed.', difficulty: 'medium' },
      { id: 'g12', front: 'Executive Orders', back: 'Directives issued by President to manage operations of federal government. Do not require Congressional approval.', difficulty: 'medium' },
      { id: 'g13', front: 'Filibuster', back: 'Senate procedure where a senator speaks for extended time to delay or block a vote. Can be ended by cloture (60 votes).', difficulty: 'hard' },
      { id: 'g14', front: 'Gerrymandering', back: 'Manipulation of electoral district boundaries to favor one party. Named after Elbridge Gerry.', difficulty: 'medium' },
      { id: 'g15', front: 'Lobbying', back: 'Attempting to influence government officials on legislation. Lobbyists represent interest groups, corporations, etc.', difficulty: 'easy' },
      { id: 'g16', front: 'Cabinet', back: 'Advisory body to President. Includes heads of 15 executive departments (State, Treasury, Defense, etc.).', difficulty: 'easy' },
      { id: 'g17', front: 'Naturalization', back: 'Process by which foreign citizens become U.S. citizens. Requirements include residency, English proficiency, civics test.', difficulty: 'easy' },
      { id: 'g18', front: 'Popular Sovereignty', back: 'Principle that government power comes from the people. Foundation of democratic government.', difficulty: 'easy' },
      { id: 'g19', front: 'Separation of Powers', back: 'Division of government into three branches. Each has distinct powers to prevent concentration of authority.', difficulty: 'easy' },
      { id: 'g20', front: 'Reserved Powers', back: 'Powers not granted to federal government are reserved to states or the people (10th Amendment).', difficulty: 'medium' }
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

