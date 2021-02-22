import React from "react";
import PropTypes from "prop-types";
import { Bar as Grafico } from "react-chartjs-2";

export const Bar = ({ labels, data, backgroundColor, title }) => {
	//const info = {
	// 	gasolina: {
	// 		precio: [23, 52, 69, 45, 45, 50],
	// 		mes: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
	// 		colorA: [
	// 			"rgba(122,45,240,0.8)",
	// 			"rgba(73,145,200,0.8)",
	// 			"rgba(40,200,120,0.8)",
	// 			"rgba(150,30,600,0.8)",
	// 			"rgba(200,100,188,0.8)",
	// 			"rgba(240,80,20,0.8)"
	// 		]
	// 	}
	// };
	return (
		<div className="container">
			<div className="row ">
				<div className="col-md-12">
					<div className="card">
						<div className="card-body">
							<Grafico
								data={{
									labels,
									datasets: [
										{
											label: title,
											data,
											backgroundColor
										}
									]
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Bar.propTypes = {
	labels: PropTypes.array,
	data: PropTypes.array,
	backgroundColor: PropTypes.array,
	title: PropTypes.array
};
