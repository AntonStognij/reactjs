import React, { useState } from "react";
import App from "./app";
import ReactDOM from 'react-dom';
import { ContextUser, ContextTask } from "store/context";
import { createRoot } from 'react-dom/client';
import './styles/all'

const container = document.getElementById('root');
const root = createRoot(container);
function Init() {
    const [user, setUser] = useState({})
    const [task, setTask] = useState([])
    return (
        <React.StrictMode>
            <ContextUser.Provider value={{user, setUser}}>
                <ContextTask.Provider value={{task, setTask}}>
                    <App/>
                </ContextTask.Provider>
            </ContextUser.Provider>
        </React.StrictMode>
    )
}

root.render(<Init />);

const devMode = process.env.NODE_ENV === "development"
if(devMode && module && module.hot){
    module.hot.accept()
}
