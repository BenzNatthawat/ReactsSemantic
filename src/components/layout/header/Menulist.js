import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export class Menulist extends Component {
  render() {
    return (
      <>
        <Menu.Item as={NavLink} to='/' exact={true}>
          Home
        </Menu.Item>
        <Menu.Item as={NavLink} to='/newses'>Newses</Menu.Item>
        <Menu.Item as={NavLink} to='/css'>CSS</Menu.Item>
      </>
    )
  }
}

export default Menulist
