
import './App.css';
import React, {useState} from "react";
import Tasks from './components/tasks'
function App() {

  const [tasks, setTasks] = useState([])
  function addTasks (){
    
    let text = document.querySelector(".textValue").value
    console.log("includes",tasks.includes(text))
    if(text && !tasks.includes(text) ){
      setTasks([...tasks, text]);
      document.querySelector(".textValue").value = ""
    }
  }
  return (
    <div className="App">
     <h1>Вкажіть , що ви плануєте зробити!</h1>
     <div className= "tasks">
     <input type="text" className='textValue'></input>
        <button onClick={()=>addTasks()}>Додати</button> 
        <div className="blockTasks">
       {Tasks (tasks, "list")}
        </div>
     </div>
    </div>
  );
}

export default App;
