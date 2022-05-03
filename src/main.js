import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {ThemeContextProvider} from './themeContext';
import Header from './components/header';
import Home from './pages/home';

Main.displayName = 'MainPage';

export default function Main() {
	return (
    	<Router>
            <ThemeContextProvider>
                <div className='flex flex-col flex-1 h-full'>
                    <Header></Header>
                    <main className='flex flex-col flex-1'>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                    </Switch>
                    </main>
                </div>
            </ThemeContextProvider>
        </Router>
    );
}
