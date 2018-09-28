import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';




class App extends Component {
  render() {
    return (
      <div className="App">

<Navbar/>

  <Switch>
          <Route exact path="/projects" component={ProjectList}/>
          <Route exact path="/projects/:id" component={ProjectDetails} />
        </Switch>

      </div>
    );
  }
}

export default App;
