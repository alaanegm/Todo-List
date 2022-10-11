
import { useState } from 'react';
import './App.css';

import ToDoList from './ToDoList'
function App() {
  const[data,setData]=useState([
    {id: 1, name: "Hit The Gym", done: false},
    {id: 2, name: "Go shopping", done: true},
    {id: 3, name: "meet George", done: false},
    {id: 4, name: "Read  Books", done: false}
    ]);
   console.log(data)
    const addTask = (userInput ) => {
      let List = [...data];
      List = userInput ? [...List, { id: data.length + 1, name: userInput, done: false }]:data;
      setData(List);
     
    }
   function deleteTask(id){
    let List =data.filter((item)=>{
        return  item.id !== id
    })
    setData(List);  
    console.log("delete")
   }
    function toggleTask(id){
      let List=data.map((item)=>{
         return (item.id === id) ? { ...item, done: !item.done } : { ...item};
        })
      setData(List);  
      console.log("toggle")
    }
  
  
  console.log(data)
  
  return (
   <>
      <div className="App">
        <p><svg className="svg-icon" viewBox="0 0 20 20">
							<path fill="red" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
						</svg></p>
        <ToDoList  list={data} addTask={addTask} 
        toggleTask={toggleTask}
        deleteTask={deleteTask}/>
       </div>
  </>
    );
}

export default App;
