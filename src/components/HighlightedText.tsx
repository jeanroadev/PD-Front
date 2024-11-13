import React from 'react';

interface HighlightedTextProps {
text: string;
query: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ text, query }) => {
const parts = text.split(new RegExp(`(${query})`, 'gi'));

return (
<>
    {parts.map((part: string, index: number) => (
    <span
        key={index}
        className={part.toLowerCase() === query.toLowerCase() ? 'highlight' : ''}
    >
        {part}
    </span>
    ))}
</>
);
};

export default HighlightedText;
