import React, { Component } from 'react'
import { Divider, Grid, Image, Segment, Visibility, Sticky, Menu, Header, Icon } from 'semantic-ui-react'
import './Home.css'
import Scrollspy from 'react-scrollspy'

export class Home extends Component {
  state = { activeItem: 'home' }

  handleContextRef = contextRef => this.setState({ contextRef })
  handleItemClick = (e, { name }) => {document.getElementById(name).scrollIntoView({ behavior: 'smooth', block: 'start' })}
  onUpdateActive = (e) => {if (e) {this.setState({ activeItem: e.id })}}

  render() {
    const { activeItem, contextRef } = this.state
    return (
      <Segment style={{ padding: '0em 3em 3em 3em' }} vertical>
        <div ref={this.handleContextRef}>
          <Grid columns={2} container stackable>
            <Grid.Column width={13}>
              <Visibility className="sticky-top">
                <Segment id='home'>
                  ---------home---------
                  <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                  <Divider />
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                  <Divider />
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Segment>
                <Segment id='messages'>
                  ---------messages---------
                  <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                  <Divider />
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                  <Divider />
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Segment>
                <Segment id='friends'>
                  ---------friends---------
                  <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                  <Divider />
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                  <Divider />
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Segment>

                <Segment id='LL' color='red'>
                  ---------LL---------
                  <Header as='h2' icon textAlign='center'>
                    <Icon name='users' circular />
                    <Header.Content>xxxxxx</Header.Content>
                  </Header>
                  <Divider />
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                    Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                    consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
                    link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                    vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                    enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
                    ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                    Curabitur ullamcorper ultricies nisi.
                  </p>
                </Segment>
              </Visibility>

            </Grid.Column>

            <Grid.Column width={3} only='computer tablet'>
              <Scrollspy items={['home', 'messages', 'friends', 'LL']} onUpdate={this.onUpdateActive}>
                <Sticky context={contextRef} className="sticky-top" offset={60}>
                  <Menu pointing secondary vertical fluid>
                    <Menu.Item
                      name='home'
                      active={activeItem === 'home'}
                      onClick={this.handleItemClick}
                    />
                    <Menu.Item
                      name='messages'
                      active={activeItem === 'messages'}
                      onClick={this.handleItemClick}
                    />
                    <Menu.Item
                      name='friends'
                      active={activeItem === 'friends'}
                      onClick={this.handleItemClick}
                    />
                    <Menu.Item
                      name='LL'
                      active={activeItem === 'LL'}
                      onClick={this.handleItemClick}
                    />

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
