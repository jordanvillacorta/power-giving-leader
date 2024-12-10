import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { blogPosts } from '../../data/blog';
import { BlogCard } from './BlogCard';

export const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts
    .filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(post => selectedCategory === 'all' || post.category === selectedCategory);

  return (
    <section className="min-h-screen bg-[#0B0B1F] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">
            <span className="text-[#F7EF40]">Blog</span> & Articles
          </h2>
          <p className="text-gray-300 text-lg">
            Explore Dr. Villacorta's insights on leadership, spirituality, and cultural dynamics.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#1A1A2E] border border-[#4A0E4E] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#8A4FFF] transition-colors"
              />
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-2 bg-[#1A1A2E] border border-[#4A0E4E] rounded-lg text-white focus:outline-none focus:border-[#8A4FFF] transition-colors appearance-none"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};