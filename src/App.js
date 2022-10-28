import React from 'react'
import './App.css';
import TaskContainer from './taskContainer'
import 'bootstrap/dist/css/bootstrap.css'

const App =(props)=>{
  
  return (<div className="App">
    <div className="container">
    <TaskContainer />
    </div>
    
  </div>)
  
}




export default App;
