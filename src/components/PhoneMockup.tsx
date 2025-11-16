import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PhoneMockupProps {
  imageUrl: string;
  alt: string;
  className?: string;
}

export function PhoneMockup({ imageUrl, alt, className = '' }: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Phone frame */}
      <div className="relative w-[320px] h-[650px] mx-auto">
        {/* Phone shell */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl p-3">
          {/* Screen */}
          <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-10"></div>
            {/* Screen content */}
            <ImageWithFallback 
              src={imageUrl} 
              alt={alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Volume buttons */}
        <div className="absolute left-0 top-32 w-1 h-12 bg-gray-700 rounded-r"></div>
        <div className="absolute left-0 top-48 w-1 h-12 bg-gray-700 rounded-r"></div>
        {/* Power button */}
        <div className="absolute right-0 top-40 w-1 h-16 bg-gray-700 rounded-l"></div>
      </div>
    </div>
  );
}
