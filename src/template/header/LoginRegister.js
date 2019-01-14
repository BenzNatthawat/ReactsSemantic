import React, { Component } from 'react'
import { Button, Menu } from 'semantic-ui-react'

export class LoginRegister extends Component {
  render() {
    const { fixed } = this.props
    return (
      <Menu.Item position='right'>
        <Button as='a' inverted={!fixed} color='green'>
          เข้าสู่ระบบ
        </Button>
        <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }} color='orange'>
          สมัครสมาชิก
        </Button>
      </Menu.Item>
    )
  }
}

export default LoginRegister
