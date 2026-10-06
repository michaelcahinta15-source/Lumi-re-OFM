'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

export default function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="faq-question"
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${index}`}
      >
        <span>{question}</span>
        <span className="faq-icon" aria-hidden="true">
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </span>
      </button>
      <div
        className="faq-answer"
        id={`faq-panel-${index}`}
        hidden={!isOpen}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}
