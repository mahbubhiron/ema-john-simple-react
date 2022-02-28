// import React from 'react';

const camera = () => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
    .then(res => res.json())
    .then(data => {
      const ca = data.slice(41,80);
      return ca;
    } )
};

export default camera;