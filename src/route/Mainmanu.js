import React, { Component } from 'react'
import { Switch, Route } from 'react-router'

import Newses from '../components/newses/Newses'
import About from '../components/about/About'
import Expense from '../components/expense/Expense'
import Responsiveheader from '../components/layout/responsive/Responsiveheader'
import Footer from '../components/layout/footer/Footer'

export class Mainmanu extends Component {
  render() {
    return (
      <div>
        <Responsiveheader />
        <Switch>
          <Route exact path="/" component={Newses}/>
          <Route path="/about" component={About} />
          <Route path="/expense" component={Expense} />
          {/* <Route path="/:user" component={User} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Mainmanu
