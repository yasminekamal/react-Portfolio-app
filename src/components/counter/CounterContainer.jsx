import Counter from './Counter';
import CounterActions from './CounterActions';
import {useState} from 'react';

const CounterContainer=()=>{
    const [counter,setCounter]=useState(10);
    const increment=()=>{
       setCounter(counter+1);
    }
    const decrement=()=>{
       setCounter(counter-1)
     }
    return(
     <div style={{backgroundColor:"cyan" , width:"50%",padding:"20px" , margin:"50px auto"}}>
       <Counter counter={counter}/>
       <CounterActions increment={increment} decrement={decrement}/>
     </div>
     
    );
}
export default CounterContainer;