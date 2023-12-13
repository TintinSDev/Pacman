

function Pacman  ({ position })  {
  return (
    <div
      style={{
        position: 'absolute',
        top: `${position.y * 20}px`,
        left: `${position.x * 20}px`,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'yellow',
        clipPath: 'polygon(0% 0%, 100% 0%, 50% 50%, 100% 100%, 0% 100%)',
      }}
    />
  );
};

export default Pacman;