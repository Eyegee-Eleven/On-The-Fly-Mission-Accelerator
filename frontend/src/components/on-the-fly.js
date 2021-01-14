import { Component, useEffect } from 'react';
import React from 'react'
import {StateContext} from '../state'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

export default function OnTheFly() {
  let context= React.useContext(StateContext) 
 
  useEffect (async ()=> {
    let response = await fetch('http://localhost:3001/list')
    let Formlist=  await response.json()
    context.setState({FormF:{...context.FormF,formlist:Formlist}});
  },[]) //eslint-disable-line react-hooks/exhaustive-deps


    return (
      <>
      

        <Router>
          <Switch>
            <Route exact path='/on-the-fly'>
              <Link to='/home'><button>Go Back</button></Link>
              
              {context.FormF.formlist.map(item =>{
              
               return (
                <Link className='itemList' key={item.id} to={`/summary/${item.id}`}>
                  <li>
                    <h1 className='Tails' key={item.tail +item.id}>Tail: {item.tail}</h1>
                    <h1 className='Mission' key={item.mission+item.id}>Mission: {item.mission}</h1>
                    <h1 className='Date' key={item.data+item.id}>Date: {item.date}</h1>
                  </li>
                </Link>)

              })}
            </Route>
          </Switch>
        </Router>
      </>
    )
  



}





