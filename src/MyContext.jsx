import {useState, createContext} from "react";
import PageHeader from "./components/pageHeader";
import Items from "./components/itemList";
import Product from "./components/product";

export const Context = createContext(null);

function MyContext () {

  const [quantity, setQuantity] = useState(0);

  return (
    <>
      <Context.Provider value={{quantity,setQuantity}}>
        <PageHeader />
        <Items />
        <Product />
      </Context.Provider>
    </>
  )
}

export default MyContext;