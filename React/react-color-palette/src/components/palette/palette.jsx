const Palette = ({ children }) => {
  return (
    <div className="palette-generator">
      <ul className="palette-generator__list">{children}</ul>
    </div>
  );
};

export default Palette;
