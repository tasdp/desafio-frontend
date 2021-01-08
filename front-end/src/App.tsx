import React from "react";
import './styles/global.scss'
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes'


const App: React.FC = () => (
  <>
  <BrowserRouter>  
  <Routes/>
  </BrowserRouter>
  </>

)
   

export default App;
