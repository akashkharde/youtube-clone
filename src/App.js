import React from 'react'
import './App.css'
import Header from './Header';
import Sidebar from './Sidebar'
import Reccomended from './Reccomended'
import Search from './Search';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";





function App() {

  return (
    <div className='app'  >
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route  path = '/' element = {<div className='app__pagee'> <Sidebar className= 'app__sidebar' /> <Reccomended className= 'app__Reccomended' /></div> }/>
        <Route path  = '/search/:searchTerm' element = {<div className='app__pagee'><Sidebar/> <Search/></div>} />
      </Routes>
      </BrowserRouter>
      


    </div>
  )
}

export default App;
