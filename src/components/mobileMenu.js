import React, { Component } from 'react';
import { AppBar, Drawer, MenuItem } from 'material-ui';
import { Link } from 'react-router-dom';


class MobileMenu extends Component {
  state = {
    open: false
  }

  handleChange = () => {
    this.setState({ open: !this.state.open })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { appBarStyle } = styles
    return (
      <div>
        <AppBar
          id='menu'
          title={this.props.title ? this.props.title : ''}
          onLeftIconButtonTouchTap={this.handleChange}
          style={appBarStyle}
          titleStyle={{ color: '#501415', textTransform: 'capitalize'}}
        />
        <Drawer
          docked={false}
          width={150}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <Link to='/'>
            <MenuItem>Home</MenuItem>
          </Link>
          <Link to='/products'>
            <MenuItem>Products</MenuItem>
          </Link>
          <Link to ='/contact'>
            <MenuItem>Contact</MenuItem>
          </Link>
        </Drawer>
      </div>
    )
  }
}

const styles = {
  appBarStyle: {
    backgroundColor: 'white'
  }
}

export default MobileMenu
