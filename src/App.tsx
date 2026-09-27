import { useState } from 'react';
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import TrustedBy from './component/TrustedBy';
import Services from './component/Services';
import LastWork from './component/LastWork';
import TheTeam from './component/TheTeam';
import ContactUs from './component/ContactUs';
import { Toaster } from 'react-hot-toast';

type Theme = 'light' | 'dark';

function App() {
  const [theme, setTheme] = useState<Theme>(localStorage.getItem('theme') as Theme);

  const handleThemeChange = (nextTheme: string) => {
    setTheme(nextTheme as Theme);
  };

  return (
    <div className="dark:bg-black">
      <Toaster />
      
      <Navbar theme={theme} setTheme={handleThemeChange} />
      <HeroSection />
      <TrustedBy />
      <Services />
      <LastWork />
      <TheTeam />
      <ContactUs />
    </div>
  );
}

export default App;
