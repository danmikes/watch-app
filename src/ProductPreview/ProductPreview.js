import React from 'react';
import classes from './ProductPreview.module.css';

const ProductPreview = (props) => {
  //todo: refresh second
  const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours;
  const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
  const currentSecond = new Date().getSeconds() > 9 ? new Date().getSeconds() : '0' + new Date().getSeconds();
  const heartRate = Math.round(Math.random() * (80 - 60) + 60);

  return (
    <div className={classes.ProductPreview}>
      <img src={props.currentColor} alt="product preview" />
      {
        props.currentFeature === 1 ?
          <div className={classes.HeartSection}>
            <i className="fas fa-heartbeat"></i>
            <p>{`${heartRate}`}</p>
          </div>
          :
          <div className={classes.TimeSection}>
            <p>{`${currentHour}:${currentMinute}:${currentSecond}`}</p>
          </div>
      }
    </div>
  );
}

export default ProductPreview;