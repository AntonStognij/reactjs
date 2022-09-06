import React, { useState } from "react";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import { ContextGoods , ContextPurchase, ContextСhoice, ContextProduct } from "store/context";
import { createRoot } from 'react-dom/client';
import './styles/all'

const container = document.getElementById('root');
const root = createRoot(container);

function Init() {
    const [goods, setGoods] = useState([])
    const [purchase, setPurchase] = useState(0)
    const [choice, setСhoice] = useState([])
    const [product, setProduct] = useState({})
    return (
        <React.StrictMode>
            <BrowserRouter>
                <ContextGoods.Provider value={{goods, setGoods}}>
                     <ContextPurchase.Provider value={{purchase, setPurchase}}>
                        <ContextСhoice.Provider value={{choice, setСhoice}}>
                            <ContextProduct.Provider value={{product, setProduct}}>
                                    <App/>
                            </ContextProduct.Provider> 
                         </ContextСhoice.Provider>  
                    </ContextPurchase.Provider>
                </ContextGoods.Provider>
            </BrowserRouter>
        </React.StrictMode>
    )
}

root.render(<Init />);

const devMode = process.env.NODE_ENV === "development"
if(devMode && module && module.hot){
    module.hot.accept()
}
