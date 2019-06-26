import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './styles/App.css';
import Dashboard from './Routes/Dashboard';
import Map from './Routes/Map';
import ErrorPage from './Routes/Error404';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/view' component={Map} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
