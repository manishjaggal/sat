// Comprehensive GED Question Bank - 300+ Questions

import { extendedReadingQuestions } from './reading-questions';
import { extendedMathQuestions } from './math-questions';
import { extendedScienceQuestions } from './science-questions';
import { extendedEnglishQuestions } from './english-questions';

export interface Question {
  id: string;
  subject: 'reading' | 'math' | 'science' | 'english';
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  passage?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const readingQuestions: Question[] = [
  // Key Ideas & Details
  {
    id: 'read-001',
    subject: 'reading',
    topic: 'Key Ideas & Details',
    difficulty: 'medium',
    passage: 'Preventive healthcare has become increasingly important in modern medicine. Rather than waiting for illness to occur, healthcare providers now emphasize the importance of regular screenings, vaccinations, and lifestyle modifications. Studies show that preventive care can reduce healthcare costs by up to 30% while improving patient outcomes significantly.',
    question: 'Based on the passage, which inference can be made about the author\'s perspective on preventive healthcare?',
    options: [
      'It reduces long-term healthcare costs',
      'It should be prioritized in modern medicine',
      'It is undervalued by medical professionals',
      'It applies mainly to chronic conditions'
    ],
    correctAnswer: 1,
    explanation: 'The passage emphasizes that preventive healthcare has "become increasingly important" and that providers "now emphasize" its importance. The author presents preventive care positively, suggesting it should be prioritized.'
  },
  {
    id: 'read-002',
    subject: 'reading',
    topic: 'Key Ideas & Details',
    difficulty: 'easy',
    passage: 'Florence Nightingale, born in 1820, is widely considered the founder of modern nursing. During the Crimean War, she organized care for wounded soldiers and dramatically reduced death rates through improved sanitation. Her statistical work proved that most deaths were caused by preventable diseases, not battle wounds.',
    question: 'What is the main idea of this passage?',
    options: [
      'Florence Nightingale was born in 1820',
      'The Crimean War had many casualties',
      'Florence Nightingale pioneered modern nursing through data-driven reforms',
      'Sanitation was poor in military hospitals'
    ],
    correctAnswer: 2,
    explanation: 'The passage centers on Nightingale\'s contributions to nursing, emphasizing how her work with data and sanitation reforms revolutionized healthcare.'
  },
  {
    id: 'read-003',
    subject: 'reading',
    topic: 'Key Ideas & Details',
    difficulty: 'hard',
    passage: 'The human microbiome, comprising trillions of microorganisms living in and on our bodies, plays a crucial role in health. Recent research suggests that gut bacteria influence everything from digestion to mental health. The "gut-brain axis" describes the bidirectional communication between intestinal flora and the central nervous system, potentially explaining links between diet and mood disorders.',
    question: 'According to the passage, the gut-brain axis refers to:',
    options: [
      'The digestive system\'s effect on physical health',
      'Two-way communication between gut bacteria and the brain',
      'The role of the central nervous system in digestion',
      'The connection between diet and obesity'
    ],
    correctAnswer: 1,
    explanation: 'The passage explicitly defines the gut-brain axis as "bidirectional communication between intestinal flora and the central nervous system."'
  },
  {
    id: 'read-004',
    subject: 'reading',
    topic: 'Craft & Structure',
    difficulty: 'medium',
    question: 'In a medical journal article, which of the following would most likely appear in the methods section?',
    options: [
      'A summary of previous research on the topic',
      'A description of how the study was conducted',
      'Statistical analysis of the results',
      'Recommendations for future research'
    ],
    correctAnswer: 1,
    explanation: 'The methods section of a research article describes how the study was conducted, including procedures, participants, and materials used.'
  },
  {
    id: 'read-005',
    subject: 'reading',
    topic: 'Integration of Knowledge',
    difficulty: 'medium',
    passage: 'Hand hygiene remains the most effective method of preventing healthcare-associated infections. The CDC recommends washing hands with soap and water for at least 20 seconds or using alcohol-based hand sanitizer when soap is unavailable. Despite this knowledge, compliance rates among healthcare workers average only 40%.',
    question: 'What conclusion can be drawn from this passage?',
    options: [
      'Hand sanitizer is more effective than soap',
      'Healthcare workers are unaware of hand hygiene importance',
      'There is a gap between knowledge and practice in infection prevention',
      'The CDC guidelines are too difficult to follow'
    ],
    correctAnswer: 2,
    explanation: 'The passage shows that despite knowing hand hygiene is effective (knowledge), compliance is only 40% (practice), indicating a gap between the two.'
  },
  {
    id: 'read-006',
    subject: 'reading',
    topic: 'Key Ideas & Details',
    difficulty: 'easy',
    passage: 'Insulin, discovered in 1921 by Frederick Banting and Charles Best, revolutionized diabetes treatment. Before insulin, Type 1 diabetes was essentially a death sentence. Today, millions of people with diabetes lead normal lives thanks to this medical breakthrough.',
    question: 'Who discovered insulin?',
    options: [
      'The CDC and WHO',
      'Frederick Banting and Charles Best',
      'Florence Nightingale',
      'The passage does not specify'
    ],
    correctAnswer: 1,
    explanation: 'The passage clearly states that insulin was "discovered in 1921 by Frederick Banting and Charles Best."'
  },
  {
    id: 'read-007',
    subject: 'reading',
    topic: 'Craft & Structure',
    difficulty: 'hard',
    passage: 'The placebo effect, once dismissed as mere psychological trickery, is now recognized as a powerful physiological phenomenon. Brain imaging studies reveal that placebos can trigger the release of endorphins and dopamine, producing measurable changes in neural activity. This challenges the traditional dichotomy between "real" and "fake" treatments.',
    question: 'The author\'s tone in this passage can best be described as:',
    options: [
      'Skeptical and dismissive',
      'Informative and somewhat revisionist',
      'Enthusiastically supportive',
      'Neutral and detached'
    ],
    correctAnswer: 1,
    explanation: 'The author presents information that revises previous understanding ("once dismissed...now recognized"), showing an informative tone that challenges old views.'
  },
  {
    id: 'read-008',
    subject: 'reading',
    topic: 'Integration of Knowledge',
    difficulty: 'medium',
    question: 'A nursing textbook states that patient education improves medication adherence. A research study finds that only 50% of patients correctly understand their medication instructions. What action would best address this discrepancy?',
    options: [
      'Conduct more research studies',
      'Improve the methods used for patient education',
      'Prescribe fewer medications',
      'Ignore the research findings'
    ],
    correctAnswer: 1,
    explanation: 'If patient education should improve adherence but understanding is low, the logical solution is to improve how education is delivered.'
  },
  {
    id: 'read-009',
    subject: 'reading',
    topic: 'Key Ideas & Details',
    difficulty: 'medium',
    passage: 'Telehealth has transformed healthcare delivery, particularly in rural areas where specialist access is limited. Virtual consultations allow patients to receive expert care without traveling long distances. However, challenges remain, including technology access gaps and concerns about the quality of remote physical examinations.',
    question: 'According to the passage, what is a limitation of telehealth?',
    options: [
      'It is only available in urban areas',
      'Specialists refuse to use it',
      'Remote physical examinations may be less thorough',
      'It is more expensive than in-person care'
    ],
    correctAnswer: 2,
    explanation: 'The passage mentions "concerns about the quality of remote physical examinations" as a challenge of telehealth.'
  },
  {
    id: 'read-010',
    subject: 'reading',
    topic: 'Craft & Structure',
    difficulty: 'easy',
    question: 'Which of the following is an example of a primary source in medical research?',
    options: [
      'A textbook summarizing multiple studies',
      'A newspaper article about a medical discovery',
      'An original research study published in a peer-reviewed journal',
      'A Wikipedia article about a disease'
    ],
    correctAnswer: 2,
    explanation: 'A primary source presents original research or firsthand evidence. Peer-reviewed research studies are primary sources; textbooks and articles summarizing them are secondary.'
  },
  {
    id: 'read-011',
    subject: 'reading',
    topic: 'Key Ideas & Details',
    difficulty: 'hard',
    passage: 'Antibiotic resistance poses one of the greatest threats to global health. Overuse of antibiotics in both human medicine and agriculture has accelerated the evolution of resistant bacteria. The World Health Organization warns that without action, we may enter a "post-antibiotic era" where common infections become untreatable.',
    question: 'What does the author imply about the future of antibiotic treatment?',
    options: [
      'New antibiotics will solve the resistance problem',
      'Agriculture should stop using all antibiotics',
      'Current practices could lead to a healthcare crisis',
      'Resistant bacteria will naturally become less dangerous'
    ],
    correctAnswer: 2,
    explanation: 'By referencing a potential "post-antibiotic era" where common infections become untreatable, the author implies that current practices could lead to a serious healthcare crisis.'
  },
  {
    id: 'read-012',
    subject: 'reading',
    topic: 'Integration of Knowledge',
    difficulty: 'medium',
    passage: 'Evidence-based practice (EBP) integrates clinical expertise, patient values, and the best available research evidence. Nurses using EBP make decisions based on current research rather than tradition alone. This approach has been shown to improve patient outcomes and reduce healthcare costs.',
    question: 'Which statement best describes evidence-based practice?',
    options: [
      'Following hospital policies without question',
      'Making decisions based solely on personal experience',
      'Combining research evidence with clinical judgment and patient preferences',
      'Using only the newest treatments available'
    ],
    correctAnswer: 2,
    explanation: 'The passage defines EBP as integrating "clinical expertise, patient values, and the best available research evidence" - combining multiple factors in decision-making.'
  },
  {
    id: 'read-013',
    subject: 'reading',
    topic: 'Key Ideas & Details',
    difficulty: 'easy',
    passage: 'The stethoscope was invented in 1816 by René Laennec, a French physician. Before its invention, doctors would place their ear directly on the patient\'s chest to listen to heart and lung sounds. Laennec\'s simple wooden tube revolutionized physical examination and remains essential in medicine today.',
    question: 'What was the purpose of inventing the stethoscope?',
    options: [
      'To measure blood pressure',
      'To listen to heart and lung sounds without direct contact',
      'To replace the need for physical examinations',
      'To diagnose broken bones'
    ],
    correctAnswer: 1,
    explanation: 'The passage states that before the stethoscope, doctors placed their ears directly on patients\' chests. The stethoscope allowed listening without direct contact.'
  },
  {
    id: 'read-014',
    subject: 'reading',
    topic: 'Craft & Structure',
    difficulty: 'medium',
    passage: 'While many people believe that emergency rooms are required to provide free healthcare, this is a common misconception. The Emergency Medical Treatment and Labor Act (EMTALA) requires hospitals to stabilize and treat emergency conditions regardless of ability to pay, but patients are still responsible for the bill afterward.',
    question: 'The author\'s primary purpose in this passage is to:',
    options: [
      'Criticize hospital billing practices',
      'Clarify a misunderstanding about emergency room care',
      'Explain the history of EMTALA',
      'Encourage people to avoid emergency rooms'
    ],
    correctAnswer: 1,
    explanation: 'The passage begins by identifying a "common misconception" and then provides accurate information to correct it, clarifying the misunderstanding.'
  },
  {
    id: 'read-015',
    subject: 'reading',
    topic: 'Integration of Knowledge',
    difficulty: 'hard',
    passage: 'Patient autonomy is a fundamental principle in healthcare ethics, giving individuals the right to make informed decisions about their own care. However, this principle can conflict with beneficence—the healthcare provider\'s duty to act in the patient\'s best interest. When a patient refuses recommended treatment, providers must balance respecting autonomy with their professional obligation to prevent harm.',
    question: 'Based on the passage, when might a conflict arise between patient autonomy and beneficence?',
    options: [
      'When a patient agrees to a recommended treatment',
      'When a patient refuses treatment the provider believes is necessary',
      'When a patient cannot make decisions for themselves',
      'When a provider recommends preventive care'
    ],
    correctAnswer: 1,
    explanation: 'The passage specifically states that conflict arises "when a patient refuses recommended treatment," as this pits autonomy against the provider\'s duty to prevent harm.'
  },
  {
    id: 'read-016',
    subject: 'reading',
    topic: 'Key Ideas & Details',
    difficulty: 'medium',
    passage: 'Sleep deprivation has been shown to impair cognitive function, weaken the immune system, and increase the risk of chronic diseases. Healthcare workers, who often work long shifts and rotating schedules, are particularly vulnerable to these effects. Research indicates that nurses working 12-hour shifts make significantly more medication errors than those working 8-hour shifts.',
    question: 'According to the passage, what is one consequence of sleep deprivation for nurses?',
    options: [
      'They prefer working night shifts',
      'They make more medication errors on longer shifts',
      'They develop immunity to fatigue over time',
      'They require less sleep than other professionals'
    ],
    correctAnswer: 1,
    explanation: 'The passage states that "nurses working 12-hour shifts make significantly more medication errors than those working 8-hour shifts."'
  },
  {
    id: 'read-017',
    subject: 'reading',
    topic: 'Craft & Structure',
    difficulty: 'easy',
    question: 'A conclusion paragraph in an essay should:',
    options: [
      'Introduce new arguments not discussed in the body',
      'Simply repeat the introduction word for word',
      'Summarize main points and provide closure',
      'Include all the detailed evidence from the essay'
    ],
    correctAnswer: 2,
    explanation: 'A conclusion should summarize the main points discussed and provide a sense of closure to the reader without introducing new information.'
  },
  {
    id: 'read-018',
    subject: 'reading',
    topic: 'Key Ideas & Details',
    difficulty: 'hard',
    passage: 'The biopsychosocial model of health recognizes that biological, psychological, and social factors all contribute to wellness and illness. Unlike the traditional biomedical model, which focuses solely on physical pathology, this holistic approach acknowledges that a patient\'s mental state, social support, and lifestyle choices significantly impact health outcomes.',
    question: 'How does the biopsychosocial model differ from the biomedical model?',
    options: [
      'It ignores physical symptoms',
      'It considers psychological and social factors alongside biological ones',
      'It only applies to mental health conditions',
      'It is less comprehensive'
    ],
    correctAnswer: 1,
    explanation: 'The passage contrasts the biomedical model (focuses solely on physical pathology) with the biopsychosocial model (includes biological, psychological, and social factors).'
  },
  {
    id: 'read-019',
    subject: 'reading',
    topic: 'Integration of Knowledge',
    difficulty: 'medium',
    question: 'A medical article states that a new drug reduces heart attack risk by 25%. If the original risk was 4 in 100 patients, what is the new risk?',
    options: [
      '1 in 100 patients',
      '3 in 100 patients',
      '2 in 100 patients',
      '25 in 100 patients'
    ],
    correctAnswer: 1,
    explanation: '25% reduction of 4 = 4 × 0.25 = 1. New risk = 4 - 1 = 3 in 100 patients.'
  },
  {
    id: 'read-020',
    subject: 'reading',
    topic: 'Craft & Structure',
    difficulty: 'medium',
    passage: 'The nurse entered the patient\'s room and was immediately struck by the smell of cigarette smoke clinging to his clothes. Despite multiple conversations about the dangers of smoking, Mr. Johnson had clearly not quit. His raspy cough punctuated every sentence as he described his symptoms.',
    question: 'What literary device does the author use to convey Mr. Johnson\'s smoking habit?',
    options: [
      'Foreshadowing',
      'Sensory details (imagery)',
      'Flashback',
      'Metaphor'
    ],
    correctAnswer: 1,
    explanation: 'The author uses sensory details (smell of smoke, raspy cough) to show rather than tell that the patient smokes.'
  },
  {
    id: 'read-021',
    subject: 'reading',
    topic: 'Key Ideas & Details',
    difficulty: 'easy',
    passage: 'Handwashing with soap and water remains the gold standard for infection prevention, but alcohol-based hand sanitizers offer a convenient alternative when handwashing facilities are unavailable. Sanitizers should contain at least 60% alcohol to be effective. However, sanitizers do not work well when hands are visibly soiled with dirt or grease.',
    question: 'When should soap and water be used instead of hand sanitizer?',
    options: [
      'When alcohol-based sanitizer is available',
      'When hands are visibly dirty',
      'Before every patient interaction',
      'Only in operating rooms'
    ],
    correctAnswer: 1,
    explanation: 'The passage states that "sanitizers do not work well when hands are visibly soiled with dirt or grease," indicating soap and water should be used in those cases.'
  },
  {
    id: 'read-022',
    subject: 'reading',
    topic: 'Integration of Knowledge',
    difficulty: 'hard',
    passage: 'A randomized controlled trial found that patients who received cognitive behavioral therapy (CBT) in addition to medication showed 40% greater improvement in depression symptoms compared to those receiving medication alone. The study followed 500 patients over 12 months.',
    question: 'Which statement is best supported by the passage?',
    options: [
      'CBT alone is more effective than medication',
      'All patients should receive CBT',
      'Combining CBT with medication may be more effective than medication alone',
      'Medication is unnecessary for treating depression'
    ],
    correctAnswer: 2,
    explanation: 'The study compared medication + CBT versus medication alone, finding greater improvement with the combination. This supports that combining treatments may be more effective.'
  },
  {
    id: 'read-023',
    subject: 'reading',
    topic: 'Craft & Structure',
    difficulty: 'medium',
    question: 'In academic writing, what does "et al." mean when citing sources?',
    options: [
      'The source is from a foreign language',
      'There are additional authors not listed',
      'The citation is incomplete',
      'The author\'s name is unknown'
    ],
    correctAnswer: 1,
    explanation: '"Et al." is Latin for "and others," used when a source has multiple authors to indicate additional authors beyond those named.'
  },
  {
    id: 'read-024',
    subject: 'reading',
    topic: 'Key Ideas & Details',
    difficulty: 'medium',
    passage: 'Cultural competence in healthcare involves understanding and respecting patients\' diverse backgrounds, beliefs, and practices. A culturally competent nurse recognizes that health beliefs vary across cultures and adapts communication and care accordingly. This approach leads to better patient outcomes, increased trust, and reduced health disparities.',
    question: 'What is the main benefit of cultural competence in nursing?',
    options: [
      'It makes documentation easier',
      'It improves patient outcomes and reduces health disparities',
      'It allows nurses to work faster',
      'It eliminates the need for interpreters'
    ],
    correctAnswer: 1,
    explanation: 'The passage states that cultural competence "leads to better patient outcomes, increased trust, and reduced health disparities."'
  },
  {
    id: 'read-025',
    subject: 'reading',
    topic: 'Craft & Structure',
    difficulty: 'easy',
    question: 'Which transition word indicates a contrast between ideas?',
    options: [
      'Furthermore',
      'However',
      'Additionally',
      'Similarly'
    ],
    correctAnswer: 1,
    explanation: '"However" signals a contrast or contradiction between ideas. "Furthermore," "Additionally," and "Similarly" indicate agreement or addition.'
  }
];

export const mathQuestions: Question[] = [
  // Numbers and Operations
  {
    id: 'math-001',
    subject: 'math',
    topic: 'Numbers & Operations',
    difficulty: 'easy',
    question: 'A patient receives 250 mL of IV fluid every 2 hours. How much fluid will the patient receive in 8 hours?',
    options: [
      '500 mL',
      '750 mL',
      '1,000 mL',
      '1,250 mL'
    ],
    correctAnswer: 2,
    explanation: '8 hours ÷ 2 hours = 4 doses. 4 doses × 250 mL = 1,000 mL total.'
  },
  {
    id: 'math-002',
    subject: 'math',
    topic: 'Numbers & Operations',
    difficulty: 'medium',
    question: 'A medication is ordered at 0.5 mg/kg for a patient weighing 176 pounds. How many milligrams should be administered? (2.2 lbs = 1 kg)',
    options: [
      '35 mg',
      '40 mg',
      '45 mg',
      '88 mg'
    ],
    correctAnswer: 1,
    explanation: '176 lbs ÷ 2.2 = 80 kg. 80 kg × 0.5 mg/kg = 40 mg.'
  },
  {
    id: 'math-003',
    subject: 'math',
    topic: 'Ratios & Proportions',
    difficulty: 'medium',
    question: 'A solution contains medication at a concentration of 5 mg per 2 mL. How many mL are needed to administer 15 mg?',
    options: [
      '4 mL',
      '5 mL',
      '6 mL',
      '7.5 mL'
    ],
    correctAnswer: 2,
    explanation: 'Set up proportion: 5mg/2mL = 15mg/x mL. Cross multiply: 5x = 30, so x = 6 mL.'
  },
  {
    id: 'math-004',
    subject: 'math',
    topic: 'Percentages',
    difficulty: 'easy',
    question: 'A patient\'s white blood cell count dropped from 8,000 to 6,000. What is the percent decrease?',
    options: [
      '20%',
      '25%',
      '30%',
      '33%'
    ],
    correctAnswer: 1,
    explanation: 'Decrease = 8,000 - 6,000 = 2,000. Percent decrease = (2,000/8,000) × 100 = 25%.'
  },
  {
    id: 'math-005',
    subject: 'math',
    topic: 'Algebra',
    difficulty: 'hard',
    question: 'Solve for x: 3(x - 4) + 2 = 2(x + 1)',
    options: [
      'x = 8',
      'x = 10',
      'x = 12',
      'x = 14'
    ],
    correctAnswer: 2,
    explanation: '3x - 12 + 2 = 2x + 2. 3x - 10 = 2x + 2. 3x - 2x = 2 + 10. x = 12.'
  },
  {
    id: 'math-006',
    subject: 'math',
    topic: 'Measurement',
    difficulty: 'easy',
    question: 'How many milliliters are in 2.5 liters?',
    options: [
      '25 mL',
      '250 mL',
      '2,500 mL',
      '25,000 mL'
    ],
    correctAnswer: 2,
    explanation: '1 liter = 1,000 mL. Therefore, 2.5 liters × 1,000 = 2,500 mL.'
  },
  {
    id: 'math-007',
    subject: 'math',
    topic: 'Fractions',
    difficulty: 'medium',
    question: 'A nurse works 3/4 of a 12-hour shift. How many hours did the nurse work?',
    options: [
      '8 hours',
      '9 hours',
      '10 hours',
      '11 hours'
    ],
    correctAnswer: 1,
    explanation: '3/4 × 12 = 36/4 = 9 hours.'
  },
  {
    id: 'math-008',
    subject: 'math',
    topic: 'Data Interpretation',
    difficulty: 'medium',
    question: 'In a study of 200 patients, 35 experienced side effects. What percentage of patients experienced side effects?',
    options: [
      '15.5%',
      '17.5%',
      '19.5%',
      '21.5%'
    ],
    correctAnswer: 1,
    explanation: '(35/200) × 100 = 17.5%.'
  },
  {
    id: 'math-009',
    subject: 'math',
    topic: 'Ratios & Proportions',
    difficulty: 'hard',
    question: 'If 500 mg of a medication is dissolved in 250 mL of solution, what is the concentration in mg/mL?',
    options: [
      '0.5 mg/mL',
      '2 mg/mL',
      '5 mg/mL',
      '20 mg/mL'
    ],
    correctAnswer: 1,
    explanation: 'Concentration = 500 mg ÷ 250 mL = 2 mg/mL.'
  },
  {
    id: 'math-010',
    subject: 'math',
    topic: 'Decimals',
    difficulty: 'easy',
    question: 'Add: 3.45 + 2.7 + 0.85',
    options: [
      '6.00',
      '6.50',
      '7.00',
      '7.50'
    ],
    correctAnswer: 2,
    explanation: '3.45 + 2.70 + 0.85 = 7.00.'
  },
  {
    id: 'math-011',
    subject: 'math',
    topic: 'Numbers & Operations',
    difficulty: 'medium',
    question: 'A medication vial contains 10 mL. If each dose is 0.4 mL, how many complete doses are in the vial?',
    options: [
      '20 doses',
      '25 doses',
      '30 doses',
      '40 doses'
    ],
    correctAnswer: 1,
    explanation: '10 mL ÷ 0.4 mL = 25 complete doses.'
  },
  {
    id: 'math-012',
    subject: 'math',
    topic: 'Measurement',
    difficulty: 'medium',
    question: 'Convert 98.6°F to Celsius. (Use formula: C = (F - 32) × 5/9)',
    options: [
      '35°C',
      '36°C',
      '37°C',
      '38°C'
    ],
    correctAnswer: 2,
    explanation: 'C = (98.6 - 32) × 5/9 = 66.6 × 5/9 = 37°C.'
  },
  {
    id: 'math-013',
    subject: 'math',
    topic: 'Algebra',
    difficulty: 'medium',
    question: 'If 2x + 5 = 17, what is the value of x?',
    options: [
      '4',
      '5',
      '6',
      '7'
    ],
    correctAnswer: 2,
    explanation: '2x + 5 = 17. 2x = 12. x = 6.'
  },
  {
    id: 'math-014',
    subject: 'math',
    topic: 'Percentages',
    difficulty: 'hard',
    question: 'A hospital has 250 beds. If 85% are occupied, how many beds are empty?',
    options: [
      '32.5 beds',
      '35 beds',
      '37.5 beds',
      '40 beds'
    ],
    correctAnswer: 2,
    explanation: 'Occupied = 250 × 0.85 = 212.5. Empty = 250 - 212.5 = 37.5 beds.'
  },
  {
    id: 'math-015',
    subject: 'math',
    topic: 'Ratios & Proportions',
    difficulty: 'easy',
    question: 'The ratio of nurses to patients in a unit is 1:4. If there are 28 patients, how many nurses are needed?',
    options: [
      '5 nurses',
      '6 nurses',
      '7 nurses',
      '8 nurses'
    ],
    correctAnswer: 2,
    explanation: '1:4 means 1 nurse per 4 patients. 28 ÷ 4 = 7 nurses.'
  },
  {
    id: 'math-016',
    subject: 'math',
    topic: 'Fractions',
    difficulty: 'easy',
    question: 'Reduce to lowest terms: 24/36',
    options: [
      '1/2',
      '2/3',
      '3/4',
      '4/6'
    ],
    correctAnswer: 1,
    explanation: '24/36 = 24÷12 / 36÷12 = 2/3.'
  },
  {
    id: 'math-017',
    subject: 'math',
    topic: 'Decimals',
    difficulty: 'medium',
    question: 'Multiply: 0.25 × 0.4',
    options: [
      '0.01',
      '0.1',
      '1.0',
      '10'
    ],
    correctAnswer: 1,
    explanation: '0.25 × 0.4 = 0.10 = 0.1.'
  },
  {
    id: 'math-018',
    subject: 'math',
    topic: 'Data Interpretation',
    difficulty: 'hard',
    question: 'A patient\'s blood pressure readings over 5 days were: 120, 118, 125, 130, 122. What is the mean (average) systolic pressure?',
    options: [
      '121',
      '123',
      '125',
      '127'
    ],
    correctAnswer: 1,
    explanation: 'Mean = (120 + 118 + 125 + 130 + 122) ÷ 5 = 615 ÷ 5 = 123.'
  },
  {
    id: 'math-019',
    subject: 'math',
    topic: 'Numbers & Operations',
    difficulty: 'medium',
    question: 'A medication is given every 6 hours. How many doses will a patient receive in one week?',
    options: [
      '24 doses',
      '28 doses',
      '32 doses',
      '42 doses'
    ],
    correctAnswer: 1,
    explanation: '24 hours ÷ 6 hours = 4 doses per day. 4 × 7 days = 28 doses per week.'
  },
  {
    id: 'math-020',
    subject: 'math',
    topic: 'Measurement',
    difficulty: 'easy',
    question: 'How many grams are in 2.5 kilograms?',
    options: [
      '25 g',
      '250 g',
      '2,500 g',
      '25,000 g'
    ],
    correctAnswer: 2,
    explanation: '1 kg = 1,000 g. 2.5 kg × 1,000 = 2,500 g.'
  },
  {
    id: 'math-021',
    subject: 'math',
    topic: 'Algebra',
    difficulty: 'hard',
    question: 'Solve for y: 4y - 7 = 2y + 9',
    options: [
      'y = 2',
      'y = 4',
      'y = 6',
      'y = 8'
    ],
    correctAnswer: 3,
    explanation: '4y - 7 = 2y + 9. 4y - 2y = 9 + 7. 2y = 16. y = 8.'
  },
  {
    id: 'math-022',
    subject: 'math',
    topic: 'Percentages',
    difficulty: 'medium',
    question: 'A medication\'s price increased from $50 to $60. What is the percent increase?',
    options: [
      '10%',
      '15%',
      '20%',
      '25%'
    ],
    correctAnswer: 2,
    explanation: 'Increase = $60 - $50 = $10. Percent increase = ($10/$50) × 100 = 20%.'
  },
  {
    id: 'math-023',
    subject: 'math',
    topic: 'Ratios & Proportions',
    difficulty: 'medium',
    question: 'If 3 tablets contain 750 mg of medication, how many mg are in 5 tablets?',
    options: [
      '1,000 mg',
      '1,125 mg',
      '1,250 mg',
      '1,500 mg'
    ],
    correctAnswer: 2,
    explanation: '750 mg ÷ 3 tablets = 250 mg per tablet. 250 mg × 5 tablets = 1,250 mg.'
  },
  {
    id: 'math-024',
    subject: 'math',
    topic: 'Fractions',
    difficulty: 'hard',
    question: 'Add: 2/3 + 3/4',
    options: [
      '5/7',
      '5/12',
      '17/12',
      '11/12'
    ],
    correctAnswer: 2,
    explanation: 'LCD = 12. 2/3 = 8/12. 3/4 = 9/12. 8/12 + 9/12 = 17/12.'
  },
  {
    id: 'math-025',
    subject: 'math',
    topic: 'Data Interpretation',
    difficulty: 'medium',
    question: 'What is the median of this data set: 12, 15, 18, 22, 25?',
    options: [
      '15',
      '18',
      '19.4',
      '22'
    ],
    correctAnswer: 1,
    explanation: 'The median is the middle value when arranged in order. With 5 values, the 3rd value (18) is the median.'
  },
  {
    id: 'math-026',
    subject: 'math',
    topic: 'Numbers & Operations',
    difficulty: 'easy',
    question: 'A patient takes 2 pills, 3 times a day. How many pills does the patient take in a week?',
    options: [
      '21 pills',
      '35 pills',
      '42 pills',
      '56 pills'
    ],
    correctAnswer: 2,
    explanation: '2 pills × 3 times = 6 pills per day. 6 × 7 days = 42 pills per week.'
  },
  {
    id: 'math-027',
    subject: 'math',
    topic: 'Measurement',
    difficulty: 'hard',
    question: 'Convert 68°F to Celsius. Round to the nearest whole number.',
    options: [
      '18°C',
      '20°C',
      '22°C',
      '24°C'
    ],
    correctAnswer: 1,
    explanation: 'C = (68 - 32) × 5/9 = 36 × 5/9 = 20°C.'
  },
  {
    id: 'math-028',
    subject: 'math',
    topic: 'Percentages',
    difficulty: 'easy',
    question: 'What is 15% of 80?',
    options: [
      '10',
      '12',
      '15',
      '18'
    ],
    correctAnswer: 1,
    explanation: '15% of 80 = 0.15 × 80 = 12.'
  },
  {
    id: 'math-029',
    subject: 'math',
    topic: 'Ratios & Proportions',
    difficulty: 'hard',
    question: 'An IV drip is set to deliver 125 mL/hour. How many mL will be delivered in 3 hours and 20 minutes?',
    options: [
      '375 mL',
      '400 mL',
      '416.67 mL',
      '450 mL'
    ],
    correctAnswer: 2,
    explanation: '3 hours 20 minutes = 3.33 hours. 125 mL/hr × 3.33 hr = 416.67 mL (approximately).'
  },
  {
    id: 'math-030',
    subject: 'math',
    topic: 'Algebra',
    difficulty: 'medium',
    question: 'If a patient\'s weight in kg is w, and the dose is 5 mg/kg, which expression represents the total dose in mg?',
    options: [
      'w + 5',
      'w - 5',
      '5w',
      'w/5'
    ],
    correctAnswer: 2,
    explanation: 'Dose = 5 mg/kg × w kg = 5w mg.'
  }
];

export const scienceQuestions: Question[] = [
  // Human Anatomy
  {
    id: 'sci-001',
    subject: 'science',
    topic: 'Human Anatomy',
    difficulty: 'easy',
    question: 'Which organ is primarily responsible for filtering blood and producing urine?',
    options: [
      'Liver',
      'Kidney',
      'Spleen',
      'Pancreas'
    ],
    correctAnswer: 1,
    explanation: 'The kidneys filter blood, remove waste products, and produce urine. The liver detoxifies; the spleen filters blood cells; the pancreas produces digestive enzymes and insulin.'
  },
  {
    id: 'sci-002',
    subject: 'science',
    topic: 'Human Anatomy',
    difficulty: 'medium',
    question: 'Which chamber of the heart pumps oxygenated blood to the body?',
    options: [
      'Right atrium',
      'Right ventricle',
      'Left atrium',
      'Left ventricle'
    ],
    correctAnswer: 3,
    explanation: 'The left ventricle pumps oxygenated blood through the aorta to the entire body. It has the thickest walls due to this high-pressure function.'
  },
  {
    id: 'sci-003',
    subject: 'science',
    topic: 'Life Science',
    difficulty: 'medium',
    question: 'What is the primary function of red blood cells?',
    options: [
      'Fighting infection',
      'Blood clotting',
      'Transporting oxygen',
      'Producing antibodies'
    ],
    correctAnswer: 2,
    explanation: 'Red blood cells contain hemoglobin, which binds to oxygen in the lungs and transports it to tissues throughout the body.'
  },
  {
    id: 'sci-004',
    subject: 'science',
    topic: 'Human Anatomy',
    difficulty: 'hard',
    question: 'The sinoatrial (SA) node is located in which part of the heart?',
    options: [
      'Left atrium',
      'Right atrium',
      'Left ventricle',
      'Right ventricle'
    ],
    correctAnswer: 1,
    explanation: 'The SA node, the natural pacemaker of the heart, is located in the upper wall of the right atrium.'
  },
  {
    id: 'sci-005',
    subject: 'science',
    topic: 'Life Science',
    difficulty: 'easy',
    question: 'DNA is composed of four nucleotide bases. Which of the following is NOT one of them?',
    options: [
      'Adenine',
      'Uracil',
      'Guanine',
      'Cytosine'
    ],
    correctAnswer: 1,
    explanation: 'DNA contains Adenine, Guanine, Cytosine, and Thymine. Uracil is found in RNA, replacing Thymine.'
  },
  {
    id: 'sci-006',
    subject: 'science',
    topic: 'Human Anatomy',
    difficulty: 'medium',
    question: 'Which type of muscle is found in the walls of blood vessels?',
    options: [
      'Skeletal muscle',
      'Cardiac muscle',
      'Smooth muscle',
      'Striated muscle'
    ],
    correctAnswer: 2,
    explanation: 'Smooth muscle lines blood vessels, the digestive tract, and other organs. It is involuntary and not striated.'
  },
  {
    id: 'sci-007',
    subject: 'science',
    topic: 'Scientific Reasoning',
    difficulty: 'medium',
    question: 'In a controlled experiment, what is the purpose of the control group?',
    options: [
      'To receive the experimental treatment',
      'To provide a baseline for comparison',
      'To increase the sample size',
      'To eliminate all variables'
    ],
    correctAnswer: 1,
    explanation: 'The control group does not receive the experimental treatment and serves as a baseline to compare results against the experimental group.'
  },
  {
    id: 'sci-008',
    subject: 'science',
    topic: 'Human Anatomy',
    difficulty: 'easy',
    question: 'Which organ system includes the skin, hair, and nails?',
    options: [
      'Muscular system',
      'Skeletal system',
      'Integumentary system',
      'Lymphatic system'
    ],
    correctAnswer: 2,
    explanation: 'The integumentary system includes the skin, hair, nails, and associated glands. It protects the body and regulates temperature.'
  },
  {
    id: 'sci-009',
    subject: 'science',
    topic: 'Life Science',
    difficulty: 'hard',
    question: 'During which phase of mitosis do chromosomes line up at the cell\'s equator?',
    options: [
      'Prophase',
      'Metaphase',
      'Anaphase',
      'Telophase'
    ],
    correctAnswer: 1,
    explanation: 'During metaphase, chromosomes align at the metaphase plate (cell\'s equator) before being separated in anaphase.'
  },
  {
    id: 'sci-010',
    subject: 'science',
    topic: 'Human Anatomy',
    difficulty: 'medium',
    question: 'Which hormone regulates blood glucose levels by promoting glucose uptake into cells?',
    options: [
      'Glucagon',
      'Insulin',
      'Cortisol',
      'Epinephrine'
    ],
    correctAnswer: 1,
    explanation: 'Insulin, produced by the pancreas, lowers blood glucose by promoting its uptake into cells. Glucagon does the opposite, raising blood glucose.'
  },
  {
    id: 'sci-011',
    subject: 'science',
    topic: 'Earth & Physical Science',
    difficulty: 'easy',
    question: 'What type of chemical bond involves the sharing of electrons?',
    options: [
      'Ionic bond',
      'Covalent bond',
      'Hydrogen bond',
      'Metallic bond'
    ],
    correctAnswer: 1,
    explanation: 'Covalent bonds form when atoms share electrons. Ionic bonds involve the transfer of electrons.'
  },
  {
    id: 'sci-012',
    subject: 'science',
    topic: 'Human Anatomy',
    difficulty: 'hard',
    question: 'The hormone ADH (antidiuretic hormone) is produced by the hypothalamus and stored in which gland?',
    options: [
      'Thyroid gland',
      'Adrenal gland',
      'Posterior pituitary',
      'Pineal gland'
    ],
    correctAnswer: 2,
    explanation: 'ADH is produced in the hypothalamus but stored and released from the posterior pituitary gland. It regulates water balance.'
  },
  {
    id: 'sci-013',
    subject: 'science',
    topic: 'Life Science',
    difficulty: 'medium',
    question: 'Which blood type is considered the universal donor?',
    options: [
      'Type A',
      'Type B',
      'Type AB',
      'Type O'
    ],
    correctAnswer: 3,
    explanation: 'Type O negative is the universal donor because it lacks A, B antigens and Rh factor, reducing the risk of transfusion reactions.'
  },
  {
    id: 'sci-014',
    subject: 'science',
    topic: 'Scientific Reasoning',
    difficulty: 'medium',
    question: 'Which of the following is a characteristic of a valid scientific hypothesis?',
    options: [
      'It must be proven true',
      'It must be testable and falsifiable',
      'It must be based on personal opinion',
      'It must predict only positive outcomes'
    ],
    correctAnswer: 1,
    explanation: 'A scientific hypothesis must be testable through experimentation and falsifiable - meaning it could potentially be proven false.'
  },
  {
    id: 'sci-015',
    subject: 'science',
    topic: 'Human Anatomy',
    difficulty: 'easy',
    question: 'The trachea divides into two main branches called:',
    options: [
      'Alveoli',
      'Bronchi',
      'Bronchioles',
      'Pharynx'
    ],
    correctAnswer: 1,
    explanation: 'The trachea (windpipe) divides into the right and left main bronchi, which enter the lungs and further divide into smaller bronchioles.'
  },
  {
    id: 'sci-016',
    subject: 'science',
    topic: 'Human Anatomy',
    difficulty: 'medium',
    question: 'Which part of the brain controls balance and coordination?',
    options: [
      'Cerebrum',
      'Cerebellum',
      'Medulla oblongata',
      'Hypothalamus'
    ],
    correctAnswer: 1,
    explanation: 'The cerebellum, located at the back of the brain, controls balance, coordination, and fine motor movements.'
  },
  {
    id: 'sci-017',
    subject: 'science',
    topic: 'Life Science',
    difficulty: 'hard',
    question: 'In the process of protein synthesis, which organelle reads mRNA and assembles amino acids?',
    options: [
      'Nucleus',
      'Mitochondria',
      'Ribosome',
      'Golgi apparatus'
    ],
    correctAnswer: 2,
    explanation: 'Ribosomes read the mRNA code and assemble amino acids into proteins during translation.'
  },
  {
    id: 'sci-018',
    subject: 'science',
    topic: 'Human Anatomy',
    difficulty: 'easy',
    question: 'The esophagus connects the throat to which organ?',
    options: [
      'Small intestine',
      'Stomach',
      'Large intestine',
      'Liver'
    ],
    correctAnswer: 1,
    explanation: 'The esophagus is a muscular tube that connects the pharynx (throat) to the stomach, transporting food via peristalsis.'
  },
  {
    id: 'sci-019',
    subject: 'science',
    topic: 'Earth & Physical Science',
    difficulty: 'medium',
    question: 'What is the pH of a neutral solution?',
    options: [
      '0',
      '5',
      '7',
      '14'
    ],
    correctAnswer: 2,
    explanation: 'A pH of 7 is neutral. pH below 7 is acidic, and pH above 7 is basic (alkaline).'
  },
  {
    id: 'sci-020',
    subject: 'science',
    topic: 'Human Anatomy',
    difficulty: 'medium',
    question: 'The gallbladder stores bile produced by which organ?',
    options: [
      'Stomach',
      'Pancreas',
      'Liver',
      'Spleen'
    ],
    correctAnswer: 2,
    explanation: 'The liver produces bile, which is stored in the gallbladder and released into the small intestine to help digest fats.'
  },
  {
    id: 'sci-021',
    subject: 'science',
    topic: 'Life Science',
    difficulty: 'medium',
    question: 'Which type of white blood cell is responsible for producing antibodies?',
    options: [
      'Neutrophils',
      'B lymphocytes',
      'Eosinophils',
      'Monocytes'
    ],
    correctAnswer: 1,
    explanation: 'B lymphocytes (B cells) produce antibodies as part of the adaptive immune response.'
  },
  {
    id: 'sci-022',
    subject: 'science',
    topic: 'Human Anatomy',
    difficulty: 'hard',
    question: 'Which cranial nerve controls most of the muscles responsible for eye movement?',
    options: [
      'Optic nerve (II)',
      'Oculomotor nerve (III)',
      'Trigeminal nerve (V)',
      'Facial nerve (VII)'
    ],
    correctAnswer: 1,
    explanation: 'The oculomotor nerve (III) controls most eye movement muscles, pupil constriction, and upper eyelid elevation.'
  },
  {
    id: 'sci-023',
    subject: 'science',
    topic: 'Scientific Reasoning',
    difficulty: 'easy',
    question: 'What is the dependent variable in an experiment?',
    options: [
      'The variable that the researcher changes',
      'The variable that is measured as an outcome',
      'A variable that stays constant',
      'A variable that is eliminated'
    ],
    correctAnswer: 1,
    explanation: 'The dependent variable is the outcome that is measured; it "depends" on the independent variable which the researcher manipulates.'
  },
  {
    id: 'sci-024',
    subject: 'science',
    topic: 'Human Anatomy',
    difficulty: 'medium',
    question: 'The exchange of oxygen and carbon dioxide occurs in which structures of the lungs?',
    options: [
      'Bronchi',
      'Bronchioles',
      'Alveoli',
      'Pleura'
    ],
    correctAnswer: 2,
    explanation: 'Gas exchange occurs in the alveoli, tiny air sacs with thin walls surrounded by capillaries.'
  },
  {
    id: 'sci-025',
    subject: 'science',
    topic: 'Life Science',
    difficulty: 'hard',
    question: 'Which process describes the movement of water across a semipermeable membrane from low solute concentration to high solute concentration?',
    options: [
      'Diffusion',
      'Active transport',
      'Osmosis',
      'Facilitated diffusion'
    ],
    correctAnswer: 2,
    explanation: 'Osmosis is the movement of water across a semipermeable membrane from an area of lower solute concentration to higher solute concentration.'
  },
  {
    id: 'sci-026',
    subject: 'science',
    topic: 'Human Anatomy',
    difficulty: 'easy',
    question: 'What is the largest organ of the human body?',
    options: [
      'Liver',
      'Brain',
      'Skin',
      'Lungs'
    ],
    correctAnswer: 2,
    explanation: 'The skin is the largest organ, covering about 20 square feet in adults and weighing about 8 pounds.'
  },
  {
    id: 'sci-027',
    subject: 'science',
    topic: 'Earth & Physical Science',
    difficulty: 'medium',
    question: 'Which element is most abundant in Earth\'s atmosphere?',
    options: [
      'Oxygen',
      'Carbon dioxide',
      'Nitrogen',
      'Hydrogen'
    ],
    correctAnswer: 2,
    explanation: 'Nitrogen makes up about 78% of Earth\'s atmosphere. Oxygen is second at about 21%.'
  },
  {
    id: 'sci-028',
    subject: 'science',
    topic: 'Human Anatomy',
    difficulty: 'medium',
    question: 'The thyroid gland is located in which part of the body?',
    options: [
      'Brain',
      'Neck',
      'Abdomen',
      'Chest'
    ],
    correctAnswer: 1,
    explanation: 'The thyroid gland is located in the front of the neck, below the larynx (voice box).'
  },
  {
    id: 'sci-029',
    subject: 'science',
    topic: 'Life Science',
    difficulty: 'medium',
    question: 'What is the function of the mitochondria?',
    options: [
      'Protein synthesis',
      'Cellular respiration/energy production',
      'Cell division',
      'Waste removal'
    ],
    correctAnswer: 1,
    explanation: 'Mitochondria are the "powerhouses" of the cell, producing ATP through cellular respiration.'
  },
  {
    id: 'sci-030',
    subject: 'science',
    topic: 'Human Anatomy',
    difficulty: 'hard',
    question: 'Which layer of the skin contains blood vessels, nerves, and hair follicles?',
    options: [
      'Epidermis',
      'Dermis',
      'Hypodermis',
      'Stratum corneum'
    ],
    correctAnswer: 1,
    explanation: 'The dermis is the middle layer of skin containing blood vessels, nerves, hair follicles, and sweat glands. The epidermis is the outer layer without blood vessels.'
  }
];

export const englishQuestions: Question[] = [
  // Grammar
  {
    id: 'eng-001',
    subject: 'english',
    topic: 'Grammar',
    difficulty: 'easy',
    question: 'Choose the sentence with correct subject-verb agreement:',
    options: [
      'The group of nurses are meeting in the conference room.',
      'The group of nurses is meeting in the conference room.',
      'The group of nurses were meeting in the conference room.',
      'The group of nurses be meeting in the conference room.'
    ],
    correctAnswer: 1,
    explanation: '"Group" is a collective noun and takes a singular verb. "The group is meeting" is correct.'
  },
  {
    id: 'eng-002',
    subject: 'english',
    topic: 'Vocabulary',
    difficulty: 'medium',
    question: 'What does the prefix "hyper-" mean?',
    options: [
      'Under, below',
      'Over, excessive',
      'Before',
      'After'
    ],
    correctAnswer: 1,
    explanation: '"Hyper-" means over or excessive (hyperactive, hypertension). "Hypo-" means under or below.'
  },
  {
    id: 'eng-003',
    subject: 'english',
    topic: 'Sentence Structure',
    difficulty: 'medium',
    question: 'Which sentence uses the correct form of the verb?',
    options: [
      'The patient has went to radiology.',
      'The patient has gone to radiology.',
      'The patient has going to radiology.',
      'The patient has go to radiology.'
    ],
    correctAnswer: 1,
    explanation: '"Has gone" is the correct present perfect tense. "Went" is simple past and doesn\'t pair with "has."'
  },
  {
    id: 'eng-004',
    subject: 'english',
    topic: 'Punctuation',
    difficulty: 'easy',
    question: 'Which sentence uses the apostrophe correctly?',
    options: [
      'The patients room was clean.',
      'The patient\'s room was clean.',
      'The patients\' room was clean for multiple patients.',
      'Both B and C are correct depending on context.'
    ],
    correctAnswer: 3,
    explanation: 'B is correct for one patient (patient\'s), and C is correct for multiple patients (patients\'). Both use apostrophes correctly for their contexts.'
  },
  {
    id: 'eng-005',
    subject: 'english',
    topic: 'Vocabulary',
    difficulty: 'hard',
    question: 'Choose the word that best completes the sentence: The medication\'s _____ was felt within minutes of administration.',
    options: [
      'affect',
      'effect',
      'affective',
      'effective'
    ],
    correctAnswer: 1,
    explanation: '"Effect" is a noun meaning result or outcome. "Affect" is typically a verb. The sentence needs a noun (the medication\'s effect).'
  },
  {
    id: 'eng-006',
    subject: 'english',
    topic: 'Grammar',
    difficulty: 'medium',
    question: 'Identify the sentence with the dangling modifier:',
    options: [
      'Walking to the nurse\'s station, the patient tripped.',
      'Walking to the nurse\'s station, the floor was slippery.',
      'The patient walked to the nurse\'s station carefully.',
      'The nurse helped the walking patient.'
    ],
    correctAnswer: 1,
    explanation: 'In B, "Walking to the nurse\'s station" has no clear subject - the floor wasn\'t walking. This is a dangling modifier.'
  },
  {
    id: 'eng-007',
    subject: 'english',
    topic: 'Spelling',
    difficulty: 'easy',
    question: 'Which word is spelled correctly?',
    options: [
      'Occassionally',
      'Ocasionally',
      'Occasionally',
      'Occationally'
    ],
    correctAnswer: 2,
    explanation: '"Occasionally" is the correct spelling - two c\'s, one s.'
  },
  {
    id: 'eng-008',
    subject: 'english',
    topic: 'Vocabulary',
    difficulty: 'medium',
    question: 'The medical term "bradycardia" refers to:',
    options: [
      'Fast heart rate',
      'Slow heart rate',
      'Irregular heart rate',
      'Normal heart rate'
    ],
    correctAnswer: 1,
    explanation: '"Brady-" means slow, and "-cardia" refers to the heart. Bradycardia = slow heart rate. "Tachy-" means fast.'
  },
  {
    id: 'eng-009',
    subject: 'english',
    topic: 'Sentence Structure',
    difficulty: 'hard',
    question: 'Which sentence is punctuated correctly?',
    options: [
      'The nurse checked the patient\'s vitals; blood pressure, pulse, and temperature.',
      'The nurse checked the patient\'s vitals: blood pressure, pulse, and temperature.',
      'The nurse checked the patient\'s vitals, blood pressure, pulse, and temperature.',
      'The nurse checked the patient\'s vitals - blood pressure pulse and temperature.'
    ],
    correctAnswer: 1,
    explanation: 'A colon is used to introduce a list when preceded by a complete sentence. The semicolon and comma are incorrect here.'
  },
  {
    id: 'eng-010',
    subject: 'english',
    topic: 'Grammar',
    difficulty: 'easy',
    question: 'Choose the correct pronoun: Neither the doctor nor the nurses have completed _____ training.',
    options: [
      'his',
      'her',
      'their',
      'its'
    ],
    correctAnswer: 2,
    explanation: 'With "neither...nor," the pronoun agrees with the closer noun. "Nurses" is plural, so "their" is correct.'
  },
  {
    id: 'eng-011',
    subject: 'english',
    topic: 'Vocabulary',
    difficulty: 'medium',
    question: 'What does "contraindicated" mean in medical terminology?',
    options: [
      'Strongly recommended',
      'Not advisable due to potential harm',
      'Required before treatment',
      'Optional but helpful'
    ],
    correctAnswer: 1,
    explanation: '"Contraindicated" means a treatment should not be used because it may cause harm. "Contra-" means against.'
  },
  {
    id: 'eng-012',
    subject: 'english',
    topic: 'Punctuation',
    difficulty: 'medium',
    question: 'Which sentence uses commas correctly?',
    options: [
      'The medication, which was prescribed yesterday is helping.',
      'The medication which was prescribed yesterday, is helping.',
      'The medication, which was prescribed yesterday, is helping.',
      'The medication which was prescribed yesterday is helping.'
    ],
    correctAnswer: 2,
    explanation: 'Nonessential clauses (like "which was prescribed yesterday") need commas before AND after.'
  },
  {
    id: 'eng-013',
    subject: 'english',
    topic: 'Grammar',
    difficulty: 'hard',
    question: 'Choose the sentence with parallel structure:',
    options: [
      'The nurse enjoys reading, to jog, and cooking.',
      'The nurse enjoys reading, jogging, and cooking.',
      'The nurse enjoys reading, jogging, and to cook.',
      'The nurse enjoys to read, jogging, and cooking.'
    ],
    correctAnswer: 1,
    explanation: 'Parallel structure requires consistent grammatical form. All gerunds (reading, jogging, cooking) maintain parallelism.'
  },
  {
    id: 'eng-014',
    subject: 'english',
    topic: 'Vocabulary',
    difficulty: 'easy',
    question: 'The suffix "-itis" in medical terms indicates:',
    options: [
      'Study of',
      'Inflammation',
      'Surgical removal',
      'Abnormal condition'
    ],
    correctAnswer: 1,
    explanation: '"-itis" means inflammation (appendicitis, arthritis, bronchitis). "-ology" means study of; "-ectomy" means removal.'
  },
  {
    id: 'eng-015',
    subject: 'english',
    topic: 'Sentence Structure',
    difficulty: 'medium',
    question: 'Which is a complete sentence?',
    options: [
      'After the patient was discharged.',
      'The patient feeling better.',
      'When the medication takes effect.',
      'The patient was discharged yesterday.'
    ],
    correctAnswer: 3,
    explanation: 'D is the only complete sentence with a subject (patient), verb (was discharged), and complete thought. A and C are dependent clauses; B lacks a proper verb.'
  },
  {
    id: 'eng-016',
    subject: 'english',
    topic: 'Vocabulary',
    difficulty: 'medium',
    question: 'What does the prefix "poly-" mean?',
    options: [
      'One',
      'Few',
      'Many',
      'None'
    ],
    correctAnswer: 2,
    explanation: '"Poly-" means many (polygon, polyuria, polyneuropathy). "Mono-" means one; "oligo-" means few.'
  },
  {
    id: 'eng-017',
    subject: 'english',
    topic: 'Grammar',
    difficulty: 'easy',
    question: 'Which sentence uses "their," "there," or "they\'re" correctly?',
    options: [
      'Their going to the hospital.',
      'The patients left there belongings.',
      'They\'re going to see the doctor.',
      'There is they\'re appointment.'
    ],
    correctAnswer: 2,
    explanation: '"They\'re" is a contraction of "they are." "Their" shows possession. "There" indicates location.'
  },
  {
    id: 'eng-018',
    subject: 'english',
    topic: 'Vocabulary',
    difficulty: 'hard',
    question: 'The suffix "-ectomy" means:',
    options: [
      'Surgical repair',
      'Surgical removal',
      'Surgical incision',
      'Surgical examination'
    ],
    correctAnswer: 1,
    explanation: '"-ectomy" means surgical removal (appendectomy, tonsillectomy). "-plasty" means repair; "-otomy" means incision; "-oscopy" means examination.'
  },
  {
    id: 'eng-019',
    subject: 'english',
    topic: 'Punctuation',
    difficulty: 'easy',
    question: 'When should a semicolon be used?',
    options: [
      'To introduce a list',
      'To join two independent clauses without a conjunction',
      'After a greeting in a formal letter',
      'To separate a title from a subtitle'
    ],
    correctAnswer: 1,
    explanation: 'A semicolon joins two independent clauses that are closely related without using a conjunction.'
  },
  {
    id: 'eng-020',
    subject: 'english',
    topic: 'Grammar',
    difficulty: 'medium',
    question: 'Which word correctly completes the sentence? The doctor prescribed the medication _____ the patient could manage the pain.',
    options: [
      'so',
      'so that',
      'for',
      'because'
    ],
    correctAnswer: 1,
    explanation: '"So that" is used to express purpose - why something is done. "Because" shows reason/cause, which doesn\'t fit this sentence structure.'
  },
  {
    id: 'eng-021',
    subject: 'english',
    topic: 'Vocabulary',
    difficulty: 'medium',
    question: 'The word "bilateral" refers to:',
    options: [
      'One side',
      'Both sides',
      'Above',
      'Below'
    ],
    correctAnswer: 1,
    explanation: '"Bi-" means two, so bilateral means relating to both sides (bilateral pneumonia = affecting both lungs).'
  },
  {
    id: 'eng-022',
    subject: 'english',
    topic: 'Spelling',
    difficulty: 'medium',
    question: 'Which word is spelled correctly?',
    options: [
      'Accomodate',
      'Accommodate',
      'Acommodate',
      'Acomodate'
    ],
    correctAnswer: 1,
    explanation: '"Accommodate" has two c\'s and two m\'s.'
  },
  {
    id: 'eng-023',
    subject: 'english',
    topic: 'Grammar',
    difficulty: 'hard',
    question: 'Which sentence demonstrates correct use of the subjunctive mood?',
    options: [
      'I wish I was a nurse.',
      'If I was you, I would rest.',
      'The doctor recommended that she takes the medication.',
      'The doctor recommended that she take the medication.'
    ],
    correctAnswer: 3,
    explanation: 'The subjunctive mood uses the base form of the verb after expressions like "recommended that." "Take" (not "takes") is correct.'
  },
  {
    id: 'eng-024',
    subject: 'english',
    topic: 'Vocabulary',
    difficulty: 'easy',
    question: 'The prefix "anti-" means:',
    options: [
      'For',
      'Against',
      'Before',
      'With'
    ],
    correctAnswer: 1,
    explanation: '"Anti-" means against or opposing (antibiotic, antipyretic, antiseptic).'
  },
  {
    id: 'eng-025',
    subject: 'english',
    topic: 'Sentence Structure',
    difficulty: 'medium',
    question: 'Which sentence contains a misplaced modifier?',
    options: [
      'The nurse quickly administered the medication.',
      'Running late, the meeting started without her.',
      'She carefully checked the patient\'s vital signs.',
      'The doctor reviewed the chart thoroughly.'
    ],
    correctAnswer: 1,
    explanation: 'In B, "Running late" seems to modify "the meeting" rather than a person. The meeting wasn\'t running late; someone was.'
  },
  {
    id: 'eng-026',
    subject: 'english',
    topic: 'Punctuation',
    difficulty: 'hard',
    question: 'Which sentence uses the hyphen correctly?',
    options: [
      'The patient had a follow up appointment.',
      'The patient had a follow-up appointment.',
      'The twenty five year old patient arrived.',
      'She received around the clock care.'
    ],
    correctAnswer: 1,
    explanation: '"Follow-up" is hyphenated when used as an adjective before a noun. "Twenty-five-year-old" and "around-the-clock" should also be hyphenated as compound adjectives.'
  },
  {
    id: 'eng-027',
    subject: 'english',
    topic: 'Vocabulary',
    difficulty: 'medium',
    question: 'The term "prognosis" refers to:',
    options: [
      'The cause of a disease',
      'The predicted outcome of a disease',
      'The symptoms of a disease',
      'The treatment of a disease'
    ],
    correctAnswer: 1,
    explanation: 'Prognosis is the predicted outcome or course of a disease. Etiology is the cause; diagnosis identifies the disease.'
  },
  {
    id: 'eng-028',
    subject: 'english',
    topic: 'Grammar',
    difficulty: 'easy',
    question: 'Which sentence uses "fewer" or "less" correctly?',
    options: [
      'There are less patients today.',
      'I have less time than yesterday.',
      'She took less pills than prescribed.',
      'There were less mistakes this time.'
    ],
    correctAnswer: 1,
    explanation: '"Less" is used for uncountable nouns (time, money, water). "Fewer" is used for countable nouns (patients, pills, mistakes).'
  },
  {
    id: 'eng-029',
    subject: 'english',
    topic: 'Vocabulary',
    difficulty: 'hard',
    question: 'What is the meaning of "iatrogenic"?',
    options: [
      'Caused by medical treatment',
      'Related to childbirth',
      'Concerning the elderly',
      'Pertaining to blood'
    ],
    correctAnswer: 0,
    explanation: '"Iatrogenic" refers to conditions caused by medical treatment or procedures (iatro- = physician, -genic = caused by).'
  },
  {
    id: 'eng-030',
    subject: 'english',
    topic: 'Spelling',
    difficulty: 'easy',
    question: 'Which word is spelled correctly?',
    options: [
      'Definately',
      'Definetely',
      'Definitely',
      'Definitley'
    ],
    correctAnswer: 2,
    explanation: '"Definitely" is the correct spelling. A common mnemonic: it contains the word "finite."'
  }
];

// Combined question bank
// Combine base questions with extended questions
export const allReadingQuestions: Question[] = [...readingQuestions, ...extendedReadingQuestions];
export const allMathQuestions: Question[] = [...mathQuestions, ...extendedMathQuestions];
export const allScienceQuestions: Question[] = [...scienceQuestions, ...extendedScienceQuestions];
export const allEnglishQuestions: Question[] = [...englishQuestions, ...extendedEnglishQuestions];

// Combined question bank - 300+ questions total
export const allQuestions: Question[] = [
  ...allReadingQuestions,
  ...allMathQuestions,
  ...allScienceQuestions,
  ...allEnglishQuestions
];

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

// Subject info - GED Test Structure
export const subjectInfo = {
  reading: {
    name: 'Reasoning Through Language Arts',
    totalQuestions: allReadingQuestions.length,
    topics: ['Key Ideas & Details', 'Craft & Structure', 'Integration of Knowledge', 'Extended Response'],
    examPercentage: 25,
    timeMinutes: 150
  },
  math: {
    name: 'Mathematical Reasoning',
    totalQuestions: allMathQuestions.length,
    topics: ['Quantitative Reasoning', 'Algebraic Reasoning', 'Geometry', 'Data Analysis', 'Number Operations'],
    examPercentage: 25,
    timeMinutes: 115
  },
  science: {
    name: 'Science',
    totalQuestions: allScienceQuestions.length,
    topics: ['Life Science', 'Physical Science', 'Earth & Space Science', 'Scientific Practices'],
    examPercentage: 25,
    timeMinutes: 90
  },
  english: {
    name: 'Social Studies',
    totalQuestions: allEnglishQuestions.length,
    topics: ['U.S. History', 'Civics & Government', 'Economics', 'Geography & World'],
    examPercentage: 25,
    timeMinutes: 70
  }
};

// Flashcard data
export const flashcardDecks = {
  reading: {
    name: 'Reading',
    cards: [
      { front: 'Main Idea', back: 'The central point or most important concept that the author wants to communicate to the reader.' },
      { front: 'Supporting Details', back: 'Specific facts, examples, or information that help explain or prove the main idea.' },
      { front: 'Inference', back: 'A conclusion drawn from evidence and reasoning, not directly stated in the text.' },
      { front: 'Context Clues', back: 'Words or phrases surrounding an unknown word that help determine its meaning.' },
      { front: 'Author\'s Purpose', back: 'The reason an author writes - to inform, persuade, entertain, or explain.' },
      { front: 'Tone', back: 'The author\'s attitude toward the subject, revealed through word choice and style.' },
      { front: 'Primary Source', back: 'Original, firsthand account or evidence created during the time being studied.' },
      { front: 'Secondary Source', back: 'Source that analyzes, interprets, or summarizes information from primary sources.' },
      { front: 'Bias', back: 'A prejudice or inclination that prevents objective consideration of an issue or situation.' },
      { front: 'Theme', back: 'The underlying message or central idea that runs throughout a piece of writing.' }
    ]
  },
  math: {
    name: 'Mathematics',
    cards: [
      { front: 'Ratio', back: 'A comparison of two quantities, often written as a:b or a/b.' },
      { front: 'Proportion', back: 'An equation stating that two ratios are equal: a/b = c/d.' },
      { front: 'Percentage', back: 'A ratio expressed as a fraction of 100. Formula: (part/whole) × 100.' },
      { front: 'Mean', back: 'The average of a set of numbers. Add all values and divide by the count.' },
      { front: 'Median', back: 'The middle value when numbers are arranged in order.' },
      { front: 'Mode', back: 'The value that appears most frequently in a data set.' },
      { front: 'Order of Operations', back: 'PEMDAS: Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).' },
      { front: 'Converting Fractions to Decimals', back: 'Divide the numerator by the denominator. Example: 3/4 = 0.75' },
      { front: 'Percent Change Formula', back: '((New - Old) / Old) × 100. Positive = increase, negative = decrease.' },
      { front: 'Cross Multiplication', back: 'If a/b = c/d, then a×d = b×c. Used to solve proportions.' }
    ]
  },
  science: {
    name: 'Science',
    cards: [
      { front: 'Cardiovascular System', back: 'The heart and blood vessels that circulate blood throughout the body, delivering oxygen and nutrients.' },
      { front: 'Respiratory System', back: 'Organs (lungs, trachea, bronchi) responsible for gas exchange - oxygen in, carbon dioxide out.' },
      { front: 'Mitosis', back: 'Cell division producing two identical daughter cells with the same chromosome number as the parent.' },
      { front: 'Meiosis', back: 'Cell division producing four cells with half the chromosomes, used for reproduction.' },
      { front: 'DNA', back: 'Deoxyribonucleic acid - double helix molecule containing genetic instructions for development and function.' },
      { front: 'Homeostasis', back: 'The body\'s ability to maintain stable internal conditions despite external changes.' },
      { front: 'Enzyme', back: 'A protein that speeds up (catalyzes) chemical reactions in living organisms.' },
      { front: 'ATP', back: 'Adenosine triphosphate - the primary energy currency of cells.' },
      { front: 'Scientific Method', back: 'Observation → Question → Hypothesis → Experiment → Analysis → Conclusion.' },
      { front: 'Osmosis', back: 'Movement of water across a semipermeable membrane from low to high solute concentration.' },
      { front: 'Neurons', back: 'Nerve cells that transmit electrical signals throughout the nervous system.' },
      { front: 'Antibodies', back: 'Proteins produced by B cells that bind to specific antigens to help fight infection.' }
    ]
  },
  english: {
    name: 'English',
    cards: [
      { front: 'Subject-Verb Agreement', back: 'Singular subjects take singular verbs; plural subjects take plural verbs.' },
      { front: 'Prefix "hyper-"', back: 'Means "over" or "excessive" (hyperactive, hypertension).' },
      { front: 'Prefix "hypo-"', back: 'Means "under" or "below normal" (hypothermia, hypoglycemia).' },
      { front: 'Suffix "-itis"', back: 'Means inflammation (arthritis, bronchitis, appendicitis).' },
      { front: 'Suffix "-ectomy"', back: 'Means surgical removal (appendectomy, mastectomy).' },
      { front: 'Suffix "-ology"', back: 'Means study of (biology, cardiology, neurology).' },
      { front: 'Parallel Structure', back: 'Using the same grammatical form for related words/phrases. Example: "I like swimming, running, and biking."' },
      { front: 'Dangling Modifier', back: 'A phrase that doesn\'t clearly modify any word in the sentence. Often begins with -ing verbs.' },
      { front: 'Comma Splice', back: 'Error of joining two independent clauses with just a comma. Fix with period, semicolon, or conjunction.' },
      { front: 'Prefix "anti-"', back: 'Means against or opposing (antibiotic, antiseptic).' },
      { front: 'Prefix "bi-"', back: 'Means two (bilateral, biceps, bipolar).' },
      { front: 'Affect vs Effect', back: 'Affect is usually a verb (to influence). Effect is usually a noun (a result).' }
    ]
  }
};

// Achievement badges
export const achievements = [
  { id: 'streak-7', name: '7-Day Streak', description: 'Study for 7 days in a row', icon: '🔥' },
  { id: 'streak-30', name: 'Month Warrior', description: 'Study for 30 days in a row', icon: '🏆' },
  { id: 'questions-100', name: 'Century', description: 'Answer 100 questions', icon: '💯' },
  { id: 'questions-500', name: 'Question Master', description: 'Answer 500 questions', icon: '🎯' },
  { id: 'questions-1000', name: 'Quiz Champion', description: 'Answer 1,000 questions', icon: '👑' },
  { id: 'perfect-10', name: 'Perfect 10', description: 'Get 10 questions right in a row', icon: '⭐' },
  { id: 'perfect-25', name: 'Flawless', description: 'Get 25 questions right in a row', icon: '💫' },
  { id: 'score-80', name: '80% Club', description: 'Score 80% or higher on a full practice test', icon: '🎖️' },
  { id: 'score-90', name: 'Elite Scorer', description: 'Score 90% or higher on a full practice test', icon: '🥇' },
  { id: 'subject-master-reading', name: 'Reading Expert', description: 'Complete all Reading modules', icon: '📚' },
  { id: 'subject-master-math', name: 'Math Whiz', description: 'Complete all Math modules', icon: '🔢' },
  { id: 'subject-master-science', name: 'Science Star', description: 'Complete all Science modules', icon: '🔬' },
  { id: 'subject-master-english', name: 'Grammar Guru', description: 'Complete all English modules', icon: '✍️' },
  { id: 'early-bird', name: 'Early Bird', description: 'Study before 7 AM', icon: '🌅' },
  { id: 'night-owl', name: 'Night Owl', description: 'Study after 10 PM', icon: '🦉' },
  { id: 'flashcard-master', name: 'Memory Master', description: 'Review 100 flashcards', icon: '🧠' }
];
