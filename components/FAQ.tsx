"use client";

import { useState } from "react";
import type { FAQItem } from "@/data/homestay-faq";

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            className="w-full px-5 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-medium text-gray-900 pr-4">{item.question}</span>
            <svg
              className={`w-5 h-5 text-gray-500 shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="px-5 py-4 bg-gray-50 text-gray-700 leading-relaxed border-t border-gray-200 whitespace-pre-line">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
