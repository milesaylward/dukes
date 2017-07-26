import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../nav.css';

class WebMenu extends Component {
  getActive = (page) => {
    const { active } = this.props
    if(page === active) {
      return 'active';
    }
    return;
  }

  render() {
    return (
      <div id='menu'>
        <ul className='nav'>
          <Link to='/' className='main-nav' id={this.getActive('home')}>
            <li>Home</li>
          </Link>
          <li className="drop">
            <Link to='/products' className='main-nav' id={this.getActive('products')}>Products</Link>
            <ul>
              <li><Link to='/products/seafood'>Seafood</Link></li>
              <li><Link to='/products/pork'>Pork</Link></li>
              <li><Link to='/products/chicken'>Chicken</Link></li>
              <li><Link to='/products/beef'>Beef</Link></li>
            </ul>
          </li>
          <Link to='/contact' className='main-nav' id={this.getActive('contact')}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    )
  }
}

export default WebMenu;
