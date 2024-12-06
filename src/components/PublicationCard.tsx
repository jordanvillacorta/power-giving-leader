import React from 'react';
import { Book, FileText, BookOpen, Clock } from 'lucide-react';
import { Publication } from '../data/publications';

interface PublicationCardProps {
  publication: Publication;
}

export const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
  const TypeIcon = {
    book: Book,
    article: FileText,
    chapter: BookOpen
  }[publication.type];

  return (
    <div className="flex flex-col md:flex-row bg-[#0B0B1F] rounded-xl overflow-hidden border border-[#4A0E4E] hover:border-[#8A4FFF] transition-all duration-300">
      <div className="md:w-1/3 h-48 md:h-auto relative">
        <img
          src={publication.coverImage}
          alt={publication.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-[#4A0E4E] p-2 rounded-full">
          <TypeIcon className="h-5 w-5 text-[#FFD700]" />
        </div>
        {publication.status === 'in-process' && (
          <div className="absolute top-4 right-4 bg-[#2D7F4E] px-3 py-1 rounded-full flex items-center">
            <Clock className="h-4 w-4 text-[#FFD700] mr-1" />
            <span className="text-white text-sm">In Process</span>
          </div>
        )}
      </div>
      
      <div className="md:w-2/3 p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif font-bold text-[#FFD700]">
            {publication.title}
          </h3>
          <span className="text-[#8A4FFF] font-medium ml-4">
            {publication.year}
          </span>
        </div>
        
        <p className="text-gray-400 text-sm mb-4">
          {publication.publisher}
        </p>
        
        <p className="text-gray-300">
          {publication.description}
        </p>
        
        {publication.link && (
          <a
            href={publication.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 text-[#8A4FFF] hover:text-[#F7EF40] transition-colors"
          >
            Read More
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};