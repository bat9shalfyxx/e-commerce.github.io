import { React, useState, useMemo } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import ShoppingCart from "./components/ShoppingCart";

function App() {
    const [addedItemsList, setAddedItemsList] = useState([]);

    const addItemToShopCart = (item) => {
        setAddedItemsList((prev) => [...prev, item]);
    };

    const deleteItemFromShopCart = (id) => {
        setAddedItemsList(addedItemsList.filter((cur) => cur.id !== id));
    };

    const memoizedAddedItemList = useMemo(() => addedItemsList, [addedItemsList]);

    return (
        <div className="wrapper">
            <ShoppingCart orders={memoizedAddedItemList} deleteFunc={deleteItemFromShopCart} />
            <Header />
            <Items addFunc={addItemToShopCart} />
            <Footer />
        </div>
    );
}

export default App;
