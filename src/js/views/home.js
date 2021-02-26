import React from "react";
import "../../styles/home.scss";
import imagen4 from "../../img/imagen4.png";
import imagen7 from "../../img/imagen7.png";
import imagen5 from "../../img/imagen5.png";
import imagen3 from "../../img/imagen3.png";
import imagen1 from "../../img/imagen1.png";

export const Home = () => (
	<div className="body-home">
		{/* ------------------------------------------------------------ */}
		<div className="container background-card mt-3 p-3">
			<div className="row justify-content-center ">
				<div className="col-md-6 col-sm-12 align-self-start ">
					<h1 className="titulo">Organiza las finanzas de tu negocio con Optitask</h1>
				</div>
				<div className="col-md-6 col-sm-12">
					<img src={imagen4} className="img-fluid m-2" />
				</div>
			</div>
		</div>
		<div className="container mt-3">
			<div className="row justify-content-center ">
				<div className="col-md-12 col-sm-12" />
			</div>
		</div>
		{/* ------------------------------------------------------------ */}

		<div className="container background-card mt-3 p-3">
			<div className="row justify-content-center ">
				<div className="col-md-6 col-sm-12 ">
					<img src={imagen7} className="img-fluid " />
				</div>
				<div className="col-md-6 col-sm-12 align-self-start">
					<h1 className="titulo pt-5">Trabaja en equipo</h1>
					<h3 className="descripcion">
						Podras plantear un negocio o emprendimiento de forma grupal, y tener informacion actualizada con
						tu equipo.
					</h3>
				</div>
			</div>
		</div>
		<div className="container-fluid">
			<div className="row justify-content-center ">
				<div className="col-md-12 col-sm-12" />
			</div>
		</div>

		{/* ------------------------------------------------------------ */}
		<div className="container background-card mt-3 p-3">
			<div className="row justify-content-center ">
				<div className="col-md-6 col-sm-12 align-self-start ">
					<h1 className="titulo pt-5">Organiza tus finanzas</h1>
					<h3 className="descripcion">
						Manten el control de tus finanzas actualizando los ingresos y egresos durante el mes y te
						facilitamos la informacion cambiaria.
					</h3>
				</div>
				<div className="col-md-6 col-sm-12">
					<img src={imagen5} className="img-fluid mr-3 mt-3" />
				</div>
			</div>
		</div>
		<div className="container-fluid">
			<div className="row justify-content-center ">
				<div className="col-md-12 col-sm-12" />
			</div>
		</div>
		{/* ------------------------------------------------------------ */}
		<div className="container background-card mt-3 p-3">
			<div className="row justify-content-center ">
				<div className="col-md-6 col-sm-12">
					<img src={imagen3} className="img-fluid mr-3 mt-5" />
				</div>
				<div className="col-md-6 col-sm-12 align-self-start p-5">
					<h1 className="titulo pt-5">Obten reportes financieros</h1>
					<h3 className="descripcion">
						Consolidamos tus reportes financieros diariamente en una sola moneda para facilitar tu toma de
						decisiones.
					</h3>
				</div>
			</div>
		</div>
		<div className="container-fluid">
			<div className="row justify-content-center ">
				<div className="col-md-12 col-sm-12" />
			</div>
		</div>
		{/* ------------------------------------------------------------ */}
		<div className="container background-card mt-3 mb-3 p-3">
			<div className="row justify-content-center ">
				<div className="col-md-6 col-sm-12 align-self-start p-5">
					<h1 className="titulo pt-5">Sabras en que usas tu dinero</h1>
					<h3 className="descripcion">
						Con OptiTask podras hacer un seguimiento de tus ingresos y egresos, teniendo un balance a final
						de mes.
					</h3>
				</div>
				<div className="col-md-6 col-sm-12">
					<img src={imagen1} className="img-fluid mr-3 mt-5" />
				</div>
			</div>
		</div>
		<div className="container-fluid">
			<div className="row justify-content-center ">
				<div className="col-md-12 col-sm-12" />
			</div>
		</div>
	</div>
);
