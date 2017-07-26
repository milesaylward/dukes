import React, { Component } from 'react';
import Menu from './menu';

class notFound extends Component {
  render() {
    return (
      <div>
        <Menu title="No Page Here"/>
        <h1>Took a wrong turn somewhere</h1>
      </div>
    )
  }
}

export default notFound;
