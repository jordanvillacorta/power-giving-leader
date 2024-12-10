import React from 'react';

// Type definition for book links
type BookLinkProps = {
  href: string;
  label: string;
  className?: string;
};

// Reusable BookLink component
const BookLink: React.FC<BookLinkProps> = ({ href, label, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-block 
        transition-all 
        duration-300 
        ease-in-out 
        transform 
        hover:scale-105 
        hover:shadow-lg
        ${className}
      `}
    >
      <div
        className="
        flex 
        items-center 
        space-x-3 
        p-2 
        bg-[#663399] 
        rounded-lg 
        hover:bg-[#2D7F4E] 
        mt-4
      "
      >
        <span
          className="
          text-[#E8E8E8] 
          font-semibold 
          group-hover:text-[#F7EF40]
        "
        >
          {label}
        </span>
      </div>
    </a>
  );
};

// Component using the reusable BookLink
const BookPurchaseLinks: React.FC = () => {
  const bookLinks = [
    {
      href: 'https://wipfandstock.com/9781532652349/unmasking-the-male-soul/',
      label: 'Wipf',
      className: '', // Default styling
    },
    {
      href: 'https://bookshop.org/p/books/unmasking-the-male-soul-power-and-gender-trap-for-women-in-leadership-wilmer-g-villacorta/13207113?ean=9781532652349',
      label: 'Bookshop.org',
      className: 'ml-4', // Add left margin
    },
    {
      href: 'https://www.amazon.com/s?k=9781532652349&tag=wipfandstoc01-20',
      label: 'Amazon',
      className: 'ml-4', // Add left margin
    },
  ];

  return (
    <div className="flex">
      {bookLinks.map((link, index) => (
        <BookLink
          key={index}
          href={link.href}
          label={link.label}
          className={link.className}
        />
      ))}
    </div>
  );
};

export default BookPurchaseLinks;
