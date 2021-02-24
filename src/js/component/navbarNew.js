import React, { useState, Component, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { sidebarData } from "./dataSidebar.js";
import "../../styles/navbarNew.scss";

export const NavbarNew = () => {
	//usa Store y actions del contexto
	const { store, actions } = useContext(Context);
	const [showModal, setShowModal] = useContext(false);

	const changeShowModal = e => {
		setShowModal(true);
	};

	return (
		<React.Fragment>
			<div className="navbar">
				<Link to="#" className="menu-bars">
					<div className="icon fas fa-bars text-white" onClick={actions.showSidebar} />
				</Link>
			</div>
			<nav className={store.sidebar ? "nav-menu active" : "nav-menu"}>
				<div className="navbar-toggle">✖</div>
			</nav>
			{store.token != "" && (
				<form className="form-inline my-2 my-lg-0">
					<button className="btn btn-outline-success my-2 my-sm-0" onClick={changeShowModal}>
						Edit
					</button>
				</form>
			)}
		</React.Fragment>
	);
};
