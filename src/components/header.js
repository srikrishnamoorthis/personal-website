import React from "react";
import Menu from './menu';
import ThemeMenu from './themeMenu';

Header.displayName = 'Header';

export default function Header() {
    return (
        <header className="w-full pt-6">
            <nav className="flex align-center relative">
                <Menu></Menu>
                <ThemeMenu />
                {/* <div className="font-semibold pt-5 ml-4 text-[#353534] dark:text-[#aaaaaa]">Sri Krishnamoorthi.</div> */}
            </nav>
        </header>
    );
}