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

export const GroupProfile = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const info = {
		gasolina: {
			precio: [23, 52, 69, 45, 45, 50],
			mes: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
			colorA: [
				"rgba(122,45,240,0.8)",
				"rgba(73,145,200,0.8)",
				"rgba(40,200,120,0.8)",
				"rgba(150,30,600,0.8)",
				"rgba(200,100,188,0.8)",
				"rgba(240,80,20,0.8)"
			]
		}
	};

	return (
		<div>
			<div className="container-fluid">
				<div className="row ">
					<div className="col-md-2 d-none d-md-block px-0">
						<div className="sidebar" />
					</div>
					<div className="col-md-10 px-0">
						<div className="container">
							<div className="row">
								<div className="col-md-12 welcome-usuario font-title">
									<h3>Welcome, Usuario</h3>
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
						<div className="container px-0">
							<div className="row">
								<div className="col-md-8 col-sm-12 p-2">
									<Bar
										labels={info.gasolina.mes}
										data={info.gasolina.precio}
										backgroundColor={info.gasolina.colorA}
										title={info.gasolina.mes}
									/>
								</div>
								<div className="col-md-4 col-sm-12 p-2">
									<AllTasks />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
