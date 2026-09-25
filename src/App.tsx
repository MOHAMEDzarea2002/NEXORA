import { useState } from 'react';
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import TrustedBy from './component/TrustedBy';
import Services from './component/Services';
import LastWork from './component/LastWork';

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
      <TrustedBy/>
      <Services/>
      <LastWork/>
    </div>
  );
}

export default App;
