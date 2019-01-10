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
        <section id='product-overview'>
          <h1>Get the freedom deserve.</h1>
        </section>
        <section id='plans'>
          <h1 className='section-title'>Choose Your Plan</h1>
          <p>Make sure you get the most for your money!</p>
          <div>
            <article className='plan'>
              <h1>FREE</h1>
              <h2 className='plan__title'>$0/month</h2>
              <h3 className='plan__price'>For hobby projects or small team.</h3>
              <ul>
                <li>1 Workspace</li>
                <li>Unlimited Traffic</li>
                <li>10GB Storage</li>
                <li>Basic Support</li>
              </ul>
              <div>
                <button className='button'>CHOOSE PLAN</button>
              </div>
            </article>
            <article className='plan plan--highlighted'>
              <h1 className='plan__annotation'>RECOMMENDED</h1>
              <h2 className='plan__title'>$1/month</h2>
              <h3 className='plan__price'>For hobby projects or small team.</h3>
              <ul>
                <li>3 Workspace</li>
                <li>limited Traffic</li>
                <li>20GB Storage</li>
                <li>Basic Support</li>
              </ul>
              <div>
                <button className='button'>CHOOSE PLAN</button>
              </div>
            </article>
            <article className='plan'>
              <h1>PREMIUM</h1>
              <h2 className='plan__title'>$3/month</h2>
              <h3 className='plan__price'>For hobby projects or small team.</h3>
              <ul>
                <li>8 Workspace</li>
                <li>limited Traffic</li>
                <li>40GB Storage</li>
                <li>Basic Support</li>
              </ul>
              <div>
                <button className='button'>CHOOSE PLAN</button>
              </div>
            </article>
          </div>
        </section>
        <section id='key-features'>
          <h1 className='section-title'>Many Good Reasons to Stick Around.</h1>
          <div>
            <ul className='key-features__list'>
              <li className='key-features'>
                <div className='key-features__image'>
                </div>
                <p className='key-features__description'>2,456,234 Trusting Customers</p>
              </li>
              <li className='key-features'>
                <div className='key-features__image'>
                </div>
                <p className='key-features__description'>99.999% Uptime Guarantee</p>
              </li>
              <li className='key-features'>
                <div className='key-features__image'>
                </div>
                <p className='key-features__description'>Lightning Fast CDN</p>
              </li>
            </ul>
          </div>
        </section>
      </Segment>
    )
  }
}

export default css
