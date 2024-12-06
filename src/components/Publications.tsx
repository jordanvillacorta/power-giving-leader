import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { publications } from '../data/publications';
import { PublicationCard } from './PublicationCard';

export const Publications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const filteredPublications = publications
    .filter(pub => 
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(pub => selectedType === 'all' || pub.type === selectedType)
    .filter(pub => selectedStatus === 'all' || pub.status === selectedStatus);

  return (
    <section className="min-h-screen bg-[#0B0B1F] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">
            <span className="text-[#F7EF40]">Publications</span> & Research
          </h2>
          <p className="text-gray-300 text-lg">
            Explore Dr. Villacorta's published works and upcoming publications on leadership, gender dynamics, and theological studies.
          </p>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search publications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#1A1A2E] border border-[#4A0E4E] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#8A4FFF] transition-colors"
              />
            </div>
            
            <div className="flex gap-4">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="pl-10 pr-8 py-2 bg-[#1A1A2E] border border-[#4A0E4E] rounded-lg text-white focus:outline-none focus:border-[#8A4FFF] transition-colors appearance-none"
                >
                  <option value="all">All Types</option>
                  <option value="book">Books</option>
                  <option value="article">Articles</option>
                  <option value="chapter">Book Chapters</option>
                </select>
              </div>
              
              <div className="relative">
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="pl-4 pr-8 py-2 bg-[#1A1A2E] border border-[#4A0E4E] rounded-lg text-white focus:outline-none focus:border-[#8A4FFF] transition-colors appearance-none"
                >
                  <option value="all">All Status</option>
                  <option value="published">Published</option>
                  <option value="in-process">In Process</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {filteredPublications.map((publication) => (
            <PublicationCard key={publication.id} publication={publication} />
          ))}
        </div>
      </div>
    </section>
  );
};