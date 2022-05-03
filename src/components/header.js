import React from "react";
import Menu from './menu';

export default function Header() {
   return (
      <header className="w-full px-8 pt-6">
         <nav className="flex align-center relative">
            <Menu></Menu>
            <div className="font-semibold ml-auto pt-5 text-white">Sri Krishnamoorthi.</div>
         </nav>
      </header>
   );
}