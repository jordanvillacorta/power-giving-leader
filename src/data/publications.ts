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
    id: 'unmasking-male-soul',
    title:
      'Unmasking the Male Soul: Power and Gender Trap for Women in Leadership',
    year: 2019,
    type: 'book',
    publisher: 'Wipf and Stock Publishers',
    description:
      'An exploration of gender dynamics and power relationships in Christian leadership, examining how traditional masculine paradigms affect women in leadership positions.',
    coverImage:
      'https://raw.githubusercontent.com/jordanvillacorta/power-giving-leader/master/images/Unmasking.jpg',
    status: 'published',
  },
  {
    id: 'tug-of-war',
    title: 'Tug of War: The Downward Ascent of Power',
    year: 2017,
    type: 'book',
    publisher: 'Wipf and Stock Publishers (Cascade Books)',
    description:
      'A comprehensive analysis of power dynamics in Christian leadership, exploring the paradoxical nature of spiritual authority and servant leadership.',
    coverImage:
      'https://raw.githubusercontent.com/jordanvillacorta/power-giving-leader/master/images/TugOfWar.jpg',
    status: 'published',
  },
  {
    id: 'tug-of-war-spanish',
    title: 'Pugna por Poder: La Humilde Ascendencia del Poder',
    year: 2024,
    type: 'book',
    publisher: 'Wipf and Stock Publishers',
    description:
      'Spanish translation of "Tug of War: The Downward Ascent of Power", approved under first publication contract.',
    coverImage:
      'https://raw.githubusercontent.com/jordanvillacorta/power-giving-leader/master/images/Pugna.JPG',
    status: 'in-process',
  },
  {
    id: 'unmasking-spanish',
    title: 'Desenmascarando el Alma Masculina',
    year: 2024,
    type: 'book',
    publisher: 'Pending',
    description:
      'Spanish translation of "Unmasking the Male Soul", currently in translation process.',
    coverImage:
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=800',
    status: 'in-process',
  },
  {
    id: 'espiritualidad',
    title:
      'Espiritualidad del Camino: Perspectivas Paulinas para la Missio Dei',
    year: 2024,
    type: 'book',
    publisher: 'Pending',
    description:
      'An exploration of Pauline perspectives on spirituality and their implications for mission.',
    coverImage:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800',
    status: 'in-process',
  },
  {
    id: 'intersectionality',
    title:
      'Intersectionality of Power: Implications for Learning and Spiritual Formation',
    year: 2024,
    type: 'book',
    publisher: 'Pending',
    description:
      'A study examining the intersections of power dynamics in learning and spiritual formation contexts.',
    coverImage:
      'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=800',
    status: 'in-process',
  },
  {
    id: 'spirituality-suffering',
    title: 'Spirituality of Suffering: Latino-Hispanic Perspectives',
    year: 2024,
    type: 'book',
    publisher: 'Pending',
    description:
      'An examination of suffering and spirituality from Latino-Hispanic theological perspectives.',
    coverImage:
      'https://images.unsplash.com/photo-1492176273113-2d51f47b23b0?auto=format&fit=crop&q=80&w=800',
    status: 'in-process',
  },
];
