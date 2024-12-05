import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { courses } from '../data/courses';
import { CourseCard } from './CourseCard';

export const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-[#0B0B1F] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">
            <span className="text-[#F7EF40]">Courses</span> Taught
          </h2>
          <p className="text-gray-300 text-lg">
            Explore our comprehensive selection of theological and leadership courses.
          </p>
          
          <div className="mt-6 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#1A1A2E] border border-[#4A0E4E] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#8A4FFF] transition-colors"
              />
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