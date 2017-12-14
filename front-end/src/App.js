// 3rd party modules
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// custom components
import NavBar from './NavBar';
import SlickSlider from './components/SlickSlider';
import Register from './components/Register';
import Home from './components/Home'
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="app-body">
            <Route exact path="/" component={SlickSlider} />
            <div className="container">
              <Route exact path='/' component={Home} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;