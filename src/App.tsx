import { useEffect, useRef, useState, type ReactElement } from 'react';
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import TrustedBy from './component/TrustedBy';
import Services from './component/Services';
import LastWork from './component/LastWork';
import TheTeam from './component/TheTeam';
import ContactUs from './component/ContactUs';
import { Toaster } from 'react-hot-toast';
import Footer from './component/Footer';

type Theme = 'light' | 'dark';

function App() {
  const [theme, setTheme] = useState<Theme>(localStorage.getItem('theme') as Theme);

  const handleThemeChange = (nextTheme: string) => {
    setTheme(nextTheme as Theme);
  };
  const outlineRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  console.log(mouse.current);
  useEffect(() => {
    const handleCursor = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    document.addEventListener('mousemove', handleCursor);
    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.05;
      position.current.y += (mouse.current.y - position.current.y) * 0.05;

      if (outlineRef.current && dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y }px,0)`;
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px,0)`;
      }
      requestAnimationFrame(animate);
    };
    animate();
    return () => document.removeEventListener('mousemove', handleCursor);
  }, []);

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
      <Footer />
      {/* Cursor Ring */}
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 h-10 w-10  rounded-full pointer-events-none border border-gray-400  z-[9999]"
      ></div>
      {/* Cursor Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-3 w-3  rounded-full bg-primary pointer-events-none  z-[9999]"
      ></div>
    </div>
  );
}

export default App;
