import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

export function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <div className="relative bg-white rounded-3xl p-12 shadow-xl border border-[#2563EB]/10 max-w-4xl mx-auto">
      <div className="absolute -top-6 left-12 w-12 h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-white shadow-lg">
        <Quote className="w-6 h-6" />
      </div>
      <blockquote className="text-[#1F2937] text-2xl font-medium leading-relaxed mb-6 italic">
        "{quote}"
      </blockquote>
      <p className="text-[#6B7280] text-lg">— {author}</p>
    </div>
  );
}
