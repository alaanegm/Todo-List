import { useState } from 'react';
function ToDoList(props){
    const [userInput,setUserInput]=useState();
   
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask(userInput);
        setUserInput("")
    }
   
    const newData=props.list.map((item)=>{
        return  <li  key={item.id}><div className="Todo-item">
           {item.done && <span className="done">&#10003;</span>}   
            <span className={item.done ? "strike" : ""}
          onClick={()=>{props.toggleTask(item.id)}}>{item.name}</span>
            <button className="close" onClick={()=>{props.deleteTask(item.id)}}>x</button>
            </div>
            </li>
       })
    return(
        <>
       
  <div className="form-data">
        <h2>My To Do List</h2>
      <form onSubmit={handleSubmit}>
       <input type="text" id="title" name="title"
        placeholder="Title...."
        value={userInput}
         onChange={(e)=>{setUserInput(e.target.value)}}></input>
        <button className="add">ADD</button>
       </form>
      </div>
       <div className="data">
        <ul>
          {newData}
        </ul>

       </div>
        </>
    )
}
export default ToDoList;