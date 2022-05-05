import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {ThemeContextProvider} from './themeContext';
import Header from './components/header';
import Home from './pages/home';
import About from './pages/about';

Main.displayName = 'MainPage';

export default function Main() {
	return (
    	<Router>
            <ThemeContextProvider>
                <div className='flex flex-col flex-1 h-full'>
                    <Header></Header>
                    <main className='flex flex-col flex-1'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                    </Switch>
                    </main>
                </div>
            </ThemeContextProvider>
        </Router>
    );
}
