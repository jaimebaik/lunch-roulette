import React, { useState } from 'react';
import { useEffect } from 'react';
// import RouletteWheel from './RouletteWheel.jsx';
import { Wheel } from 'react-custom-roulette';

const colors = ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1', '#955251', '#B565A7', '#009B77', '#DD4124', '#EFC050']

function Container ( props ){
  const [sectorData, setSectorData] = useState([]);
  const [spin, setSpin] = useState(false);

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
      <Wheel 
        mustStartSpinning={spin}
        prizeNumber={Math.floor(Math.random()*sectorData.length)}
        data={sectorData}
        onStopSpinning={() => setSpin(false)}
        backgroundColors={['#3e3e3e', '#df3428']}
        textColors={['#ffffff']}
        outerBorderColor='transparent'
        radiusLineColor='transparent'
        />
      <button onClick={() => setSpin(true)}>Spin!</button>
    </div>
  )
};

export default Container;