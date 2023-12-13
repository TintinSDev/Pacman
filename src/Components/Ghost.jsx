

const Ghost = ({ position }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: `${position.y * 20}px`,
        left: `${position.x * 20}px`,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'red',
      }}
    />
  );
};

export default Ghost;