import './App.css';
import Count from './components/Count';
import Events from './components/Events';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Refhook from './components/Refhook';
import Timer from './components/Timer';

function App() {
  return (
    <>
    <Navbar  title="Apple Form" name="Enter your Name" btn="Submit Button"/>
    <Footer title="Footer Page"/>
    <Timer/>
    <Refhook/>
    <Events/>
    <Count/>
    </>
  );
}

export default App;
