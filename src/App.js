import './App.css';
import Navbar from './components/pages/navbar';
import { Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contacts from './components/pages/Contacts';
import Blogs from './components/pages/Blogs';
import Projects from './components/pages/Projects';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
   
    <div className="App">
    
  
      <div>
      <Navbar />
      <Home/>
      <About />
      <Projects />
      <Blogs />
      <Contacts/>
    </div>
      
      </div>
      
  );
}

export default App;
