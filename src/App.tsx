import { useState } from 'react';
import Navbar from './component/Navbar';

type Theme = 'light' | 'dark';

function App() {
  const [theme, setTheme] = useState<Theme>('light');

  const handleThemeChange = (nextTheme: string) => {
    setTheme(nextTheme as Theme);
  };

  return (
    <div className="dark:bg-black">
      <Navbar theme={theme} setTheme={handleThemeChange} />
    </div>
  );
}

export default App;
