

const Dot = ({ position }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: `${position.y * 20}px`,
        left: `${position.x * 20}px`,
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: 'white',
      }}
    />
  );
};

export default Dot;