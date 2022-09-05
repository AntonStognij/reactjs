import React, { useState } from "react";
import App from "./app";

import { ContextGoods , ContextPurchase } from "store/context";
import { createRoot } from 'react-dom/client';
import './styles/all'

const container = document.getElementById('root');
const root = createRoot(container);

function Init() {
    const [goods, setGoods] = useState([])
    const [purchase, setPurchase] = useState(0)
    return (
        <React.StrictMode>
            <ContextGoods.Provider value={{goods, setGoods}}>
                <ContextPurchase.Provider value={{purchase, setPurchase}}>
                    <App/>
                </ContextPurchase.Provider>
            </ContextGoods.Provider>
        </React.StrictMode>
    )
}

root.render(<Init />);

const devMode = process.env.NODE_ENV === "development"
if(devMode && module && module.hot){
    module.hot.accept()
}
