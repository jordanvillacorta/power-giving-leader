import React from 'react';

// Interface defines the expected props for type safety
interface ProfileImageProps {
  username: string;
  repo: string;
  imagePath: string;
  alt?: string;
  className?: string;
}

// Component uses TypeScript to ensure type checking and provide intellisense
const ProfileImage: React.FC<ProfileImageProps> = ({
  username,
  repo,
  imagePath,
  alt = 'Profile Image',
  className = 'w-64 h-64 object-cover',
}) => {
  // Construct the GitHub raw content URL
  const imageUrl = `https://raw.githubusercontent.com/${username}/${repo}/master/${imagePath}`;

  return <img src={imageUrl} alt={alt} className={className} />;
};

export default ProfileImage;
