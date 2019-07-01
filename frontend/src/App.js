import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './styles/App.css';
import Dashboard from './Routes/Dashboard';
import Map from './Routes/Map';
import ErrorPage from './Routes/Error404';
import Layers from './Routes/Layers';
import Workspace from './Routes/Workspace';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/map' component={Map} />
        <Route exact path='/layers' component={Layers} />
        <Route exact path='/workspace' component={Workspace} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
