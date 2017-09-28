import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

//css
import "assets/css/app.min.css"

import Header from 'components/header/header';
import Home from 'components/pages/home';

class Root extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Header} />
          <div className="container">
            <Route exact path="/" component={Home} />
          </div>
        </div>
      </Router>
    );
  }
}

export default Root;
