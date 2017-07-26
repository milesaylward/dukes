import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Yelp, Email, Phone } from './svgIcons';

class Footer extends Component {
  render() {
    const {
    copyRightStyle,
    socialStyle
    } = styles;
    return (
      <div style={{overflow: 'hidden'}} ref='footer'>
        <div style={copyRightStyle}>
          <div style={socialStyle}>
            <Facebook />
            <Yelp />
            <Email />
            <Phone />
          </div>
          <p style={{marginTop: 25}}>All Rights Reserved to Duke's Delicious Meats.</p>
          <Link to='/attributions'>
            <p>Attributions</p>
          </Link>
        </div>
      </div>
    )
  }
}

const styles = {
  copyRightStyle: {
    backgroundColor: '#501415',
    textAlign: 'center',
    color: 'white',
    fontSize: 12,
    paddingTop: 10,
    paddingBottom: 10
  },
  socialStyle: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: 10,
    fill: 'white'
  }
}

export default Footer;
