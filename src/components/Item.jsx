import React from "react";

export default function Item({ product }) {
    return (
        <div className="product--list__item">
            <div className="product--list__item--img">
                <img src={product.image} alt={product.title} loading="lazy" />
            </div>
            <div className="product--list__item--text">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h3>{product.price}</h3>
                <div className="product--list__item--add-but">+</div>
            </div>
        </div>
    );
}
