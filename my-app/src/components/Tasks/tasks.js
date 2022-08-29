import React, {useState} from "react";
//отрисовывает список
function Tasks (arr = null, className, nameUser) {
    const [idArr, setId] = useState([])
    function addClass (key, el){
        if(!idArr.includes(key) ){
            setId([...idArr, key]);
            let arrStorageTask =JSON.parse(sessionStorage.getItem(nameUser));
            let index = arrStorageTask.indexOf(el);
            if (index !== -1){
                arrStorageTask.splice(index, 1)
                arrStorageTask.length > 0 ? sessionStorage.setItem(nameUser, JSON.stringify(arrStorageTask)) :sessionStorage.removeItem(nameUser)
            }
          }
    }
    return (
        <ol className = {className}>
        {arr.map((el, key) =>
        (<li key = {key}> <div className="blocTask"> <div className="task"><p className = {idArr.includes(key) ? "comlete":"active"}>{el} </p></div> <button onClick={()=>addClass(key, el)} className = 'botton'>Виконано</button></div></li>)
        )}
        </ol>
    )
       
}
export default Tasks