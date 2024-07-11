// src/components/TruncatedText.tsx

import React, { useState } from 'react';

interface TruncatedTextProps {
  text: string;
  maxLength: number;
}

const TruncatedText: React.FC<TruncatedTextProps> = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncation = () => {
    setIsTruncated(!isTruncated);
  };

  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }

  return (
    <span>
      {isTruncated ? `${text.slice(0, maxLength)}...` : text}
      <button
        onClick={toggleTruncation}
        className="text-blue-500 ml-1"
      >
        {isTruncated ? 'Show more' : 'Show less'}
      </button>
    </span>
  );
};

export default TruncatedText;
