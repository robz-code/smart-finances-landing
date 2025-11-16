import React from 'react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-white flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-[#1F2937] mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-[#6B7280] text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
