import React from 'react'
import Logo from '../cv22.png'

export default class Header extends React.Component {
  constructor(){
    super()
  }

  render() {
    return (
      <>
      <div />
        <header>OTFMA</header><div />
        <img src={Logo} alt="Logo" width="150" height="100" id="Headerimg"/>
      <div />
      </>
    );
  }
}

