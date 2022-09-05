import React, {useEffect, useContext} from "react";
import { ContextGoods , ContextPurchase, ContextСhoice} from "store/context";
import {serchElem} from "../../helpers"

const Goods = () =>  {
    const {goods, setGoods} = useContext(ContextGoods)
    const {purchase, setPurchase} = useContext(ContextPurchase)
    const {choice, setСhoice} = useContext(ContextСhoice)
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(res => setGoods(res))
    }, [])

    //функция меняет количество покупок + сохраняет выбор в сторе
    function savePurchase (choiceGoods, e, id) {
        e.stopPropagation();
        if (!serchElem(choice, id)){
            choice.push(choiceGoods)
        }     
        let purchaseCount = choice.length;
        setСhoice(choice)
        setPurchase(purchaseCount)
    }
    //отрисовівает выбранные товар
    const showElem = (elem, arr, e) => {
        e.stopPropagation();
        var elemHtml = e.target;
        var check = elemHtml.matches('.btn');
        if (!check) {
            
            const main = document.getElementById("main");
            main.innerHTML = ""
            const elemWithArr = serchElem(arr, elem )
            main.innerHTML = `  <div class="wrap">
            <h2 class = "h2-good">${elemWithArr.title}</h2>
            <div class="block-goods">
            <img class = "img-good" src= ${elemWithArr.image} alt="img-good"/>
            <div class="goods-block-text">
                <div class="text">
                    <h3>Description</h3>
                    <p>${elemWithArr.description}</p>
                    <p class="price">$ ${elemWithArr.price}</p>
                </div>
                <div class="shopping-block-btn">
                <button class="btn-purch">
                Add a purchase
                </button>
                </div>
               
            </div>
            </div>          
         </div>`

         //клик на кнопку
        let elementHtml = document.querySelector(".btn-purch")
        elementHtml.addEventListener("click", function(event){
            savePurchase (elemWithArr, event, elemWithArr.id)
       
        })
        }
    }
    

    return (
     <div className="wrap goods"> {goods.map((el) => {
            return  <div key = {el.id} className="good" onClick={(e) => showElem(el.id, goods, e)}>
                    <img className = "img-good" src= {el.image} alt="My foto"/>
                    <div className="goods-block-text">
                        <div className="text">
                            <p>{el.title}</p>
                            <p className="price">$ {el.price}</p>
                        </div>
                        <button className="shopping btn" data-id = {el.id}  onClick={(e) => savePurchase ( el, e, el.id)}>
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" onClick={(e) => savePurchase ( el, e, el.id)}><path onClick={(e) => savePurchase ( el, e, el.id)} d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>
                        </button>
                    </div>
            </div>
        })}
     </div>
        
    )
}
    
    
        


export default Goods
