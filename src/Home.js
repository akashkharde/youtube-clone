import React from 'react';
import {Route , Switch}  from'react-router-dom'
import Search from './Search';
import Reccomended from './Reccomended';
import Sidebar from './Sidebar';


function Home() {
  return (
    <div>
        <Switch>
          
            <Route path='/'>
            <h1>home</h1>
            </Route>
         
          <Route path='/search' >
              <h1>Search</h1>
          </Route>
        </Switch>
    </div>
  )
}

export default Home