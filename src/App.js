import './App.css';
import { Routes, Route } from "react-router-dom";

import Header from './layers/header'
import FirstScreen from './page/first-screen'
import Footer from './layers/footer'
import Page from './page/page'
import Modal1 from './elements/modal1'

function App() {
  return (
    <div className="App">
        <Header/>
        <FirstScreen/>
        {/* <Modal1 showModal={false}/> */}
        <Page/>
        <Footer/>
    </div>
  );
}

export default App;
