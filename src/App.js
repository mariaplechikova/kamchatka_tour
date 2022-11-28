import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './layers/navbar'
import FirstScreen from './page/first-screen'
import Footer from './layers/footer'
import Page from './page/page'
import Modal1 from './page/modal1'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <FirstScreen/>
        {/* <Modal1 show={this.state.show}/> */}
        <Page/>
        <Footer/>
    </div>
  );
}

export default App;
