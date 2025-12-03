import React,{useState,useEffect} from 'react'
import ice from "../assets/ice.jpg"
import water from "../assets/water.jpg"
import watervapour from "../assets/watervapour.jpg"
import".//StatesOfMatter.css"

const StatesOfMatter = () => {
  const [temperature,setTemperature]= useState(24)
  const [state, setState]= useState({state: "Liquid", image: water});



  const IncreaseTemp = ()=>{
    setTemperature(temperature +10)
  }
  const DecreaseTemp = ()=>{
    setTemperature(temperature -10)
  }
  const ResetTemp =()=>{
    setTemperature(24);
  }


  const currentState=()=>{
    if(temperature > 100){
      setState({state: "Gas",image: watervapour});
    }
    else if(temperature < 0 ){
      setState({state: "solid",image: ice});
    }
    else{
      setState({state: "Liquid",image: water})
    }
  }
  useEffect(()=>{ 
    currentState();
  },[temperature]);

 return (
  <><div classmate ='container'>
    <div class ='background'>
    <div>  Temperature {temperature} </div> 
        <div>
           <img src={state.image}alt={state.state} 
           height={100} width={100}/>
            <div>  Temperature {temperature} </div> 
            <button onClick={IncreaseTemp}>Heat</button>
            <button onClick={DecreaseTemp}>Cool</button>
            <button onClick={ResetTemp}>Reset Temperature</button>
            <div> State:- {state.state}</div>

           
           

            

           
            
        </div>
        </div>
        </div>
        </>
  )
}

export default StatesOfMatter
