import {useState, useEffect} from 'react'
import "./App.css"

const App = () => {
   const [valueInput,setValueInput]=useState("")
   const [showError,setShowError]=useState(false)
   const [an,setAn]=useState(false)
   const changetext=(e)=>{
      setValueInput(e.target.value)


   }
   useEffect(()=>{
      if(valueInput.length>=10)   {
         setShowError(true)
         setAn(true)
         
      }
   })
	
	

	return (
    <div>
      <input type={Text} onChange={(e) => changetext(e)} value={valueInput} disabled={an}></input>
      {showError&&<h1>Max la 10</h1>} 
    </div>
  );
}
export default App;

