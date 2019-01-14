import React, { Component } from 'react'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import img1 from '../../images/1.jpg'
import img2 from '../../images/2.jpg'
import img3 from '../../images/3.jpg'

export class Sliderimg extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src={img1} alt='1' />
          <p className='legend'>Legend 1</p>
        </div>
        <div>
          <img src={img2} alt='2' />
          <p className='legend'>Legend 2</p>
        </div>
        <div>
          <img src={img3} alt='3' />
          <p className='legend'>Legend 3</p>
        </div>
      </Carousel>
    )
  }
}

export default Sliderimg
