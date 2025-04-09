import React, { useState, useEffect } from "react";
import Item from "./Item";
import productList from "../productList";

export default function Items() {
    const [products, setProduct] = useState(productList);
    console.log(products);

    return (
        <main className="product--list">
            {products.map((product) => (
                <Item product={product} key={product.id} />
            ))}
        </main>
    );
}
