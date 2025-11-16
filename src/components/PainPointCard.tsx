import React from 'react';

interface PainPointCardProps {
  icon: React.ReactNode;
  text: string;
}

export function PainPointCard({ icon, text }: PainPointCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#2563EB]">
          {icon}
        </div>
        <p className="text-[#1F2937] text-lg leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
