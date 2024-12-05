export interface Education {
  degree: string;
  institution: string;
  year: string;
  field: string;
}

export interface Achievement {
  title: string;
  year: string;
  organization: string;
}

export const education: Education[] = [
  {
    degree: 'Ph.D.',
    institution: 'Fuller Theological Seminary',
    year: '2008',
    field:
      'Unmasking Machismo: From Malleability to Transformation of Andean Pentecostal Leaders in Central Peru',
  },
  {
    degree: 'M.Div.',
    institution: 'Fuller Theological Seminary',
    year: '1996',
    field: 'Multi-cultural Ministries',
  },
  {
    degree: 'B.A.',
    institution: 'University of La Verne',
    year: '1996',
    field: 'Philosophy and Religion',
  },
];

export const achievements: Achievement[] = [
  {
    title: 'Ordained and Licensed Pastor',
    year: '2016-Present',
    organization: 'Mennonite Church USA, Colorado Springs, CO;',
  },
  {
    title: 'Cofounder and Co-Chairman',
    year: '2000-2017',
    organization: 'Network of Developing Latin Leaders (NDLL)',
  },
  {
    title: 'Leadership Award',
    year: '2008',
    organization:
      'School of Intercultural Studies, Fuller Theological Seminary',
  },
  {
    title: 'The Fund for Theological Education Scholarship',
    year: '1992-1995',
    organization: '',
  },
  {
    title: 'Who’s Who Among Students in American Universities and Colleges',
    year: '1995',
    organization: '',
  },
  {
    title: 'The Jewett Scholarship Fund',
    year: '1995',
    organization: '',
  },
  {
    title: 'Outstanding Civic Service Award',
    year: '1989',
    organization: 'City of Los Angeles',
  },
];
