import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from 'components/Header';
import Main from "components/Main";
import Footer from "components/Footer";
import Basket from "components/Basket";
import Goods from "components/Goods";
import Error from "components/ErrorPage";
import Product from "components/Modal";



const App = () => {
    
    return (
        <>
        <Header/>
        <Product/>
        <Routes>
            <Route path="/" element = { <Main/>}></Route>
            <Route path="/home" element = { <Main/>}></Route>
            <Route path="/basket" element = { <Basket/>}></Route>
            <Route path="/goods" element = { <Goods/>}></Route>
            <Route path="*" element = { <Error/>}></Route>
        </Routes>
        <Footer/>
        </> 
       
      
    )
}

export default App;
