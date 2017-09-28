import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import queryString from 'query-string'

import 'assets/css/subheader.min.css';

class SubHeader extends Component {
  render() {
    //var params = queryString.parse();
    //var title = this.props.title, items = this.props.items;
    console.log(this.props);
    return (
      <div className="subheader">

      </div>
    );
  }
}

export default SubHeader;
