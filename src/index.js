import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './global.css'

import About from './About'
import Search from './Search'
import Detail from './Detail'

/* Navigation */
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavBox from './Components/NavBox'
import SampleFooter from './Components/SampleFooter'

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>
        <NavLink to='/' exact>ML-Search</NavLink>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <NavLink to='/' exact activeClassName="selected">search</NavLink>
          <NavLink to='/about' exact activeClassName="selected">about</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Navigation />
    <NavBox />
    <SampleFooter />
    <Container>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/about" exact component={About} />
        <Route path="/detail" component={Detail} />
      </Switch>
    </Container>
  </BrowserRouter>,
  document.getElementById('root')
)