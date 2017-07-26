import React, { Component } from 'react';

import { UpdateDimension } from '../updateDimensions';
import WebMenu from './webMenu';
import MobileMenu from './mobileMenu';

class Menu extends Component {
  componentWillMount() {
    this.checkWidth();
  }
  componentDidMount() {
    window.addEventListener('resize', this.checkWidth);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.checkWidth);
  }

  checkWidth = () => {
    const width = UpdateDimension();
    if(width >= 900) {
      this.setState({mobile: false})
    }
    else {
      this.setState({mobile: true})
    }
  }

  render() {
    return (
      <div>
        {
          this.state.mobile
          ?
          <MobileMenu title={this.props.title} />
          :
          <WebMenu active={this.props.active}/>
        }
      </div>
    )
  }
}

export default Menu
