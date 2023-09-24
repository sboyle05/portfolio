import React from 'react';
import { useTheme } from './themeProvider';

function MyComponent() {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>Toggle Theme</button>
  );
}

export default MyComponent;
