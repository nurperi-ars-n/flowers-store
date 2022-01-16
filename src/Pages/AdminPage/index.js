import React from "react";
import { Link } from "react-router-dom";
import classes from "../../assets/styles/AdminPage.module.css";
import DashboardRoute from "../../Routes/DashboardRoute";
import { ROLES, ROUTES } from "../../utills/constants/general";

function AdminPage() {
	return (
		<div className={classes.wrapper}>
			<aside className={classes.sidebar}>
				<div className={classes.profile}>
					<h3>Almaz</h3>
					<p>Admin</p>
				</div>
				<ul className={classes.panel}>
					<li>
						<Link to={ROUTES.ADMIN_FLOWERS}>
							<span className={classes["admin-item"]}>
								Flowers
							</span>
						</Link>
					</li>
					<li>
						<Link to={ROUTES.ADMIN_USERS}>
							<span className={classes["admin-item"]}>Users</span>
						</Link>
					</li>
				</ul>
			</aside>
			<DashboardRoute role={ROLES.ADMIN} />
		</div>
	);
}
export default AdminPage;
