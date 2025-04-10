import React, { useState } from "react";
import Item from "./Item";
import productList from "../productList";

export default function Items() {
    let [products] = useState(productList);

    return (
        <main className="product-list">
            {products.map((product) => (
                <Item product={product} key={product.id} />
            ))}
        </main>
    );
}
