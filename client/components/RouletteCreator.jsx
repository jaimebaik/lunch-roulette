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
  function emptyTextBox(){
    // let counter = 0;
    // while(text + `${counter}` !== ''){
    //   setText + `${counter++}`('');
    // }
    setText0('');
    setText1('');
  }

  return (
    <form >
      <input 
        type='text'
        value={text0}
        placeholder='insert menu'
        onChange={(e) => {
          setText0(e.target.value);
          // console.log(text0);
        }}
      ></input>
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
            setLoading(false);
            // data.json();
            // console.log(data);
          }
          ).catch(err => console.log(err))
        }}
      >Create Roulette!</button>
    </form>
  )
}

export default Input;
