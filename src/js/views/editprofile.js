import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditProfile = props => {
	return (
		<div className="container-fluid">
			<div className="row d-flex flex-row">
				<div className="col-2">Hola soy columna izq</div>
				<div className="col-8 bg-dark text-white">Hola soy columna central</div>
				<div className="col-2">Hola soy columna izq</div>
			</div>
		</div>
	);
};
