import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./sidebar.js";
import "../../styles/navbarNew.scss";

export const NavbarNew = () => {
	const [sidebar, setSideBar] = useState(false);
	const showSideBar = () => setSideBar(!sidebar);
	return (
		<React.Fragment>
			<div className="navbar">
				<Link to="#" className="menu-bars">
					<div className="icon fas fa-bars text-white" onClick={showSideBar} />
				</Link>
			</div>
			<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
				<ul className="nav-menu-items" onClick={showSideBar}>
					<li className="navbar-toggle">
						<Link to="#" className="menu-bars text-white">
							✖
						</Link>
					</li>
					{SidebarData.map((item, index) => {
						return (
							<li key={index} className={item.cName}>
								<Link to={item.path}>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</React.Fragment>
	);
};
