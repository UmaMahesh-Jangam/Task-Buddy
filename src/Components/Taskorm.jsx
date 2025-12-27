import React, { useState } from 'react'

export default function Taskorm({addTask}) { //TaskForm
  let[task, setTask] = useState("");
  let[priority, setPriority] = useState(""); //useState("Medium");  
  let[category, setCategory] = useState(""); //useState("General"); if u want to set priotiy default general or medium
  const handlesubmit = (e) => {
        e.preventDefault();
        addTask({text:task, priority, category, completed:false})
        //Reset Value
        setTask("");
        setPriority("");
        setCategory("");
        // setPriority("Medium");
        // setCategory("General");
  }

  return (
    <div>
    <form className='task-form' onSubmit={handlesubmit} >
      <div id='inp'>
        <input type='text' 
        placeholder='Enter the task' 
        value={task} 
        onChange={(e)=>setTask(e.target.value)}/>
        <span><button type='submit'>Add Task</button></span>
        <h1>{task} {priority} {category}</h1>
      </div>
      <div id='btns'>
        <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value='Low'>Low</option> 
        </select>

        <select value={category} onChange={(e)=>setCategory(e.target.value)}>
          <option value='General'>General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option> 
        </select>
      </div>
    </form>
    </div>
  )
}
