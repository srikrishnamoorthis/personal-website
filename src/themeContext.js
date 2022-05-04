import React, {createContext, useContext, useState, useEffect} from 'react';

const ThemeContext = createContext();

ThemeContextProvider.displayName = 'ThemeContextProvider';

export function ThemeContextProvider({children}) {
    const [theme, setTheme] = useState(getDefaultTheme());

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    const changeTheme = (theme) => {
        localStorage.theme = theme;
        setTheme(theme);
    }

    return (
        <ThemeContext.Provider value={[theme, changeTheme]}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw 'useTheme must be used within ThemeContextProvider';
    }
    return context;
}

function getDefaultTheme() {
    if (localStorage.theme === 'light' || (!('theme' in localStorage)) && window.matchMedia('(prefers-color-scheme: light)').matches)
        return 'light';
    return 'dark';
}