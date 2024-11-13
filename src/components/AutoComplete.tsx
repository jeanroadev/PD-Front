// src/components/AutoComplete.tsx
import React, { useState, useEffect } from 'react';
import Modal from './Modal';

interface AutoCompleteProps {
    placeholder?: string;
}

interface GameDetails {
    name: string;
    description: string;
    released: string;
    background_image: string;
}

interface Game {
    name: string;
    description: string;
    released: string;
    background_image: string;
}

const AutoComplete: React.FC<AutoCompleteProps> = ({
placeholder = 'Search for games...',
}) => {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState<Game[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedGame, setSelectedGame] = useState<GameDetails | null>(null);

    useEffect(() => {
        const fetchGames = async () => {
        if (!inputValue) {
            setSuggestions([]);
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch(
                `https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_API_KEY}&search=${inputValue}`
            );            
            const data = await response.json();
            setSuggestions(data.results);
        } catch (error) {
            console.error('Error fetching games:', error);
            console.log('API Key:', process.env.REACT_APP_RAWG_API_KEY);
        } finally {
            setIsLoading(false);
        }
        };

        const debounceTimer = setTimeout(fetchGames, 300);

        return () => clearTimeout(debounceTimer);
    }, [inputValue]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    // Función para manejar el clic en un juego
    const handleGameClick = (game: Game) => {
        setSelectedGame({
        name: game.name,
        description: game.description || 'No description available',
        released: game.released || 'Not available',
        background_image: game.background_image || '',
        });
    };

    return (
        <div className="autocomplete">
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder={placeholder}
            className="autocomplete-input"
        />
        {isLoading ? (
            <div className="loading">Loading...</div>
        ) : (
            <ul className="autocomplete-list">
            {suggestions.map((game, index) => (
                <li
                key={index}
                className="autocomplete-item"
                onClick={() => handleGameClick(game)} // Pasa el juego completo
                >
                {game.name}
                </li>
            ))}
            </ul>
        )}

        {/* Mostrar el modal si un juego está seleccionado */}
        {selectedGame && (
            <Modal gameDetails={selectedGame} onClose={() => setSelectedGame(null)} />
        )}
        </div>
    );
};

export default AutoComplete;
