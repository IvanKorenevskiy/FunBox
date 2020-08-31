import React from 'react';
import logo from './logo.svg';
import './App.scss';
import ProductForm from './components/product-form/product-form';
import Background from './components/img/background.png';



function App(props) {
  let [products, setProducts]=React.useState([
  {
    id:1,
    name:"Нямушка",
    ingredient: "с фуа-гра",
    size: 10,
    bonus: "мышь в подарок",
    weight: "0,5",
    selected: false,
    disabled: false,
    description: "Печень утки разварная с артишоками."
  },
  {
    id:2,
    name:"Нямушка",
    ingredient: "с рыбой",
    size: 40,
    bonus: "2 мыши в подарок",
    weight: 2,
    selected: false,
    disabled: false,
    description: "Головы щучьи с чесноком да свежайшая сёмгушка."
  },
  {
    id: 3,
    name:"Нямушка",
    ingredient: "с курой",
    size: 100,
    bonus: "5 мышей в подарок заказчик доволен",
    weight: 5,
    selected: false,
    disabled: true,
    description: "Филе из цыплят с трюфелями в бульоне."
  }
])

function OnClick(id) {
  setProducts (
    products.map(product => {
      if (id===product.id && product.disabled===false) {
        product.selected =! product.selected;
      }
      return product
    })
  )
}
  return (
    <div className="wrapper">
      <img className="background"/>
      <header className="title">Ты сегодня покормил кота?</header>
      <div className="content">
        <ProductForm className="content__block" product={products[0]} OnClick={OnClick}/>
        <ProductForm className="content__block" product={products[1]} OnClick={OnClick}/>
        <ProductForm className="content__block" product={products[2]} OnClick={OnClick}/>
      </div>
    </div>
  );
}

export default App;
