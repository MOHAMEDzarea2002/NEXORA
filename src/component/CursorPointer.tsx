import { useEffect, useRef } from 'react';

export default function CursorPointer() {

    const outlineRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);

    const mouse = useRef({ x: 0, y: 0 });
    const position = useRef({ x: 0, y: 0 });

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
          dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px,0)`;
          outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px,0)`;
        }
        requestAnimationFrame(animate);
      };
      animate();
      return () => document.removeEventListener('mousemove', handleCursor);
    }, []);

  return (
    <div>

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
