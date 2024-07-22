import React, {useState, createContext} from "react";
import PageHeader from "./components/pageHeader";
import Items from "./components/itemList";
import PageFooter from "./components/pageFooter";
import './App.css';
import Product from "./components/product";

import { RouterProvider, createBrowserRouter, BrowserRouter, Router ,Routes,Route} from 'react-router-dom'


export const Context = createContext(null);

function App () {
  
  const [quantity, setQuantity] = useState(0);

  const [listIphone, setListIphone] = useState(0);

  const [listAirpod, setListAirpod] = useState(0);

  const [listMacbook, setListMacbook] = useState(0);


  return (
    <BrowserRouter>
      <Context.Provider value={{quantity,setQuantity,listIphone, setListIphone, listAirpod, setListAirpod, listMacbook, setListMacbook}}>
        <Routes>
          <Route path="/cart" element={<>
          <PageHeader/>
          <Items/>
          <PageFooter/>
          </>}/>
          <Route path="/" element={<Product/>}/>
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  )
}

export default App;

