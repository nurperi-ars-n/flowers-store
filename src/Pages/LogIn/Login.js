import classes from "../../assets/styles/Login.module.css";
import React from "react";

function Login() {
	return (
		<div className={classes.container}>
			<div>
				<form className={classes.form}>
					<div>
						<h1>Welcome Back</h1>
					</div>
					<div className={classes.inputs}>
						<input placeholder='Email Adress' />
						<input placeholder='Password' />
						<button className={classes.submitButton}>Login</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
