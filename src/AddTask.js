import React,{useState} from 'react'

const AddTask =(props)=>{
    const {addTask} = props
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [error,setError] = useState(false)

    const handleTitle =(e)=> setTitle(e.target.value)
    const handleBody =(e)=> setBody(e.target.value)

    const runValidations =()=>{
        if(title.trim().length === 0){
            alert("Title cannot be empty")
            setError(true)
        }else if (body.trim().length === 0){
            alert("body cannot be empty")
            setError(true)
        }
    }

    const handlereset =()=>{

        setTitle("")
        setBody("")
        setError(false)

    }

    const handlereset1=(e) =>{
        e.preventDefault()
        handlereset()
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        runValidations()
        if(!error){
            const data ={
                title,
                body
            }
            addTask(data)
            handlereset()
        }
    }

    return (<div class="card" >
    <div class="card-body">
    <h2>Add Task</h2>
          <form>
              <label>Task Title : </label><br/>
              <input type="text" placeholder="Enter the title for task" value={title} onChange={handleTitle}/><br/><br/>
              <label>Deatils about task : </label><br/><textarea value={body} onChange={handleBody} placeholder="enter details"></textarea> <br/>
              <button onClick={handleSubmit} class="btn btn-success">Add Task</button> <button onClick={handlereset1} class="btn btn-danger">Reset</button>
          </form>
    </div>
  </div>)
}

export default AddTask

