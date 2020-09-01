import React, { useState } from 'react';
import Card from './Card'
import 'normalize.css';
import './App.css';

function App() {

  const productsArr = [
    {
      id: 1,
      name: 'Нямушка',
      stuff: 'c фуа-гра',
      structure: '10 порций, мышь в подарок',
      upperQuote: 'Сказочное заморское явство',
      desc: 'Чего сидишь? Порадуй кота, <a>купи</a>.',
      selectDesc: 'Печень утки разварная с артишоками',
      zeroQuantity: 'С фуа-гра больше нет :(',
      weight: 0.5,
      weightValue: 'кг',
      status: 1,
    },
    {
      id: 2,
      name: 'Нямушка',
      stuff: 'c рыбой',
      structure: '40 порций, 2 мыши в подарок',
      upperQuote: 'Котэ не одобряет?',
      desc: 'Чего сидишь? Порадуй кота, <a>купи</a>.',
      selectDesc: 'Рыба сама плывет к вам в руки',
      zeroQuantity: 'Увы, рыбные кончились',
      weight: 1,
      weightValue: 'кг',
      status: 1,
    },
    {
      id: 3,
      name: 'Нямушка',
      stuff: 'c курой',
      structure: '100 порций, 5 мышей в подарок, заказчик доволен',
      upperQuote: 'Сказочное заморское явство',
      desc: 'Чего сидишь? Порадуй кота, <a>купи</a>.',
      selectDesc: 'Курочка уже ждет вас',
      zeroQuantity: 'Сожалею, куриная филейка кончилась',
      weight: 2,
      weightValue: 'кг',
      status: 1,
    }
  ]

  let [products, setProducts]=useState(productsArr)

  function turnState(e, item) {
    let curProduct = products[item - 1]
    curProduct.status = (curProduct.status === 3) ? 1 : ++curProduct.status
    const newProducts = [...products.slice(0, item-1), curProduct, ...products.slice(item)]
    setProducts(newProducts)
  }

  return (
    <main className="App">
      <section className="titleSection">
        <h1>
          А ты сегодня покормил кота?
        </h1>
      </section>
      
      <section className="productSection">
        {products.map(item => <Card product={item} key={item.id} turnState={turnState} />)}
      </section>
    </main>
  );
}

export default App;