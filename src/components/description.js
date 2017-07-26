import React, { Component } from 'react';
import { FlatButton } from 'material-ui';
import { Link as ScrollLink } from 'react-scroll';

import Cart from '../assets/cart.png';
import Plate from '../assets/restauranticon.png';
import Delivery from '../assets/deliveryicon.png';
import Logo from '../assets/redlogo.png';

class Description extends Component {
  render() {
    const {
      headlineStyle, containerStyle,
      iconStyle, textStyle,
      spacing, ctaStyle,
      linkStyle
    } = styles;

    return (
      <div style={containerStyle}>
        <div style={{opacity: 1}}>
          <h1 className='overdose' style={headlineStyle}>Duke's Meats</h1>
          <div style={spacing}>
            <img src={Cart} alt="Shopping Cart" style={iconStyle}/>
            <p style={textStyle} className='description-text'>Purchased Locally</p>
          </div>
          <div style={spacing}>
            <img src={Plate} alt="Shopping Cart" style={{...iconStyle, width: 70}}/>
            <p style={textStyle} className='description-text'>Restaurant Tested</p>
          </div>
          <div style={spacing}>
            <img src={Delivery} alt="Shopping Cart" style={{...iconStyle, width: 65}}/>
            <p style={textStyle} className='description-text'>Same Day Delivery</p>
          </div>
          <div style={{marginTop: 50}}>
            <div style={ctaStyle}>
              <h3>
                Contact us now!<br />To easily place your next order!
              </h3>
            </div>
            <ScrollLink to="menu" smooth='easeInQuad' style={linkStyle}>
              <FlatButton
                label='To Top'
                backgroundColor='#501415'
                style={{color: 'white'}}
                id='scrollTop-btn'
              />
            </ScrollLink>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  spacing: {
    margin: '20px 0'
  },
  containerStyle: {
    height: 'calc(100vh - 94px)',
    backgroundColor: '#FEFDEF',
    backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.9) 100%), url(${Logo})`,
    backgroundSize: 160 + '%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-25px 0'
  },
  headlineStyle: {
    color: '#501415',
    fontSize: 26,
    letterSpacing: 5,
    paddingTop: 20,
    textAlign: 'center',
    textShadow: '10px 10px rgb(238, 233, 219)'
  },
  iconStyle: {
    width: 50,
    display: 'block',
    margin: '24px auto 10px auto'
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
    color: '#501415',
    textTransform: 'uppercase'
  },
  ctaStyle: {
    textAlign: 'center',
    marginBottom: 10,
  },
  linkStyle: {
    display: 'flex',
    justifyContent: 'space-around',
    cursor: 'pointer'
  },
}

export default Description
