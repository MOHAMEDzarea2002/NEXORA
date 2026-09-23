import { useState } from 'react';
// data
import assets from '../assets/assets.ts';
// components
import Container from './Container.tsx';
import ThemeToggleBtn from './ThemeToggleBtn.tsx';

type themeTypeProps = {
  theme: 'light' | 'dark';
  setTheme: (theme: string) => void;
};
const links = [
  { href: '/', title: 'home' },
  { href: 'services', title: 'services' },
  { href: 'our-work', title: 'our work' },
  { href: 'testimonial', title: 'testimonial' },
];
export default function Navbar({ theme, setTheme }: themeTypeProps) {
  const [SidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70 py-4">
      <Container>
        <div className=" flex justify-between items-center">
          {/* image Logo */}
          <img
            src={theme == 'dark' ? assets.logo_dark : assets.logo}
            className="w-32 sm:w-40"
            alt="logo"
          />
          {/* Links Navbar */}
          <div>
            <ul
              className={`
                text-gray-700 dark:text-white max-sm:text-white sm:text-sm md:text-lg flex max-sm:flex-col  sm:items-center gap-2.5
                ${!SidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 '}
            max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:pt-28 transition-all  max-sm:bg-primary`}
            >
              <img
                src={assets.close_icon}
                width={14}
                className="absolute top-6 right-4 sm:hidden cursor-pointer"
                onClick={() => setSidebarOpen(false)}
              />
              {links.map((link) => (
                <li key={`#${link.title}`} className=" sm:hover:border-b-2">
                  <a className="w-full max-sm:block  max-sm:p-2 max-sm:border-b-2" href={link.href}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Theme & Connect */}
          <div className="flex items-center gap-1.5">
            <img
              src={theme == 'dark' ? assets.menu_icon_dark : assets.menu_icon}
              width={30}
              className="hidden max-sm:block cursor-pointer"
              onClick={() => setSidebarOpen(true)}
            />
            {/* <ThemeToggleBtr/> */}
            <ThemeToggleBtn theme={theme} setTheme={setTheme}/>
            <a
              className=" text-sm max-sm:hidden  text-white rounded-2xl px-6 bg-primary py-2 flex items-center gap-1.5
            cursor-pointer hover:scale-105 transition-all
            "
            >
              Connect <img src={assets.arrow_icon} width={14} alt="icon-connect" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
