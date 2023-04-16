import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import './App.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  

  return (
    <Routes>
      
      <Route exact path='/' Component={HomePage}/>
      <Route exact path='/login' Component={LoginPage}/>
      <Route exact path='/register' Component={RegisterPage}/>
      
    </Routes>
  )
}

export default App
