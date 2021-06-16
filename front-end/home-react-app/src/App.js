import React, {useState} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Initial from './Components/conteiners/Initial';
import Login from './Components/conteiners/Login';
import Register from './Components/conteiners/Register';
import Home from './Components/conteiners/Home';
import Headers from './Components/Header';
import NotFound from './Components/conteiners/NotFound';
import './App.css';

function App() {
  // states
  const [stateHome, setStateHome] = useState(false);
  const homeActive = state => {
    setStateHome(state)
}
console.log(stateHome)
// console.log(stateHome)
  return (
    <div>
      <BrowserRouter>
        <Headers stateHome={stateHome}/>
        <Switch>
          <Route exact path='/' component={Initial}/>
          <Route exact path='/login'><Login homeActive={homeActive}/></Route>
          <Route exact path='/register' component={Register}/>
          <Route  path='/home' component={()=> <Home homeActive={homeActive}/>}/>
          <NotFound/>
         </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;
