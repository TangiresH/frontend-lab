import React from 'react';

function Header() {
    return (
        <header>
            <div className="header-box">
                <h2 id="my-name" className="changeable">Мудрик Дмитро Петрович</h2>
                <p id="birthplace" className="changeable">Дата і місце народження: 16 травня 2004 року, місто
                    Старокостянтинів</p>
                <p>
                    Освіта: Загальноосвітня школа І-ІІІ ступенів №8, м. Старокостянтинів;
                    <br/>Київський політехнічний інститут імені Ігоря Сікорського.
                </p>
            </div>
        </header>
    );
}

export default Header;