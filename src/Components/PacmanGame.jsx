import  { useState, useEffect } from 'react';
import Pacman from './Pacman';
import Ghost from './Ghost';
import Dot from './Dot';

const PacmanGame = () => {
  const [pacmanPosition, setPacmanPosition] = useState({ x: 5, y: 5 });
  const [ghostPosition, setGhostPosition] = useState({ x: 10, y: 10 });
  const [dots, setDots] = useState(generateDots());

  useEffect(() => {
    const handleKeyPress = (e) => {
      // Update pacman position based on arrow key press
      switch (e.key) {
        case 'ArrowUp':
          setPacmanPosition((prev) => ({ ...prev, y: prev.y - 1 }));
          break;
        case 'ArrowDown':
          setPacmanPosition((prev) => ({ ...prev, y: prev.y + 1 }));
          break;
        case 'ArrowLeft':
          setPacmanPosition((prev) => ({ ...prev, x: prev.x - 1 }));
          break;
        case 'ArrowRight':
          setPacmanPosition((prev) => ({ ...prev, x: prev.x + 1 }));
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);

   
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (pacmanPosition.x === ghostPosition.x && pacmanPosition.y === ghostPosition.y) {
      setGhostPosition({ x: Math.floor(Math.random() * 15), y: Math.floor(Math.random() * 15) });
      setPacmanPosition({ x: Math.floor(Math.random() * 15), y: Math.floor(Math.random() * 15) });
      setDots(generateDots());
      return;
      
    }
    const updatedDots = dots.filter(
      (dot) => dot.x !== pacmanPosition.x || dot.y !== pacmanPosition.y
    );
    setDots(updatedDots);
  }, []);

  return (
    <div>
      
      <div style={{ position: 'relative', width: '300px', height: '300px', border: '1px solid black' }}>
        
        <Pacman position={pacmanPosition} />

        <Ghost position={ghostPosition} />

      
        {dots.map((dot, index) => (
          <Dot key={index} position={dot} />
        ))}
      </div>
    </div>
  );
};

const generateDots = () => {
  const dots = [];
  for (let i = 0; i < 10; i++) {
    dots.push({ x: Math.floor(Math.random() * 15), y: Math.floor(Math.random() * 15) });
  }
  return dots;
};

export default PacmanGame;
