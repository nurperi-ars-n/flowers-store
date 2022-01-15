import classes from "../../assets/styles/Login.module.css";
import React from "react";
import LoginForm from "../../components/UI/LoginForm";
import { Button } from "@mui/material";

function Login() {
	return (
		<div className={classes.container}>
			<form className={classes.form}>
				<div>
    	        	<h1>Welcome back</h1>
        		</div>
				<div>
					<LoginForm/>
					<Button type='submit' variant="contained" color="primary" className={classes.submitButton}>Submit</Button>
				</div>
			</form>
		</div>
	);
}

export default Login;
