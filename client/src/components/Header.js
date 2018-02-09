import React, {Component} from 'react';

class Header extends Component {
  render(){
    return(
      <nav>
    <div className="nav-wrapper">
      <a href="#" className="left brand-logo">JoesSolar</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="#">customers</a></li>
        <li><a href="#">Search Customers</a></li>
        <li><a href="#">Add Customer</a></li>
      </ul>
    </div>
  </nav>

    )
  }

}

export default Header;
