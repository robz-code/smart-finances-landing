import React from 'react';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function StepCard({ number, title, description, icon }: StepCardProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-white mb-6 shadow-lg">
        {icon}
      </div>
      <div className="absolute -top-2 -left-2 w-10 h-10 rounded-full bg-[#06B6D4] text-white flex items-center justify-center font-bold shadow-md">
        {number}
      </div>
      <h3 className="text-[#1F2937] mb-3 text-2xl font-semibold">{title}</h3>
      <p className="text-[#6B7280] text-base leading-relaxed max-w-xs">{description}</p>
    </div>
  );
}
