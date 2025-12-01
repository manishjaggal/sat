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

  // MEDICAL TERMINOLOGY FLASHCARDS
  medicalTerms: {
    name: 'Medical Terminology',
    description: 'Common medical terms and abbreviations',
    icon: '🏥',
    cards: [
      { id: 'mt1', front: 'PRN', back: 'Pro re nata - "as needed." Medication given when symptoms require.', difficulty: 'easy' },
      { id: 'mt2', front: 'BID', back: 'Bis in die - "twice a day."', difficulty: 'easy' },
      { id: 'mt3', front: 'TID', back: 'Ter in die - "three times a day."', difficulty: 'easy' },
      { id: 'mt4', front: 'QID', back: 'Quater in die - "four times a day."', difficulty: 'easy' },
      { id: 'mt5', front: 'QD', back: 'Quaque die - "every day" (once daily).', difficulty: 'easy' },
      { id: 'mt6', front: 'NPO', back: 'Nil per os - "nothing by mouth."', difficulty: 'easy' },
      { id: 'mt7', front: 'STAT', back: 'Statim - "immediately."', difficulty: 'easy' },
      { id: 'mt8', front: 'AC', back: 'Ante cibum - "before meals."', difficulty: 'easy' },
      { id: 'mt9', front: 'PC', back: 'Post cibum - "after meals."', difficulty: 'easy' },
      { id: 'mt10', front: 'HS', back: 'Hora somni - "at bedtime."', difficulty: 'easy' },
      { id: 'mt11', front: 'PO', back: 'Per os - "by mouth."', difficulty: 'easy' },
      { id: 'mt12', front: 'IV', back: 'Intravenous - into a vein.', difficulty: 'easy' },
      { id: 'mt13', front: 'IM', back: 'Intramuscular - into a muscle.', difficulty: 'easy' },
      { id: 'mt14', front: 'SC/SQ', back: 'Subcutaneous - under the skin.', difficulty: 'easy' },
      { id: 'mt15', front: 'BP', back: 'Blood pressure.', difficulty: 'easy' },
      { id: 'mt16', front: 'HR', back: 'Heart rate (pulse).', difficulty: 'easy' },
      { id: 'mt17', front: 'RR', back: 'Respiratory rate (breaths per minute).', difficulty: 'easy' },
      { id: 'mt18', front: 'Temp', back: 'Temperature.', difficulty: 'easy' },
      { id: 'mt19', front: 'SpO₂', back: 'Oxygen saturation measured by pulse oximetry.', difficulty: 'easy' },
      { id: 'mt20', front: 'WNL', back: 'Within normal limits.', difficulty: 'easy' },
      { id: 'mt21', front: 'DNR', back: 'Do not resuscitate.', difficulty: 'easy' },
      { id: 'mt22', front: 'CBC', back: 'Complete blood count.', difficulty: 'easy' },
      { id: 'mt23', front: 'BMP', back: 'Basic metabolic panel.', difficulty: 'medium' },
      { id: 'mt24', front: 'HgA1c', back: 'Hemoglobin A1c - measures average blood glucose over 2-3 months.', difficulty: 'medium' },
      { id: 'mt25', front: 'INR', back: 'International Normalized Ratio - measures blood clotting time.', difficulty: 'medium' },
      { id: 'mt26', front: 'BUN', back: 'Blood urea nitrogen - kidney function test.', difficulty: 'medium' },
      { id: 'mt27', front: 'CXR', back: 'Chest X-ray.', difficulty: 'easy' },
      { id: 'mt28', front: 'CT', back: 'Computed tomography (CAT scan).', difficulty: 'easy' },
      { id: 'mt29', front: 'MRI', back: 'Magnetic resonance imaging.', difficulty: 'easy' },
      { id: 'mt30', front: 'EKG/ECG', back: 'Electrocardiogram - measures heart\'s electrical activity.', difficulty: 'easy' }
    ]
  },

  // ANATOMY FLASHCARDS
  anatomy: {
    name: 'Body Systems',
    description: 'Major organs and body systems',
    icon: '🫀',
    cards: [
      { id: 'a1', front: 'Integumentary System', back: 'Skin, hair, nails, sweat glands. Functions: protection, temperature regulation, sensation, vitamin D production.', difficulty: 'easy' },
      { id: 'a2', front: 'Skeletal System', back: '206 bones in adults. Functions: support, protection, movement, mineral storage, blood cell production (bone marrow).', difficulty: 'easy' },
      { id: 'a3', front: 'Muscular System', back: 'Three types: skeletal (voluntary), cardiac (heart), smooth (organs). Functions: movement, posture, heat production.', difficulty: 'easy' },
      { id: 'a4', front: 'Nervous System', back: 'Brain, spinal cord, nerves. Functions: sensory input, integration, motor output. Controls all body functions.', difficulty: 'easy' },
      { id: 'a5', front: 'Endocrine System', back: 'Glands: pituitary, thyroid, adrenal, pancreas, ovaries/testes. Functions: hormone secretion, metabolism regulation.', difficulty: 'medium' },
      { id: 'a6', front: 'Cardiovascular System', back: 'Heart, blood, blood vessels. Functions: transport oxygen, nutrients, hormones; remove waste; maintain body temperature.', difficulty: 'easy' },
      { id: 'a7', front: 'Lymphatic/Immune System', back: 'Lymph nodes, spleen, thymus, tonsils. Functions: fluid balance, fat absorption, immunity.', difficulty: 'medium' },
      { id: 'a8', front: 'Respiratory System', back: 'Nose, pharynx, larynx, trachea, bronchi, lungs. Functions: gas exchange (O₂ in, CO₂ out).', difficulty: 'easy' },
      { id: 'a9', front: 'Digestive System', back: 'GI tract + accessory organs (liver, pancreas, gallbladder). Functions: ingestion, digestion, absorption, elimination.', difficulty: 'easy' },
      { id: 'a10', front: 'Urinary System', back: 'Kidneys, ureters, bladder, urethra. Functions: filter blood, form urine, maintain fluid/electrolyte balance.', difficulty: 'easy' },
      { id: 'a11', front: 'Reproductive System', back: 'Male: testes, prostate. Female: ovaries, uterus. Functions: produce gametes, hormones; support pregnancy.', difficulty: 'easy' },
      { id: 'a12', front: 'Largest Organ', back: 'Skin (integument) - covers ~20 square feet in adults, weighs ~8 lbs.', difficulty: 'easy' },
      { id: 'a13', front: 'Longest Bone', back: 'Femur (thigh bone) - about 1/4 of a person\'s height.', difficulty: 'easy' },
      { id: 'a14', front: 'Smallest Bone', back: 'Stapes - one of three ossicles in the middle ear.', difficulty: 'medium' },
      { id: 'a15', front: 'Largest Internal Organ', back: 'Liver - weighs about 3 lbs. Functions: bile production, detoxification, protein synthesis, storage.', difficulty: 'easy' },
      { id: 'a16', front: 'Brain Lobes', back: 'Frontal (thinking, planning), Parietal (sensation), Temporal (hearing, memory), Occipital (vision).', difficulty: 'medium' },
      { id: 'a17', front: 'Cerebellum', back: 'Located at back of brain. Controls balance, coordination, fine motor movements.', difficulty: 'medium' },
      { id: 'a18', front: 'Medulla Oblongata', back: 'Brain stem. Controls vital functions: breathing, heart rate, blood pressure.', difficulty: 'medium' },
      { id: 'a19', front: 'Hypothalamus', back: 'Links nervous and endocrine systems. Controls hunger, thirst, body temp, circadian rhythms.', difficulty: 'medium' },
      { id: 'a20', front: 'Pituitary Gland', back: '"Master gland" - controls other endocrine glands. Secretes growth hormone, TSH, FSH, LH, ACTH, etc.', difficulty: 'medium' }
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

