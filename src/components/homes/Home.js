import React, { Component } from 'react'
import { Divider, Grid, Image, Segment, Visibility, Sticky, Menu, Header, Icon, Container, Button, Form } from 'semantic-ui-react'
import './Home.scss'
import Scrollspy from 'react-scrollspy'

export class Home extends Component {
  state = {
    activeItem: null,
    calculations: {
      bottomVisible: false,
    }
  }

  handleContextRef = contextRef => this.setState({ contextRef })
  handleItemClick = (e, { name }) => { document.getElementById(name).scrollIntoView({ behavior: 'smooth', block: 'start' }) }
  onUpdateActive = (e) => { if (e) { this.setState({ activeItem: e.id }) } }
  handleUpdate = (e, { calculations }) => this.setState({ calculations })

  render() {
    const ListMainMenu = ['ข้อมูลส่วนตัว', 'ข้อมูลการติดต่อ', 'ข้อมูลญาติ', 'อื่นๆ']
    const { activeItem, contextRef, calculations } = this.state
    const optionsGender = [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' },
    ]
    const optionsCountry = [
      { key: 'ps', text: 'Please Select', value: '' },
      { key: 'us', text: 'United States', value: 'United States' },
      { key: 'af', text: 'Afghanistan', value: 'Afghanistan' },
      { key: 'al', text: 'Albania', value: 'Albania' },
      { key: 'am', text: 'American Samoa', value: 'American Samoa' },
    ]

    return (
      <Segment style={{ padding: '0em 3em 3em 3em' }} vertical>
        <div ref={this.handleContextRef}>
          <Grid columns={2} container stackable>
            <Grid.Column width={13}>

              <Visibility className="sticky-top"
                once={false}
                onUpdate={this.handleUpdate}>

                <Segment id={ListMainMenu[0]} color='orange'>
                  <Header as='h2' icon textAlign='center'>
                    <Icon name='users' circular />
                    <Header.Content>ข้อมูลส่วนตัว</Header.Content>
                  </Header>
                  <Form>
                    <Header as='h2'>Infomation</Header>
                    <Form.Group widths='equal'>
                      <Form.Input id='form-subcomponent-shorthand-input-first-name' fluid label='First name' placeholder='First name' error />
                      <Form.Input id='form-subcomponent-shorthand-input-last-name' fluid label='Last name' placeholder='Last name' />
                    </Form.Group>
                    <Form.Select options={optionsGender} placeholder='Gender' error />
                    <Form.Group widths='equal'>
                      <Form.Input fluid label='E-mail' placeholder='E-mail' error />
                      <Form.Input fluid label='Phone Number' placeholder='Phone Number' error />
                    </Form.Group>
                    <Header as='h2'>Address</Header>
                    <Form.Group widths='equal'>
                      <Form.Input fluid label='Street Address' placeholder='Street Address' error />
                    </Form.Group>
                    <Form.Group widths='equal'>
                      <Form.Input fluid label='City' placeholder='City' error />
                      <Form.Input fluid label='State / Province' placeholder='State / Province' error />
                    </Form.Group>
                    <Form.Group widths='equal'>
                      <Form.Input fluid label='Postal / Zip Code' placeholder='Postal / Zip Code' />
                      <Form.Select fluid label='Country' options={optionsCountry} placeholder='Country' />
                    </Form.Group>
                    <Form.Checkbox label='I agree to the Terms and Conditions' />
                    <Menu
                      fixed={!calculations.bottomVisible ? 'bottom' : null}
                      inverted={!calculations.bottomVisible}
                      pointing={false}
                      secondary={calculations.bottomVisible}
                      size='small'
                    >
                      <Container>
                        <Menu.Item>
                          <Form.Field control={Button} inverted={!calculations.bottomVisible} color={'green'}>
                            <Icon name='save' />บันทึกข้อมูล
                          </Form.Field>
                        </Menu.Item>
                        <Menu.Item>
                          <Form.Field control={Button} inverted={!calculations.bottomVisible} color='red'>
                            <Icon name='close' />ยกเลิก
                          </Form.Field>
                        </Menu.Item>
                      </Container>
                    </Menu>
                  </Form>
                </Segment>

              </Visibility>

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
