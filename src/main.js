import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';

export default function Main() {
   return (
      <Router>
         <div className='flex flex-col h-full'>
            <Header></Header>
            <main className='flex flex-col flex-1'>
               <Switch>
                  <Route exact path='/' component={Home}/>
               </Switch>
            </main>
         </div>
      </Router>
   );
}
