import React,{useState} from 'react'
import NavBar from "./Components/NavBar";
import Text from "./Components/Text";
import Alert from './Components/Alert';

function App(){
    
   const [mode,setmode]=useState('info');
   const [alert,SetAlert]=useState(null);

  const showAlert=(message,type)=>{

         SetAlert({
            msg:message,
            type:type
         })
         setTimeout(
            ()=>{
               SetAlert(null);
            },2000
         )}

  const toggle=(cls)=>{
   document.body.style.backgroundColor=cls
   setmode(cls)
   if(cls==="DimGrey"){
      showAlert("Dark mode has been enabled ",'success');
   }
   else{
      showAlert(cls+" mode has been enabled ",'success');
   }
  }



   
     return (
        <>
        <NavBar Tittle="TextUtlis" mode={mode} toggle={toggle}/>
        <Alert alert={alert}/>
        <Text showAlert={showAlert}/>
        </>
     )
}

export default App;