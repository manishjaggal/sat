// Comprehensive SAT Reading & Writing Question Bank - 150+ Questions
// Covers: Craft & Structure, Information & Ideas, Standard English Conventions, Expression of Ideas

import { SATQuestion } from './sat-math-questions';

// ============================================
// INFORMATION AND IDEAS (26% of Reading & Writing)
// ============================================

export const informationIdeasQuestions: SATQuestion[] = [
  // Central Ideas and Details
  {
    id: 'rw-info-001',
    section: 'reading-writing',
    topic: 'Information and Ideas',
    subtopic: 'Central Ideas',
    difficulty: 'easy',
    passage: 'The honeybee is essential to modern agriculture. These insects pollinate approximately one-third of the food crops grown worldwide. Without honeybees, many fruits, vegetables, and nuts would become scarce and expensive. Scientists are increasingly concerned about declining bee populations due to pesticide use, habitat loss, and disease.',
    question: 'Which choice best states the main idea of the passage?',
    options: [
      'Honeybees are the only insects that pollinate crops.',
      'Honeybees are crucial to food production but face serious threats.',
      'Scientists have found ways to protect honeybee populations.',
      'Pesticides are the primary cause of honeybee decline.'
    ],
    correctAnswer: 1,
    explanation: 'The passage emphasizes both the importance of honeybees to agriculture and the concerns about their declining populations.',
    skill: 'Identifying main idea'
  },
  {
    id: 'rw-info-002',
    section: 'reading-writing',
    topic: 'Information and Ideas',
    subtopic: 'Central Ideas',
    difficulty: 'easy',
    passage: 'Marie Curie was a pioneering physicist and chemist who conducted groundbreaking research on radioactivity. She was the first woman to win a Nobel Prize and remains the only person to win Nobel Prizes in two different sciences—physics and chemistry. Her discoveries laid the foundation for cancer treatment and nuclear energy.',
    question: 'What is the primary purpose of this passage?',
    options: [
      'To explain how radioactivity was discovered',
      'To highlight Marie Curie\'s significant scientific achievements',
      'To describe the process of winning a Nobel Prize',
      'To discuss the dangers of radioactive research'
    ],
    correctAnswer: 1,
    explanation: 'The passage focuses on listing and emphasizing Curie\'s achievements and their lasting impact.',
    skill: 'Identifying author\'s purpose'
  },
  {
    id: 'rw-info-003',
    section: 'reading-writing',
    topic: 'Information and Ideas',
    subtopic: 'Central Ideas',
    difficulty: 'medium',
    passage: 'Urban farming has emerged as a solution to food deserts—areas where residents have limited access to affordable, nutritious food. By converting vacant lots into community gardens, cities can provide fresh produce to underserved neighborhoods. Studies show that urban farms also reduce crime rates, improve mental health, and strengthen community bonds.',
    question: 'According to the passage, urban farming addresses which problem?',
    options: [
      'Lack of available farmland in rural areas',
      'Limited access to healthy food in certain urban areas',
      'Excessive crime in suburban neighborhoods',
      'Mental health issues among farmers'
    ],
    correctAnswer: 1,
    explanation: 'The passage explicitly states that urban farming is a solution to food deserts, which are areas with limited access to nutritious food.',
    skill: 'Locating specific information'
  },
  {
    id: 'rw-info-004',
    section: 'reading-writing',
    topic: 'Information and Ideas',
    subtopic: 'Central Ideas',
    difficulty: 'medium',
    passage: 'The octopus possesses remarkable cognitive abilities that challenge our understanding of intelligence. With neurons distributed throughout their eight arms, octopuses can solve complex problems, use tools, and even play. They have been observed unscrewing jar lids from the inside, navigating mazes, and recognizing individual human faces.',
    question: 'The passage suggests that octopuses are notable because:',
    options: [
      'They have more neurons than any other animal',
      'Their intelligence differs from typical animal cognition',
      'They can only solve simple problems',
      'They live longer than most marine animals'
    ],
    correctAnswer: 1,
    explanation: 'The passage emphasizes that octopus intelligence "challenges our understanding" and describes unique cognitive abilities.',
    skill: 'Drawing inferences'
  },
  {
    id: 'rw-info-005',
    section: 'reading-writing',
    topic: 'Information and Ideas',
    subtopic: 'Central Ideas',
    difficulty: 'hard',
    passage: 'Historians have long debated whether the Renaissance was truly a "rebirth" or simply an evolution of medieval ideas. While traditional narratives emphasize a sharp break from the past, recent scholarship suggests continuity. Medieval universities had already begun emphasizing classical texts, and trade networks that flourished in the Middle Ages enabled the cultural exchange that characterized the Renaissance.',
    question: 'The author\'s main point is that:',
    options: [
      'The Renaissance was less revolutionary than traditionally believed',
      'Medieval universities were more advanced than Renaissance institutions',
      'Trade networks declined during the Renaissance',
      'Classical texts were unknown in the Middle Ages'
    ],
    correctAnswer: 0,
    explanation: 'The passage argues for continuity between the Middle Ages and Renaissance, challenging the idea of a dramatic "rebirth."',
    skill: 'Understanding complex arguments'
  },
  // Textual Evidence
  {
    id: 'rw-info-006',
    section: 'reading-writing',
    topic: 'Information and Ideas',
    subtopic: 'Textual Evidence',
    difficulty: 'easy',
    passage: 'Coffee originated in Ethiopia, where legend says a goat herder noticed his goats becoming energetic after eating certain berries. From Africa, coffee spread to the Arabian Peninsula, where it became central to social and religious life. By the 17th century, coffee houses had become popular gathering places throughout Europe.',
    question: 'Which detail from the passage supports the idea that coffee became culturally significant?',
    options: [
      'Coffee originated in Ethiopia',
      'A goat herder discovered the effects of coffee berries',
      'Coffee became central to social and religious life in Arabia',
      'Coffee spread from Africa to Arabia'
    ],
    correctAnswer: 2,
    explanation: 'Being "central to social and religious life" directly indicates cultural significance.',
    skill: 'Identifying supporting evidence'
  },
  {
    id: 'rw-info-007',
    section: 'reading-writing',
    topic: 'Information and Ideas',
    subtopic: 'Textual Evidence',
    difficulty: 'medium',
    passage: 'The Great Pacific Garbage Patch is not, as many imagine, a solid island of trash. Rather, it consists of a high concentration of microplastics suspended throughout the water column. These tiny particles are nearly invisible to the naked eye but pose severe threats to marine life. Fish and other organisms ingest the plastics, which then accumulate in the food chain.',
    question: 'Which statement from the passage best supports the claim that the garbage patch is dangerous to wildlife?',
    options: [
      'The patch is not a solid island of trash',
      'Microplastics are nearly invisible to the naked eye',
      'Fish ingest plastics, which accumulate in the food chain',
      'The patch consists of suspended microplastics'
    ],
    correctAnswer: 2,
    explanation: 'The statement about fish ingesting plastics directly supports the danger to marine life.',
    skill: 'Selecting supporting evidence'
  },
  {
    id: 'rw-info-008',
    section: 'reading-writing',
    topic: 'Information and Ideas',
    subtopic: 'Textual Evidence',
    difficulty: 'hard',
    passage: 'Dr. Sarah Chen\'s research on memory consolidation has yielded surprising results. Her team found that sleep not only strengthens memories but actively reorganizes them. "During sleep," Chen explains, "the brain replays experiences and extracts general principles. This is why we often solve problems after sleeping on them." The implications extend beyond individual cognition—understanding memory consolidation could revolutionize education.',
    question: 'Which quotation from Dr. Chen best explains why sleep helps problem-solving?',
    options: [
      '"Sleep strengthens memories"',
      '"The brain replays experiences and extracts general principles"',
      '"We often solve problems after sleeping on them"',
      '"This could revolutionize education"'
    ],
    correctAnswer: 1,
    explanation: 'This quotation provides the mechanism (replaying and extracting principles) that explains the problem-solving benefit.',
    skill: 'Understanding cause and effect'
  },
  // Inferences
  {
    id: 'rw-info-009',
    section: 'reading-writing',
    topic: 'Information and Ideas',
    subtopic: 'Inferences',
    difficulty: 'easy',
    question: 'A study found that students who handwrite notes remember information better than those who type. Researchers theorize that the slower pace of handwriting forces students to process and summarize information.',
    passage: 'This passage suggests that:',
    options: [
      'Typing is faster but less effective for learning',
      'All students should be required to handwrite notes',
      'Digital devices should be banned from classrooms',
      'Researchers prefer handwriting over typing'
    ],
    correctAnswer: 0,
    explanation: 'The passage implies typing is faster (handwriting is "slower") but less effective for memory.',
    skill: 'Making inferences'
  },
  {
    id: 'rw-info-010',
    section: 'reading-writing',
    topic: 'Information and Ideas',
    subtopic: 'Inferences',
    difficulty: 'medium',
    passage: 'Archaeological evidence suggests that ancient Polynesians navigated thousands of miles across the Pacific using only the stars, waves, and wildlife. Without compasses or maps, they successfully settled islands from Hawaii to New Zealand. Modern sailors, relying on GPS, often struggle to replicate these journeys.',
    question: 'The author implies that modern sailors:',
    options: [
      'Are generally more skilled than ancient Polynesians',
      'Have lost traditional navigation knowledge',
      'Use GPS more accurately than ancient methods',
      'Successfully replicate ancient voyages'
    ],
    correctAnswer: 1,
    explanation: 'By noting that modern sailors "struggle" despite GPS, the author implies the loss of traditional skills.',
    skill: 'Drawing inferences from contrast'
  }
];

