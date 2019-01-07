import React, { Component } from 'react'
import { Switch, Route } from 'react-router'

import Newses from '../components/newses/Newses'
import Home from '../components/homes/Home'
import Css from '../components/csses/css'
import Responsiveheader from '../components/layout/responsive/Responsiveheader'
import Footer from '../components/layout/footer/Footer'

export class Mainmanu extends Component {
  render() {
    return (
      <div>
        <Responsiveheader />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/newses' component={Newses} />
          <Route path='/css' component={Css} />
          {/* <Route path='/:user' component={User} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Mainmanu
