import './App.css';

import Navbar from './layers/navbar'
import FirstScreen from './page/first-screen'
import Footer from './layers/footer'
import Schedule from './page/schedule'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <FirstScreen/>
        <Schedule/>
        <Footer/>
    </div>
  );
}

export default App;
