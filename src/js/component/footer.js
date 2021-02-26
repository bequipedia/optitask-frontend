import React, { Component } from "react";
import optimus2 from "../../img/optimus2.png";

export const Footer = () => (
	<footer className="footer mt-auto py-3 bottom text-center bg-dark">
		<p className="text-white">
			Make by OptiTask @2021
			<img src={optimus2} className="img-fluid" width="60" height="60" style={{ opacity: 0.7 }} />
			All Rights Reserved
		</p>
	</footer>
);
