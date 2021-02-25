import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Bar } from "../component/graficos/bar";
import { Line } from "../component/graficos/line";
import { Doughnut } from "../component/graficos/doughnut";
import { Tasks } from "../component/tasks";
import { CardOptions } from "../component/cardOptions";
import { AllTasks } from "../component/allTasks";
import { TablaDatos } from "../component/tablaDatos";
import { CardGrafico } from "../component/graficos/cardGrafico";
import { CardGroups } from "../component/cardGroups";

export const Profile = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="dash-scroll">
			<div className="container-fluid">
				<div className="row ">
					<div className="col-md-12 px-4">
						<div className="container">
							<div className="row">
								<div
									className="col-md-12 mt-4 welcome-usuario font-title"
									onClick={() => actions.logOut()}>
									<h3>Hola, {store.user.user_name}</h3>
								</div>
							</div>
						</div>

						<div className="container my-4 px-0">
							<div className="row">
								<div className="col-md-8 col-sm-12">{/* <CardGrafico incomes={store.income} /> */}</div>
								<div className="col-md-4 col-sm-12 ">
									<AllTasks tasks={[]} />
								</div>
							</div>
						</div>
						<div className="container px-0">
							<div className="row">
								<div className="col-lg-12 col-md-12">
									<CardGroups groups={[]} />
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
