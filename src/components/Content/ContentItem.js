

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import gifts from '../../assets/gifts/gifts';

import classes from '../../assets/styles/ContentItem.module.css'
import { addItem } from '../../store/cartSlice';
import Button from '../UI/Button';

export default function ContentItem() {

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { flowerId } = useParams()

    const flower = useSelector(state => state.flowers.flowers.filter(flower => flower.id + '' === flowerId)[0])

    const date = new Date(flower.date).getDay() + ' ' + new Date(flower.date).toLocaleString('ru', {month: 'short'}) + 'а'
    
    
    
    const dispatch = useDispatch()

    function addItemHandler() {
        dispatch(addItem(flower))
    }
    
    return (
    <div className={classes.container}>
            <Link to='/flowers'>Каталог букетов</Link> | {flower.title}

        <div className={classes.wrapper}>
            <div className={classes.img}>
                <img src={flower.url} alt='flower'/>
            </div>

            <div>
                <div>
                    <h1>{flower.title}</h1>
                    <h3>☆ {flower.stars}</h3>
                </div>

                <div>
                    <h1>{flower.price} руб</h1>
                    <Button onClick={addItemHandler}>Добавить в корзину</Button>
                    <p>Бесплатная доставка и оформление</p>
                </div>

                <div className={classes.about}>

                    <ul className={classes.aboutList}>
                        <p>О доставке</p>
                        <b>Ближайшее время доставки - 20:51. Доставка бесплатно.</b>
                    </ul>

                    <ul className={classes.aboutList}>
                        <p>О свежести букета</p>
                        <b>
                            Завоз цветов был {date}, поэтому при правильном уходе букет простоит
                            свежим в течении 7 дней. Более того, если ваш букет простоит свежим менее 3 дней
                            мы гарантируем бесплатную замену букета..
                        </b>
                    </ul>

                    <ul className={classes.aboutList}>
                        <p>О способах оплаты</p>
                        <b>Банковской картой, PayPal</b>
                    </ul>

                    <ul className={classes.aboutList}>
                        <p>Описание</p>
                        <b>
                            Благотворительный букет собирается на вкус флориста в зависимости от
                            оплаченной суммы. состав букета - свежие цветы. Вся прибыль идет на 
                            благотворительные цели. Творите добро вместе с нами!
                        </b>
                    </ul>
                </div>
        
        </div>
    </div>

    
    <div className={classes.buySmthElse}>
        <div className={classes.title}>
            <span>Добавьте к букету</span>
            <p>Увеличьте интенсивность эмоций!</p>
        </div>

        <div className={classes.gifts}>
            <div>
                <img src={gifts[2]} alt='gift'/>
                <h4>Мишка Тедди(Маленький)</h4>
                <p className={classes.price}>1 штук - 5 148 Руб</p>
                <button className={classes.submitButton}>Добавить к заказу</button>
            </div>

            <div>
                <img src={gifts[1]} alt='gift'/>
                <h4>Воздушные шарики(25)</h4>
                <p className={classes.price}>1 штук - 2 860 Руб</p>
                <button className={classes.submitButton}>Добавить к заказу</button>
            </div>

            <div>
                <img src={gifts[0]} alt='gift'/>
                <h4>Рафаэлло</h4>
                <p className={classes.price}>1 штук - 5 148 Руб</p>
                <button className={classes.submitButton}>Добавить к заказу</button>
            </div>
        </div>


        {/* pre footer */}
        <div className={classes.towns}>
            <div className={classes.title}>
                <span>Куда мы доставляем</span>
            </div>

            <div className={classes.flex}>
            <ul>
                <li>Москва</li>
                <li>Новосибирск</li>
                <li>Санкт-Петербург</li>
                <li>Екатеринбург</li>
            </ul>


            <ul>
                <li>Нижний Новгород</li>
                <li>Самара</li>
                <li>Омск</li>
                <li>Казань</li>
            </ul>

            <ul>
                <li>Челябинск</li>
                <li>Ростов-На-Дону</li>
                <li>Уфа</li>
                <li>Волгоград</li>
            </ul>
         
            <ul>
                <li>Пермь</li>
                <li>Красноярск</li>
                <li>Воронеж</li>
                <li>Саратов</li>
            </ul>
            
            <ul>
                <li>Краснодар</li>
                <li>Тольятти</li>
                <li>Ижевск</li>
                <li>Ульяновск</li>
            </ul>
            
            <ul>
                <li>Барнаул</li>
                <li>Владивосток</li>
                <li>Ярославль</li>
                <li>Иркутск</li>
            </ul>
            
            <ul>
                <li>Тюмень</li>
                <li>Махачкала</li>
                <li>Хабаровск</li>
                <li>Оренбург</li>
            </ul>
            
            <ul>
                <li>Новокузнецк</li>
                <li>Кемерово</li>
                <li>Рязянь</li>
                <li>Томск</li>
            </ul>

            </div>

            
            <div className={classes.ShowAllTowns}>
                <h4>Все города</h4>
            </div>
        </div>
    </div>
</div>
    )
}

