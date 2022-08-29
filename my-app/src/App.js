
import './App.css';
import React, {useState} from "react";
import Tasks from './components/Tasks/tasks'
import {setRecord} from './components/helpers/helpers'

function App() {
  //массив с которого строятся задания
  const [tasks, setTasks] = useState([])
  //переменная , которая влияет на текст рекомендации к действию
  const [text, setText] = useState("Вкажіть ваше ім'я!")
   //указанное имя
  const [nameUser, setNameUser] = useState("")
  //флаг для отрисовки заданий
  const [flag, setFlag] = useState(false)
  //функция добавляет задания с импута
  function addTasks (nameUser){
    let text = document.querySelector(".textValue").value
    if(text.length && !tasks.includes(text) ){
      setTasks([...tasks, text]);
      document.querySelector(".textValue").value = ""
      //функция записывает задания в стор
      setRecord(nameUser, text)
    }
  }
//функция отрисовывает текст , задания, сохраняет значения
  function addName (){
    let nameValue = document.querySelector(".textValue").value;
    let info =JSON.parse(sessionStorage.getItem(nameValue));
    let textInfo = ""
      if (info){
      textInfo = `${nameValue}, ваші завдання вказані у списку. Якщо потрібно щось додати - заповніть відповідне поле!`
      }  
      else  {
      textInfo = `${nameValue}, список ваших завдань пустий. Якщо потрібно щось додати - заповніть відповідне поле!`
        }
    setText(textInfo);
    setNameUser(nameValue);
    document.querySelector(".textValue").value = "";
    if (info && !flag && nameValue){
      setTasks([...tasks, ...info])
      setFlag(true)
  }
  }

  return (
    <div className="App">
      <h1>{text}</h1>
     <div className= "tasks">
     <input type="text" className='textValue'></input>
        <button onClick={nameUser ? ()=>addTasks(nameUser) : ()=>addName()}>ОК</button> 
        <div className="blockTasks">
       {Tasks (tasks, "list", nameUser)}
        </div>
     </div>
    </div>
  );
}

export default App;
