// import React from 'react';

const laptop = () => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
    .then(res => res.json())
    .then(data => {
      const lp = data.slice(0,20);
      return lp;
    } )
};

export default laptop;