import React from 'react'
import { useState } from 'react'



export default function Text(props) {


 let [text,setText]=useState('');
 const onhandle=(event)=>{ 
    setText(event.target.value)
 }

 const Lowerset=()=>{
    if(text.length>=1){
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("Convert to lowercase",'success')
    }
    else{
        props.showAlert('Please write text  after then click Lower Case button','warning')
    }
}

 const upset=()=>{
    if(text.length>=1){
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Convert to uppercase",'success')
    }
    else{
        props.showAlert('Please write text  after then click Upper Case button','warning')
    }
}

const cupset=()=>{
    if(text.length>=1){
        const output = text.charAt(0).toUpperCase() + text.slice(1)
        setText(output);
        props.showAlert("",'success')
    }
    else{
       props.showAlert('Please write text after then click capitalize button','warning')
    }
}

const clearset=()=>{
    if(text.length>1){
    let newtext=" ";
    setText(newtext);
    props.showAlert("text cleared",'success')}
    else{
        props.showAlert('Already Cleared','warning');
    }
}

    

    const copyset=()=>{
        var text=document.getElementById("mytext");
        text.select(); 
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to clipboard",'success')        
    }
    
    const spaceset=()=>{
            if(text.length>=1){
                let newtext=text.split(/[ ]+/);
                setText(newtext.join(" "));
                props.showAlert("Space reamove",'success')
            }
            else{
                props.showAlert('Please write text after then click Remove Extra  Space button','warning')
            }
        
    }

  return (
    <>
    <div className='container my-3' >
    <h3 className='my-3'>Write Text </h3>
    <div className="form-group">
    <textarea className="form-control" id="mytext" rows="5" value={text} onChange={onhandle}  style={{backgroundColor:props.mode==='White'?'grey':'white'}}></textarea>
    <button disabled={text.length===0} type="button" className={`btn btn-info my-3 mx-2`} onClick={upset}>Convert to Upper Case</button>
    <button disabled={text.length===0} type="button" className={`btn btn-info my-3 mx-2`} onClick={Lowerset}>Convert to Lower Case</button>
    <button disabled={text.length===0} type="button" className={`btn btn-info my-3 mx-2`} onClick={cupset}>Convert to Capitalize Case</button>
    <button disabled={text.length===0} type="button" className="btn btn-info my-3 mx-2" onClick={clearset}>Clear Text</button>
    <button disabled={text.length===0} type="button" className="btn btn-info my-3 mx-2" onClick={copyset}>Copy Text</button>
    <button disabled={text.length===0} type="button" className="btn btn-info my-3 mx-2" onClick={spaceset}>Remove Extra Space</button>
    </div>
    </div>
    <div className="container my-3">
      <h3 className='my-2'>Your text summary</h3>
      <p className='my-2'>{text.split(/\s+/).filter((a1)=>{return a1.length!==0}).length} words  and {text.length} character</p>
      <p className='my-2'>{text.length>1? 0.008*text.split(" ").length:0} Minutes read</p>
      <h3 className='my-3'>Preview</h3>
      <p className='my-2'>{text.length>0?text:'Nothing to preview'}</p>
    </div>
    </>
    )
}

