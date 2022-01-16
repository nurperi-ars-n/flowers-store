import classes from "../../assets/styles/SignUp.module.css";
import React from "react";
import SignUpForm from "./SignUpForm";
import Button from "../../components/UI/Button";

function SignUp() {
	return (
		<div className={classes.contentSignUp}>
			<SignUpForm />
			<div>
				<div>
					<Button type='submit' variant='contained' color='primary'>
						Signup
					</Button>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