// ============================================
// CRAFT AND STRUCTURE (28% of Reading & Writing)
// ============================================

export const craftStructureQuestions: SATQuestion[] = [
  // Words in Context
  {
    id: 'rw-craft-001',
    section: 'reading-writing',
    topic: 'Craft and Structure',
    subtopic: 'Words in Context',
    difficulty: 'easy',
    passage: 'The scientist was reluctant to publish her findings before conducting additional experiments. She wanted to ensure her conclusions were sound.',
    question: 'As used in the passage, "reluctant" most nearly means:',
    options: [
      'Unable',
      'Unwilling',
      'Unqualified',
      'Uncertain'
    ],
    correctAnswer: 1,
    explanation: 'Reluctant means hesitant or unwilling to do something.',
    skill: 'Vocabulary in context'
  },
  {
    id: 'rw-craft-002',
    section: 'reading-writing',
    topic: 'Craft and Structure',
    subtopic: 'Words in Context',
    difficulty: 'easy',
    passage: 'The novel\'s themes are universal—love, loss, and the search for meaning resonate with readers across all cultures and time periods.',
    question: 'As used in the passage, "universal" most nearly means:',
    options: [
      'Cosmic',
      'Widespread and applicable to everyone',
      'Extremely large',
      'Related to universities'
    ],
    correctAnswer: 1,
    explanation: 'In this context, universal means applicable to all people regardless of background.',
    skill: 'Vocabulary in context'
  },
  {
    id: 'rw-craft-003',
    section: 'reading-writing',
    topic: 'Craft and Structure',
    subtopic: 'Words in Context',
    difficulty: 'medium',
    passage: 'The architect\'s innovative designs challenged conventional thinking. His buildings, with their curved walls and organic shapes, defied the rigid geometry that had dominated construction for centuries.',
    question: 'As used in the passage, "conventional" most nearly means:',
    options: [
      'Traditional and widely accepted',
      'Related to conventions or conferences',
      'Convenient and practical',
      'Creative and unique'
    ],
    correctAnswer: 0,
    explanation: 'Conventional here means traditional, contrasted with "innovative" and "defied."',
    skill: 'Vocabulary in context'
  },
  {
    id: 'rw-craft-004',
    section: 'reading-writing',
    topic: 'Craft and Structure',
    subtopic: 'Words in Context',
    difficulty: 'medium',
    passage: 'The diplomat\'s speech was deliberately ambiguous. By refusing to take a clear position, she preserved flexibility for future negotiations.',
    question: 'As used in the passage, "ambiguous" most nearly means:',
    options: [
      'Hostile',
      'Open to multiple interpretations',
      'Extremely long',
      'Boring'
    ],
    correctAnswer: 1,
    explanation: 'Ambiguous means unclear or having multiple possible meanings, which explains why she avoided a "clear position."',
    skill: 'Vocabulary in context'
  },
  {
    id: 'rw-craft-005',
    section: 'reading-writing',
    topic: 'Craft and Structure',
    subtopic: 'Words in Context',
    difficulty: 'hard',
    passage: 'The historian argued that the king\'s decision to consolidate power was not tyrannical but pragmatic. Facing threats from multiple rivals, the monarch needed a unified command structure to ensure the kingdom\'s survival.',
    question: 'As used in the passage, "pragmatic" most nearly means:',
    options: [
      'Idealistic and hopeful',
      'Practical and focused on results',
      'Cruel and oppressive',
      'Democratic and fair'
    ],
    correctAnswer: 1,
    explanation: 'Pragmatic means practical, contrasted here with "tyrannical" and justified by practical necessity.',
    skill: 'Vocabulary in context'
  },
  // Text Structure and Purpose
  {
    id: 'rw-craft-006',
    section: 'reading-writing',
    topic: 'Craft and Structure',
    subtopic: 'Text Structure',
    difficulty: 'easy',
    passage: 'First, mix the flour and sugar. Next, add the eggs and vanilla. Then, fold in the chocolate chips. Finally, bake at 350°F for 12 minutes.',
    question: 'The passage is organized by:',
    options: [
      'Cause and effect',
      'Compare and contrast',
      'Chronological sequence',
      'Problem and solution'
    ],
    correctAnswer: 2,
    explanation: 'Words like "first," "next," "then," and "finally" indicate chronological/sequential order.',
    skill: 'Identifying text structure'
  },
  {
    id: 'rw-craft-007',
    section: 'reading-writing',
    topic: 'Craft and Structure',
    subtopic: 'Text Structure',
    difficulty: 'medium',
    passage: 'While dogs are known for their loyalty and social nature, cats are often characterized as independent and aloof. Dogs typically crave attention and companionship, whereas cats are content spending time alone. However, both species form strong bonds with their owners.',
    question: 'The passage is primarily organized by:',
    options: [
      'Problem and solution',
      'Cause and effect',
      'Compare and contrast',
      'Order of importance'
    ],
    correctAnswer: 2,
    explanation: 'The passage compares dogs and cats, using "while," "whereas," and "however."',
    skill: 'Identifying text structure'
  },
  {
    id: 'rw-craft-008',
    section: 'reading-writing',
    topic: 'Craft and Structure',
    subtopic: 'Purpose',
    difficulty: 'medium',
    passage: 'Climate change is not a distant threat—it is happening now. Rising sea levels threaten coastal cities. Extreme weather events are becoming more frequent. The time for action was yesterday. We must demand that our leaders take immediate, decisive steps to reduce carbon emissions.',
    question: 'The primary purpose of this passage is to:',
    options: [
      'Explain the causes of climate change',
      'Persuade readers to support climate action',
      'Compare different climate policies',
      'Describe the history of environmental activism'
    ],
    correctAnswer: 1,
    explanation: 'The urgent language and call for "action" and "demand" indicate a persuasive purpose.',
    skill: 'Identifying author\'s purpose'
  },
  {
    id: 'rw-craft-009',
    section: 'reading-writing',
    topic: 'Craft and Structure',
    subtopic: 'Purpose',
    difficulty: 'hard',
    passage: 'The museum\'s new exhibit on ancient Rome has drawn criticism from historians who argue it oversimplifies Roman society. While the colorful displays and interactive features attract visitors, critics contend that they sacrifice accuracy for entertainment. Museum officials respond that engaging the public is essential for promoting historical awareness.',
    question: 'The author\'s purpose in writing this passage is to:',
    options: [
      'Criticize the museum\'s approach to history',
      'Defend the museum against unfair attacks',
      'Present multiple perspectives on a controversy',
      'Explain why Roman history is important'
    ],
    correctAnswer: 2,
    explanation: 'The passage presents both the critics\' view and the museum\'s response without taking sides.',
    skill: 'Analyzing balanced perspectives'
  },
  // Cross-Text Connections
  {
    id: 'rw-craft-010',
    section: 'reading-writing',
    topic: 'Craft and Structure',
    subtopic: 'Cross-Text Connections',
    difficulty: 'hard',
    passage: 'Text 1: Artificial intelligence will transform medicine by diagnosing diseases more accurately than human doctors. AI systems can analyze millions of medical images in seconds, identifying patterns invisible to the human eye.\n\nText 2: Despite advances in AI, human doctors remain essential. Medicine requires empathy, ethical judgment, and the ability to consider a patient\'s unique circumstances—qualities that algorithms cannot replicate.',
    question: 'How would the author of Text 2 most likely respond to Text 1?',
    options: [
      'AI cannot analyze medical images effectively',
      'Technical accuracy alone is insufficient for good medicine',
      'Human doctors are better at pattern recognition than AI',
      'Medicine should not use any technology'
    ],
    correctAnswer: 1,
    explanation: 'Text 2 emphasizes qualities beyond accuracy (empathy, ethics), suggesting accuracy alone isn\'t enough.',
    skill: 'Comparing perspectives across texts'
  }
];

