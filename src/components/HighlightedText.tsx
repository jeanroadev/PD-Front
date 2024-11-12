const HighlightedText: React.FC<HighlightedTextProps> = ({ text, query }) => {
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return (
        <>
        {parts.map((part, index) => (
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
