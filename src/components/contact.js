import React, { Component } from 'react';
import Menu from './menu';
import Logo from '../assets/whitelogo.png';
import { Email, Phone } from './svgIcons';

class Contact extends Component {
  render() {
    const { containerStyle, iconStyle, contactContainer, textStyle } = styles;
    return (
      <div>
        <Menu title='contact' active='contact' />
        <div style={containerStyle} id='contact-container'>
          <div style={contactContainer}>
            <Phone Styles={iconStyle} />
            <p style={textStyle}>7577577575</p>
          </div>
          <div style={contactContainer}>
            <Email Styles={iconStyle} />
            <p style={textStyle}>DukesDeliciousMeats<br />@gmail.com</p>
          </div>
          <div style={contactContainer}>
            <p style={{...textStyle, fontSize: 16}} className='lower-contact-text'>
              Serving Hampton Roads and surrounding areas.
            </p>
            <p style={{...textStyle, marginTop: 10, fontSize: 16}} className='lower-contact-text'>
              Speciality items available with pre-payment
            </p>
            <p style={{...textStyle, marginTop: 10, fontSize: 16}} className='lower-contact-text'>
              Call now to learn more!
            </p>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  containerStyle: {
    backgroundColor: '#501415',
    minHeight: 'calc(100vh - 175px)',
    backgroundImage: `linear-gradient(to bottom, rgba(80, 20, 21,0.9) 0%,rgba(80, 20, 21,0.9) 100%), url(${Logo})`,
    backgroundSize: 160 + '%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-35px 0'
  },
  iconStyle: {
    width: 50,
    height: 50
  },
  contactContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    paddingTop: 60,
    width: '90%',
    margin: '0 auto'
  },
  textStyle: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    color: 'white',
    letterSpacing: 4,
    wordWrap: 'break-word'
  }
}

export default Contact
