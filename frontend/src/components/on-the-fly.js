import { Component } from 'react';

import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

export default class OnTheFly extends React.Component {
  constructor() {
    super()
    this.state={
      form: []
    }
  }

    componentDidMount() {
        fetch('http://localhost:3001/details')
        .then((res) => res.json)
        .then((data) => (this.setState({form: [...this.state.form, data.json]})))
        .then(console.log(this.state.form))
        .catch((res) => console.log(res))
  } 

  render() {


    return (
      <>
    
        <Router>
          <Switch>
            <Route exact path='/on-the-fly'>
              {/* Back Button (large button)
                //list of form f
                //clickable, make get request via id => state */}
              {/* <Link to ={}>//link to summary</Link> */}
            </Route>
          </Switch>
        </Router>)
      </>
    )
  }



}





