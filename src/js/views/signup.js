import React, { Fragment, useContext, useEffect, useState } from "react";
import "../../styles/signup.scss";
import imagen6 from "../../img/imagen6.png";
import flujodecaja from "../../img/flujodecaja.jpg";
import { Context } from "../store/appContext.js";
import { useHistory } from "react-router-dom";

export const Signup = () => {
	//Declaración de funciones principales
	//--------------------------------------------------------/

	//usa Store y actions del contexto
	const { store, actions } = useContext(Context);

	//--------------------------------------------------------/
	//OBJETO-HOOK-FUNCIÓN PARA GUARDAR DATOS DEL USUARIO
	//--------------------------------------------------------/
	//Objeto form data almacenará información
	const history = useHistory("");
	const formData = {
		email: "",
		name: "",
		last_name: "",
		user_name: "",
		password: "",
		country: "",
		country_code: "", //no tiene campo en BD
		region_state: ""
	};
	const [signup, setSignup] = useState(formData); //Hook estado para guardar info de inputs
	//función que guarda los datos en el estado de registro a medida que son completados,
	//cambian el estado inicial vacío a los valores
	function changeSignUp(e) {
		setSignup({
			...signup,
			[e.target.name]: e.target.value
		});
	}

	function saveSignUp(e) {
		let success = actions.addUser(signup);
		if (success) {
			history.push("/login");
			console.log("Su usuario ha sido creado");
		} else {
			console.log("Su usuario no pudo ser creado");
		}
	}

	//--------------------------------------------------------/
	//OBJETO-HOOK-FUNCIÓN PARA VALIDAR CONTRASEÑAS COINCIDENTES
	//--------------------------------------------------------/
	// //Hook de password y confirmación de password
	const [passwordOriginal, setPasswordOriginal] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	//Función para guardar información de contraseñas
	const changePasswordO = e => {
		setPasswordOriginal(e.target.value);
	};
	const changePasswordC = e => {
		setPasswordConfirm(e.target.value);
	};

	//Estado del botón de registro
	const [buttonActive, setButtonActive] = useState(true);
	//manejar evento de presionar enter en password y validar contraseñas
	useEffect(
		() => {
			const validatePassword = () => {
				if (passwordOriginal === "" && passwordConfirm === "") {
					setButtonActive(true);
				}
				if (passwordOriginal === passwordConfirm) {
					setButtonActive(false); //cambia estado del botón a booleano True
				} else {
					form1.inputPasswordConfirm.value = ""; //limpia campos
					form1.inputPassword.value = ""; //limpia campos
					form1.inputPassword.focus(); //posiciona de nuevo sobre password
					setButtonActive(true); //cambia estado del botón a booleano False
					alert("La contraseña no coincide");
				}
			};
			validatePassword();
		},
		[passwordConfirm]
	);
	//--------------------------------------------------------/
	//OBJETO-HOOK-FUNCIÓN PARA BUSCAR PAÍS EN API
	//--------------------------------------------------------/
	//enlace de API

	//Hook para guardar la búsqueda
	const [search, setSearch] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	//Función para guardar información de búsqueda
	const changeSearch = e => {
		setSearch(e.target.value);
	};

	//Función para búsqueda del cliente
	useEffect(
		() => {
			if (search.length > 3) {
				const results = store.countries.filter(country => country.name.toLowerCase().includes(search));
				setSearchResults(results);
			}
		},
		[search]
	);
	console.log(searchResults);

	//----------HTML PARA REGISTRO---------------/
	return (
		<div className="form-singup d-flex align-items-center">
			<div className="container bg-light">
				<div className="row justify-content-center">
					<div className="col-md-6 col-sm-12 p-5 text-center">
						<h1 className="m-3 text-muted text-center">Registro</h1>
						<div className="row mb-4 mt-2">
							{/* Aquí inicia el formulario */}
							<form action="" name="form1" id="form1">
								<div className="form-row justify-content-center">
									<div className="form-group col-8">
										<input
											type="text"
											className="form-control"
											id="inputEmail"
											placeholder="Correo electrónico..."
											name="email"
											pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
											onChange={changeSignUp}
											required
										/>
									</div>
									<div className="form-group col-8">
										<input
											type="text"
											className="form-control"
											id="inputAddress"
											name="name"
											placeholder="Nombre de usuario..."
											onChange={changeSignUp}
											required
										/>
									</div>
									<div className="form-group col-8">
										<input
											type="password"
											className="form-control"
											id="inputPassword"
											pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" //revisar criterios
											//solicita al menos 1 mayúscula, 1 minúscula, 1 caractér especial, 1 número
											placeholder="Contraseña..."
											name="password1"
											required
											onChange={changePasswordO}
										/>
									</div>
									<div className="form-group col-8">
										<input
											type="password"
											className="form-control"
											id="inputPasswordConfirm"
											placeholder="Confirmar contraseña..."
											name="password"
											onChange={changeSignUp}
											onBlur={changePasswordC}
											required
										/>
									</div>
									<div className="form-group col-8">
										<form className="form-group" id="formulario">
											<i className="fas fa-search" />
											<input
												type="text"
												placeholder="País..."
												id="inputPais"
												value={search}
												name="country"
												onChange={changeSearch}
											/>
											<ul>
												{searchResults.map(searchResult => {
													return (
														<li
															key={searchResult.alpha3Code}
															onClick={() => {
																setSignup({
																	...signup,
																	country_code: searchResult.alpha3Code,
																	country: searchResult.name
																});
																setSearch(searchResult.name);
																setSearchResults([]);
															}}>
															{searchResult.name}
														</li>
													);
												})}
											</ul>
										</form>
									</div>
									<button
										className="btn btn-secondary col-6 my-2 my-sm-0 disable"
										disabled={buttonActive}
										aria-disabled={buttonActive}
										onClick={saveSignUp}>
										Registrar
									</button>
								</div>
							</form>
							{/* Aquí termina el formulario */}
						</div>
					</div>
					<div className="col-md-6 col-sm-12 d-none d-md-block bg-white justify-content-center align-content-center">
						<img src={imagen6} className="img-fluid" style={{ opacity: 0.7 }} />
						<div className="row justify-content-center">
							<img className="img col-5" src={flujodecaja} alt="Card image cap" />
						</div>
						<p className="card-text text-center">
							¡Registrate ahora! y optimiza tus finanzas, con pocos pasos disfruta las ventajas de
							Optitask
						</p>
						<div />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
