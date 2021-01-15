import React from 'react'
import {StateContext} from '../state'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";



export default function LgButton () {
  let context= React.useContext(StateContext) //LETS USE THAT STATE BOOIIIII (gives access to global state via shared context)
  //alternatively let {LgButton:[buttons:myname]}= React.useContext(StateContext)
    return (
      <>
      
        
        {
          context.LgButton.buttons.map(item =>{
            return(
              <Link key={item.name} to={item.to}><button className='homepage-button'>{item.name}</button></Link>
            )
          })
        }
      </>
    )
}
