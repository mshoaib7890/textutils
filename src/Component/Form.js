import React, { useState } from 'react';

export default function Form(props) {
const changereverse=()=>{
  let strArr=text.split('')
  strArr=strArr.reverse()
  let rev=strArr.join('')
  setText(rev)
    props.togglealert('Text has been reverse','success');
}
  const changeClear=()=>{
    console.log(text)
    let clear=' '
    setText(clear)
    props.togglealert('Text has been clear','success');
  }
const changelocase=()=>{
  console.log(text)
  let lower=text.toLowerCase();
  setText(lower)
  props.togglealert('Text has been change to LowerCase','success');
}
  const changeUpper=()=>{
      console.log( text)
      let newText=text.toUpperCase();
      setText(newText)
      props.togglealert('Text has been  change to UpperCase','success');
  }
  const handleonchange =(event)=>{
      console.log('onchange')
      setText(event.target.value);

      }
  const [text, setText] = useState('');
return (
  <>
  <div>
  <div className="container" style={{color: props.mode=='dark'?'white':'black'}}>
  <h1>Enter the Text Here</h1>
<div className="mb-3">
  <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'grey',
color:props.mode=='dark'?'white':'#042473'}} value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className='btn btn-success mx-2' onClick={changeUpper}>Convert to UpperCase</button>
<button className='btn btn-danger mx-2' onClick={changelocase}>Convert to lowerCase</button>
<button className="btn btn-primary mx-2 my-2" onClick={changeClear}>Clear Data</button>
<button className="btn btn-primary mx-2 my-2" onClick={changereverse}>Convert to reverse</button>
</div>
</div>
<div className="container my-3" style={{color: props.mode=='dark'?'white':'black'}}>
    <h2>{props.texts}</h2>
    <p >{text.split(" ").length-1} <b>words   </b>  {text.length} <b>characters</b></p>
    <p >{0.008 * text.length} <b>Time</b></p>
    <h1>Updated Text</h1>
    <p>{text}</p>
</div>
</>
)
}
