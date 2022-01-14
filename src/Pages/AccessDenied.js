import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import { ROUTES } from "../utills/constants/general";

function AccessDenied() {
	return (
		<div>
			<h1>YOU DON'T HAVE ACCESS TO THIS PAGE :(</h1>
			<Link to={ROUTES.FLOWERS}>
				<Button> GO BACK   ➡</Button>
			</Link>
		</div>
	);
}

export default AccessDenied;
