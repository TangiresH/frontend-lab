import React from 'react';
import Header from './Header';
import './App.css';
import Content from "./Content"; // Вам може знадобитися створити файл стилів для вашого проекту
import Image from "./Image";

function App() {
    return (
        <div className="app">
            <Header />
            <Content />
            <Image />
        </div>
    );
}

export default App;
