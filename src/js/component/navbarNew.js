import React, { useState, Component, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { sidebarData } from "./dataSidebar.js";
import "../../styles/navbarNew.scss";

export const NavbarNew = () => {
	//usa Store y actions del contexto
	const { store, actions } = useContext(Context);

	return (
		<React.Fragment>
			<div className="navbar">
				<Link to="#" className="menu-bars">
					<div className="icon fas fa-bars text-white" onClick={actions.showSidebar} />
				</Link>
			</div>
		</React.Fragment>
	);
};
