import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavItem from './nav-item'

import logo from 'assets/img/logo.png'

class Main extends Component {
  render() {

    return (
      <div className="-main">
        <Link to="/" className="-logo">
          <img className="-img" src={logo} alt={"logo"}/>
        </Link>
        <nav className="navigation" aria-label="site navigation">
            <ul className="-list">
                <NavItem to="/question" className="-link">Questions</NavItem>
                <NavItem to="/courses" className="-link">Courses</NavItem>
                <NavItem to="/summarys" className="-link">Summarys</NavItem>
                <NavItem to="/tags" className="-link">Tags</NavItem>
                <NavItem to="/users" className="-link">Users</NavItem>
            </ul>
        </nav>
      </div>
    );
  }
}

export default Main;
