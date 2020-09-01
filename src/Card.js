import React, {useRef} from 'react';
import cat from './cat.png';
import 'normalize.css';
import './App.css';

function App(props) {
  let item = props.product

  let upperQuote=useRef()

  const statusCodes = [
    {
      id: 1,
      name: 'default',
    },
    {
      id: 2,
      name: 'select',
    },
    {
      id: 3,
      name: 'disable',
    }
  ]
  console.log(item)

  function selectHover(e, item) {
    e.preventDefault()
    if (item.status === 2) {
      console.log(upperQuote)
      upperQuote.current.className+=' product__card__info__upperQuote_select_hover'
    }
  }

  return (
    <article className="product" onMouseLeave={(e) =>{selectHover(e, item)}}>
      <div className={`product__card product__card_${statusCodes[item.status-1].name}`} onClick={(e)=> {props.turnState(e, item.id)}}>
        <div className="product__card__designBlock">
          <div className={`product__card__designBlock__hover product__card__designBlock__hover_${statusCodes[item.status-1].name}`}>
          </div>
          <div className={`product__card__designBlock__border product__card__designBlock__border_${statusCodes[item.status-1].name}`}>
          </div>
        </div>
        <div className={`product__card__info product__card__info_${statusCodes[item.status-1].name}`}>
          <blockquote className={`product__card__info__upperQuote product__card__info__upperQuote_${statusCodes[item.status-1].name}`} ref={upperQuote}>
            {item.upperQuote}
          </blockquote>
          <h3 className="product__card__info__title">{item.name}</h3>
          <h6 className="product__card__info__subTitle">{item.stuff}</h6>
          <p className="product__card__info__description">{item.structure}</p>
          <div className="product__card__footer">
            <div className="product__card__footer__img">
              <img src={cat} alt="cat" />
            </div>
            <div className={`product__card__footer__weight product__card__footer__weight_${statusCodes[item.status-1].name}`}>
              <span className="product__card__footer__weight__quantity">{item.weight}</span>
              <span className="product__card__footer__weight__value">{item.weightValue}</span>
            </div>
          </div>
        </div>
      </div>
      <p className={`product__descParagraph product__descParagraph_${statusCodes[item.status-1].name}`} dangerouslySetInnerHTML={{__html: item.status === 3 ? item.zeroQuantity : item.status===2 ? item.selectDesc : item.status===1 ? item.desc : 'Ошибка'}}></p>
    </article>
  );
}

export default App;