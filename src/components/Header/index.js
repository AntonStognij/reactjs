import React, {useEffect, useContext} from "react";
import {ContextUser} from "store/context";

const Header = () => {
    const {user, setUser} = useContext(ContextUser)
        useEffect(() => {
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
    }, [])
    return (
        <header>
            <h2>Test</h2>
        </header>
    )
}

export default Header;
