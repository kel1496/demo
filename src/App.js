import './App.css';
import React from 'react';
import {Switch, Route, NavLink, Redirect} from 'react-router-dom';
import Q_AND_A from './containers/Q_AND_A';
import Home from './containers/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import footer from './media/inbonis.png';
import NavbarPage from './Components/NavBar';



function App() {
  return (
    <div className="App">
      <div className={'main-content'}>
        <NavbarPage/>
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/que-obtengo"} exact component={Q_AND_A} />
          <Redirect to={"/"} />
        </Switch>
    </div>
    <footer className={"main-footer"}>
        <div className={"wrapper"}>
          <div className={"corporate-footer"}>
            <img src={footer} className={"footer__logo"}/>
            <nav className={"legal-nav"}></nav>
          </div>
        </div>
      </footer>
  </div>
    
        
          );
}

export default App;
