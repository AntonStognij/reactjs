import React, {useState} from "react";
function Tasks (arr, className) {
    const [idArr, setId] = useState([])

    function addClass (key){
        if(!idArr.includes(key) ){
            setId([...idArr, key]);
          }
    }

 
    return (
        <ol className = {className}>
        {arr.map((el, key) =>
        (<li key = {key} className = {idArr.includes(key) ? "comlete":"active"}> <div className="blocTask"> <div className="task"><p>{el} </p></div> <button onClick={()=>addClass(key)} className = 'botton'>Виконано</button></div></li>)
        )}
        </ol>
    )
       
}
export default Tasks