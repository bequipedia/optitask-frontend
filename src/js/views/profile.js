import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Bar } from "../component/graficos/bar";
import { Line } from "../component/graficos/line";
import { Doughnut } from "../component/graficos/doughnut";

export const Profile = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container">
			<div className="row d-flex flex-row">
				<div className="col-2">Hola soy columna izq</div>
				<div className="col-8 bg-dark text-white">
					<div className="col-6 bg-primary" />
					<div className="col-6 bg-success" />
				</div>
				<div className="col-2">Hola soy columna izq</div>
			</div>
		</div>
	);
};
