import { useState, useContext } from "react";
import {Context} from "../App";
import iphone from "../assets/iphone.jpeg"
import airpod from "../assets/airpod.jpeg"
import macbook from "../assets/macbook.jpeg"
import close from "../assets/close.png"


function itemList () {

    const {quantity,setQuantity} = useContext(Context);   
    const {listIphone, setListIphone} = useContext(Context);
    const {listAirpod, setListAirpod} = useContext(Context);
    const {listMacbook, setListMacbook} = useContext(Context);
    


    function increaseQuantityIphone() {
        setQuantity(quantity+1)
        setListIphone(listIphone+1)
        
    }

    function decreaseQuantityIphone() {
        if (quantity !== 0 && listIphone !==0) {
            setQuantity(quantity-1)
            setListIphone(listIphone-1)
        }
    }

    function increaseQuantityAirpod() {
        setQuantity(quantity+1)
        setListAirpod(listAirpod+1)
    }

    function decreaseQuantityAirpod() {
        if (quantity !== 0 && listAirpod !==0) {
            setQuantity(quantity-1)
            setListAirpod(listAirpod-1)
        }
    }

    function increaseQuantityMacbook() {
        setQuantity(quantity+1)
        setListMacbook(listMacbook+1)
    }

    function decreaseQuantityMacbook() {
        if (quantity !== 0 && listMacbook !==0) {
            setQuantity(quantity-1)
            setListMacbook(listMacbook-1)
        }
    }

    function resetQuantity() {
        setQuantity(0)
        setListIphone(0)
        setListAirpod(0)
        setListMacbook(0)
    }

    function removeIphone() {
        setQuantity(quantity-listIphone)
        setListIphone(0)
        document.getElementById("IphoneItem").remove();
    }

    function removeAirpod() {
        setQuantity(quantity-listAirpod)
        setListAirpod(0)
        document.getElementById("AirpodItem").remove();
    }

    function removeMacbook() {
        setQuantity(quantity-listMacbook)
        setListMacbook(0)
        document.getElementById("MacbookItem").remove();
    }

    const iphonePrice = 41500 ;
    const airpodPrice = 8990 ;
    const macbookPrice = 94900 ;
    const totalPrice = (iphonePrice*listIphone) + (airpodPrice*listAirpod) + (macbookPrice*listMacbook);



    return (
        <div className="p-10 font-mono" >
            <h1 className="text-2xl font-bold">Cart</h1>
            <ul className="mt-10 ">
                <li id="IphoneItem" className="flex items-center gap-5 border-solid border-2 border-black p-2 rounded-md">
                    <img src={iphone} alt="iphone" />
                    <p>Iphone</p>
                    <p>Price: ฿41,500.00</p>
                    <button className="bg-slate-200 w-8 rounded-md" onClick={decreaseQuantityIphone}>-</button>
                        <p>{listIphone}</p>
                    <button className="bg-slate-200 w-8 rounded-md" onClick={increaseQuantityIphone}>+</button>
                    <img className="ml-auto cursor-pointer" src={close} alt="close" onClick={removeIphone}/>
                </li>
                <li id="AirpodItem" className="mt-10 flex items-center gap-5 border-solid border-2 border-black p-2 rounded-md">
                    <img src={airpod} alt="iphone" />
                    <p>Airpod pro gen 2</p>
                    <p>Price: ฿8,990.00</p>
                    <button className="bg-slate-200 w-8 rounded-md" onClick={decreaseQuantityAirpod}>-</button>
                        <p>{listAirpod}</p>
                    <button className="bg-slate-200 w-8 rounded-md" onClick={increaseQuantityAirpod}>+</button>
                    <img className="ml-auto cursor-pointer" src={close} alt="close" onClick={removeAirpod} />
                </li>
                <li id="MacbookItem" className="mt-10 flex items-center gap-5 border-solid border-2 border-black p-2 rounded-md">
                    <img src={macbook} alt="iphone" />
                    <p>MacBook Pro</p>
                    <p>Price: ฿94,900.00</p>
                    <button className="bg-slate-200 w-8 rounded-md" onClick={decreaseQuantityMacbook}>-</button>
                        <p>{listMacbook}</p>
                    <button className="bg-slate-200 w-8 rounded-md" onClick={increaseQuantityMacbook}>+</button>
                    <img className="ml-auto cursor-pointer" src={close} alt="close" onClick={removeMacbook}/>
                </li>
            </ul>
            <div className="flex gap-5 mt-10 justify-end items-center">
                Total: ฿{totalPrice.toLocaleString()} 
                <button className="bg-stone-300 rounded-md p-2">Check out</button>
                <button className="bg-stone-300 rounded-md p-2" onClick={resetQuantity}>Reset</button>
            </div>

    

        </div>
        
    )

}

export default itemList;