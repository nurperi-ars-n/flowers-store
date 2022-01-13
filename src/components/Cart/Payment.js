

import classes from '../../assets/styles/Payment.module.css'

import React from 'react'
import Button from '../UI/Button'

export default function Payment() {
    return (
        <div className={classes.container}>
            <h1>ОФормление заказа</h1>


            <div className={classes.paymentBlock}>

                <div>
                    <h3>Получатель</h3>
                    <div className={classes.inputWrapper}>
                        <input placeholder='имя'/>
                        <input placeholder='телефон' />
                    </div>
                </div>

                <div>
                    <h3>Адрес и время доставки</h3>
                    <div className={classes.inputWrapper}>
                        <input placeholder='Дата'/>
                        <input placeholder='Время'/>
                    </div>
                </div>


                <div>
                    <h3>Отправитель</h3>
                    <div className={classes.inputWrapper}>
                        <input placeholder='Ваш тел.'/>
                        <input placeholder='Почта'/>
                    </div>
                </div>

                <div>
                    <p>+ Добавить комментарий</p>
                    <p>+ Добавить промокод</p>
                </div>

                <Button className={classes.payButton}>Перейти к оплате</Button>

            </div>
        </div>
    )
}
