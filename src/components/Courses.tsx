import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { courses } from '../data/courses';
import { CourseCard } from './CourseCard';

export const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');

  const filteredCourses = courses.filter(course =>
    (course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     course.code.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedStatus === 'all' || course.status === selectedStatus) &&
    (selectedLanguage === 'all' || course.language === selectedLanguage || (!course.language && selectedLanguage === 'en'))
  );

  return (
    <section className="min-h-screen bg-[#0B0B1F] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">
            <span className="text-[#F7EF40]">Courses</span> at Fuller Seminary
          </h2>
          <p className="text-gray-300 text-lg">
            Explore my comprehensive selection of theological and leadership courses.
          </p>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#1A1A2E] border border-[#4A0E4E] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#8A4FFF] transition-colors"
              />
            </div>
            
            <div className="flex gap-4">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="pl-10 pr-8 py-2 bg-[#1A1A2E] border border-[#4A0E4E] rounded-lg text-white focus:outline-none focus:border-[#8A4FFF] transition-colors appearance-none"
                >
                  <option value="all">All Courses</option>
                  <option value="current">Current</option>
                  <option value="previous">Previously Taught</option>
                </select>
              </div>
              
              <div className="relative">
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="pl-4 pr-8 py-2 bg-[#1A1A2E] border border-[#4A0E4E] rounded-lg text-white focus:outline-none focus:border-[#8A4FFF] transition-colors appearance-none"
                >
                  <option value="all">All Languages</option>
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};