import React, { Component } from 'react';
import classes from './App.module.css';
import ProductData from './Utils/ProductData';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductPreview from './ProductPreview/ProductPreview';
import Topbar from './Topbar/Topbar';

class App extends Component {

  state = {
    productData: ProductData,
    currentColor: 0,
    currentFeature: 0,
  }

  onColorClick = (pos) => {
    this.setState({ currentColor: pos });
  }

  onFeatureClick = (pos) => {
    this.setState({ currentFeature: pos });
  }

  render() {
    return (
      <div className="App">
        <Topbar />

        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview
              currentColor={this.state.productData.colorOptions[this.state.currentColor].imageUrl}
              currentFeature={this.state.currentFeature}
            />
          </div>

          <div className={classes.ProductDetails}>
            <ProductDetails
              data={this.state.productData}
              onColorClick={this.onColorClick}
              currentColor={this.state.currentColor}
              onFeatureClick={this.onFeatureClick}
              currentFeature={this.state.currentFeature}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
