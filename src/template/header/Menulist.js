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
        <Menu.Item as={NavLink} to='/css02'>CSS02</Menu.Item>
        <Menu.Item as={NavLink} to='/css03'>CSS03</Menu.Item>
        <Menu.Item as={NavLink} to='/css04'>CSS04</Menu.Item>
        <Menu.Item as={NavLink} to='/css05'>CSS05</Menu.Item>
      </>
    )
  }
}

export default Menulist
