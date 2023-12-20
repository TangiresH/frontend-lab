import React from 'react';
import GoodsCard from './components/GoodsCard';
import './App.css';

const App = () => {
    const products = [
        { id: 1, name: 'Баклажан', price: '199,50 грн/кг', image: 'https://produkty24.com.ua/photos/product/227x170/87569.jpg' },
        { id: 2, name: 'Картопля', price: '21,50 грн/кг', image: 'https://produkty24.com.ua/photos/product/227x170/118022.jpg' },
        { id: 3, name: 'Цибуля', price: '17,90 грн/кг', image: 'https://produkty24.com.ua/photos/product/227x170/118677.jpg' },
        { id: 4, name: 'Часник', price: '29,50 грн/од', image: 'https://produkty24.com.ua/photos/product/227x170/47849.jpg' },
        { id: 5, name: 'Корінь петрушки', price: '245,70 грн/од', image: 'https://produkty24.com.ua/photos/product/227x170/58708.jpg' },
        { id: 6, name: 'Слива', price: '69,50 грн/кг', image: 'https://produkty24.com.ua/photos/product/227x170/63440.jpg' },
        { id: 7, name: 'Груша', price: '64,50 грн/кг', image: 'https://produkty24.com.ua/photos/product/227x170/62072.jpg' },
        { id: 8, name: 'Капуста', price: '13,50 грн/кг', image: 'https://produkty24.com.ua/photos/product/227x170/87543.jpg'},
        { id: 9, name: 'Огірки', price: '128,50 грн/кг', image: 'https://produkty24.com.ua/photos/product/227x170/58904.jpg'},
    ];

    return (
        <div className="app">
            {products.map((product) => (
                <GoodsCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                />
            ))}
        </div>
    );
};

export default App;
