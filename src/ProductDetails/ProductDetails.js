import React from 'react';
import classes from './ProductDetails.module.css';

const ProductDetails = (props) => {
  const colorOptions = props.data.colorOptions.map((item, pos) => {
    const classArray = [classes.ProductImage];
    if (pos === props.currentColor) {
      classArray.push(classes.SelectedProductImage);
    }

    return (
      <img key={pos} className={classArray.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={() => props.onColorClick(pos)} />
    );
  });

  const featureList = props.data.featureList.map((item, pos) => {
    const classArray = [classes.ProductFeature];

    if (pos === props.currentFeature) {
      classArray.push(classes.SelectedProductFeature);
    }

    return (
      <button key={pos} className={classArray.join(' ')} onClick={() => props.onFeatureClick(pos)}>{item}</button>
    );
  });

  return (
    <div className={classes.ProductDetails}>
      <h1 className={classes.ProductTitle}>{props.data.title}</h1>
      <p className={classes.ProductDescription}>{props.data.description}</p>

      <h3 className={classes.SectionHeading}>select color</h3>
      <div>{colorOptions}</div>

      <h3 className={classes.SectionHeading}>features</h3>
      <div>{featureList}</div>

      <button className={classes.BuyButton}>buy</button>
    </div>
  );
}

export default ProductDetails;