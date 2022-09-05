import React, {useContext} from "react";
import { ContextСhoice} from "store/context";

const Basket = () => {
const {choice, setСhoice} = useContext(ContextСhoice)
//ищем массив и удалем

const dellСhoice = (id, arr) => {
    const newArr = arr.filter((el) => {
    return el.id != id
    })
    console.log(newArr)
    setСhoice(newArr)
}
const styleElem = ()=> {
    choice.length >0 ? "block" :"none"
}
    return choice.length ?  (  <div className="wrap basket"> {choice.map((el) => {
                   return  <div key = {el.id} className="basket-good">
                    <img className = "basket-img-good" src= {el.image} alt="goods"/>
                           <div className="goods-block-text">
                           
                               <div className="text">
                                   <h3>{el.title}</h3>
                                   <p className="price">$ {el.price}</p>
                               </div>
                               
                           </div>
                           <button className="btn-del" data-id = {el.id} onClick={() => dellСhoice (el.id, choice)}>X</button>
                   </div>
               })}
                <button className="make">MAKE A PURCHASE</button>
            </div>
               
           ) : <h3>dcdcdc</h3>
}

export default Basket;