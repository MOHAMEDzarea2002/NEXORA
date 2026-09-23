import React from 'react'
type containerTypeProps = {
  children:React.ReactNode,
  className?:string
};
export default function Container({children,className=""}:containerTypeProps) {
  return <div className={`mx-auto max-w-7xl px-4 ${className}`}>{children}</div>;
}
