import React, { useState } from 'react';

function Wheel ( props ) {
  console.log(props);
  
  return (
    <div className='wheel'>
      <canvas></canvas>
    </div>
  )
};

export default Wheel;