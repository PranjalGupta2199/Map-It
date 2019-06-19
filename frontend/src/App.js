import React from 'react';
import logo from './assets/logo.svg';
import './styles/App.css';
import {Navigation, CustomCarousel} from './components/Dashboard';

function App() {
  return (
    <div>
      <Navigation/>
      <CustomCarousel/>
    </div>
  );
}

export default App;
