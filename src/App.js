//page imports
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';

//chakra imports
import {Progress} from '@chakra-ui/react'

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
          
          <Progress size='sm' w='100%'/>


      <Routes>
        <Route exact path='/' element={<About/>}/>
        <Route exact path='/projects' element={<Projects/>}/>
      </Routes>

      </Router>
      
      </>
  )
}

export default App;

