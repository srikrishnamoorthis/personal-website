import React from "react";
import Menu from './menu';

export default function Header() {
   return (
      <header className="w-full px-8 pt-6">
         <nav className="flex align-center">
            <Menu></Menu>
            <div className="font-semibold ml-auto">Sri Krishnamoorthi.</div>
         </nav>
      </header>
   );
}