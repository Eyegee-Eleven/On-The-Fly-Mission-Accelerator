import { Component } from 'react';
import './App.css';
import React from 'react'
import Header from './components/Header'
import LgButton from './components/LgButton'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";


export default class App extends React.Component {
  constructor() {
    super()
    this.state={
      homepageOptions : ['Accelerate Your Mission', 'Change On-The-Fly']
    } 

  }



  render() {
    return (
      <>
        <Header/>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Link to='/modify-form-f'><LgButton name={this.state.homepageOptions[0]} /></Link>
              <Link to='on-the-fly'><LgButton name={this.state.homepageOptions[1]} /></Link>
            </Route>

          </Switch>
        </Router>

      </>
    );
  }
}

