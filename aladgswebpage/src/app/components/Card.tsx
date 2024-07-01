import React from 'react';
import Image from 'next/image';

interface CardProps {
    imageFile: string;
    description: string;
}

const Card: React.FC<CardProps> = ({imageFile, description}) => {
  return (
    <div className='flex flex-col bg-white w-72 h-80 shadow-md rounded-lg p-4'>
      {/* Image */}
      <div className='relative h-24 w-full'>
        <Image 
          src={imageFile} 
          alt="Card Image" 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'contain' }}
        />
      </div>
      {/* Description */}
      <div className='flex items-center justify-center h-48 p-4 overflow-hidden'>
        <p className='text-center'>{description}</p>
      </div>
    </div>
  );
};

export default Card;
