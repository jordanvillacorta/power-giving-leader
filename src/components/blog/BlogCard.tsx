import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Tag } from 'lucide-react';
import { BlogPost } from '../../data/blog';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="bg-[#0B0B1F] border border-[#4A0E4E] rounded-xl overflow-hidden hover:border-[#8A4FFF] transition-all duration-300">
      <Link to={`/blog/${post.id}`}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-[#663399] text-white rounded-full text-sm">
              {post.category}
            </span>
          </div>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center text-sm text-gray-400 mb-3">
          <Clock className="w-4 h-4 mr-1" />
          <span>{post.readTime} min read</span>
          <span className="mx-2">•</span>
          <Tag className="w-4 h-4 mr-1" />
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>

        <Link to={`/blog/${post.id}`}>
          <h3 className="text-xl font-serif font-bold text-[#F7EF40] mb-3 hover:text-[#8A4FFF] transition-colors">
            {post.title}
          </h3>
        </Link>

        <p className="text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <Link
          to={`/blog/${post.id}`}
          className="inline-flex items-center text-[#8A4FFF] hover:text-[#F7EF40] transition-colors"
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
        </Link>
      </div>
    </article>
  );
};