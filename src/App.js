import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Home from './users/Home';
import User from './users/User';

import GithubState from './context/github/githubState';
import AlertState from './context/alert/alertState';
import './App.css';

const App =()=> {

    return (
    <GithubState>
      <AlertState>
        <Router>
        <div className="App">
          <Navbar />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route  path='/user/:login' component={User} />    
              <Route  component={NotFound} />
            </Switch>          
          </div>    
        </div>
        </Router>
      </AlertState>
    </GithubState>
    );
  
}

export default App;
