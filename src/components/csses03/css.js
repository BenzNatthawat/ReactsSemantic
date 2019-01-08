import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'

import './css.css'

export class css extends Component {
  render() {
    return (
      <Segment style={{ padding: '2em 6em' }} vertical>
        <nav>
          <a href='#intro' className='active'>Intro</a>
          <a href='#outro'>Outro</a>
        </nav>
        <section id='intro' className='main-section highlighted'>
          <p>This is the intro section.</p>
        </section>
        <section id='outro' className='main-section'>
          <p>This is the outro section.</p>
        </section>
      </Segment>
    )
  }
}

export default css
