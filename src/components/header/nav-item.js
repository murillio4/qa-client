import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavItem extends Component {
    render() {
        var isActive = this.context.router.route.location.pathname.startsWith(this.props.to);
        var className = isActive ? '-item active' : '-item';

        return(
          <li className={className}>
            <Link {...this.props}>
                {this.props.children}
            </Link>
          </li>
        );
    }
}

NavItem.contextTypes = {
    router: PropTypes.object
};

export default NavItem;
