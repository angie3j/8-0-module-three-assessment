import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";



class App extends React.Component {
  render () {
    return (
    <div className="app">
      <Nav />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/movies' component={Home} />
        <Route exact path='/people' component={Home} />
        <Route exact path='/locations' component={Home} /> 
      </Switch> 
     
    
    </div>
    )
  }
}

export default App;