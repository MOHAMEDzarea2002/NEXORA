import React, { useRef, useState } from 'react';

type CardProps = {
  title: string;
  subTitle: string;
  icon: string;
};

export default function ServicesCard({ icon, subTitle, title }: CardProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [Visible, setVisible] = useState(false);

  const divRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = divRef.current?.getBoundingClientRect();
if (!bounds) return
  setPosition({
    x: e.clientX - bounds.left,
    y: e.clientY - bounds.top,
  });
  };
  return (
    <div
      className={`
      max-w-lg border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10
      rounded-lg relative overflow-hidden  `}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
      ref={divRef}
    >
      <div
        className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten  ${Visible ? 'opacity-70' : 'opacity-0'}`}
        style={{
          top: position.y - 150,
          left: position.x - 150,
        }}
      />

      <div
        className="flex items-center gap-10  p-6  hover:m-0.5
    transition-all  bg-white dark:bg-gray-900 relative  z-10 h-full dark:text-white"
      >
        {/* Icons */}
        <div className="bg-gray-100 dark:bg-gray-700 rounded-full ">
          <img src={icon} className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2" />
        </div>
        {/*  Service Description */}
        <div className="flex-1">
          <h3 className="text-2xl">{title}</h3>
          <p className="text-gray-700 ">{subTitle}</p>
        </div>
      </div>
    </div>
  );
}
