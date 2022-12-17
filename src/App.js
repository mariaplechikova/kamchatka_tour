import './App.css';

import Header from './layers/header'
import FirstScreen from './page/first-screen'
import Footer from './layers/footer'
import Page from './page/page'

function App() {
  return (
    <div className="App">
        <Header/>
        <FirstScreen/>
        <Page/>
        <Footer/>
    </div>
  );
}

export default App;
