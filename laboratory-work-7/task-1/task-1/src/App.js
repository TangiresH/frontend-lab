import React from 'react';
import Header from './components/Header';
import './App.css';
import Content from "./components/Content"; // Вам може знадобитися створити файл стилів для вашого проекту
import Image from "./components/Image";

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
