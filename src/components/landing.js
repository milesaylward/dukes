import React, { Component } from 'react';
import Logo from '../assets/whitelogo.png';
import arrowDown from '../assets/arrowdown.png';
import { Link as ScrollLink } from 'react-scroll';

class Landing extends Component {
  render() {
    const {
      backgroundStyle,
      imageStyle,
      arrowDownStyle
    } = styles;
    return (
      <div style={backgroundStyle}>
        <img src={Logo} alt='Dukes Logo' style={imageStyle}/>
        <p className="overdose headline">Nobody Beats My Meat</p>
        <ScrollLink to="menu" smooth='easeInQuad'>
          <img src={arrowDown} alt='Down Arrow' style={arrowDownStyle}/>
        </ScrollLink>
      </div>
    )
  }
}

const styles = {
  backgroundStyle: {
    backgroundColor: '#501415',
    height: 100 + 'vh',
    paddingBottom: -40
  },
  imageStyle: {
    display: 'block',
    margin: '0 auto',
    paddingTop: 30,
    width: 90 + '%',
    maxWidth: 340,
    opacity: .75
  },
  arrowDownStyle: {
    display: 'block',
    margin: '40px auto 0 auto',
    width: 70,
    cursor: 'pointer'
  }
}

export default Landing
