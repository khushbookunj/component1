import React,{userEffect,useState} from "react";
import"../styles/App.css";
cost App=()=>{
  let [count,setCount]=useState(0)
  return (<div className="ball">
          <h1 className="count"
          onDoubleClick={()=>{alert("can't edit it")}}>{count}</h1>
<button className="increment-button" onClick={()=>
{ setCount(count+1}}>Increment</button>
</div>
)}
xport default App;
