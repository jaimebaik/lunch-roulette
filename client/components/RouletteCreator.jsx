// import React, { useState, useEffect, useReducer } from 'react';
import React, { useState } from 'react';
import RouletteContainer from './RouletteContainer.jsx';
// import RouletteWheel from './RouletteWheel.jsx;'

// class Input extends React.Component {
//   constructor(props) {
//     this.state = {
//       text: ''
//     };
//     this.handleInput = this.handleInput.bind(this);
//   }
//   handleInput(e) {
//     this.setState({ text: e.target.value })
//   }
//   render() {
//     return (
//       <input 
//         type='text' 
//         placeholder='insert menu'
//         onChange={handleInput}
//       >

//       </input>
//     )
//   }
// }


// useEffect is a combination of 
// 1. componentDidMount // if passed in with an empty arr as second argument
// 2. componentDidUpdate // if no passed in second argument, runs after every update in the dom
// 3. componentDidUnmount // return

function Input(props) {
  const [text0, setText0] = useState('');
  const [text1, setText1] = useState('');
  // const [text2, setText2] = useState('');
  // const [text3, setText3] = useState('');
  // const [text4, setText4] = useState('');
  // const [text5, setText5] = useState('');
  // const [text6, setText6] = useState('');
  // const [text7, setText7] = useState('');
  // const [text8, setText8] = useState('');
  // const [text9, setText9] = useState('');
  // const [text, setText] = useState(new Array(10));

  const [choices, setChoices] = useState([]);
  const [container, setContainer] = useState();

  const [loading, setLoading] = useState();

  // useEffect(setEmptyString,[]);

  // function setEmptyString(){
  //   let newText = new Array(10);
  //   newText.forEach(el => {
  //     el = '';
  //   });
  //   setText(newText);
  //   console.log(typeof text[0]);
  // }
  // function updateText(index){

  // }
  function emptyTextBox() {
    // let counter = 0;
    // while(text + `${counter}` !== ''){
    //   setText + `${counter++}`('');
    // }
    setText0('');
    setText1('');
  }

  function postAndGetData() {
    setLoading(true);
    const bodyObj = {
      // text: text,
      '0': text0,
      '1': text1
    }
    emptyTextBox();
    // console.log(bodyObj);
    fetch('/', {
      method: 'POST',
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(bodyObj),
    }).then(data => {
       return data.json();
      // console.log('DATA: ',data.url);
      // console.log('DATA: ', data);
      // const newChoices = [];
      // for(const key in data[0]){
      //   if(data[0][key]) newChoices.push(data[0][key]);
      // }
      // console.log('data in ARRAY: ',newChoices);
    }).then(res => {
      setLoading(false);
      // console.log(res.roulette[0]);
      const roulette = {...res.roulette[0]};
      delete roulette['_id'];
      delete roulette['last_modified'];
      delete roulette['user_id'];
      const newChoices = [];
      for(const key in roulette){
        if(roulette[key]) newChoices.push(roulette[key]);
      }
      // console.log('data in ARRAY: ',newChoices);
      setChoices(newChoices);
    })
    .catch(err => console.log(err))
  };  
  return (
    <div className='wrapper'>
      <form >
        <label>choice1</label>
        <input 
          type='text'
          value={text0}
          placeholder='insert menu'
          onChange={(e) => {
            setText0(e.target.value);
            // console.log(text0);
          }}
        ></input>
        <label>choice2</label>
        <input 
          type='text'
          value={text1}
          placeholder='insert menu'
          onChange={(e) => {
            setText1(e.target.value);
            // console.log(text1);
          }}
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            postAndGetData();
            // const container = <RouletteContainer roulette={choices}/>;
            // setContainer(container);
          }}
        >Create Roulette!</button>
      </form>
      {choices.length>0 && <RouletteContainer roulette={choices}/>}
    </div>
  )
}

export default Input;
