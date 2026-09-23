import React from 'react'
import assets from '../assets/assets'
type ThemeType = {
  theme: 'light' | 'dark',
  setTheme:(theme:string)=>void
}
export default function ThemeToggleBtn({theme,setTheme}:ThemeType) {
  return (
    <div>
      <button
        className="dark:bg-white shadow-sm p-2 rounded-full  cursor-pointer"
        onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
      >
        <img src={theme === 'dark' ? assets.sun_icon : assets.moon_icon} className="w-5" />
      </button>
    </div>
  );
}
