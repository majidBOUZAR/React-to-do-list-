import React from 'react'

const Tasklist =(props)=>{
    const {tasks,removeTask} = props


    return (<div>
        <h2>Total tasks - {tasks.length}</h2>
        {
            tasks.map((task)=>{
                return(<div>
                    <h3>Title - {task.title}</h3>
                    <p>Details  : {task.body}</p> <button onClick={()=>{removeTask(task.title)} } class="btn btn-success">Done</button>
                </div>)
            })
        }
    </div>)
}

export default Tasklist