import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { dataSidebar } from "./dataSidebar.js";
import "../../styles/navbarNew.scss";

export const SideBar = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			{store.sidebar && (
				<div className="nav-menu">
					{dataSidebar.map((item, index) => {
						return (
							<li key={index} className={item.cName} onClick={index == 6 ? () => actions.logOut() : ""}>
								<Link to={item.path}>
									<i className={item.icon} />
									<span>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</div>
			)}
		</>
	);
};
