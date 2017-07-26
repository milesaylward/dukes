import React, { Component } from 'react';
import { FlatButton } from 'material-ui';
import { Link } from 'react-router-dom';
import Seafood from '../assets/seafood.png';
import Cow from '../assets/cow.png';
import Chicken from '../assets/chicken.png';
import Pig from '../assets/pig.png';

import Menu from './menu';
class Products extends Component {
  render() {
    const { buttonStyle, textStyle, imgStyle, containerStyle } = styles
     return (
       <div style={{height: 'calc(100vh - 111px)'}}>
         <Menu title='products' active='products' />
         <div id="product-btns" style={containerStyle}>
           <Link to='/products/seafood' style={{height: '25%'}} className='product-link'>
             <FlatButton children fullWidth={true} style={buttonStyle}>
               <p className='link-text' style={textStyle}>Seafood</p>
               <img src={Seafood} style={imgStyle} alt='Seafood' className='product-btn-images'/>
             </FlatButton>
           </Link>
           <Link to='/products/chicken' style={{height: '25%'}} className='product-link'>
             <FlatButton children fullWidth={true} style={buttonStyle}>
               <p className='link-text' style={textStyle}>Chicken</p>
               <img src={Chicken} style={imgStyle} alt='Chicken' className='product-btn-images'/>
             </FlatButton>
           </Link>
           <Link to='/products/pork' style={{height: '25%'}} className='product-link'>
             <FlatButton children fullWidth={true} style={buttonStyle}>
               <p className='link-text' style={textStyle}>Pork</p>
               <img src={Pig} style={imgStyle} alt='Pork' className='product-btn-images'/>
             </FlatButton>
           </Link>
           <Link to='/products/beef' style={{height: '25%'}} className='product-link'>
            <FlatButton children fullWidth={true} style={buttonStyle}>
              <p className='link-text' style={textStyle}>Beef</p>
              <img src={Cow} style={imgStyle} alt='Beef' className='product-btn-images'/>
            </FlatButton>
          </Link>
         </div>
       </div>
     )
  }
}

const styles = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 175px )'
  },
  buttonStyle: {
    height: '100%',
    backgroundColor: '#FEFDEF',
    border: '2px solid #501415',
    borderTop: 'none',
  },
  textStyle: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    top: 'calc(50% - 20px)',
    fontSize: 20,
    textTransform: 'uppercase'
  },
  imgStyle: {
    width: '40%',
    opacity: .3,
    zIndex: -1
  }
}
export default Products
