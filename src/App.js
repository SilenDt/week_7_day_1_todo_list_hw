import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {

  const [tasks, setTasks] = useState([
    {id: 1, task_name: "make bed"},
    {id: 2, task_name: "do dishes"},
    {id: 3, task_name: "put away laundry"},
    {id: 4, task_name: "finish homework"},
    {id: 5, task_name: "brush teeth"},
    {id: 6, task_name: "eat dinner"}
  ]);

  const [newTask, setNewTask] = useState("")

  const handleTaskInput = (evt) => {
    setNewTask(evt.target.value)
  }

  const saveNewTask = (evt) => {
    evt.preventDefault()
    const newTaskObj = {id:Date.now(), task_name: newTask}
    const newListOfTasks = [...tasks, newTaskObj]
    setTasks(newListOfTasks)
    setNewTask("")
  }

  const completeTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
  }



  const toDoListTask = tasks.map((task) => {
    return (
      <li key={task.id}>
        {task.task_name}
      <button class="complete-button"onClick={() => {completeTask(task.id)}}>Complete Task</button>
      </li>

    )
  })
  
  return (
    <div className="App">
        <h1>To Do List</h1>
        <hr></hr>
        <ul>
          {toDoListTask}
        </ul>
        <form onSubmit={saveNewTask}>
          <label htmlFor="new-task">Add New Task: </label>
          <input id="new-item" type="text" value={newTask} onChange={handleTaskInput}></input>
          <input type="submit" value="Save New Task"></input>
        </form>
    </div>
        
  );
}

export default App;
