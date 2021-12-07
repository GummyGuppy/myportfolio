//page imports
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

//chakra imports

//router imports
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    
  
      <>
      <Router>

        
          <Navbar/>


      <Routes>
        <Route exact path='/' element={<About/>}/>
        <Route exact path='/projects' element={<Projects/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>

      </Router>
      
      </>
  )
}

export default App;