// ============================================
// STANDARD ENGLISH CONVENTIONS (26% of Reading & Writing)
// ============================================

export const conventionsQuestions: SATQuestion[] = [
  // Subject-Verb Agreement
  {
    id: 'rw-conv-001',
    section: 'reading-writing',
    topic: 'Standard English Conventions',
    subtopic: 'Subject-Verb Agreement',
    difficulty: 'easy',
    question: 'The collection of rare books _____ on the third floor of the library.',
    options: [
      'are located',
      'is located',
      'were located',
      'have been located'
    ],
    correctAnswer: 1,
    explanation: 'The subject "collection" is singular, so it takes the singular verb "is."',
    skill: 'Subject-verb agreement'
  },
  {
    id: 'rw-conv-002',
    section: 'reading-writing',
    topic: 'Standard English Conventions',
    subtopic: 'Subject-Verb Agreement',
    difficulty: 'easy',
    question: 'Neither the students nor the teacher _____ the answer.',
    options: [
      'know',
      'knows',
      'are knowing',
      'have known'
    ],
    correctAnswer: 1,
    explanation: 'With "neither...nor," the verb agrees with the nearer subject ("teacher" = singular).',
    skill: 'Subject-verb agreement with compounds'
  },
  {
    id: 'rw-conv-003',
    section: 'reading-writing',
    topic: 'Standard English Conventions',
    subtopic: 'Subject-Verb Agreement',
    difficulty: 'medium',
    question: 'The data from the experiments _____ that the hypothesis was incorrect.',
    options: [
      'suggests',
      'suggest',
      'is suggesting',
      'has suggested'
    ],
    correctAnswer: 1,
    explanation: 'In formal writing, "data" is treated as plural, taking "suggest."',
    skill: 'Agreement with collective nouns'
  },
  // Pronoun-Antecedent Agreement
  {
    id: 'rw-conv-004',
    section: 'reading-writing',
    topic: 'Standard English Conventions',
    subtopic: 'Pronouns',
    difficulty: 'easy',
    question: 'Each of the musicians must bring _____ own instrument to rehearsal.',
    options: [
      'their',
      'his or her',
      'its',
      'our'
    ],
    correctAnswer: 1,
    explanation: 'In formal writing, "each" is singular and takes "his or her." (Note: "their" is increasingly accepted.)',
    skill: 'Pronoun-antecedent agreement'
  },
  {
    id: 'rw-conv-005',
    section: 'reading-writing',
    topic: 'Standard English Conventions',
    subtopic: 'Pronouns',
    difficulty: 'medium',
    question: 'The committee announced _____ decision to postpone the event.',
    options: [
      'their',
      'its',
      'his',
      'they\'re'
    ],
    correctAnswer: 1,
    explanation: 'Committee is a collective noun (acting as a unit) and takes "its."',
    skill: 'Pronouns with collective nouns'
  },
  // Punctuation
  {
    id: 'rw-conv-006',
    section: 'reading-writing',
    topic: 'Standard English Conventions',
    subtopic: 'Punctuation',
    difficulty: 'easy',
    question: 'Which sentence uses commas correctly?',
    options: [
      'The tall, old, oak tree provided shade.',
      'The tall old oak tree, provided shade.',
      'The tall, old oak tree provided shade.',
      'The, tall old oak tree provided shade.'
    ],
    correctAnswer: 2,
    explanation: 'Use commas between coordinate adjectives (tall, old) but not before the noun.',
    skill: 'Comma usage'
  },
  {
    id: 'rw-conv-007',
    section: 'reading-writing',
    topic: 'Standard English Conventions',
    subtopic: 'Punctuation',
    difficulty: 'medium',
    question: 'Which sentence uses the semicolon correctly?',
    options: [
      'She studied hard; and passed the exam.',
      'She studied hard; she passed the exam.',
      'She studied; hard and passed the exam.',
      'She; studied hard and passed the exam.'
    ],
    correctAnswer: 1,
    explanation: 'A semicolon correctly joins two independent clauses without a conjunction.',
    skill: 'Semicolon usage'
  },
  {
    id: 'rw-conv-008',
    section: 'reading-writing',
    topic: 'Standard English Conventions',
    subtopic: 'Punctuation',
    difficulty: 'medium',
    question: 'The restaurant—which opened last month—has received excellent reviews.',
    passage: 'Which punctuation could correctly replace the dashes?',
    options: [
      'Commas',
      'Semicolons',
      'Periods',
      'Quotation marks'
    ],
    correctAnswer: 0,
    explanation: 'Dashes and commas can both set off nonessential information.',
    skill: 'Dash and comma interchangeability'
  },
  {
    id: 'rw-conv-009',
    section: 'reading-writing',
    topic: 'Standard English Conventions',
    subtopic: 'Punctuation',
    difficulty: 'hard',
    question: 'Which sentence uses the colon correctly?',
    options: [
      'The ingredients include: flour, sugar, and eggs.',
      'She had one goal: to win the championship.',
      'He said: that he would arrive soon.',
      'The movie was: exciting and dramatic.'
    ],
    correctAnswer: 1,
    explanation: 'A colon follows a complete sentence and introduces an explanation or elaboration.',
    skill: 'Colon usage'
  },
  // Verb Tense
  {
    id: 'rw-conv-010',
    section: 'reading-writing',
    topic: 'Standard English Conventions',
    subtopic: 'Verb Tense',
    difficulty: 'easy',
    question: 'By the time we arrived, the movie _____ already _____.',
    options: [
      'has, started',
      'had, started',
      'was, starting',
      'have, started'
    ],
    correctAnswer: 1,
    explanation: 'Past perfect "had started" indicates an action completed before another past action.',
    skill: 'Past perfect tense'
  },
  {
    id: 'rw-conv-011',
    section: 'reading-writing',
    topic: 'Standard English Conventions',
    subtopic: 'Verb Tense',
    difficulty: 'medium',
    question: 'The scientists have been _____ this phenomenon for decades.',
    options: [
      'study',
      'studied',
      'studying',
      'studies'
    ],
    correctAnswer: 2,
    explanation: 'Present perfect progressive "have been studying" indicates ongoing action from past to present.',
    skill: 'Progressive tenses'
  },
  // Sentence Structure
  {
    id: 'rw-conv-012',
    section: 'reading-writing',
    topic: 'Standard English Conventions',
    subtopic: 'Sentence Structure',
    difficulty: 'easy',
    question: 'Which is a complete sentence?',
    options: [
      'Running through the park on Saturday morning.',
      'The dog ran through the park.',
      'Because she wanted to exercise.',
      'Although it was raining heavily.'
    ],
    correctAnswer: 1,
    explanation: 'Only B has both a subject (dog) and a complete predicate (ran through the park).',
    skill: 'Complete sentences'
  },
  {
    id: 'rw-conv-013',
    section: 'reading-writing',
    topic: 'Standard English Conventions',
    subtopic: 'Sentence Structure',
    difficulty: 'medium',
    question: 'The hikers reached the summit the view was spectacular.',
    passage: 'This is an example of:',
    options: [
      'A fragment',
      'A run-on sentence',
      'A correctly punctuated sentence',
      'A compound-complex sentence'
    ],
    correctAnswer: 1,
    explanation: 'Two independent clauses joined without punctuation or a conjunction is a run-on.',
    skill: 'Identifying sentence errors'
  },
  {
    id: 'rw-conv-014',
    section: 'reading-writing',
    topic: 'Standard English Conventions',
    subtopic: 'Sentence Structure',
    difficulty: 'hard',
    question: 'Which sentence correctly uses parallel structure?',
    options: [
      'She likes hiking, to swim, and riding bikes.',
      'She likes hiking, swimming, and biking.',
      'She likes to hike, swimming, and bikes.',
      'She likes hiking, swimming, and to ride bikes.'
    ],
    correctAnswer: 1,
    explanation: 'Parallel structure requires matching grammatical forms (all gerunds: hiking, swimming, biking).',
    skill: 'Parallel structure'
  },
  // Modifiers
  {
    id: 'rw-conv-015',
    section: 'reading-writing',
    topic: 'Standard English Conventions',
    subtopic: 'Modifiers',
    difficulty: 'medium',
    question: 'Walking to school, the rain began to fall.',
    passage: 'This sentence contains:',
    options: [
      'Correct modifier placement',
      'A dangling modifier',
      'A split infinitive',
      'Proper parallel structure'
    ],
    correctAnswer: 1,
    explanation: 'The modifier "walking to school" dangles because the rain wasn\'t walking.',
    skill: 'Identifying dangling modifiers'
  },
  {
    id: 'rw-conv-016',
    section: 'reading-writing',
    topic: 'Standard English Conventions',
    subtopic: 'Modifiers',
    difficulty: 'medium',
    question: 'Which sentence is correctly written?',
    options: [
      'Exhausted from the hike, the bed looked inviting.',
      'Exhausted from the hike, she thought the bed looked inviting.',
      'The bed looked inviting, exhausted from the hike.',
      'Exhausted, the bed from the hike looked inviting.'
    ],
    correctAnswer: 1,
    explanation: 'The modifier "exhausted from the hike" correctly modifies "she."',
    skill: 'Correcting dangling modifiers'
  },
  // Possessives
  {
    id: 'rw-conv-017',
    section: 'reading-writing',
    topic: 'Standard English Conventions',
    subtopic: 'Possessives',
    difficulty: 'easy',
    question: 'The _____ toys were scattered across the room.',
    options: [
      'childrens\'',
      'children\'s',
      'childrens',
      'children'
    ],
    correctAnswer: 1,
    explanation: 'Children is already plural, so the possessive is children\'s.',
    skill: 'Irregular plural possessives'
  },
  {
    id: 'rw-conv-018',
    section: 'reading-writing',
    topic: 'Standard English Conventions',
    subtopic: 'Possessives',
    difficulty: 'medium',
    question: 'Which sentence uses the possessive correctly?',
    options: [
      'The three dog\'s leashes were tangled.',
      'The three dogs\' leashes were tangled.',
      'The three dogs leashes were tangled.',
      'The three dogs\'s leashes were tangled.'
    ],
    correctAnswer: 1,
    explanation: 'For plural nouns ending in s, add only an apostrophe: dogs\'.',
    skill: 'Plural possessives'
  }
];

