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

export const GroupProfile = props => {
	const { store, actions } = useContext(Context);

	// actions.getIncomesGroup(1);
	// actions.getExpensesGroup(1);

	const info = [
		{
			amount: 10,
			bank: null,
			coin: "25",
			date: "12/5/2020",
			description: "pollo",
			group_id: 1,
			id: 4,
			method_payment: "efectivo",
			payment: "pago",
			rate_to_dolar: 12,
			usd_amount: 2
		},
		{
			amount: 10,
			bank: null,
			coin: "25",
			date: "12/5/2020",
			description: "pollo",
			group_id: 1,
			id: 4,
			method_payment: "efectivo",
			payment: "pago",
			rate_to_dolar: 12,
			usd_amount: 2
		},
		{
			amount: 10,
			bank: null,
			coin: "25",
			date: "12/5/2020",
			description: "pollo",
			group_id: 1,
			id: 4,
			method_payment: "efectivo",
			payment: "pago",
			rate_to_dolar: 12,
			usd_amount: 2
		}
	];

	return (
		<div className="dash-scroll">
			<div className="container-fluid">
				<div className="row ">
					<div className="col-md-12 px-4">
						<div className="container">
							<div className="row">
								<div className="col-md-12 mt-4 welcome-usuario font-title">
									<h3>Hola, Usuario</h3>
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
								<div className="col-md-8 col-sm-12">
									<CardGrafico incomes={store.incomesGroup} expenses={store.expensesGroup} />
								</div>
								<div className="col-md-4 col-sm-12 ">
									<AllTasks
										tasks={[
											{
												id: 1,
												init_date: "Sat Feb 20 00:48:32 2021",
												label_task: "hacer cafe",
												status_task: false,
												status_text: null,
												top_date: null,
												user_id: 1
											},
											{
												id: 1,
												init_date: "Sat Feb 20 00:48:32 2021",
												label_task: "hacer cafe",
												status_task: false,
												status_text: null,
												top_date: null,
												user_id: 1
											},
											{
												id: 1,
												init_date: "Sat Feb 20 00:48:32 2021",
												label_task: "hacer cafe",
												status_task: false,
												status_text: null,
												top_date: null,
												user_id: 1
											}
										]}
									/>
								</div>
							</div>
						</div>

						<div className="container px-0 mb-5 ">
							<div className="row">
								<div className="col-md-12 col-sm-12 ">
									<TablaDatos
										sales={[
											{
												amount: "5",
												bank: null,
												date: "Sat Feb 20 01:42:50 2021",
												description: "Arroz",
												group_id: 2,
												id: 1,
												method_payment: "efectivo",
												usd_amount: 2.0
											},
											{
												amount: "10",
												bank: null,
												date: "Sat Feb 20 01:43:12 2021",
												description: "carme",
												group_id: 2,
												id: 2,
												method_payment: "efectivo",
												usd_amount: 2.0
											},
											{
												amount: "5",
												bank: null,
												date: "Sat Feb 20 01:42:50 2021",
												description: "Arroz",
												group_id: 2,
												id: 1,
												method_payment: "efectivo",
												usd_amount: 2.0
											},
											{
												amount: "10",
												bank: null,
												date: "Sat Feb 20 01:43:12 2021",
												description: "carme",
												group_id: 2,
												id: 2,
												method_payment: "efectivo",
												usd_amount: 2.0
											},
											{
												amount: "5",
												bank: null,
												date: "Sat Feb 20 01:42:50 2021",
												description: "Arroz",
												group_id: 2,
												id: 1,
												method_payment: "efectivo",
												usd_amount: 2.0
											},
											{
												amount: "10",
												bank: null,
												date: "Sat Feb 20 01:43:12 2021",
												description: "carme",
												group_id: 2,
												id: 2,
												method_payment: "efectivo",
												usd_amount: 2.0
											}
										]}
										expenses={[
											{
												amount: "5",
												bank: null,
												date: "Sat Feb 20 01:42:50 2021",
												description: "Arroz",
												group_id: 2,
												id: 1,
												method_payment: "efectivo",
												usd_amount: 2.0
											},
											{
												amount: "10",
												bank: null,
												date: "Sat Feb 20 01:43:12 2021",
												description: "carme",
												group_id: 2,
												id: 2,
												method_payment: "efectivo",
												usd_amount: 2.0
											}
										]}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
