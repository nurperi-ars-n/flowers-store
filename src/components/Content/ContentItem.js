import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import classes from "../../assets/styles/ContentItem.module.css";
import { addItem } from "../../store/cartSlice";
import Button from "../UI/Button";

export default function ContentItem() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { flowerId } = useParams();

  const flower = useSelector(
    (state) =>
      state.flowers.flowers.filter((flower) => flower.id + "" === flowerId)[0]
  );

  const date =
    new Date(flower.date).getDay() +
    " " +
    new Date(flower.date).toLocaleString("ru", { month: "short" }) +
    "а";

  const dispatch = useDispatch();

  function addItemHandler() {
    dispatch(addItem(flower));
  }

  return (
    <div className={classes.container}>
      <Link to="/flowers">Каталог букетов</Link> | {flower.title}
      <div className={classes.wrapper}>
        <div className={classes.img}>
          <img src={flower.url} alt="flower" />
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
              <p>О способах оплаты</p>
              <b>Банковской картой, PayPal</b>
            </ul>
            <ul className={classes.aboutList}>
              <p>Описание</p>
              <b>
                Благотворительный букет собирается на вкус флориста в
                зависимости от оплаченной суммы. состав букета - свежие цветы.
                Вся прибыль идет на благотворительные цели. Творите добро вместе
                с нами!
              </b>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
