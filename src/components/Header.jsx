import React from "react";

export default function Header() {
    return (
        <header className="header">
            <div className="header__info">
                <span className="header__logo">House Stuff</span>
                <nav className="header__nav">
                    <ul className="header__nav--list">
                        <li className="header__nav--item">
                            <a href="!#">Отзывы</a>
                        </li>
                        <li className="header__nav--item">
                            <a href="!#">Про нас</a>
                        </li>
                        <li className="header__nav--item">
                            <a href="!#">Контакты</a>
                        </li>
                        <li className="header__nav--item">
                            <a href="!#">Обратная связь</a>
                        </li>
                        <li></li>
                    </ul>
                </nav>
            </div>
            <div className="header__presentation"></div>
        </header>
    );
}
