import {useState, useContext} from "react"
import {Context} from "../App";
import storeImage from "../assets/store.png";
import cart from "../assets/cart.png";
import { Link } from "react-router-dom";

function PageHeader() {
    
    const {quantity} = useContext(Context);

    return (
        <>
        <div className="flex items-center justify-between p-5 bg-slate-800 font-mono">     
            <Link to={'/'}><img src={storeImage} alt="store" /></Link>
            <p className="text-white">
                <Link to={'/'}>Product</Link>
            </p>
            <div className="flex items-center">
            <p>
                <Link to={'/cart'}><img src={cart} alt="cart" /> </Link>
            </p>
            <p className="text-white">{quantity}</p>
            </div>
        </div>
        </>
        
    );
}

export default PageHeader;