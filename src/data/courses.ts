export interface Course {
  id: string;
  code: string;
  title: string;
  description: string;
  image: string;
}

export const courses: Course[] = [
  {
    id: 'mc-506',
    code: 'MC 506',
    title: 'Leading a Missional Church',
    description: 'Explores leadership principles and practices for developing and guiding missional churches in contemporary contexts.',
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ml-519',
    code: 'ML 519',
    title: 'Dynamics of Power and Gender in Christian Leadership',
    description: 'Examines power dynamics and gender relationships in Christian leadership contexts.',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ml-523',
    code: 'ML 523',
    title: 'Mentoring',
    description: 'Explores principles and practices of effective mentoring in leadership development.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ml-524',
    code: 'ML 524',
    title: 'Focused Lives',
    description: 'Studies the principles of maintaining focus and purpose in leadership and ministry.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ml-534',
    code: 'ML 534',
    title: 'Value-Based Leadership in the Old Testament',
    description: 'Examines leadership principles and values from Old Testament perspectives.',
    image: 'https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ml-536',
    code: 'ML 536',
    title: 'Value-Based Leadership in the New Testament',
    description: 'Studies leadership principles and values from New Testament perspectives.',
    image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ml-542',
    code: 'ML 542',
    title: 'Leadership for Transformation',
    description: 'Explores transformational leadership principles and practices.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ml-581',
    code: 'ML 581',
    title: 'Developing Your Learning Plan',
    description: 'Guides students in creating personalized learning and development plans.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ml-582',
    code: 'ML 582',
    title: 'Character, Leadership, and Community',
    description: 'Examines the relationship between personal character, leadership effectiveness, and community impact.',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ml-583',
    code: 'ML 583',
    title: 'Global Leadership: Implications for Ministry',
    description: 'Explores leadership principles and practices in global ministry contexts.',
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=800'
  }
];