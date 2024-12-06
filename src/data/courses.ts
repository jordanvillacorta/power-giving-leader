export interface Course {
  id: string;
  code: string;
  title: string;
  description: string;
  image: string;
  status: 'current' | 'previous';
  language?: 'en' | 'es';
  program?: string;
}

export const courses: Course[] = [
  {
    id: 'sf-503',
    code: 'SF503',
    title: 'Perspectivas Misiológicas para la Vida',
    description: 'Explores missiological perspectives for life and ministry in the Latino context.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    status: 'current',
    language: 'es',
    program: 'Centro Latino'
  },
  {
    id: 'ml-519-latino',
    code: 'ML519',
    title: 'Dinámicas de Poder y Género en el Liderazgo Cristiano',
    description: 'Analysis of power and gender dynamics in Christian leadership within Latino contexts.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    status: 'current',
    language: 'es',
    program: 'Centro Latino'
  },
  {
    id: 'mc-506',
    code: 'MC506',
    title: 'Leading a Missional Community',
    description: 'Explores principles and practices for developing missional communities.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800',
    status: 'current',
    program: 'MAGL Cohort Sequence'
  },
  {
    id: 'ml-519-online',
    code: 'ML519',
    title: 'Dynamics of Power and Gender in Christian Leadership',
    description: 'Comprehensive study of power and gender dynamics in Christian leadership contexts.',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800',
    status: 'current',
    program: 'Fuller Online'
  },
  {
    id: 'ml-530',
    code: 'ML530',
    title: 'Lifelong Development',
    description: 'Explores principles and practices for continuous personal and professional growth.',
    image: 'https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?auto=format&fit=crop&q=80&w=800',
    status: 'current',
    program: 'MAGL Cohort Sequence'
  },
  {
    id: 'ml-581',
    code: 'ML581',
    title: 'Developing Your Learning Plan',
    description: 'Guides students in creating personalized learning and development strategies.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    status: 'current',
    program: 'MAGL Cohort Sequence'
  },
  {
    id: 'ml-582',
    code: 'ML582',
    title: 'Character, Community and Leadership',
    description: 'Examines the relationship between personal character, community impact, and leadership.',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800',
    status: 'current',
    program: 'MAGL Cohort Sequence'
  },
  {
    id: 'ml-583',
    code: 'ML583',
    title: 'Global Leadership: Implications for Ministry',
    description: 'Studies leadership principles and practices in global ministry contexts.',
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=800',
    status: 'current',
    program: 'MAGL Cohort Sequence'
  },
  {
    id: 'ml-523',
    code: 'ML523',
    title: 'Mentoring',
    description: 'Explores principles and practices of effective mentoring in leadership development.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800',
    status: 'previous'
  },
  {
    id: 'ml-524',
    code: 'ML524',
    title: 'Focused Lives',
    description: 'Studies the principles of maintaining focus and purpose in leadership and ministry.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    status: 'previous'
  },
  {
    id: 'ml-534',
    code: 'ML534',
    title: 'Value-Based Leadership in Old Testament',
    description: 'Examines leadership principles and values from Old Testament perspectives.',
    image: 'https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?auto=format&fit=crop&q=80&w=800',
    status: 'previous'
  },
  {
    id: 'ml-536',
    code: 'ML536',
    title: 'Value-Based Leadership in New Testament',
    description: 'Studies leadership principles and values from New Testament perspectives.',
    image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80&w=800',
    status: 'previous'
  },
  {
    id: 'ml-542',
    code: 'ML542',
    title: 'Leadership for Transformation',
    description: 'Explores transformational leadership principles for missionary contexts.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800',
    status: 'previous',
    program: 'Certificate Studies for Missionaries'
  }
];