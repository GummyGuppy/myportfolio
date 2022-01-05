import React from 'react'


//Components
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects'
import Contact from './components/Contact'

//React Router imports
import {
    //Browser Router imported and implemented at index.js level
    Routes,
    Route
  } from "react-router-dom";

function App() {


return(
        <>

        <Navbar/>
        <Routes>
            <Route index element={<About/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>

        


        
        </>

)




  
}

export default App;

