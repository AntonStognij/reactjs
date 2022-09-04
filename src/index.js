import React, { useState } from "react";
import App from "./app";

import { ContextGoods } from "store/context";
import { createRoot } from 'react-dom/client';
import './styles/all'

const container = document.getElementById('root');
const root = createRoot(container);

function Init() {
    const [goods, setGoods] = useState([])
    return (
        <React.StrictMode>
            <ContextGoods.Provider value={{goods, setGoods}}>
                    <App/>
            </ContextGoods.Provider>
        </React.StrictMode>
    )
}

root.render(<Init />);

const devMode = process.env.NODE_ENV === "development"
if(devMode && module && module.hot){
    module.hot.accept()
}
