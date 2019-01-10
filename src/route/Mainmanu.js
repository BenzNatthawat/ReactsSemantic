import React, { Component } from 'react'
import { Switch, Route } from 'react-router'

import Newses from '../components/newses/Newses'
import Home from '../components/homes/Home'
import Css02 from '../components/csses02/css'
import Css03 from '../components/csses03/css'
import Css04 from '../components/csses04/css'
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
          <Route path='/css02' component={Css02} />
          <Route path='/css03' component={Css03} />
          <Route path='/css04' component={Css04} />
          {/* <Route path='/:user' component={User} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Mainmanu
