import React, { useContext } from "react";
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
import injectContext, { Context } from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { NavbarLogged } from "./component/navbarLogged";
import { GroupProfile } from "./views/groupProfile";
import { NavbarNew } from "./component/navbarNew";
import { SideBar } from "./component/sidebar";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{store.token != "" ? <NavbarNew /> : <Navbar />}
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/signup">
							<Signup />
						</Route>
						<Route exact path="/dashboard">
							<div className="d-flex flex-row flex-nowrap">
								<SideBar />
								<Dashboard />
							</div>
						</Route>
						<Route exact path="/group">
							<NavbarLogged />
							<GroupProfile />
						</Route>
						<Route exact path="/dropdownList">
							<DropdownList />
						</Route>
						<Route exact path="/profile">
							<SideBar />
							<EditProfile />
						</Route>
						<Route exact path="/profile/editprofile">
							<SideBar />
							<EditProfile />
						</Route>
						<Route exact path="/income">
							<div className="d-flex flex-row flex-nowrap">
								<SideBar />
								<Income />
							</div>
						</Route>
						<Route exact path="/expenses">
							<div className="d-flex flex-row flex-nowrap">
								<SideBar />
								<Expenses />
							</div>
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
