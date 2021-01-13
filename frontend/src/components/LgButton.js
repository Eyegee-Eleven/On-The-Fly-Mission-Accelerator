import React from 'react'

export default class LgButton extends React.Component {
  constructor(){
    super()
  }

  render() {
    return (
      <>
        <button className='homepage-button'>{this.props.name}</button>
      </>
    )
  }
}
