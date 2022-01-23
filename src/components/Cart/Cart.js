import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "../../assets/styles/Cart.module.css";
import { addItem, removeItem } from "../../store/cartSlice";
import Button from "../UI/Button";

export default function Cart() {
	const flowers = useSelector((state) => state.cart.items);

	const dispatch = useDispatch();

	function addItemHandler(item) {
		dispatch(addItem(item));
	}

	function removeItemHandler(id) {
		dispatch(removeItem(id));
	}

	return (
		<div className={classes.container}>
			<h1>В корзине</h1>
			<hr />
			{flowers.map((flower) => (
				<React.Fragment key={flower.id}>
					<div key={flower.id} className={classes.itemWrapper}>
						<div>
							<p>{flower.title}</p>
							<b>{flower.totalPrice} Руб</b>

							<div className={classes.changeQuantity}>
								<Button onClick={removeItemHandler.bind(null, flower.id)}>
									-
								</Button>
								<span>{flower.quantity}</span>
								<Button onClick={addItemHandler.bind(null, flower)}>+</Button>
							</div>
						</div>
						<div className={classes.imgWrapper}>
							<img src={flower.url} alt='flower' />
						</div>
					</div>
					<hr />
				</React.Fragment>
			))}
		</div>
	);
}
