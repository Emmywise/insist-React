import React from 'react';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
 
      <Router>
        <Switch>
          <Route exact path ="/Login" component={Login}></Route>
          <Route exact path ="/Register" component={()=> <Register authorized={false} /> } />
          <Route exact path ="/Dashboard" component={()=> <Dashboard authorized={true} /> } />
      
        </Switch>
    </Router> 
    </div>
  );
}

export default App;
