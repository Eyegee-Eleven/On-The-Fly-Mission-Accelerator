import React from 'react'

export default class LgButton extends React.Component {
  constructor(){
    super()
  }

  render() {
    return (
      <>
        <button id='homepage-button'>{this.props.name}</button>
      </>
    )
  }
}
