import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './styles/App.css';
import Dashboard from './Routes/Dashboard';
import Map from './Routes/Map';
import ErrorPage from './Routes/Error404';
import Layers from './Routes/Layers';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/map' component={Map} />
        <Route exact path='/layers' component={Layers} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