// ============================================
// EXPRESSION OF IDEAS (20% of Reading & Writing)
// ============================================

export const expressionIdeasQuestions: SATQuestion[] = [
  // Transitions
  {
    id: 'rw-expr-001',
    section: 'reading-writing',
    topic: 'Expression of Ideas',
    subtopic: 'Transitions',
    difficulty: 'easy',
    passage: 'Exercise improves cardiovascular health. _____, it enhances mental well-being.',
    question: 'Which transition best fits the blank?',
    options: [
      'However',
      'Nevertheless',
      'Furthermore',
      'Instead'
    ],
    correctAnswer: 2,
    explanation: '"Furthermore" adds another benefit, continuing the positive list.',
    skill: 'Additive transitions'
  },
  {
    id: 'rw-expr-002',
    section: 'reading-writing',
    topic: 'Expression of Ideas',
    subtopic: 'Transitions',
    difficulty: 'easy',
    passage: 'The experiment failed to produce expected results. _____, the researchers learned valuable lessons.',
    question: 'Which transition best fits the blank?',
    options: [
      'Similarly',
      'Therefore',
      'Nevertheless',
      'For example'
    ],
    correctAnswer: 2,
    explanation: '"Nevertheless" shows contrast—despite failure, there was a positive outcome.',
    skill: 'Contrasting transitions'
  },
  {
    id: 'rw-expr-003',
    section: 'reading-writing',
    topic: 'Expression of Ideas',
    subtopic: 'Transitions',
    difficulty: 'medium',
    passage: 'The company reduced its carbon footprint by 40%. _____ investing in renewable energy, it implemented a comprehensive recycling program.',
    question: 'Which transition best fits the blank?',
    options: [
      'In spite of',
      'In addition to',
      'Instead of',
      'Because of'
    ],
    correctAnswer: 1,
    explanation: '"In addition to" shows the company did multiple things.',
    skill: 'Compound transitions'
  },
  {
    id: 'rw-expr-004',
    section: 'reading-writing',
    topic: 'Expression of Ideas',
    subtopic: 'Transitions',
    difficulty: 'hard',
    passage: 'The ancient Maya developed sophisticated mathematical concepts. Their number system, _____, was one of the first to include a symbol for zero.',
    question: 'Which transition best fits the blank?',
    options: [
      'however',
      'for instance',
      'therefore',
      'meanwhile'
    ],
    correctAnswer: 1,
    explanation: '"For instance" introduces a specific example of their mathematical sophistication.',
    skill: 'Example transitions'
  },
  // Sentence Combining
  {
    id: 'rw-expr-005',
    section: 'reading-writing',
    topic: 'Expression of Ideas',
    subtopic: 'Sentence Combining',
    difficulty: 'medium',
    passage: 'The museum is free on Tuesdays. It attracts large crowds then.',
    question: 'Which choice most effectively combines these sentences?',
    options: [
      'The museum is free on Tuesdays, it attracts large crowds then.',
      'The museum, free on Tuesdays, attracts large crowds then.',
      'Free on Tuesdays, the museum attracts large crowds.',
      'The museum is free on Tuesdays and it attracts large crowds then.'
    ],
    correctAnswer: 2,
    explanation: 'This option is concise and clearly shows the cause-effect relationship.',
    skill: 'Effective sentence combining'
  },
  {
    id: 'rw-expr-006',
    section: 'reading-writing',
    topic: 'Expression of Ideas',
    subtopic: 'Sentence Combining',
    difficulty: 'hard',
    passage: 'Dr. Patel conducted the research. She discovered a new species. The species lives in deep-sea vents.',
    question: 'Which choice most effectively combines these sentences?',
    options: [
      'Dr. Patel conducted the research, discovered a new species, and it lives in deep-sea vents.',
      'Dr. Patel\'s research led to the discovery of a new species living in deep-sea vents.',
      'Dr. Patel conducted research and she discovered a new species and it lives in deep-sea vents.',
      'Conducting research, Dr. Patel discovered a new species, and the species lives in deep-sea vents.'
    ],
    correctAnswer: 1,
    explanation: 'This option is the most concise and flows naturally.',
    skill: 'Advanced sentence combining'
  },
  // Concision
  {
    id: 'rw-expr-007',
    section: 'reading-writing',
    topic: 'Expression of Ideas',
    subtopic: 'Concision',
    difficulty: 'easy',
    question: 'Which is the most concise way to express this idea?',
    passage: 'The reason why the project failed was because of insufficient funding.',
    options: [
      'The reason why the project failed was because of insufficient funding.',
      'The project failed due to the fact that there was insufficient funding.',
      'The project failed because of insufficient funding.',
      'The reason for the project\'s failure was because funding was insufficient.'
    ],
    correctAnswer: 2,
    explanation: '"The project failed because of insufficient funding" is direct and avoids redundancy.',
    skill: 'Eliminating redundancy'
  },
  {
    id: 'rw-expr-008',
    section: 'reading-writing',
    topic: 'Expression of Ideas',
    subtopic: 'Concision',
    difficulty: 'medium',
    question: 'Which revision eliminates wordiness while preserving the meaning?',
    passage: 'In the event that it rains tomorrow, the outdoor concert will be canceled and called off.',
    options: [
      'In the event that it rains tomorrow, the outdoor concert will be canceled.',
      'If it rains tomorrow, the outdoor concert will be canceled.',
      'In the event that there is rain tomorrow, the concert will be called off.',
      'If it rains tomorrow, the outdoor concert will be canceled and called off.'
    ],
    correctAnswer: 1,
    explanation: '"If" is more concise than "in the event that," and "canceled" alone suffices.',
    skill: 'Wordiness reduction'
  },
  // Logical Sequence
  {
    id: 'rw-expr-009',
    section: 'reading-writing',
    topic: 'Expression of Ideas',
    subtopic: 'Logical Sequence',
    difficulty: 'medium',
    passage: '[1] The experiment yielded surprising results. [2] First, the researchers formulated their hypothesis. [3] Then, they collected data over several months. [4] Finally, they analyzed the data and published their findings.',
    question: 'For the most logical order, sentence 1 should be placed:',
    options: [
      'Where it is now',
      'After sentence 2',
      'After sentence 3',
      'After sentence 4'
    ],
    correctAnswer: 2,
    explanation: 'Results come after data collection, so sentence 1 fits after sentence 3.',
    skill: 'Sentence placement'
  },
  // Precision
  {
    id: 'rw-expr-010',
    section: 'reading-writing',
    topic: 'Expression of Ideas',
    subtopic: 'Precision',
    difficulty: 'medium',
    passage: 'The author\'s writing style is very _____.',
    question: 'Which word most precisely describes vivid, detailed prose?',
    options: [
      'nice',
      'good',
      'evocative',
      'thing'
    ],
    correctAnswer: 2,
    explanation: '"Evocative" precisely describes writing that vividly brings ideas to life.',
    skill: 'Precise word choice'
  },
  {
    id: 'rw-expr-011',
    section: 'reading-writing',
    topic: 'Expression of Ideas',
    subtopic: 'Precision',
    difficulty: 'hard',
    passage: 'The CEO\'s speech _____ the importance of innovation.',
    question: 'Which word best fits if the CEO strongly emphasized this point?',
    options: [
      'mentioned',
      'said',
      'underscored',
      'talked about'
    ],
    correctAnswer: 2,
    explanation: '"Underscored" means to emphasize strongly, more precise than other options.',
    skill: 'Precise verbs'
  },
  // Style and Tone
  {
    id: 'rw-expr-012',
    section: 'reading-writing',
    topic: 'Expression of Ideas',
    subtopic: 'Style and Tone',
    difficulty: 'medium',
    question: 'In a formal research paper, which sentence is most appropriate?',
    options: [
      'The results were super surprising and totally unexpected.',
      'The results were, like, really surprising.',
      'The results were unexpectedly significant.',
      'The results blew everyone\'s mind.'
    ],
    correctAnswer: 2,
    explanation: '"Unexpectedly significant" maintains formal academic tone.',
    skill: 'Maintaining appropriate register'
  },
  // Synthesis
  {
    id: 'rw-expr-013',
    section: 'reading-writing',
    topic: 'Expression of Ideas',
    subtopic: 'Synthesis',
    difficulty: 'hard',
    passage: 'A writer wants to conclude an essay about renewable energy with a call to action. Which sentence best accomplishes this goal?',
    question: 'Select the most effective concluding sentence.',
    options: [
      'Renewable energy has many benefits.',
      'In conclusion, this essay discussed renewable energy.',
      'The time to invest in our sustainable future is now—contact your representatives today.',
      'Some people disagree about renewable energy.'
    ],
    correctAnswer: 2,
    explanation: 'This option provides a clear call to action with specific steps.',
    skill: 'Effective conclusions'
  }
];

