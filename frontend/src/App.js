import { Component } from 'react';
import './App.css';
import React from 'react'
import Header from './components/Header'
import LgButton from './components/LgButton'
import OnTheFly from './components/on-the-fly'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";


export default class App extends React.Component {
  constructor() {
    super()

  }



  render() {
    return (
      <>
      <OnTheFly/>
        <Header/>
        <Router>
          <Switch>
            <Route exact path='/home'>
              <LgButton/>
            </Route>
          </Switch>
        </Router>

      </>
    );
  }
}

