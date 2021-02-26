import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "./../../styles/groups.scss";

import { TablaDatos } from "../component/tablaDatos";
import { CardOptions } from "../component/cardOptions";
import { CardReport } from "../component/cardReport";

export const Report = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getIncomesUser(store.user.id);
		actions.getExpensesUser(store.user.id);
	}, [store.user.id]);

	return (
		<div className="container dash-scroll">
			<div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12 d-flex flex-column">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12 col-sm-12 d-flex flex-column mt-5">
								<TablaDatos incomes={store.incomesUser} expenses={store.expensesUser} />
							</div>
						</div>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12 col-sm-12 mb-5">
								<CardReport incomes={store.incomesUser} expenses={store.expensesUser} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
