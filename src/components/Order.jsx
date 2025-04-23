import React from "react";

const Order = React.memo(function Order({ order, deleteFunc }) {
    console.log(`Рендерим Order с id ${order.id}`);
    return (
        <div className="order-list">
            <div className="order-list__item--img">
                <img src={order.image} alt={order.title} loading="lazy" />
            </div>
            <div className="order-list__item--footer">
                <div className="order-list__item--text">
                    <h2>{order.title}</h2>
                    <h3>{order.price}</h3>
                </div>

                <div className="order-list--delete-button">
                    <svg
                        onClick={() => deleteFunc(order.id)}
                        viewBox="0 0 192 192"
                        fill="black"
                        xmlns="http://www.w3.org/2000/svg"
                        className="order-list--delete-button-svg"
                    >
                        <g id="_06-trash" data-name="06-trash">
                            <path d="m184 32h-56v-8a24.027 24.027 0 0 0 -24-24h-16a24.027 24.027 0 0 0 -24 24v8h-56v16h8.84l13.627 122.651a23.976 23.976 0 0 0 23.854 21.349h83.358a23.976 23.976 0 0 0 23.854-21.35l13.627-122.65h8.84zm-104-8a8.009 8.009 0 0 1 8-8h16a8.009 8.009 0 0 1 8 8v8h-32zm65.63 144.883a7.992 7.992 0 0 1 -7.951 7.117h-83.358a7.992 7.992 0 0 1 -7.951-7.116l-13.432-120.884h126.124z" />
                            <path d="m88 64h16v96h-16z" />
                            <path
                                d="m83.834 104h96.333v16h-96.333z"
                                transform="matrix(.083 -.997 .997 .083 9.422 234.24)"
                            />
                            <path d="m52 63.834h16v96.333h-16z" transform="matrix(.997 -.083 .083 .997 -9.094 5.37)" />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
});

export default Order;
