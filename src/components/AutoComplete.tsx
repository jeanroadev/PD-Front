import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import '../styles/autocomplete.css';
import '../styles/spinner.css';

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
  id: number; // Agrega el ID para realizar la segunda llamada
  name: string;
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
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchGames, 300);

    return () => clearTimeout(debounceTimer);
  }, [inputValue]);

  const fetchGameDetails = async (id: number) => {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games/${id}?key=${process.env.REACT_APP_RAWG_API_KEY}`
      );
      const data = await response.json();
      setSelectedGame({
        name: data.name,
        description: data.description || 'No description available',
        released: data.released || 'Not available',
        background_image: data.background_image || '',
      });
    } catch (error) {
      console.error('Error fetching game details:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleGameClick = (game: Game) => {
    fetchGameDetails(game.id); // Llama a la función para obtener detalles
  };

  return (
    <div className="autoComplete">
      <h1>Game Search...</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="autocomplete-input"
      />
      {isLoading ? (
        <div className="spinner"></div>
      ) : (
        <ul className="autocomplete-list">
          {suggestions.map((game, index) => (
            <li
              key={index}
              className="autocomplete-item"
              onClick={() => handleGameClick(game)}
            >
              {game.name}
            </li>
          ))}
        </ul>
      )}
      {selectedGame && (
        <Modal gameDetails={selectedGame} onClose={() => setSelectedGame(null)} />
      )}
      <h4>
        Made by{' '}
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noreferrer"
        >
          Jean Roa
        </a>
      </h4>
    </div>
  );
};

export default AutoComplete;
