import React from "react";

// import Header from 'components/Header';
// import User from "components/User";
// import CreateTask from "components/CreateTask";
// import ListTask from "components/ListTask";

const App = () => {
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
                <ul className="header-block-one-right">
                        <li><a href="#">HOME</a> </li>
                        <li><a href="#">WOMEN</a> </li>
                        <li><a href="#">MEN</a> </li>
                        <li><a href="#">OTHER</a> </li>
                        <li><a href="#">PURCHASE</a> </li>
                </ul>
                
                 <form action="">
                 <input type="text" placeholder="Search.."></input>
                </form>
            </div>
    </header>
    )
}

export default App;
