import React, {useContext} from "react";
import { ContextPurchase } from "store/context";


const Header = () => {
    
    const {purchase, setPurchase} = useContext(ContextPurchase)
    return (
        <header>
        <div className="header-block-one-bg">
        <div className="wrap header-block-one">
            <div className="header-block-one-left">
                <div className="header-block-one-left-language">
                    <span>
                        Language:
                    </span>
                    <select name="language">
                    <option value="1">English</option>
                    </select>
                </div>
            <div>
                <span>
                    Currency:
                </span>
                <select name="currency">
                    <option value="1">USD</option>
                </select>
            </div>
            </div>
                <ul className="header-block-one-right">
                    <li><div><a href="#">Account</a> </div></li>
                    <li><div><a href="#">Wishlist</a> </div></li>
                    <li><div><a href="#">Checkout</a> </div></li>
                    <li><div><a href="#">Log in</a> </div></li>
                    <li><div><a href="#">Sign in</a> </div></li>
                </ul>
        </div>
        
    </div>
    <div className="wrap header-block-two">
            <h1>LEO SHOP</h1>
            <ul className="header-block-two-left">
                    <li><a href="#">HOME</a> </li>
                    <li><a href="#">WOMEN</a> </li>
                    <li><a href="#">MEN</a> </li>
                    <li><a href="#">OTHER</a> </li>
                    <li><a href="#">PURCHASE</a> </li>
            </ul>
            <div className="header-block-two-right">
            
                <form>
                     <input type="text" placeholder="Search.."></input>
                </form>
                <button className="shopping"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z"/></svg>   </button>
                <div className=" shopping-cart">
                <button className="shopping"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z"/></svg> </button> 
                <div className="card"> <span> CART  </span> <span> ({purchase})  </span></div>
              </div>
               
           
            </div>
    </div>
    </header>
    )
}

export default Header;
