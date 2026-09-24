import { useState } from 'react';
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';

type Theme = 'light' | 'dark';

function App() {

  const [theme, setTheme] = useState<Theme>(localStorage.getItem('theme') as Theme );

  const handleThemeChange = (nextTheme: string) => {
    setTheme(nextTheme as Theme);
  };

  return (
    <div className="dark:bg-black">
      <Navbar theme={theme} setTheme={handleThemeChange} />
      <HeroSection/>
    </div>
  );
}

export default App;
