export interface Publication {
  id: string;
  title: string;
  year: number;
  type: 'book' | 'article' | 'chapter';
  publisher: string;
  description: string;
  coverImage?: string;
  link?: string;
  status: 'published' | 'in-process';
}

export const publications: Publication[] = [
  {
    id: 'sowing-in-tears',
    title: 'Sowing in Tears, Reaping with Joy: The Power of Joy in Missional Thinking',
    year: 2020,
    type: 'article',
    publisher: 'Missiology: An International Review',
    description: 'An exploration of the role of joy in missional thinking and practice, published in Volume 48, Issue 3 of Missiology.',
    coverImage: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=800',
    status: 'published'
  },
  {
    id: 'place-worth-encountering',
    title: 'A Place Worth Encountering and Abiding',
    year: 2020,
    type: 'article',
    publisher: 'FULLER Magazine',
    description: 'A reflection on the theme of place and its significance in spiritual formation and ministry.',
    coverImage: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=800',
    status: 'published'
  },
  {
    id: 'practical-missiological',
    title: 'Practical and Missiological Implications for the Transformation of Machismo',
    year: 2019,
    type: 'chapter',
    publisher: 'Pickwick Publications',
    description: 'A book chapter in "Devoted to Christ" examining the transformation of machismo culture in missional contexts.',
    coverImage: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800',
    status: 'published'
  },
  {
    id: 'unmasking-male-soul',
    title: 'Unmasking the Male Soul: Power and Gender Trap for Women in Leadership',
    year: 2019,
    type: 'book',
    publisher: 'Wipf and Stock Publishers',
    description: 'An exploration of gender dynamics and power relationships in Christian leadership, examining how traditional masculine paradigms affect women in leadership positions.',
    coverImage: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
    status: 'published'
  },
  {
    id: 'tug-of-war',
    title: 'Tug of War: The Downward Ascent of Power',
    year: 2017,
    type: 'book',
    publisher: 'Wipf and Stock Publishers (Cascade Books)',
    description: 'A comprehensive analysis of power dynamics in Christian leadership, exploring the paradoxical nature of spiritual authority and servant leadership.',
    coverImage: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=800',
    status: 'published'
  },
  {
    id: 'tug-of-war-spanish',
    title: 'Pugna por Poder: La Humilde Ascendencia del Poder',
    year: 2024,
    type: 'book',
    publisher: 'Wipf and Stock Publishers',
    description: 'Spanish translation of "Tug of War: The Downward Ascent of Power", approved under first publication contract.',
    coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800',
    status: 'in-process'
  },
  {
    id: 'unmasking-spanish',
    title: 'Desenmascarando el Alma Masculina',
    year: 2024,
    type: 'book',
    publisher: 'Pending',
    description: 'Spanish translation of "Unmasking the Male Soul", currently in translation process.',
    coverImage: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&q=80&w=800',
    status: 'in-process'
  },
  {
    id: 'espiritualidad',
    title: 'Espiritualidad del Camino: Perspectivas Paulinas para la Missio Dei',
    year: 2024,
    type: 'book',
    publisher: 'Pending',
    description: 'An exploration of Pauline perspectives on spirituality and their implications for mission.',
    coverImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800',
    status: 'in-process'
  },
  {
    id: 'intersectionality',
    title: 'Intersectionality of Power: Implications for Learning and Spiritual Formation',
    year: 2024,
    type: 'book',
    publisher: 'Pending',
    description: 'A study examining the intersections of power dynamics in learning and spiritual formation contexts.',
    coverImage: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=800',
    status: 'in-process'
  },
  {
    id: 'spirituality-suffering',
    title: 'Spirituality of Suffering: Latino-Hispanic Perspectives',
    year: 2024,
    type: 'book',
    publisher: 'Pending',
    description: 'An examination of suffering and spirituality from Latino-Hispanic theological perspectives.',
    coverImage: 'https://images.unsplash.com/photo-1492176273113-2d51f47b23b0?auto=format&fit=crop&q=80&w=800',
    status: 'in-process'
  }
];