import { useEffect } from 'react';
import assets from '../assets/assets';
type ThemeType = {
  theme: 'light' | 'dark';
  setTheme: (theme: string) => void;
};
export default function ThemeToggleBtn({ theme, setTheme }: ThemeType) {

  useEffect(()=>{
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches
    setTheme(theme || (prefersDarkMode ? 'dark' : 'light'))
  },[])
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <div>
      <button
        className="shadow-sm p-2 rounded-full  cursor-pointer"
        onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
      >
        <img src={theme === 'dark' ? assets.sun_icon : assets.moon_icon} className="w-5" />
      </button>
    </div>
  );
}
