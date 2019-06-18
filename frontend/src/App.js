import React from 'react';
import logo from './assets/logo.svg';
import './styles/App.css';
import {Navigation, Jtron} from './components/Dashboard';

function App() {
  return (
    <div>
      <Navigation/>
      <Jtron/>
    </div>
  );
}

export default App;
