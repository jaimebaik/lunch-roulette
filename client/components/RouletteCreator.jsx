import React, { useState, useEffect, useReducer } from 'react';

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
  // const [text, setText] = useState('');
  const [text, setText] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      menu1: '',
      menu2: ''
    }
  );
  const [loading, setLoading] = useState();
  
  const handleTextChange = e => {
    const labelName = e.target.name;
    const newValue = e.target.value;

    setText({[labelName]: newValue});
  }

  return (
    <form >
    <input 
      type='text'
      name='0'
      placeholder='insert menu'
      onChange={handleTextChange}
    ></input>
      <input 
        type='text'
        name='1'
        placeholder='insert menu'
        onChange={(e) => {
          setText(e.target.value)
        }}
      ></input>
      <button
        onClick={() => {
          setLoading(true);
          const bodyObj = {
            text: text,
          }
          fetch('/', {
            method: 'POST',
            body: JSON.stringify(bodyObj),
          }).then(data => {
            setLoading(false);
            console.log(body);
          }
          ).catch(err => console.log(err))
        }}
      >Create Roulette!</button>
    </form>
  )
}

export default Input;
