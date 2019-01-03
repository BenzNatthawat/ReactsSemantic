import React, { Component } from 'react'
import { Container, Menu, Responsive, Segment, Visibility, Header } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import LoginRegister from './LoginRegister'

export class Headerdesktop extends Component {

  state = {}
  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { fixed } = this.state
    const origin = window.location.origin
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as={NavLink} to='/' exact={true}>
                  Home
                </Menu.Item>
                <Menu.Item as={NavLink} to='/about'>Abouts</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <LoginRegister fixed={fixed}/>
              </Container>
            </Menu>

            <Container text>
              <Header
                as='h1'
                content={origin}
                inverted
              />
              <Header
                as='h2'
                content='port 80'
                inverted
              />
            </Container>

          </Segment>

        </Visibility>
      </Responsive>
    )
  }
}

export default Headerdesktop
