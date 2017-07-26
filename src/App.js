import React, { Component } from 'react';
import './index.css';
import './App.css';

import Routes from './routes';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
