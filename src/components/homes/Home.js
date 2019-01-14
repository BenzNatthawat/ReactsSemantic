import React, { Component } from 'react'
import { Divider, Grid, Image, Segment, Visibility, Sticky, Menu, Header, Icon } from 'semantic-ui-react'
import './Home.css'
import Scrollspy from 'react-scrollspy'

export class Home extends Component {
  state = { activeItem: null }

  handleContextRef = contextRef => this.setState({ contextRef })
  handleItemClick = (e, { name }) => { document.getElementById(name).scrollIntoView({ behavior: 'smooth', block: 'start' }) }
  onUpdateActive = (e) => { if (e) { this.setState({ activeItem: e.id }) } }

  render() {
    const ListMainMenu = ['ข้อมูลส่วนตัว', 'ข้อมูลการติดต่อ', 'ข้อมูลญาติ', 'อื่นๆ']
    const { activeItem, contextRef } = this.state
    return (
      <Segment style={{ padding: '0em 3em 3em 3em' }} vertical>
        <div ref={this.handleContextRef}>
          <Grid columns={2} container stackable>
            <Grid.Column width={13}>
              <Visibility className="sticky-top">
                <Segment id={ListMainMenu[0]} color='orange'>
                  <Header as='h2' icon textAlign='center'>
                    <Icon name='users' circular />
                    <Header.Content>ข้อมูลส่วนตัว</Header.Content>
                  </Header>
                  <Divider />
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                  <Divider />
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Segment>
                <Segment id={ListMainMenu[1]} color='yellow'>
                  <Header as='h2' icon textAlign='center'>
                    <Icon name='users' circular />
                    <Header.Content>ข้อมูลการติดต่อ</Header.Content>
                  </Header>
                  <Divider />
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                  <Divider />
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Segment>
                <Segment id={ListMainMenu[2]} color='olive'>
                  <Header as='h2' icon textAlign='center'>
                    <Icon name='users' circular />
                    <Header.Content>ข้อมูลญาติ</Header.Content>
                  </Header>
                  <Divider />
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                  <Divider />
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Segment>

                <Segment id={ListMainMenu[3]} color='red'>
                  <Header as='h2' icon textAlign='center'>
                    <Icon name='users' circular />
                    <Header.Content>อื่นๆ</Header.Content>
                  </Header>
                  <Divider />
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                  <Divider />
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Segment>
              </Visibility>

            </Grid.Column>

            <Grid.Column width={3} only='computer tablet'>
              <Scrollspy items={ListMainMenu} onUpdate={this.onUpdateActive}>
                <Sticky context={contextRef} className="sticky-top" offset={60}>
                  <Menu pointing secondary vertical fluid>
                    {ListMainMenu.map((MainMenu, key) => {
                      return (<Menu.Item
                        key={key}
                        name={MainMenu}
                        active={activeItem === MainMenu}
                        onClick={this.handleItemClick}
                      />)
                    })}
                  </Menu>
                </Sticky>
              </Scrollspy>
            </Grid.Column>
          </Grid>
        </div>
      </Segment >
    )
  }
}

export default Home
