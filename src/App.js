import logo from './logo.svg';
import './App.css';
import Menu from './layers/menu'
import Footer from './layers/footer'
import FirstScreen from './page/first-screen'
import React, { useState } from 'react';


function App() {
  return (
    <div className="App">
        <Menu/>
        <FirstScreen/>
        <Footer/>
    </div>
  );
}

export default App;
