import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Bar } from "../component/graficos/bar";
import { Line } from "../component/graficos/line";
import { Doughnut } from "../component/graficos/doughnut";
import "./../../styles/groups.scss";
import { Tasks } from "../component/tasks";
import { CardOptions } from "../component/cardOptions";
import { AllTasks } from "../component/allTasks";
import { TablaDatos } from "../component/tablaDatos";
import { CardGrafico } from "../component/graficos/cardGrafico";

export const GroupProfile = () => {
	const { store, actions } = useContext(Context);

	useEffect(
		() => {
			actions.getIncomesGroup(store.oneGroup.id);
			actions.getExpensesGroup(store.oneGroup.id);
			actions.getTasksGroup(store.oneGroup.id);
		},
		[store.oneGroup]
	);

	return (
		//<div className="">
		<div className="container-fluid dash-scroll">
			<div className="row ">
				<div className="col-md-12 px-4">
					<div className="container">
						<div className="row">
							<div className="col-md-12 mt-4 welcome-usuario font-title">
								<h3>{store.oneGroup.group_name}</h3>
							</div>
						</div>
					</div>
					<div className="container px-0">
						<div className="row">
							<div className="col-lg-12 col-md-12">
								<CardOptions />
							</div>
						</div>
					</div>
					<div className="container my-5 px-0">
						<div className="row">
							<div className="col-lg-8 col-md-12 col-sm-12 mb-4">
								<CardGrafico incomes={store.incomesGroup} expenses={store.expensesGroup} />
							</div>
							<div className="col-lg-4 col-md-12 col-sm-12 ">
								<AllTasks tasks={store.tasksGroup} />
							</div>
						</div>
					</div>

					<div className="container px-0 mb-5 ">
						<div className="row">
							<div className="col-md-12 col-sm-12 ">
								<TablaDatos incomes={store.incomesGroup} expenses={store.expensesGroup} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		//</div>
	);
};
