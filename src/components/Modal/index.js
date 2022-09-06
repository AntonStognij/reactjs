import React, {useContext} from "react";
import { ContextPurchase, ContextСhoice, ContextProduct} from "store/context";
import {serchElem, clear } from "../../helpers"


const Product = () => {
    const {product, setProduct} = useContext(ContextProduct)
    const {purchase, setPurchase} = useContext(ContextPurchase)
    const {choice, setСhoice} = useContext(ContextСhoice)

    function savePurchase (choiceGoods, e, id) {
        e.stopPropagation();
        let element = serchElem(choice, id)
        if (!element){
            choice.push(choiceGoods)
        }   
        let purchaseCount = choice.length;
        setСhoice(choice)
        setPurchase(purchaseCount)
    }
    function clearProduct (){
        setProduct(clear(product, 1))
    }
    
    return product.length && (
        <div>
            <div className="wrap modal">
                    <div className="block-goods">
                    
                        <img className = "img-good" src= {product[0]?.image} alt="img-good"/>
                        <div className="goods-block-text">
                            <div className="shopping-block-btn">
                            <button className="close" onClick={(e) => clearProduct ()}>X</button>
                            </div>
                           
                        <h2 className = "h2-good">{product[0]?.title}</h2>
                            <div className="text">
                                 <h3>Description</h3>
                                  <p>{product[0]?.description}</p>
                                  <p className="price">$ {product[0]?.price}</p>
                            </div>
            <div className="shopping-block-btn">
            <button className="btn-purch" onClick={(e) => savePurchase ( product[0], e, product[0].id)} >
            Add a purchase
            </button>
            </div>
           
                        </div>
                    </div>          
        </div>
</div>
        )
}

export default Product;