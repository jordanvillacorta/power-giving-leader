import React from 'react';
import { Course } from '../data/courses';

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
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-serif font-bold text-[#FFD700] mb-3">
          {course.title}
        </h3>
        <p className="text-gray-300">
          {course.description}
        </p>
      </div>
    </div>
  );
};