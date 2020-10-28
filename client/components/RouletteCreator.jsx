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
  const [text, setText] = userReducer();
  const [loading, setLoading] = useState();

  return (
    <Form >
      <input 
        type='text'
        placeholder='insert menu'
        onChange={(e) => {
          setText(e.target.value)
        }}
      ></input>
      <input 
        type='text'
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
            setLoading(false)
          }
          ).catch(err => console.log(err))
        }}
      >Submit!</button>
    </Form>
  )
}

export default Input;
