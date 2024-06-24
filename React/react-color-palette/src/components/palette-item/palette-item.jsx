import React from 'react';

const PaletteItem = ({ children, handler, color }) => {
  return (
    <div
      className="col"
      onClick={handler}
      style={{ background: color }}
      key={color}
    >
      {children}
    </div>
  );
};

export default PaletteItem;
