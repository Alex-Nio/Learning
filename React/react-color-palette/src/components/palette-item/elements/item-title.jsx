import React from 'react';

const ItemTitle = ({ accent, text }) => {
  return <h3 style={{ color: accent }}>{text}</h3>;
};

export default ItemTitle;
