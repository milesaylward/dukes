import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';
import { Link } from 'react-router-dom';

import Logo from '../assets/whitelogo.png';
import shrimpPhoto from '../assets/shrimp.jpg';

import Menu from './menu';
import Landing from './landing';
import Description from './description';


class Home extends Component {
  render() {
    const {
      firstBlockStyle, imageStyle,
      textStyle, buttonStyle,
      btnContainerStyle
    } = styles;
    return (
      <div id='home'>
        <Landing />
        <Menu title="Home" active='home' />
          <div style={firstBlockStyle}>
            <img src={Logo} alt="Dukes Logo" style={imageStyle}/>
            <p style={textStyle}>
              Duke’s Delicious Meats is a locally owned & reliable
              meat delivery service in Virginia Beach.
            </p>
            <p style={textStyle}>
              We sell & deliver our high quality meat at affordable prices.
            </p>
            <Link to='/products'>
              <RaisedButton
                label="Check out our selection"
                style={btnContainerStyle}
                buttonStyle={buttonStyle}
                labelStyle={{padding: 0, color: 'white'}}
              />
            </Link>
          </div>
          <Description />
      </div>
    )
  }
}

const styles = {
  firstBlockStyle: {
    height: 'calc(100vh - 64px)',
    background: `linear-gradient(rgba(20,20,20, .5), rgba(20,20,20, .5)), url(${shrimpPhoto})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  imageStyle: {
    display: 'block',
    margin: '0 auto',
    width: 200,
    paddingTop: 25
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontFamily: 'Helvetica',
    margin: 20,
    lineHeight: 1.3
  },
  btnContainerStyle: {
    display: 'block',
    margin: '0 auto',
    width: 70 + '%',
    borderRadius: 20
  },
  buttonStyle: {
    borderRadius: 20,
    height: 30,
    lineHeight: '30px',
    backgroundColor: '#00DB84'
  }
}

export default Home;
