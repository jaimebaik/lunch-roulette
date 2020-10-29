import React, { useState } from 'react';
import RouletteWheel from './RouletteWheel.jsx';

function Container ( props ){
  // console.log(props);
  return(
    <div className='container'>
      <RouletteWheel roulette={props.roulette}/>
      <button>Spin!</button>
    </div>
  )
};

export default Container;