import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './styles/App.css';
import Map from './Routes/Map';
import ErrorPage from './Routes/Error404';
import Layers from './Routes/Layers';
import Workspace from './Routes/Workspace';
import Login from './Routes/Login';
import Index from './Routes/Index';
import Dashboard from './Routes/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Index} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/map' component={Map} />
        <Route exact path='/layers' component={Layers} />
        <Route exact path='/workspace' component={Workspace} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
