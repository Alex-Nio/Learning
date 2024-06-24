import React, { useState, useEffect, useCallback } from 'react';
import chroma from 'chroma-js';

import Palette from './components/palette/palette';
import PaletteItem from './components/palette-item/palette-item';
import ItemTitle from './components/palette-item/elements/item-title';
import ItemAction from './components/palette-item/elements/item-action';
import LockButton from './components/UI/lock-button';

const setAccentColor = (color) => {
  const luminance = chroma(color).luminance();
  return luminance > 0.5 ? 'black' : 'white';
};

const getColorsFromHash = () => {
  if (document.location.hash.length > 1) {
    return document.location.hash
      .substring(1)
      .split('-')
      .map((color) => `#${color}`);
  }
  return [];
};

const updateColorsHash = (colors = []) => {
  document.location.hash = colors
    .map((col) => '#' + col.substring(1))
    .join('-');
};

const generateRandomColor = () => {
  const hexCodes = '0123456789ABCDEF';
  let color = '';

  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }

  return '#' + color;
};

const getPalette = (count) => {
  const colors = [];

  for (let i = 0; i < count; i++) {
    colors.push({
      hex: generateRandomColor(),
      isLocked: false,
    });
  }

  return colors;
};

const App = () => {
  const [colors, setColors] = useState(getPalette(6));
  const [copiedIndex, setCopiedIndex] = useState(null);

  const setRandomColors = useCallback(
    (isInitial = false) => {
      let newColors = isInitial ? getColorsFromHash() : [];

      const updatedColors = colors.map((color, index) => {
        const isLocked = color.isLocked;

        if (isLocked) {
          newColors.push(color.hex);
          return color;
        }

        const newColor = isInitial
          ? newColors[index]
            ? newColors[index]
            : chroma.random().hex()
          : chroma.random().hex();

        if (!isInitial) {
          newColors.push(newColor);
        }

        return { hex: newColor, isLocked };
      });

      setColors(updatedColors);
      updateColorsHash(newColors);
    },
    [colors]
  );

  const toggleLock = (e, index) => {
    e.stopPropagation();
    setColors(
      colors.map((color, i) =>
        i === index ? { ...color, isLocked: !color.isLocked } : color
      )
    );
  };

  const copyColor = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);

      setTimeout(() => {
        setCopiedIndex(null);
      }, 5000);
    });
  };

  useEffect(() => {
    const keydownHandler = (e) => {
      if (e.code.toLowerCase() === 'space') {
        e.preventDefault();
        setRandomColors();
      }
    };

    document.addEventListener('keydown', keydownHandler);

    return () => {
      document.removeEventListener('keydown', keydownHandler);
    };
  }, [setRandomColors]);

  return (
    <div className="app">
      <Palette>
        {colors.map((color, index) => (
          <PaletteItem
            handler={() => copyColor(color.hex, index)}
            color={color.hex}
            key={color.hex}
          >
            <ItemTitle accent={setAccentColor(color.hex)} text={color.hex} />
            <ItemAction
              accent={setAccentColor(color.hex)}
              text={copiedIndex === index ? 'copied' : 'copy'}
            />
            <LockButton
              accent={setAccentColor(color.hex)}
              state={color.isLocked}
              handler={(e) => toggleLock(e, index)}
            />
          </PaletteItem>
        ))}
      </Palette>
    </div>
  );
};

export default App;
