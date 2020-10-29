import React, { useState } from 'react';
import { useEffect } from 'react';
// import RouletteWheel from './RouletteWheel.jsx';
import { Wheel } from 'react-custom-roulette';

const colors = ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1', '#955251', '#B565A7', '#009B77', '#DD4124', '#EFC050']

function Container ( props ){
  const [sectorData, setSectorData] = useState([]);
  useEffect(() => {
    const dataForSector = [];
    props.roulette.forEach((choice, i)=> {
      dataForSector.push({ option: choice, style: { backgroundColor: colors[i] } });
    });
    // console.log(dataForSector);
    setSectorData(dataForSector);
  },[]);
  return(
    <div className='container'>
      {/* <RouletteWheel roulette={props.roulette}/> */}
      {/* <button>Spin!</button> */}
      <Wheel 
        mustStartSpinning={true}
        prizeNumber={0}
        data={sectorData}
        backgroundColors={['#3e3e3e', '#df3428']}
        textColors={['#ffffff']}
      />
    </div>
  )
};

export default Container;