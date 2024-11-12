    // src/components/AutoComplete.tsx
    import React, { useState, useEffect } from 'react';

    interface AutoCompleteProps {
    suggestions: string[];
    }

    const AutoComplete: React.FC<AutoCompleteProps> = ({ suggestions }) => {
    const [inputValue, setInputValue] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    useEffect(() => {
    if (inputValue) {
        // Simular una búsqueda asíncrona
        const timeoutId = setTimeout(() => {
        const filtered = suggestions.filter((suggestion) =>
            suggestion.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredSuggestions(filtered);
        }, 300); // Simular un retraso

        return () => clearTimeout(timeoutId);
    } else {
        setFilteredSuggestions([]);
    }
    }, [inputValue, suggestions]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setHighlightedIndex(-1);
    };

    return (
    <div className="autocomplete">
        <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="autocomplete-input"
        />
        {filteredSuggestions.length > 0 && (
        <ul className="autocomplete-list">
            {filteredSuggestions.map((suggestion, index) => (
            <li
                key={suggestion}
                className={`autocomplete-item ${
                index === highlightedIndex ? 'highlighted' : ''
                }`}
            >
                {suggestion}
            </li>
            ))}
        </ul>
        )}
    </div>
    );
    };

    export default AutoComplete;
