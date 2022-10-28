import React,{useState} from 'react'
import AddTask from './AddTask'
import Tasklist from './Taskslist'


const TaskContainer =(props)=>{
    const [tasks,setTasks] = useState([])

    const addTask =(task)=>{
        setTasks([...tasks,task])
    }

    const removeTask =(title)=>{
        const result =tasks.filter((task)=>{
            return task.title !== title 
        })
        setTasks(result)
    }

    

    return (<div className="row">
        <div className="col-md-8"><Tasklist tasks={tasks}  removeTask={removeTask}/></div>
        <div className="col-md-4"><AddTask  addTask={addTask} /></div> 
    </div>)
}

export default TaskContainer