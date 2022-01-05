import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//chakra imports
import {ChakraProvider} from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/color-mode';
import theme from './theme'

//React Router imports
import {
  BrowserRouter as Router,
} from "react-router-dom";




ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Router>
          <App/>
        </Router>
       
      </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);

