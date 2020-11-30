import React, { Component } from "react"
import { Switch, Route, Link } from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import NotFound from "./NotFound"

export default class Routes extends Component {
  render() {
    return (
      <>
        <div>
          <Link to="/">HOME</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} />} />
          <Route path="/about" render={(props) => <About {...props} />} />
          <Route path="/contact" render={(props) => <Contact {...props} />} />
          <Route component={NotFound} />
        </Switch>
      </>
    )
  }
}
