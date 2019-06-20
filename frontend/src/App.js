import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from './assets/logo.svg';
import './styles/App.css';
import Dashboard from './components/Dashboard';
import {WMSContainer} from './components/Map';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/view' component={WMSContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
