
import React from 'react';

interface Quote {
  text: string;
  author: string;
}

export default function Quotes() {
  const quotes: Quote[] = [
    {
      text: "Luck is what happens when preparation meets opportunity.",
      author: "Seneca"
    },
    {
      text: "Fortune favors the bold.",
      author: "Virgil"
    },
    {
      text: "The best luck of all is the luck you make for yourself.",
      author: "Douglas MacArthur"
    }
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="mt-6 text-center">
      <blockquote className="italic text-gray-400">
        "{randomQuote.text}"
      </blockquote>
      <p className="text-sm text-gray-500 mt-1">— {randomQuote.author}</p>
    </div>
  );
}
