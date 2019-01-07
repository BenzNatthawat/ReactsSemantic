import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'

import './css.css'

export class css extends Component {
  render() {
    return (
      <Segment style={{ padding: '2em 6em' }} vertical>
        <div>
          <nav className='main-nav'>
            <ul className='main-nav__item'>
              <li className='main-nav__item'><a href='#!'>Packehes</a></li>
              <li className='main-nav__item'><a href='#!'>Customers</a></li>
              <li className='main-nav__item'><a href='#!'>Start Hosting</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <section id='product-overview'>
            <h1>Get the freedom deserve.</h1>
          </section>
          <section id='plans'>
            <h1 className='section-title'>Choose Your Plan</h1>
            <p>Make sure you get the most for your money!</p>
          </section>
        </div>
      </Segment>
    )
  }
}

export default css
