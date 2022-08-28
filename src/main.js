import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {ThemeContextProvider} from './themeContext';
import Header from './components/header';
import Home from './pages/home';
import Skills from './pages/skills';
import About from './pages/about';
import Contact from './pages/contact';

Main.displayName = 'MainPage';

export default function Main() {
	return (
    	<Router>
            <ThemeContextProvider>
                <div className='flex flex-col flex-1 h-full px-12 text-[#353534] dark:text-[#aaaaaa]'>
                    <Header></Header>
                    <main className='flex flex-col flex-1 px-4'>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/skills' component={Skills} />
                            <Route exact path='/about' component={About} />
                            <Route exact path='/contact' component={Contact} />
                        </Switch>
                    </main>
                </div>
            </ThemeContextProvider>
        </Router>
    );
}
