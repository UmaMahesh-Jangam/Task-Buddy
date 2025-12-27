import React, { useEffect, useState } from 'react'
import Taskorm from './Components/Taskorm'
import Tasklist from './Components/Tasklist'
import Progresstracker from './Components/Progresstracker'
import './style.css'
export default function App() {
  const[tasks, setTasks] = useState([]);
  useEffect(()=>{
      localStorage.setItem("tasks", JSON.stringify(tasks));
  },);
  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index))
  }

  const clearTasks = () => {
    setTasks([]);
  }

  return (
    <div className='App'>
      <header>
        <h1>TaskBuddy</h1>
        <p><i>Your Friendly Task Manager</i></p>
      </header>
      <Taskorm addTask = {addTask}/>
      <Tasklist tasks = {tasks} updateTask = {updateTask} deleteTask = {deleteTask}/>
      <Progresstracker tasks = {tasks} />
      {tasks.length>0 && (<button className='clear-btn'
      onClick={clearTasks}>Clear All Tasks</button>)}
    </div>
  )
}
