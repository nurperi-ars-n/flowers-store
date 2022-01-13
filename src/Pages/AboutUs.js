import React from "react";
import classes from "../assets/styles/AboutUs.module.css";

export default function AboutUs() {
	return (
		<div>
			<div className={classes.container}>
				<h2>О нашей цветочной мастерской</h2>
				<p className={classes.subtitle}>
					Наша команда *НАЗВАНИЕ КОМАНДЫ* уже более 8 лет занимается
					свадебным декором и флористикой. В 2018 году мы осуществили
					свою давнюю мечту и открыли нашу цветочную мастерскую. Здесь
					вы всегда найдёте дизайнерские букеты, мини-букеты, изделия
					из дерева, и многое другое для декора.
				</p>
			</div>
		</div>
	);
}
