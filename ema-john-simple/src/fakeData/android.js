// import React from 'react';

const android = () => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
    .then(res => res.json())
    .then(data => {
      const an = data.slice(21,40);
      return an;
    } )
};

export default android;