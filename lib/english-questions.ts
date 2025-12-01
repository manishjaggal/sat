// Extended English Questions Bank

import { Question } from './questions';

export const extendedEnglishQuestions: Question[] = [
  // Grammar
  {
    id: 'eng-101',
    subject: 'english',
    topic: 'Grammar',
    difficulty: 'easy',
    question: 'Choose the correct verb form: The patient _____ better today.',
    options: ['feel', 'feels', 'feeling', 'feeled'],
    correctAnswer: 1,
    explanation: 'A singular subject (patient) requires a singular verb (feels).'
  },
  {
    id: 'eng-102',
    subject: 'english',
    topic: 'Grammar',
    difficulty: 'easy',
    question: 'Which sentence is grammatically correct?',
    options: [
      'Me and the nurse checked the patient.',
      'The nurse and I checked the patient.',
      'The nurse and me checked the patient.',
      'I and the nurse checked the patient.'
    ],
    correctAnswer: 1,
    explanation: 'Use "I" as a subject, and place yourself last: "The nurse and I."'
  },
  {
    id: 'eng-103',
    subject: 'english',
    topic: 'Grammar',
    difficulty: 'medium',
    question: 'Choose the correct word: The patient took _____ medication.',
    options: ['they\'re', 'there', 'their', 'theirs'],
    correctAnswer: 2,
    explanation: '"Their" is the possessive pronoun showing ownership.'
  },
  {
    id: 'eng-104',
    subject: 'english',
    topic: 'Grammar',
    difficulty: 'medium',
    question: 'Which sentence contains a pronoun-antecedent agreement error?',
    options: [
      'Each nurse must complete their training.',
      'All nurses must complete their training.',
      'The nurse must complete her training.',
      'Nurses must complete their training.'
    ],
    correctAnswer: 0,
    explanation: '"Each" is singular and should use "his or her," not "their" (in formal writing).'
  },
  {
    id: 'eng-105',
    subject: 'english',
    topic: 'Grammar',
    difficulty: 'hard',
    question: 'Which sentence correctly uses the past perfect tense?',
    options: [
      'The patient eaten before the surgery.',
      'The patient has eaten before the surgery.',
      'The patient had eaten before the surgery.',
      'The patient was eating before the surgery.'
    ],
    correctAnswer: 2,
    explanation: 'Past perfect (had + past participle) shows an action completed before another past action.'
  },
  {
    id: 'eng-106',
    subject: 'english',
    topic: 'Vocabulary',
    difficulty: 'easy',
    question: 'The prefix "pre-" means:',
    options: ['After', 'Before', 'Against', 'Without'],
    correctAnswer: 1,
    explanation: 'Pre- means before (prenatal, preoperative, prediagnosis).'
  },
  {
    id: 'eng-107',
    subject: 'english',
    topic: 'Vocabulary',
    difficulty: 'medium',
    question: 'What does "sublingual" mean?',
    options: ['Above the tongue', 'Under the tongue', 'Around the tongue', 'Behind the tongue'],
    correctAnswer: 1,
    explanation: 'Sub- means under, lingual refers to tongue. Sublingual = under the tongue.'
  },
  {
    id: 'eng-108',
    subject: 'english',
    topic: 'Vocabulary',
    difficulty: 'medium',
    question: 'The suffix "-pathy" means:',
    options: ['Study of', 'Disease or suffering', 'Fear of', 'Treatment'],
    correctAnswer: 1,
    explanation: '-pathy means disease or suffering (neuropathy, myopathy).'
  },
  {
    id: 'eng-109',
    subject: 'english',
    topic: 'Vocabulary',
    difficulty: 'hard',
    question: 'What does "etiology" mean?',
    options: ['Treatment of disease', 'Prevention of disease', 'Cause or origin of disease', 'Symptoms of disease'],
    correctAnswer: 2,
    explanation: 'Etiology refers to the cause or origin of a disease.'
  },
  {
    id: 'eng-110',
    subject: 'english',
    topic: 'Vocabulary',
    difficulty: 'hard',
    question: 'The term "idiopathic" refers to a condition that:',
    options: ['Has a known cause', 'Has an unknown cause', 'Is contagious', 'Is inherited'],
    correctAnswer: 1,
    explanation: 'Idiopathic means arising from an unknown cause.'
  },
  {
    id: 'eng-111',
    subject: 'english',
    topic: 'Sentence Structure',
    difficulty: 'easy',
    question: 'Which is a complete sentence?',
    options: [
      'Running to the pharmacy.',
      'Because the patient was sick.',
      'The doctor prescribed medication.',
      'After reviewing the chart.'
    ],
    correctAnswer: 2,
    explanation: 'A complete sentence has a subject (doctor) and predicate (prescribed medication).'
  },
  {
    id: 'eng-112',
    subject: 'english',
    topic: 'Sentence Structure',
    difficulty: 'medium',
    question: 'Which sentence is a run-on?',
    options: [
      'The patient arrived, and the nurse checked him in.',
      'The patient arrived the nurse checked him in.',
      'The patient arrived; the nurse checked him in.',
      'When the patient arrived, the nurse checked him in.'
    ],
    correctAnswer: 1,
    explanation: 'A run-on sentence joins two independent clauses without proper punctuation or conjunction.'
  },
  {
    id: 'eng-113',
    subject: 'english',
    topic: 'Sentence Structure',
    difficulty: 'hard',
    question: 'Which sentence correctly uses a semicolon?',
    options: [
      'The patient needs rest; and fluids.',
      'The patient needs rest; she should drink fluids.',
      'The patient needs; rest and fluids.',
      'The patient; needs rest and fluids.'
    ],
    correctAnswer: 1,
    explanation: 'A semicolon joins two related independent clauses without a conjunction.'
  },
  {
    id: 'eng-114',
    subject: 'english',
    topic: 'Punctuation',
    difficulty: 'easy',
    question: 'Which sentence uses an apostrophe correctly?',
    options: [
      'The nurses station was busy.',
      'The nurse\'s station was busy.',
      'The nurses\' station was busy (for multiple nurses).',
      'Both B and C are correct depending on context.'
    ],
    correctAnswer: 3,
    explanation: 'B shows one nurse\'s station; C shows multiple nurses\' station. Both are correct in context.'
  },
  {
    id: 'eng-115',
    subject: 'english',
    topic: 'Punctuation',
    difficulty: 'medium',
    question: 'Which sentence uses a colon correctly?',
    options: [
      'The symptoms include: fever, chills, and fatigue.',
      'The patient has the following symptoms: fever, chills, and fatigue.',
      'The symptoms: are fever, chills, and fatigue.',
      'The patient has: symptoms.'
    ],
    correctAnswer: 1,
    explanation: 'A colon follows a complete sentence that introduces a list.'
  },
  {
    id: 'eng-116',
    subject: 'english',
    topic: 'Punctuation',
    difficulty: 'hard',
    question: 'Which sentence uses quotation marks correctly?',
    options: [
      'The doctor said "take two pills daily".',
      'The doctor said, "Take two pills daily."',
      'The doctor said, "take two pills daily".',
      '"The doctor said take two pills daily."'
    ],
    correctAnswer: 1,
    explanation: 'Quoted speech should be capitalized and end punctuation goes inside quotation marks.'
  },
  {
    id: 'eng-117',
    subject: 'english',
    topic: 'Spelling',
    difficulty: 'easy',
    question: 'Which word is spelled correctly?',
    options: ['Recieve', 'Receive', 'Receve', 'Reciive'],
    correctAnswer: 1,
    explanation: 'Receive follows the "i before e except after c" rule.'
  },
  {
    id: 'eng-118',
    subject: 'english',
    topic: 'Spelling',
    difficulty: 'medium',
    question: 'Which word is spelled correctly?',
    options: ['Seperate', 'Separate', 'Separete', 'Seperete'],
    correctAnswer: 1,
    explanation: 'Separate is correct. Remember: there\'s "a rat" in separate.'
  },
  {
    id: 'eng-119',
    subject: 'english',
    topic: 'Spelling',
    difficulty: 'hard',
    question: 'Which medical term is spelled correctly?',
    options: ['Pneumonia', 'Pnemonia', 'Neumonia', 'Pnuemonia'],
    correctAnswer: 0,
    explanation: 'Pneumonia begins with the silent "pn" prefix meaning lung/air.'
  },
  {
    id: 'eng-120',
    subject: 'english',
    topic: 'Grammar',
    difficulty: 'medium',
    question: 'Choose the correct word: The medication had a positive _____ on the patient.',
    options: ['affect', 'effect', 'affects', 'effects'],
    correctAnswer: 1,
    explanation: 'Effect is a noun meaning result. Affect is usually a verb meaning to influence.'
  },
  {
    id: 'eng-121',
    subject: 'english',
    topic: 'Vocabulary',
    difficulty: 'easy',
    question: 'The prefix "post-" means:',
    options: ['Before', 'After', 'During', 'Without'],
    correctAnswer: 1,
    explanation: 'Post- means after (postoperative, postpartum).'
  },
  {
    id: 'eng-122',
    subject: 'english',
    topic: 'Vocabulary',
    difficulty: 'medium',
    question: 'What does "tachypnea" mean?',
    options: ['Slow breathing', 'Rapid breathing', 'Painful breathing', 'No breathing'],
    correctAnswer: 1,
    explanation: 'Tachy- means rapid, -pnea means breathing. Tachypnea = rapid breathing.'
  },
  {
    id: 'eng-123',
    subject: 'english',
    topic: 'Vocabulary',
    difficulty: 'hard',
    question: 'The suffix "-otomy" means:',
    options: ['Surgical removal', 'Surgical incision', 'Surgical repair', 'Visual examination'],
    correctAnswer: 1,
    explanation: '-otomy means surgical incision or cutting into (tracheotomy, craniotomy).'
  },
  {
    id: 'eng-124',
    subject: 'english',
    topic: 'Grammar',
    difficulty: 'easy',
    question: 'Which sentence uses "who" or "whom" correctly?',
    options: [
      'The patient who we treated recovered.',
      'The patient whom we treated recovered.',
      'Who did you give the medication to?',
      'Whom did the doctor see?'
    ],
    correctAnswer: 1,
    explanation: '"Whom" is correct as the object of "we treated." (We treated whom?)'
  },
  {
    id: 'eng-125',
    subject: 'english',
    topic: 'Sentence Structure',
    difficulty: 'medium',
    question: 'Which sentence contains a misplaced modifier?',
    options: [
      'The nurse carefully bandaged the wound.',
      'Bandaging carefully, the wound was treated.',
      'The nurse applied a bandage carefully.',
      'Carefully, the nurse bandaged the wound.'
    ],
    correctAnswer: 1,
    explanation: 'In B, the wound appears to be doing the bandaging. The modifier is misplaced.'
  },
  {
    id: 'eng-126',
    subject: 'english',
    topic: 'Punctuation',
    difficulty: 'easy',
    question: 'Where should a comma be placed in this sentence: "Before surgery patients should fast."',
    options: [
      'Before, surgery patients should fast.',
      'Before surgery, patients should fast.',
      'Before surgery patients, should fast.',
      'No comma is needed.'
    ],
    correctAnswer: 1,
    explanation: 'A comma follows an introductory phrase (Before surgery).'
  },
  {
    id: 'eng-127',
    subject: 'english',
    topic: 'Vocabulary',
    difficulty: 'medium',
    question: 'The root "cardi-" refers to:',
    options: ['Brain', 'Heart', 'Lung', 'Kidney'],
    correctAnswer: 1,
    explanation: 'Cardi- refers to the heart (cardiac, cardiology, tachycardia).'
  },
  {
    id: 'eng-128',
    subject: 'english',
    topic: 'Grammar',
    difficulty: 'hard',
    question: 'Which sentence demonstrates correct parallel structure?',
    options: [
      'The nurse likes to assess patients, monitoring vitals, and charting notes.',
      'The nurse likes assessing patients, monitors vitals, and to chart notes.',
      'The nurse likes assessing patients, monitoring vitals, and charting notes.',
      'The nurse likes to assess patients, to monitor vitals, and charting notes.'
    ],
    correctAnswer: 2,
    explanation: 'Parallel structure requires consistent form: all gerunds (-ing words).'
  },
  {
    id: 'eng-129',
    subject: 'english',
    topic: 'Vocabulary',
    difficulty: 'easy',
    question: 'What does the prefix "sub-" mean?',
    options: ['Above', 'Below/Under', 'Around', 'Through'],
    correctAnswer: 1,
    explanation: 'Sub- means below or under (subcutaneous, sublingual).'
  },
  {
    id: 'eng-130',
    subject: 'english',
    topic: 'Spelling',
    difficulty: 'medium',
    question: 'Which word is spelled correctly?',
    options: ['Necesary', 'Neccessary', 'Necessary', 'Neccesary'],
    correctAnswer: 2,
    explanation: 'Necessary: one c, two s\'s.'
  },
  {
    id: 'eng-131',
    subject: 'english',
    topic: 'Grammar',
    difficulty: 'medium',
    question: 'Choose the correct word: There are _____ patients than yesterday.',
    options: ['less', 'fewer', 'lesser', 'little'],
    correctAnswer: 1,
    explanation: 'Use "fewer" for countable nouns (patients), "less" for uncountable nouns.'
  },
  {
    id: 'eng-132',
    subject: 'english',
    topic: 'Vocabulary',
    difficulty: 'hard',
    question: 'What does "hematuria" mean?',
    options: ['Blood in urine', 'Blood in stool', 'Low blood count', 'Blood clot'],
    correctAnswer: 0,
    explanation: 'Hemato- means blood, -uria means urine condition. Hematuria = blood in urine.'
  },
  {
    id: 'eng-133',
    subject: 'english',
    topic: 'Sentence Structure',
    difficulty: 'easy',
    question: 'Which word is an adverb in this sentence: "The patient recovered quickly."',
    options: ['patient', 'recovered', 'quickly', 'The'],
    correctAnswer: 2,
    explanation: 'Quickly modifies the verb "recovered," making it an adverb.'
  },
  {
    id: 'eng-134',
    subject: 'english',
    topic: 'Grammar',
    difficulty: 'hard',
    question: 'Which sentence uses the subjunctive mood correctly?',
    options: [
      'If I was the nurse, I would help.',
      'If I were the nurse, I would help.',
      'If I am the nurse, I would help.',
      'If I be the nurse, I would help.'
    ],
    correctAnswer: 1,
    explanation: 'The subjunctive mood uses "were" for hypothetical situations regardless of subject.'
  },
  {
    id: 'eng-135',
    subject: 'english',
    topic: 'Vocabulary',
    difficulty: 'medium',
    question: 'The suffix "-emia" refers to:',
    options: ['Tissue', 'Blood condition', 'Pain', 'Inflammation'],
    correctAnswer: 1,
    explanation: '-emia refers to a blood condition (anemia, septicemia, hyperglycemia).'
  }
];

