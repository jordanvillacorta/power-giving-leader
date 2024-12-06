import React from 'react';
import { Course } from '../data/courses';
import { BookOpen, Globe2, Clock } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="flex flex-col bg-[#0B0B1F] rounded-xl overflow-hidden border border-[#4A0E4E] hover:border-[#8A4FFF] transition-all duration-300 h-full">
      <div className="relative h-48">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#4A0E4E] text-white">
            {course.code}
          </span>
        </div>
        {course.language && (
          <div className="absolute top-4 right-4 bg-[#2D7F4E] px-3 py-1 rounded-full flex items-center">
            <Globe2 className="h-4 w-4 text-[#FFD700] mr-1" />
            <span className="text-white text-sm uppercase">{course.language}</span>
          </div>
        )}
        {course.status === 'previous' && (
          <div className="absolute bottom-4 right-4 bg-[#663399] px-3 py-1 rounded-full flex items-center">
            <Clock className="h-4 w-4 text-[#FFD700] mr-1" />
            <span className="text-white text-sm">Previously Taught</span>
          </div>
        )}
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-serif font-bold text-[#FFD700] mb-3">
          {course.title}
        </h3>
        <p className="text-gray-300 mb-4 flex-grow">
          {course.description}
        </p>
        {course.program && (
          <div className="flex items-center text-[#8A4FFF] mt-auto">
            <BookOpen className="h-4 w-4 mr-2" />
            <span className="text-sm">{course.program}</span>
          </div>
        )}
      </div>
    </div>
  );
};