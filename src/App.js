import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import ShoppingCart from "./components/ShoppingCart";

function App() {
    return (
        <div className="wrapper">
            <ShoppingCart />
            <Header />
            <Items />
            <Footer />
        </div>
    );
}

export default App;
