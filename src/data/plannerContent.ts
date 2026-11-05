export interface PlannerPage {
  id: string;
  title: string;
  subtitle: string;
  category: 'Checklist' | 'Routine' | 'Review' | 'Tracker' | 'Reflection';
  previewNumber: string;
  sections: {
    heading: string;
    items: string[];
  }[];
  quote?: string;
  footerTip?: string;
}

export const PLANNER_PREVIEW_PAGES: PlannerPage[] = [
  {
    id: 'daily-checklist',
    title: 'Daily Looksmaxxing Checklist',
    subtitle: 'Day 07 — Refining Daily Consistency',
    category: 'Checklist',
    previewNumber: '01',
    quote: '"Discipline is choosing between what you want now and what you want most."',
    sections: [
      {
        heading: 'Morning Routine (6:30 AM — 8:00 AM)',
        items: [
          'Drink 500ml room-temperature water with lemon & sea salt',
          'Cold water facial splash + gentle hydrating cleanser',
          'Apply Hyaluronic Acid serum onto damp skin + Ceramide moisturizer',
          'Broad-spectrum SPF 50+ mineral sunscreen application',
          '10-minute spine decompression, neck alignment & posture check',
          'Dress in a well-fitting, steam-pressed neutral outfit',
        ],
      },
      {
        heading: 'Midday Maintenance (12:00 PM — 2:00 PM)',
        items: [
          'Hydration checkpoint: Complete 1.5L total water intake',
          'Post-lunch oral hygiene check & mint tongue refresh',
          'Posture reset: Chin tucked, shoulders back, sternum elevated',
          '15-minute natural sunlight walk for circadian rhythm',
        ],
      },
      {
        heading: 'Evening Restoration (8:30 PM — 10:00 PM)',
        items: [
          'Double cleanse face to remove dirt, sunscreen & sebum',
          'Niacinamide or gentle retinol treatment + night repair cream',
          'Apply natural organic lip balm & castor oil to brows',
          'Nasal breathing tape or posture sleeping position check',
          'Screen cutoff 45 minutes prior to sleep',
        ],
      },
    ],
    footerTip: 'Pro Tip: Never touch your face during the day to prevent bacterial transfer and acne breakouts.',
  },
  {
    id: 'glowup-routine',
    title: 'Daily Glow-Up Routine',
    subtitle: 'The 5-Pillar Architecture',
    category: 'Routine',
    previewNumber: '02',
    quote: '"You do not rise to the level of your goals. You fall to the level of your systems."',
    sections: [
      {
        heading: 'Pillar 1: Face & Skin Architecture',
        items: [
          'Cold ice-globe massage or cold water bowl immersion for de-puffing',
          'Mewing practice: Tongue completely flat on roof of palate',
          'Chew mastic gum or hard foods (15 min) for masseter definition',
        ],
      },
      {
        heading: 'Pillar 2: Hair & Beard Geometry',
        items: [
          'Scalp massage (4 min) with rosemary-infused oil pre-wash',
          'Blow dry hair with cool shot to set natural volume and part',
          'Trim stray neckline & cheekline hairs with clean safety razor',
        ],
      },
      {
        heading: 'Pillar 3: Body & Symmetry',
        items: [
          'Targeted resistance training session (Compound movements)',
          'Daily 10,000 steps baseline for low visceral body fat',
          'Foam roller thoracic extension (5 min)',
        ],
      },
      {
        heading: 'Pillar 4: Style & Presentation',
        items: [
          'Clean white sneakers or conditioned leather boots',
          'Minimalist timepiece + signature subtle fragrance on pulse points',
        ],
      },
    ],
    footerTip: 'Consistency beats intensity. Follow the protocol every single day without deviation.',
  },
  {
    id: 'weekly-review',
    title: 'Weekly Progress & System Review',
    subtitle: 'End of Week 02 Audit & Calibration',
    category: 'Review',
    previewNumber: '03',
    quote: '"What gets measured gets managed. What gets audited gets perfected."',
    sections: [
      {
        heading: 'Weekly Habit Compliance Scorecard',
        items: [
          'Skincare routine completion: 7 / 7 days logged',
          'Hydration target (3L/day): 6 / 7 days logged',
          'Posture & physical training: 5 / 5 sessions hit',
          'Sleep consistency (8 hrs baseline): 6 / 7 nights achieved',
        ],
      },
      {
        heading: 'Visual & Physical Audit Questions',
        items: [
          'Has skin texture or inflammation visibly improved this week?',
          'How is facial bloat reacting to reduced sodium & 3L water intake?',
          'Are clothes fitting with cleaner drape due to improved posture?',
          'What was the single biggest distraction that broke routine?',
        ],
      },
      {
        heading: 'Action Plan for Upcoming Week',
        items: [
          'Schedule barber appointment for clean maintenance fade',
          'Pre-select 5 outfits on Sunday evening for effortless mornings',
          'Increase magnesium glycinate intake 30 min before bed',
        ],
      },
    ],
    footerTip: 'Do not judge day-to-day fluctuations. Compare week-over-week averages.',
  },
  {
    id: 'water-tracker',
    title: 'Hydration & Water Intake Tracker',
    subtitle: 'Day 14 — Eliminating Water Retention & Bloat',
    category: 'Tracker',
    previewNumber: '04',
    quote: '"Hydration is the single cheapest cosmetic upgrade on earth."',
    sections: [
      {
        heading: 'Daily 3.5-Liter Intake Matrix',
        items: [
          'Bottle 1 (7:00 AM — 9:30 AM): 750ml with Himalayan salt crystal [COMPLETED]',
          'Bottle 2 (10:00 AM — 12:30 PM): 750ml infused with cucumber/mint [COMPLETED]',
          'Bottle 3 (1:00 PM — 3:30 PM): 750ml green tea or pure water [COMPLETED]',
          'Bottle 4 (4:00 PM — 6:30 PM): 750ml electrolyte hydration [COMPLETED]',
          'Bottle 5 (7:00 PM — 8:30 PM): 500ml final evening hydration [COMPLETED]',
        ],
      },
      {
        heading: 'Facial Bloat Reduction Factors',
        items: [
          'Zero sodium bombs / processed fast food logged today',
          'Potassium-rich foods included (Avocado, Banana, Spinach)',
          'Dandelion root tea consumed for gentle lymphatic flushing',
        ],
      },
    ],
    footerTip: 'Drinking enough water forces your body to release stored subcutaneous water, carving out facial contours.',
  },
  {
    id: 'habit-tracker',
    title: '30-Day Master Habit Grid',
    subtitle: 'Tracking 8 Non-Negotiable Core Habits',
    category: 'Tracker',
    previewNumber: '05',
    quote: '"Small disciplines repeated with consistency every day lead to great achievements."',
    sections: [
      {
        heading: 'The 8 Non-Negotiable Daily Habits',
        items: [
          '1. Morning Skincare Protocol (Cleanser + HA + SPF 50)',
          '2. Evening Skincare Protocol (Cleanse + Retinol/Moisturizer)',
          '3. 3.0 Liters Clean Water + Electrolytes',
          '4. 10,000 Daily Steps (Lymphatic movement)',
          '5. 45-Minute Workout or Posture Resistance Training',
          '6. Correct Tongue Posture / Lip Seal Awareness',
          '7. 8 Hours Uninterrupted Sleep in Dark Cool Room',
          '8. 15 Minutes Daily Reading / Mindset Development',
        ],
      },
    ],
    footerTip: 'Aim for at least 85% compliance across all 30 days to build lifelong automatic muscle memory.',
  },
  {
    id: 'reflection-pages',
    title: 'Personal Reflection & Mindset Journal',
    subtitle: 'Day 21 — The Identity Transformation',
    category: 'Reflection',
    previewNumber: '06',
    quote: '"You do not become confident by affirmations. You become confident by building undeniable proof with yourself."',
    sections: [
      {
        heading: 'Self-Respect & Discipline Prompt',
        items: [
          '"In what specific moments this week did I choose long-term discipline over short-term comfort?"',
          '"How has taking deliberate care of my appearance altered how I carry myself in public spaces?"',
          '"What negative self-talk did I catch and replace with constructive action?"',
        ],
      },
      {
        heading: 'Evening Gratitude & Wins',
        items: [
          'Win 1: Stuck to the skincare routine despite late arrival home',
          'Win 2: Maintained upright spine and relaxed shoulders in all meetings',
          'Win 3: Received unprompted compliment on outfit coordination',
        ],
      },
    ],
    footerTip: 'Confidence is an internal state earned by honoring the promises you make to yourself.',
  },
];
