import React from 'react';

const Loading = () => {
  return (
    <div className="loading-container">
      {/* Coffee Emoji Animation */}
      <div className="coffee-emoji" role="img" aria-label="coffee">
        ☕️
      </div>
      <p className="loading-text">Cargando...</p>
    </div>
  );
};

export default Loading;

