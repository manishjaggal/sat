// Extended Math Questions Bank

import { Question } from './questions';

export const extendedMathQuestions: Question[] = [
  // Numbers & Operations
  {
    id: 'math-101',
    subject: 'math',
    topic: 'Numbers & Operations',
    difficulty: 'easy',
    question: 'A nurse administers 125 mg of medication three times daily. What is the total daily dose?',
    options: ['250 mg', '375 mg', '500 mg', '625 mg'],
    correctAnswer: 1,
    explanation: '125 mg × 3 = 375 mg total daily dose.'
  },
  {
    id: 'math-102',
    subject: 'math',
    topic: 'Numbers & Operations',
    difficulty: 'easy',
    question: 'If a patient weighs 154 pounds, what is their weight in kilograms? (2.2 lbs = 1 kg)',
    options: ['65 kg', '70 kg', '75 kg', '80 kg'],
    correctAnswer: 1,
    explanation: '154 ÷ 2.2 = 70 kg.'
  },
  {
    id: 'math-103',
    subject: 'math',
    topic: 'Numbers & Operations',
    difficulty: 'medium',
    question: 'A hospital has 340 patients. If 85 are discharged and 62 are admitted, how many patients are now in the hospital?',
    options: ['297', '317', '363', '487'],
    correctAnswer: 1,
    explanation: '340 - 85 + 62 = 317 patients.'
  },
  {
    id: 'math-104',
    subject: 'math',
    topic: 'Numbers & Operations',
    difficulty: 'medium',
    question: 'What is 3.75 expressed as a fraction in lowest terms?',
    options: ['15/4', '3 3/4', '375/100', 'Both A and B'],
    correctAnswer: 3,
    explanation: '3.75 = 3 3/4 = 15/4. Both are correct representations.'
  },
  {
    id: 'math-105',
    subject: 'math',
    topic: 'Numbers & Operations',
    difficulty: 'hard',
    question: 'A medication is available in 0.125 mg tablets. How many tablets are needed for a 0.5 mg dose?',
    options: ['2 tablets', '3 tablets', '4 tablets', '5 tablets'],
    correctAnswer: 2,
    explanation: '0.5 ÷ 0.125 = 4 tablets.'
  },
  {
    id: 'math-106',
    subject: 'math',
    topic: 'Ratios & Proportions',
    difficulty: 'easy',
    question: 'The ratio of nurses to patients is 1:5. If there are 40 patients, how many nurses are needed?',
    options: ['6', '8', '10', '12'],
    correctAnswer: 1,
    explanation: '40 ÷ 5 = 8 nurses needed.'
  },
  {
    id: 'math-107',
    subject: 'math',
    topic: 'Ratios & Proportions',
    difficulty: 'medium',
    question: 'If 2 tablespoons of medication equal 30 mL, how many mL are in 5 tablespoons?',
    options: ['60 mL', '65 mL', '70 mL', '75 mL'],
    correctAnswer: 3,
    explanation: '2 tbsp = 30 mL, so 1 tbsp = 15 mL. 5 × 15 = 75 mL.'
  },
  {
    id: 'math-108',
    subject: 'math',
    topic: 'Ratios & Proportions',
    difficulty: 'hard',
    question: 'A solution contains 250 mg of drug in 5 mL. How many mL are needed to deliver 175 mg?',
    options: ['2.5 mL', '3.0 mL', '3.5 mL', '4.0 mL'],
    correctAnswer: 2,
    explanation: '250mg/5mL = 175mg/x. Cross multiply: 250x = 875, x = 3.5 mL.'
  },
  {
    id: 'math-109',
    subject: 'math',
    topic: 'Percentages',
    difficulty: 'easy',
    question: 'A patient\'s condition improved by 25%. If the original symptom score was 80, what is the new score?',
    options: ['55', '60', '65', '70'],
    correctAnswer: 1,
    explanation: '25% of 80 = 20. Improvement means: 80 - 20 = 60.'
  },
  {
    id: 'math-110',
    subject: 'math',
    topic: 'Percentages',
    difficulty: 'medium',
    question: 'If 72 out of 120 patients in a study showed improvement, what percentage improved?',
    options: ['55%', '60%', '65%', '70%'],
    correctAnswer: 1,
    explanation: '72 ÷ 120 = 0.60 = 60%.'
  },
  {
    id: 'math-111',
    subject: 'math',
    topic: 'Percentages',
    difficulty: 'hard',
    question: 'A medication dosage is increased by 15% from 200 mg. After the increase, it is reduced by 10%. What is the final dose?',
    options: ['203 mg', '207 mg', '210 mg', '217 mg'],
    correctAnswer: 1,
    explanation: '200 × 1.15 = 230 mg. Then 230 × 0.90 = 207 mg.'
  },
  {
    id: 'math-112',
    subject: 'math',
    topic: 'Algebra',
    difficulty: 'easy',
    question: 'Solve for x: x + 15 = 42',
    options: ['x = 27', 'x = 37', 'x = 47', 'x = 57'],
    correctAnswer: 0,
    explanation: 'x = 42 - 15 = 27.'
  },
  {
    id: 'math-113',
    subject: 'math',
    topic: 'Algebra',
    difficulty: 'medium',
    question: 'Solve for x: 5x - 7 = 3x + 9',
    options: ['x = 1', 'x = 4', 'x = 8', 'x = 16'],
    correctAnswer: 2,
    explanation: '5x - 3x = 9 + 7. 2x = 16. x = 8.'
  },
  {
    id: 'math-114',
    subject: 'math',
    topic: 'Algebra',
    difficulty: 'hard',
    question: 'If 2(x - 3) + 4 = 3(x + 1) - 5, what is x?',
    options: ['x = -2', 'x = 0', 'x = 2', 'x = 4'],
    correctAnswer: 1,
    explanation: '2x - 6 + 4 = 3x + 3 - 5. 2x - 2 = 3x - 2. -x = 0. x = 0.'
  },
  {
    id: 'math-115',
    subject: 'math',
    topic: 'Measurement',
    difficulty: 'easy',
    question: 'How many milligrams are in 3.5 grams?',
    options: ['35 mg', '350 mg', '3,500 mg', '35,000 mg'],
    correctAnswer: 2,
    explanation: '1 g = 1,000 mg. 3.5 × 1,000 = 3,500 mg.'
  },
  {
    id: 'math-116',
    subject: 'math',
    topic: 'Measurement',
    difficulty: 'medium',
    question: 'Convert 72 hours to days.',
    options: ['2 days', '2.5 days', '3 days', '3.5 days'],
    correctAnswer: 2,
    explanation: '72 ÷ 24 = 3 days.'
  },
  {
    id: 'math-117',
    subject: 'math',
    topic: 'Measurement',
    difficulty: 'hard',
    question: 'A patient receives IV fluid at 150 mL/hr for 4 hours and 30 minutes. How much fluid is administered?',
    options: ['600 mL', '625 mL', '650 mL', '675 mL'],
    correctAnswer: 3,
    explanation: '4 hours 30 min = 4.5 hours. 150 × 4.5 = 675 mL.'
  },
  {
    id: 'math-118',
    subject: 'math',
    topic: 'Data Interpretation',
    difficulty: 'easy',
    question: 'What is the mode of this data set: 4, 7, 7, 8, 9, 7, 10?',
    options: ['4', '7', '8', '10'],
    correctAnswer: 1,
    explanation: 'The mode is the most frequent value. 7 appears three times.'
  },
  {
    id: 'math-119',
    subject: 'math',
    topic: 'Data Interpretation',
    difficulty: 'medium',
    question: 'The temperatures for 5 days were 72°, 68°, 74°, 70°, 71°. What is the range?',
    options: ['4°', '5°', '6°', '7°'],
    correctAnswer: 2,
    explanation: 'Range = Maximum - Minimum = 74 - 68 = 6°.'
  },
  {
    id: 'math-120',
    subject: 'math',
    topic: 'Data Interpretation',
    difficulty: 'hard',
    question: 'A patient\'s blood pressure readings over 6 visits were: 118, 124, 122, 130, 126, 120. What is the median?',
    options: ['122', '123', '124', '125'],
    correctAnswer: 1,
    explanation: 'Ordered: 118, 120, 122, 124, 126, 130. Median = (122 + 124) ÷ 2 = 123.'
  },
  {
    id: 'math-121',
    subject: 'math',
    topic: 'Fractions',
    difficulty: 'easy',
    question: 'What is 1/4 + 1/2?',
    options: ['1/6', '2/6', '3/4', '1/3'],
    correctAnswer: 2,
    explanation: '1/4 + 2/4 = 3/4.'
  },
  {
    id: 'math-122',
    subject: 'math',
    topic: 'Fractions',
    difficulty: 'medium',
    question: 'Subtract: 5/6 - 1/3',
    options: ['1/6', '1/3', '1/2', '2/3'],
    correctAnswer: 2,
    explanation: '5/6 - 2/6 = 3/6 = 1/2.'
  },
  {
    id: 'math-123',
    subject: 'math',
    topic: 'Fractions',
    difficulty: 'hard',
    question: 'Multiply: 3/4 × 2/5',
    options: ['5/20', '6/20', '3/10', '6/9'],
    correctAnswer: 2,
    explanation: '(3 × 2)/(4 × 5) = 6/20 = 3/10.'
  },
  {
    id: 'math-124',
    subject: 'math',
    topic: 'Decimals',
    difficulty: 'easy',
    question: 'Add: 12.5 + 3.75',
    options: ['15.25', '16.00', '16.25', '16.75'],
    correctAnswer: 2,
    explanation: '12.50 + 3.75 = 16.25.'
  },
  {
    id: 'math-125',
    subject: 'math',
    topic: 'Decimals',
    difficulty: 'medium',
    question: 'Divide: 15.6 ÷ 1.2',
    options: ['11', '12', '13', '14'],
    correctAnswer: 2,
    explanation: '15.6 ÷ 1.2 = 13.'
  },
  {
    id: 'math-126',
    subject: 'math',
    topic: 'Numbers & Operations',
    difficulty: 'medium',
    question: 'Round 4,567.849 to the nearest tenth.',
    options: ['4,567.8', '4,567.85', '4,567.9', '4,568'],
    correctAnswer: 0,
    explanation: 'The hundredths digit is 4, so we round down: 4,567.8.'
  },
  {
    id: 'math-127',
    subject: 'math',
    topic: 'Ratios & Proportions',
    difficulty: 'medium',
    question: 'A map scale is 1 inch = 50 miles. How many inches represent 175 miles?',
    options: ['3 inches', '3.5 inches', '4 inches', '4.5 inches'],
    correctAnswer: 1,
    explanation: '175 ÷ 50 = 3.5 inches.'
  },
  {
    id: 'math-128',
    subject: 'math',
    topic: 'Percentages',
    difficulty: 'easy',
    question: 'What is 30% of 150?',
    options: ['35', '40', '45', '50'],
    correctAnswer: 2,
    explanation: '0.30 × 150 = 45.'
  },
  {
    id: 'math-129',
    subject: 'math',
    topic: 'Measurement',
    difficulty: 'easy',
    question: 'How many inches are in 3 feet?',
    options: ['24', '30', '36', '42'],
    correctAnswer: 2,
    explanation: '1 foot = 12 inches. 3 × 12 = 36 inches.'
  },
  {
    id: 'math-130',
    subject: 'math',
    topic: 'Algebra',
    difficulty: 'medium',
    question: 'If y = 3x + 7 and x = 4, what is y?',
    options: ['17', '19', '21', '23'],
    correctAnswer: 1,
    explanation: 'y = 3(4) + 7 = 12 + 7 = 19.'
  },
  {
    id: 'math-131',
    subject: 'math',
    topic: 'Numbers & Operations',
    difficulty: 'hard',
    question: 'A patient takes medication at 8:00 AM, then every 6 hours. What time is the 4th dose?',
    options: ['8:00 PM', '2:00 AM', '8:00 AM next day', '2:00 PM'],
    correctAnswer: 1,
    explanation: 'Dose 1: 8AM, Dose 2: 2PM, Dose 3: 8PM, Dose 4: 2AM.'
  },
  {
    id: 'math-132',
    subject: 'math',
    topic: 'Data Interpretation',
    difficulty: 'medium',
    question: 'A nurse works 36 hours per week. What percentage of the week does she work? (Week = 168 hours)',
    options: ['18.5%', '21.4%', '24.3%', '27.2%'],
    correctAnswer: 1,
    explanation: '36 ÷ 168 × 100 ≈ 21.4%.'
  },
  {
    id: 'math-133',
    subject: 'math',
    topic: 'Fractions',
    difficulty: 'easy',
    question: 'Convert 0.75 to a fraction.',
    options: ['1/2', '3/5', '3/4', '4/5'],
    correctAnswer: 2,
    explanation: '0.75 = 75/100 = 3/4.'
  },
  {
    id: 'math-134',
    subject: 'math',
    topic: 'Ratios & Proportions',
    difficulty: 'hard',
    question: 'If Drug A is mixed with saline in a 1:9 ratio, how much drug is in 500 mL of solution?',
    options: ['45 mL', '50 mL', '55 mL', '60 mL'],
    correctAnswer: 1,
    explanation: '1:9 means 1 part drug per 10 total parts. 500 ÷ 10 = 50 mL drug.'
  },
  {
    id: 'math-135',
    subject: 'math',
    topic: 'Percentages',
    difficulty: 'hard',
    question: 'A pharmacy fills 240 prescriptions per day. If errors occur in 0.5% of prescriptions, how many errors per day?',
    options: ['1.0', '1.2', '1.5', '2.0'],
    correctAnswer: 1,
    explanation: '0.5% of 240 = 0.005 × 240 = 1.2 errors.'
  }
];

