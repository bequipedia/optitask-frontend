import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { AllTasks } from "../component/allTasks";
import { TablaDatos } from "../component/tablaDatos";
import { CardGrafico } from "../component/graficos/cardGrafico";
import { CardGroups } from "../component/cardGroups";
import { CardGraficoProfile } from "../component/graficos/cardGraficoProfile";

export const Profile = props => {
	const { store, actions } = useContext(Context);

	useEffect(
		() => {
			actions.getUserGroups(store.user.id);
			actions.getTasksUser(store.user.id);
			actions.getIncomesUser(store.user.id);
			actions.getExpensesUser(store.user.id);
		},
		[store.user.id]
	);

	return (
		// <div className="">
		<div className="container-fluid dash-scroll">
			<div className="row ">
				<div className="col-md-12 px-4">
					<div className="container">
						<div className="row">
							<div className="col-md-12 mt-4 welcome-usuario font-title">
								<h3>Hola, {store.user.user_name}</h3>
							</div>
						</div>
					</div>

					<div className="container my-4 px-0">
						<div className="row">
							<div className="col-lg-8 col-md-12 col-sm-12 mb-4">
								<CardGraficoProfile incomes={store.incomesUser} expenses={store.expensesUser} />
							</div>
							<div className="col-lg-4 col-md-12 col-sm-12 ">
								<AllTasks tasks={store.tasksUser} />
							</div>
						</div>
					</div>
					<div className="container px-0">
						<div className="row">
							<div className="col-lg-12 col-md-12">
								<CardGroups groups={store.userGroups} />
							</div>
						</div>
					</div>
					<div className="container px-0 mb-5 ">
						<div className="row">
							<div className="col-md-12 col-sm-12 ">
								<TablaDatos incomes={store.incomesUser} expenses={store.expensesUser} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		//</div>
	);
};
