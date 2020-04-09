import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import Accueil from './components/Accueil';
import Prospect from './components/Prospect';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route exact path='/' component={SignIn} />
          <Route path='/Accueil' component={Accueil} />
          <Route path='/Prospect' component={Prospect} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
