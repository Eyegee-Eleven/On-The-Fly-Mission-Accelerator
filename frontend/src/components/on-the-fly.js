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
    this.state = {
      form: [],
      lineItems: []
    }
  }


  componentDidMount() {
    console.log(`im on line 27`)
    fetch('http://localhost:3001/list')
      .then(res => res.json())
      .then(data => (this.setState({ form: data  })))
      .catch((res) => console.log(res))

  }

  render() {

    return (
      <>
      

        <Router>
          <Switch>
            <Route exact path='/on-the-fly'>
              <Link to='/home'><button>Go Back</button></Link>
              {this.state.form.map(item =>{
              console.log(`item on 56 ${JSON.stringify(this.state.form[0])}`)

               return (
                <Link className='itemList' key={item.id} to={`/summary/${item.id}`}>
                  <li>
                    <h1 key={item.tail +item.id}>Tail: {item.tail}</h1>
                    <h1 key={item.mission+item.id}>Mission: {item.mission}</h1>
                    <h1 key={item.data+item.id}>Date: {item.date}</h1>
                  </li>
                </Link>)

              })}
            </Route>
          </Switch>
        </Router>
      </>
    )
  }



}





