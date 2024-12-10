export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: 'Leadership' | 'Spirituality' | 'Mission' | 'Gender Studies';
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'joy-missional-thinking',
    title: 'Sowing in Tears, Reaping with Joy: The Power of Joy in Missional Thinking',
    date: '2020-07-15',
    excerpt: `Exploring the transformative role of joy in mission work and how it shapes our understanding of God's mission in the world.`,
    content: `Joy plays a crucial role in missional thinking and practice. This article explores how joy, even in the midst of challenges, becomes a powerful testimony to God's presence in mission work. Through examining biblical narratives and contemporary mission experiences, we discover that joy is not merely an emotion but a profound theological reality that shapes our missional engagement.`,
    coverImage: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=800',
    category: 'Mission',
    readTime: 8
  },
  {
    id: 'place-worth-encountering',
    title: 'A Place Worth Encountering and Abiding',
    date: '2020-03-21',
    excerpt: 'Reflecting on the significance of place in spiritual formation and ministry, examining how physical spaces shape our spiritual journey.',
    content: `The concept of place holds profound significance in spiritual formation and ministry. This reflection explores how physical spaces become sacred grounds for encountering God and building community. Through examining biblical examples and contemporary experiences, we discover the vital connection between place, presence, and spiritual transformation.`,
    coverImage: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=800',
    category: 'Spirituality',
    readTime: 6
  },
  {
    id: 'transforming-machismo',
    title: 'Practical and Missiological Implications for the Transformation of Machismo',
    date: '2019-11-30',
    excerpt: 'Examining the transformation of machismo culture in missional contexts and its implications for leadership and community development.',
    content: `This comprehensive analysis explores the transformation of machismo culture within missional contexts. By examining cultural patterns, biblical principles, and practical experiences, we uncover pathways for positive change in gender relations and leadership dynamics. The article provides practical insights for leaders and communities working towards healthy expressions of masculinity.`,
    coverImage: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800',
    category: 'Gender Studies',
    readTime: 12
  }
];