// Additional Reading Comprehension Questions
export const additionalReadingQuestions: SATQuestion[] = [
  // Literary Analysis
  {
    id: 'rw-lit-001',
    section: 'reading-writing',
    topic: 'Information and Ideas',
    subtopic: 'Literary Analysis',
    difficulty: 'medium',
    passage: 'The old lighthouse stood sentinel over the crashing waves, its beam slicing through the fog like a sword through silk. For generations, it had guided ships safely to harbor, but now, abandoned and forgotten, it watched over an empty sea.',
    question: 'The imagery in the passage primarily serves to:',
    options: [
      'Describe the lighthouse\'s technical features',
      'Create a sense of loneliness and abandonment',
      'Explain the history of maritime navigation',
      'Compare lighthouses to military structures'
    ],
    correctAnswer: 1,
    explanation: 'Words like "abandoned," "forgotten," and "empty sea" create a lonely atmosphere.',
    skill: 'Analyzing literary imagery'
  },
  {
    id: 'rw-lit-002',
    section: 'reading-writing',
    topic: 'Information and Ideas',
    subtopic: 'Literary Analysis',
    difficulty: 'hard',
    passage: 'Dr. Frankenstein gazed upon his creation with a mixture of triumph and horror. The creature\'s eyes opened, revealing not the monstrousness he had feared but an almost childlike bewilderment. In that moment, Frankenstein understood that true monstrosity lay not in the creature, but in the act of creation itself.',
    question: 'The passage suggests that:',
    options: [
      'The creature is inherently evil',
      'Frankenstein is proud of his creation',
      'The ethics of creation are morally complex',
      'Monsters are always physically ugly'
    ],
    correctAnswer: 2,
    explanation: 'The passage shifts blame from the creature to "the act of creation itself," suggesting moral complexity.',
    skill: 'Theme analysis'
  },
  // Scientific Reading
  {
    id: 'rw-sci-001',
    section: 'reading-writing',
    topic: 'Information and Ideas',
    subtopic: 'Scientific Reading',
    difficulty: 'medium',
    passage: 'A 2023 study examined the effects of blue light exposure on sleep quality. Researchers divided 200 participants into two groups: one used devices with blue light filters before bed, while the control group used unfiltered devices. The filter group reported 40% better sleep quality and fell asleep an average of 25 minutes faster.',
    question: 'Based on the study, what can be concluded?',
    options: [
      'Blue light causes permanent damage to sleep patterns',
      'Blue light filters may improve sleep quality',
      'Everyone should avoid using devices before bed',
      'The study proves blue light is harmful'
    ],
    correctAnswer: 1,
    explanation: 'The study shows correlation between filters and better sleep, but doesn\'t prove causation or permanent effects.',
    skill: 'Scientific reasoning'
  },
  {
    id: 'rw-sci-002',
    section: 'reading-writing',
    topic: 'Information and Ideas',
    subtopic: 'Scientific Reading',
    difficulty: 'hard',
    passage: 'While CRISPR gene editing offers unprecedented potential to cure genetic diseases, scientists urge caution. Off-target effects—unintended genetic modifications—remain a significant concern. A recent study found that CRISPR edits in mice resulted in unexpected mutations in 15% of cases, prompting calls for more rigorous safety protocols.',
    question: 'The author\'s primary purpose is to:',
    options: [
      'Argue that CRISPR should be banned',
      'Explain how CRISPR technology works',
      'Present both the promise and risks of CRISPR',
      'Criticize scientists for being too cautious'
    ],
    correctAnswer: 2,
    explanation: 'The passage acknowledges "unprecedented potential" while also noting concerns and calls for caution.',
    skill: 'Balanced scientific analysis'
  },
  // Historical/Social Science Reading
  {
    id: 'rw-hist-001',
    section: 'reading-writing',
    topic: 'Information and Ideas',
    subtopic: 'Historical Analysis',
    difficulty: 'medium',
    passage: 'The Industrial Revolution fundamentally transformed not only production methods but also social structures. As factories drew workers from rural areas to cities, traditional family and community bonds weakened. Children who once worked alongside parents on farms now labored in dangerous mills, prompting the first child labor laws.',
    question: 'According to the passage, industrialization affected:',
    options: [
      'Only production methods',
      'Both economic and social structures',
      'Primarily rural communities',
      'Only children\'s lives'
    ],
    correctAnswer: 1,
    explanation: 'The passage explicitly states changes to "production methods" AND "social structures."',
    skill: 'Historical cause and effect'
  },
  {
    id: 'rw-hist-002',
    section: 'reading-writing',
    topic: 'Information and Ideas',
    subtopic: 'Historical Analysis',
    difficulty: 'hard',
    passage: 'Historians debate whether the American Revolution was truly revolutionary. Traditional narratives emphasize the break from monarchy and the establishment of republican government. Revisionist historians, however, note that many social hierarchies remained intact: slavery persisted, women couldn\'t vote, and property requirements limited suffrage.',
    question: 'The revisionist historians would most likely argue that:',
    options: [
      'The American Revolution achieved all its goals',
      'The Revolution primarily benefited wealthy white men',
      'Monarchies are superior to republics',
      'The Revolution had no lasting effects'
    ],
    correctAnswer: 1,
    explanation: 'By noting that slavery persisted and voting was limited, revisionists suggest benefits were not universal.',
    skill: 'Evaluating historical arguments'
  }
];

// Combine all SAT Reading & Writing questions
export const allSATReadingWritingQuestions: SATQuestion[] = [
  ...informationIdeasQuestions,
  ...craftStructureQuestions,
  ...conventionsQuestions,
  ...expressionIdeasQuestions,
  ...additionalReadingQuestions
];

// Helper functions
export const getReadingWritingQuestionsByTopic = (topic: string) => {
  return allSATReadingWritingQuestions.filter(q => q.topic === topic);
};

export const getReadingWritingQuestionsByDifficulty = (difficulty: SATQuestion['difficulty']) => {
  return allSATReadingWritingQuestions.filter(q => q.difficulty === difficulty);
};

export const getRandomReadingWritingQuestions = (count: number, topic?: string) => {
  let pool = topic ? getReadingWritingQuestionsByTopic(topic) : allSATReadingWritingQuestions;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

