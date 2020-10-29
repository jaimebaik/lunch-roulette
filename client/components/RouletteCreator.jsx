// import React, { useState, useEffect, useReducer } from 'react';
import React, { useState, useEffect } from 'react';
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
  const [entries, setEntries] = useState([]);

  const [text0, setText0] = useState('');
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState(null);
  const [text3, setText3] = useState(null);
  const [text4, setText4] = useState(null);
  const [text5, setText5] = useState(null);
  const [text6, setText6] = useState(null);
  const [text7, setText7] = useState(null);
  const [text8, setText8] = useState(null);
  const [text9, setText9] = useState(null);
  // const [text, setText] = useState(['', '', '', '', '', '', '', '', '', '']);

  const [choices, setChoices] = useState([]);
  // const [container, setContainer] = useState();

  const [loading, setLoading] = useState();

  // function setEmptyString(){
  //   // let newText = new Array(10);
  //   // newText.forEach(el => {
  //   //   el = '';
  //   // });
  //   let newText = ['', '', '', '', '', '', '', '', '', ''];
  //   setText(newText);
  // }

  // useEffect(setEmptyString,[]);

  // function updateText(index){

  // }
  function addEntry() {
    const newEntries = [...entries];
    if(newEntries.length < 8){
      newEntries.push(
        <input 
        type='text'
        value={text0}
        placeholder='insert menu'
        onChange={(e) => {
          setText0(e.target.value);
          // console.log(text0);
        }}
      ></input>
      )
    }
  }

  function emptyTextBox() {
    // let counter = 0;
    // while(text + `${counter}` !== ''){
    //   setText + `${counter++}`('');
    // }
    // setText([]);
    setText0('');
    setText1('');
    setText2('');
    setText3('');
    setText4('');
    setText5('');
    setText6('');
    setText7('');
    setText8('');
    setText9('');
  }

  function postAndGetData() {
    setLoading(true);
    const bodyObj = {
      // text: text,
      '0': text0,
      '1': text1,
      '2': text2,
      '3': text3,
      '4': text4,
      '5': text5,
      '6': text6,
      '7': text7,
      '8': text8,
      '9': text9,
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
        <label>entry1</label>
        <input 
          type='text'
          value={text0}
          placeholder='insert menu'
          onChange={(e) => {
            // const newText = [...text];
            // newText[0] += e.target.value;
            // console.log(newText);
            setText0(e.target.value);
            // console.log(text0);
          }}
        ></input>
        <label>entry2</label>
        <input 
          type='text'
          value={text1}
          placeholder='insert menu'
          onChange={(e) => {
            // const newText = [...text];
            // newText[1] += e.target.value;
            // console.log(newText);
            setText1(e.target.value);
            // console.log(text1);
          }}
        ></input>
        {entries}
        <button onClick={() => {
          addEntry
        }}>+</button>
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
