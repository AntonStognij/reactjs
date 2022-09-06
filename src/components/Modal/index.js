import React, {useState} from "react";
import { ContextProduct} from "store/context";
const Product = () => {
    const [product, setProduct] = useState({ContextProduct})
    return product && (
        <div>
            <div className="wrap">
                    <h2 className = "h2-good">${product.title}</h2>
                    <div className="block-goods">
                        <img className = "img-good" src= {product.image} alt="img-good"/>
                        <div className="goods-block-text">
                            <div className="text">
                                 <h3>Description</h3>
                                  <p>{product.description}</p>
                                  <p className="price">$ {product.price}</p>
                            </div>
            <div className="shopping-block-btn">
            <button className="btn-purch">
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