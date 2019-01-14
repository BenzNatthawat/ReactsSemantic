import React, { Component } from 'react'
import DesktopContainer from '../header/Headerdesktop'
import Headermobile from '../header/Headermobile'

export class Responsiveheader extends Component {
  render() {
    return (
      <div>
        <DesktopContainer />
        <Headermobile />
      </div>
    )
  }
}

export default Responsiveheader
