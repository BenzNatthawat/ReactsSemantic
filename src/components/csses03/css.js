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
          <h1 className='section-title'>Choose Your Plan</h1>
          <p>Make sure you get the most for your money!</p>
          <div>

            <article className='messgess'>
              <div className='messgess__description'>
                <h2 className='messgess__title'>Our PLUS Plan</h2>
                <h3 className='messgess__price'>The most popular choice of our customers.</h3>
                <p className='messgess__data'>Benefit from increased storage and faster support to ensure that your mission-critical data.</p>
              </div>
            </article>

            <article className='messgess'>
              <div className='messgess__description'>
                <h2 className='messgess__title'>Our FRee Plan</h2>
                <h3 className='messgess__price'>An extremely solid start into our hosting world.</h3>
                <p className='messgess__data'>Get started immediately at zero cost!</p>
              </div>
            </article>

            <article className='messgess'>
              <div className='messgess__description'>
                <h2 className='messgess__title'>Our PREMIUM Plan</h2>
                <h3 className='messgess__price'>For hobby projects or small team.</h3>
                <p className='messgess__data'>All your enterprise needs. Instant support.</p>
              </div>
            </article>

          </div>
        </section>
        <section id='table'>
          <h1 className='section-title'>Choose Your Table</h1>
          <p>Make sure you get the most for your Table style!</p>
          <div>

            <table border="1" className="table--content">
              <tbody>
                <tr>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                </tr>
                <tr>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                </tr>
                <tr>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                </tr>
                <tr>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                  <td>aaaaa aaaaa aaaa aaaaaa</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </Segment>
    )
  }
}

export default css
