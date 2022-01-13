import classes from "../../assets/styles/Header.module.css";
import Logo from "../../assets/icons/Logo.svg";

import React from "react";
import { useDispatch } from "react-redux";
import { filterBy } from "../../store/flowerSlice";

import { Link } from "react-router-dom";
import CartButton from "../Cart/CartButton";
import Menu from "../UI/Menu";

export default function Header() {
	const dispatch = useDispatch();
	function popularFirst(e) {
		dispatch(filterBy(""));
	}

	function cheapFirst(e) {
		dispatch(filterBy("cheapFirst"));
	}

	function expensiveFirst(e) {
		dispatch(filterBy("expensiveFirst"));
	}

	function newFirst(e) {
		dispatch(filterBy("newFirst"));
	}

	return (
		<header className={classes.header}>
			<div className={classes.about}>
				<div className={classes.aboutLeft}>
					<Menu />
				</div>
				<div className={classes.logo}>
					<Link to='/'>
						<img src={Logo} alt='logo' />
					</Link>
				</div>
				<div className={classes.aboutRight}>
					<CartButton />
				</div>
			</div>
			<nav className={classes.nav}>
				<li onClick={popularFirst}>popular </li>
				<li onClick={newFirst}>new</li>
				<li onClick={cheapFirst}>cheapе</li>
				<li onClick={expensiveFirst}>expensive</li>
			</nav>
		</header>
	);
}
