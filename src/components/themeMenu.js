import React from 'react';
import {useTheme} from '../themeContext';
import {ImSun} from 'react-icons/im';
import {FaMoon} from 'react-icons/fa';

ThemeMenu.propTypes = {};
ThemeMenu.displayName = 'ThemeMenu';

function ThemeMenu() {
    const [theme, setTheme] = useTheme();
    const isDarkTheme = theme === 'dark';
    const title = `Switch to ${isDarkTheme ? 'light' : 'dark'}`;

    const toggleTheme = () => {
        setTheme(isDarkTheme ? 'light' : 'dark');
    }

    return (
        <div className='ml-auto pt-4 text-black dark:text-white' title={title}
            onClick={toggleTheme}>
            {isDarkTheme ? 
                <ImSun className='h-6 w-6'/>
                : <FaMoon className='h-6 w-6' />
            }
        </div>
    );
}

export default ThemeMenu;