import React from 'react'
import Logo from '../cv22.png'

export default class Header extends React.Component {
  constructor(){
    super()
  }

  render() {
    return (
      <>
        <header>OTFMA</header>
        <img src={Logo} alt="Logo" width="150" height="100" />
      </>
    );
  }
}

