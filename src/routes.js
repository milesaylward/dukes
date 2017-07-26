import React, { Component } from 'react';
import {  Switch, Route } from 'react-router-dom';

import Home from './components/home';
import Products from './components/products';
import ProductDetail from './components/ProductDetails';
import Attributions from './components/attributions';
import Contact from './components/contact';
import notFound from './components/404';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/products/:page' component={ProductDetail} />
        <Route exact path='/products' component={Products} />
        <Route exact path ='/attributions' component={Attributions} />
        <Route exact path='/contact' component={Contact} />
        <Route component={notFound} />
      </Switch>
    )
  }
}

export default Routes
