import React, {useState,createContext, useContext} from "react";
import PageHeader from "../components/pageHeader";
import PageFooter from "../components/pageFooter";
import {Context} from "../App";
import iphone from "../assets/iphone.jpeg"
import airpod from "../assets/airpod.jpeg"
import macbook from "../assets/macbook.jpeg"




function product() {

    const {quantity,setQuantity} = useContext(Context);   
    const {listIphone, setListIphone} = useContext(Context);
    const {listAirpod, setListAirpod} = useContext(Context);
    const {listMacbook, setListMacbook} = useContext(Context);

    function increaseQuantityIphone() {
        setQuantity(quantity+1)
        setListIphone(listIphone+1)
        
    }

    function increaseQuantityAirpod() {
        setQuantity(quantity+1)
        setListAirpod(listAirpod+1)
    }

    function increaseQuantityMacbook() {
        setQuantity(quantity+1)
        setListMacbook(listMacbook+1)
    }

    return (
        <div>  
           <PageHeader/>
           <PageFooter />
           <div className="flex justify-evenly p-20">
            <div className="flex flex-col w-60 p-5 rounded-md border-2 border-slate-800 gap-5 font-mono" >
                    <img className="w-52 h-40" src={iphone} alt="iphone" />
                    <div>Iphone</div>
                    <div>Price: ฿41,500.00</div>
                    <button className="p-3 rounded-md bg-amber-300 text-center" onClick={increaseQuantityIphone}>Add to cart</button>
            </div>
            <div className="flex flex-col w-60 p-5 rounded-md border-2 border-slate-800 gap-5 font-mono" >
                    <img className="w-52 h-40" src={airpod} alt="iphone" />
                    <div>Airpod</div>
                    <div>Price: ฿8,990.00</div>
                    <button className="p-3 rounded-md bg-amber-300 text-center" onClick={increaseQuantityAirpod}>Add to cart</button>
            </div>
            <div className="flex flex-col w-60 p-5 rounded-md border-2 border-slate-800 gap-5 font-mono" >
                    <img className="w-52 h-40" src={macbook} alt="iphone" />
                    <div>Macbook</div>
                    <div>Price: ฿94,900.00</div>
                    <button className="p-3 rounded-md bg-amber-300 text-center" onClick={increaseQuantityMacbook}>Add to cart</button>
            </div>
           </div>
   
        </div>
    )
}

export default product;