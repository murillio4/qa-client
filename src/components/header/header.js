import React, {Component} from 'react'

import "assets/css/header.min.css"

import Main from './main'
import Actions from './actions'

class Header extends Component {
  render() {
    return (
      <header className="header fixed">
        <div className="-container">
          <Main />
          <Actions />
        </div>
      </header>
    );
  }
}

export default Header;
