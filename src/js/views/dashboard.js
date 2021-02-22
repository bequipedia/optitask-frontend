import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/dashboard.scss";
import { CashFlow } from "../component/cashFlow";
import { Tasks } from "../component/tasks";
import { Groups } from "../component/groups";
import { Calculator } from "../component/calculator";

export const Dashboard = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div>
			<div className="dashboard-container">
				<div className="row">
					<div className="col-md-8">
						<CashFlow />
						<Groups />
					</div>
					<div className="col-md-4">
						<Tasks />
					</div>
				</div>
				<Calculator />
			</div>
		</div>
	);
};
