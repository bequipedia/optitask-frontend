import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Login } from "./views/login";
import { Signup } from "./views/signup";
import { Profile } from "./views/profile";
import Income from "./views/income";
import Expenses from "./views/expenses";
import { EditProfile } from "./views/editprofile";
import { Dashboard } from "./views/dashboard";
import { DropdownList } from "./component/dropdownList";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { NavbarLogged } from "./component/navbarLogged";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Navbar />
							<Home />
						</Route>
						<Route exact path="/login">
							<Navbar />
							<Login />
						</Route>
						<Route exact path="/signup">
							<Navbar />
							<Signup />
						</Route>
						<Route exact path="/dashboard">
							<NavbarLogged/>
							<Dashboard />
						</Route>
						<Route exact path="/dropdownList">
							<DropdownList />
						</Route>
						<Route exact path="/profile/editprofile">
							<NavbarLogged/>
							<EditProfile />
						</Route>
						<Route exact path="/income">
							<NavbarLogged/>
							<Income />
						</Route>
						<Route exact path="/expenses">
							<NavbarLogged/>
							<Expenses />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
