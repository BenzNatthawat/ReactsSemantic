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
        <section id='items'>
          <h1 className='section-title'>Awesome! Item box show!</h1>
          <div>

            <div className='items__item'>
              <div className='items__item-1'>div</div>
              <div className='items__item-2'>W400</div>
              <div className='items__item-3'>H*W300</div>
              <div className='items__item-4'>H450</div>
            </div>

          </div>
        </section>
        
      </Segment>
    )
  }
}

export default css
