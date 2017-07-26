import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GridList, GridTile, Dialog, RaisedButton } from 'material-ui';
import { Fade } from './fade';

import Loader from '../assets/dukes.gif';
import Data from '../data'
import Menu from './menu';

class ProductDetail extends Component {
  state = {
    data: '',
    title: '',
    open: false,
    tile: null,
    imageNumber: 0,
    loaded: false,
    loadedNumber: 1
  }
  componentWillMount() {
    const page = this.props.match.params.page;
    this.setState({ title: page });
    this.getData(page)
  }

  componentDidUpdate() {
    const page = this.props.match.params.page;
    if(this.state.loaded) {
      if(page !== this.state.title) {
        this.setState({
          loaded: false,
          loadedNumber: 1,
          imageNumber: 0,
          title: page
        });
        this.getData(page);
      }
    }
  }

  getData = (page) => {
    switch (page) {
      case 'seafood':
        this.setState({ data: Data.seafood, imageNumber: Data.seafood.length });
        return;
      case 'beef':
        this.setState({ data: Data.beef, imageNumber: Data.beef.length });
        return;
      case 'pork':
        this.setState({ data: Data.pork, imageNumber: Data.pork.length });
        return;
      case 'chicken':
        this.setState({ data: Data.chicken, imageNumber: Data.chicken.length });
        return;
      default:
        return;
      }
  }

  renderItems = () => {
    const { data } = this.state;

    const itemList = data.map((item, i) => {
      return (
        <GridTile
          className='GridTiles'
          title={item.name}
          subtitle={item.price}
          style={{cursor: 'pointer'}}
          key={i}
          onClick={() => this.tileClicked(item)}
          >
          <img src={item.img} onLoad={this.handleLoad} alt={item.name}/>
        </GridTile>
      )
    });

    return itemList;
  }

  tileClicked = (tile) => {

    this.setState({
      open: true,
      tile
    });
  }

  handleClose = () => {
    this.setState({open: false, tile: null})
  }

  handleLoad = () => {
    const { loadedNumber, imageNumber } = this.state;
    this.setState({loadedNumber: loadedNumber + 1});
    if(!this.state.loaded && loadedNumber === imageNumber) {
      this.setState({loaded: true})
      return;
    }
    return;
  }

  renderGrid = () => {
    const { loaded } = this.state;
    return (
      <Fade in={loaded}>
        <div style={loaded ? {display: 'block'} : {display: 'none'}}>
          <div style={{marginTop: 10, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', zIndex: -1}}>
            <GridList
              id='GridList'
              cellHeight={200}
              style={{width: 500}}
              >
              {this.renderItems()}
            </GridList>
          </div>
          <div id="productButton" style={{display: 'flex', justifyContent: 'center', marginTop: 10}}>
            <Link to='/products'>
              <RaisedButton
                backgroundColor='#501415'
                label='Back to Products'
                labelStyle={{color: 'white'}}
              />
            </Link>
          </div>
        </div>
      </Fade>
    )
  }

  render() {
    const { tile, loaded } = this.state;
    return (
      <div style={{marginBottom: 10, backgroundColor: '#FEFDEF'}}>
        <Menu title={this.state.title} active='products'/>
        {
          this.state.tile
          ?
          <Dialog
            title={tile.name}
            titleStyle={{wordWrap: 'break-word'}}
            open={this.state.open}
            modal={false}
            onRequestClose={this.handleClose}
            autoScrollBodyContent={true}>
            <img src={tile.img} style={{width: '100%'}} alt={tile.name} />
            <p>{tile.price}</p>
          </Dialog>
          :
          <div></div>
        }
        <div style={{ minHeight: 'calc(100vh - 185px)'}} id='product-container'>
          <img src={Loader} alt='Loading Gif'style={loaded ? {display: 'none'} : {display: 'block', margin: '0 auto'}} />
          {this.renderGrid()}
        </div>
      </div>
    )
  }
}

export default ProductDetail
