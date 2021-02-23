import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditProfile = props => {
	return (
		<div className="container-fluid">
			<div className="row d-flex flex-row">
				<div className="col-2">Hola soy columna izquierda</div>
				<div className="col-8 bg-light text-black">
					<div className="row row-cols-2">
						<div className="col">CELDA 1</div>
						<div className="col">CELDA 2</div>
						<div className="col">CELDA 3</div>
						<div className="col">CELDA 4</div>
					</div>
				</div>
				<div className="col-2">Hola soy columna derecha</div>
			</div>
		</div>
	);
};
