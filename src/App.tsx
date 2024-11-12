// src/App.tsx
import React from 'react';
import AutoComplete from './components/AutoComplete';

const App: React.FC = () => {
  // Lista de sugerencias de ejemplo
  const suggestions = [
    "Assassin's Creed", "Apex Legends",
    "Bioshock", "Bloodborne",
    "Call of Duty", "Celeste",
    "Dark Souls", "Doom",
    "Elden Ring", "EVE Online",
    "Fallout", "Fortnite",
    "God of War", "Grand Theft Auto V",
    "Hades", "Hollow Knight",
    "Inside", "It Takes Two",
    "Journey", "Just Cause",
    "Kingdom Hearts", "Kerbal Space Program",
    "League of Legends", "Life is Strange",
    "Minecraft", "Monster Hunter",
    "NieR: Automata", "No Man's Sky",
    "Overwatch", "Outlast",
    "Portal", "Persona 5",
    "Quake", "Quantum Break",
    "Red Dead Redemption", "Rocket League",
    "Sekiro: Shadows Die Twice", "Skyrim",
    "The Last of Us", "Terraria",
    "Undertale", "Uncharted",
    "Valorant", "Vampyr",
    "Warframe", "World of Warcraft",
    "Xenoblade Chronicles", "XCOM 2",
    "Yakuza", "Yooka-Laylee",
    "Zelda: Breath of the Wild", "ZombiU"
  ];

  return (
    <div className="App">
      <h1>AutoComplete Component</h1>
      <AutoComplete suggestions={suggestions} />
    </div>
  );
};

export default App;
