// src/components/Modal.tsx
import React from 'react';
import '../styles/modal.css'

interface ModalProps {
    gameDetails: {
        name: string;
        description: string;
        released: string;
        background_image: string;
    } | null;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ gameDetails, onClose }) => {
  if (!gameDetails) return null; // Si no hay detalles del juego, no renderizar el modal.

return (
    <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={onClose}>X</button>
            <h2>{gameDetails.name}</h2>
            <img src={gameDetails.background_image} alt={gameDetails.name} />
            <p>{gameDetails.description}</p>
            <p><strong>Released:</strong> {gameDetails.released}</p>
        </div>
    </div>
);
};

export default Modal;
