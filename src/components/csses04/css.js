import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'

import '../CSS/css.css'

export class css extends Component {
  render() {
    return (
      <Segment style={{ padding: '2em 6em' }} vertical>
        <header className='main-header'>
          <div>
            <a href='#uHost' className='main-header__brand'>
              uHost
            </a>
          </div>
          <nav className='main-nav'>
            <ul className='main-nav__item'>
              <li className='main-nav__item'><a href='#Packehes'>Packehes</a></li>
              <li className='main-nav__item'><a href='#Customers'>Customers</a></li>
              <li className='main-nav__item main-nav__item--cta'><a href='#Start'>Start Hosting</a></li>
            </ul>
          </nav>
        </header>
        <section id='messgesses'>
          <h1 className='section-title'>Awesome! Let's dive right in!</h1>
          <div>

            <form className='signup-form' onSubmit={() => alert('กรุณารอการทำงาน')}>

              <div>
                <label htmlFor='perfix'>titel</label>
                <select id='perfix'>
                  <option value="mr">Mr.</option>
                  <option value="ms">Ms.</option>
                </select>
              </div>
              <div>
                <label htmlFor='fisrt-name'>First Name</label>
                <input type='text' id='first-name' className='invalid'/>
              </div>
              <div>
                <label htmlFor='last-name'>Last Name</label>
                <input type='text' id='last-name' />
              </div>
              <div>
                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' />
              </div>
              <div>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' />
              </div>
              <div>
                <input type='checkbox' id='agree-terms'/>
                <label htmlFor='agree-terms'>xxxxxxx <a href='#a'>agrees</a></label>
              </div>
              <button className='button'>Sign Up</button>
            </form>

          </div>
        </section>
        
      </Segment>
    )
  }
}

export default css
