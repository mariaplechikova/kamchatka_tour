import './App.css';

import Navbar from './layers/navbar'
import FirstScreen from './page/first-screen'
import Footer from './layers/footer'
import Page from './page/page'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <FirstScreen/>
        <Page/>
        <Footer/>
    </div>
  );
}

export default App;
