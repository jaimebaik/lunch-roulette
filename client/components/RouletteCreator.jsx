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
  const [text, setText] = useState([]);
  const [choices, setChoices] = useState([]);
  const [loading, setLoading] = useState();

  function setEmptyString(){
    let newText = new Array(10);
    newText.forEach(el => {
      el = '';
    });

    setText(newText);
  }

  useEffect(setEmptyString,[]);
  
  function addEntry() {
    const newEntries = [...entries];
    console.log('new Entries 1st', newEntries)
    if(newEntries.length < 8){
      const index = newEntries.length+2;
      newEntries.push(
        <div>
          <label>entry{index+1}</label>
          <input 
          type='text'
          value={text[index]}
          placeholder='insert menu'
          onChange={(e) => {
            const newText = [...text];
            console.log('text', text)
            newText[index] = '';
            newText[index] += e.target.value;
            console.log('newTxt', newText)
            setText(newText);
          }}
        ></input>
      </div>
      )
      setEntries(newEntries);
    }
  }

  function emptyTextBox() {
    setText([]);
    // setEntries([]);
  }

  function postAndGetData() {
    setLoading(true);
    const bodyObj = {
      '0': text[0],
      '1': text[1],
      '2': text[2],
      '3': text[3],
      '4': text[4],
      '5': text[5],
      '6': text[6],
      '7': text[7],
      '8': text[8],
      '9': text[9],
    }
    // emptyTextBox();
    console.log('BODY: ',bodyObj);
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
        <div>
          <label>entry1</label>
          <input 
            type='text'
            // value={text0}
            value={text[0]}
            placeholder='insert menu'
            onChange={(e) => {
              const newText = [...text];
              newText[0] = '';
              newText[0] += e.target.value;
              console.log('text in 0', text);
              setText(newText);
              // setText0(e.target.value);
              // console.log(text0);
            }}
          ></input>
        </div>
        <div>
          <label>entry2</label>
          <input 
            type='text'
            // value={text1}
            value={text[1]}
            placeholder='insert menu'
            onChange={(e) => {
              const newText = [...text];
              newText[1] = '';
              newText[1] += e.target.value;
              setText(newText);
              console.log(newText);
              // setText1(e.target.value);
              // console.log(text1);
            }}
          ></input>
        </div>
        {entries}
        <button onClick={(e) => {
          e.preventDefault();
          addEntry()
        }}>+</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            postAndGetData();
            emptyTextBox();
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
