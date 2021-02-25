import React, { Fragment, useContext, useEffect, useState } from "react";
import "../../styles/signup.scss";
import imagen6 from "../../img/imagen6.png";
import flujodecaja from "../../img/flujodecaja.jpg";
import { Context } from "../store/appContext.js";
import { useHistory } from "react-router-dom";
import { Button } from "bootstrap";

export const Signup = () => {
	//Declaración de funciones principales
	//--------------------------------------------------------/
	//usa Store y actions del contexto
	const { store, actions } = useContext(Context);
	//--------------------------------------------------------/
	//OBJETO-HOOK-FUNCIÓN PARA GUARDAR DATOS DEL USUARIO
	//--------------------------------------------------------/
	//Objeto form data almacenará información
	const history = useHistory();
	const formData = {
		email: "",
		name: "",
		last_name: "",
		user_name: "",
		password: "",
		cedula_rif: "",
		country: "",
		country_code: "", //no tiene campo en BD
		region_state: "",
		municipality: ""
	};
	const [signup, setSignup] = useState(formData);

	//Hook estado para guardar info de inputs
	//función que guarda los datos en el estado de registro a medida que son completados,
	//cambian el estado inicial vacío a los valores
	function changeSignUp(e) {
		setSignup({
			...signup,
			[e.target.name]: e.target.value
		});
		e.preventDefault();
	}

	const saveSignUp = async e => {
		e.preventDefault();
		console.log(signup);
		let success = await actions.addUser(signup);
		if (success) {
			console.log("Su usuario ha sido creado");
			history.push("/login");
		} else {
			console.log("Su usuario no pudo ser creado");
		}
	};

	//--------------------------------------------------------/---------------------------/
	//OBJETO-HOOK-FUNCIÓN PARA VALIDAR CONTRASEÑAS COINCIDENTES y MOSTRAR OCULTAR PASSWORD
	//--------------------------------------------------------/---------------------------/
	// //Hook de password y confirmación de password
	const [passwordOriginal, setPasswordOriginal] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	//Hook boolean para mostrar o no contraseña
	const [shown, setShown] = useState(false);
	// //Función para guardar información de contraseñas
	const changePasswordO = e => {
		setPasswordOriginal(e.target.value);
		e.preventDefault();
	};
	const changePasswordC = e => {
		setPasswordConfirm(e.target.value);
		e.preventDefault();
	};

	// //Estado del botón de registro
	const [buttonActive, setButtonActive] = useState(true);
	//manejar evento de presionar enter en password y validar contraseñas
	useEffect(() => {
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
	}, [passwordConfirm]);
	//Función controladora de mostrar contraseña
	const switchShown = () => setShown(!shown);

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
		e.preventDefault();
	};

	//Función para búsqueda del cliente

	useEffect(() => {
		if (search.length >= 3) {
			const results = store.countries.filter(country => country.name.toLowerCase().includes(search));
			setSearchResults(results);
		}
	}, [search]);
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
									<div className=" col-9">
										<input
											type="text"
											className="form-control mb-3 bg-light border border-primary rounded-pill"
											id="inputEmail"
											placeholder="Correo electrónico..."
											name="email"
											pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
											onChange={changeSignUp}
											required
										/>
									</div>
									<div className=" col-9">
										<input
											type="text"
											className="form-control mb-3 bg-light border border-primary rounded-pill"
											id="inputAddress"
											name="user_name"
											placeholder="Nombre de usuario..."
											onChange={changeSignUp}
											required
										/>
									</div>
									<div className="d-flex flex-col col-9">
										<input
											type={shown ? "text" : "password"}
											className="col-11 form-control mb-3 bg-light border border-primary rounded-pill"
											id="inputPassword"
											pattern="(?=.*\d)(?=.*[a-z]).{8,}" //revisar criterios
											//solicita al menos 1 minúscula, 1 caractér especial, 1 número
											placeholder="Contraseña..."
											name="password1"
											required
											onChange={changePasswordO}
										/>
										<div className="col-1 btn-light align-self-center mb-3" onClick={switchShown}>
											{shown ? <i className="far fa-eye" /> : <i className="far fa-eye-slash" />}
										</div>
									</div>
									<div className="d-flex flex-col col-9">
										<input
											type={shown ? "text" : "password"}
											className="col-11 form-control mb-3 bg-light border border-primary rounded-pill"
											id="inputPasswordConfirm"
											placeholder="Confirmar contraseña..."
											name="password"
											onChange={changeSignUp}
											onBlur={changePasswordC}
											required
										/>
										<div className="col-1 btn-light align-self-center mb-3" onClick={switchShown}>
											{shown ? <i className="far fa-eye" /> : <i className="far fa-eye-slash" />}
										</div>
									</div>
									<div className="d-flex flex-col col-9">
										<input
											className="col-11 form-control mb-3 bg-light border border-primary rounded-pill"
											type="text"
											placeholder="País..."
											id="inputPais"
											value={search}
											name="country"
											onChange={changeSearch}
										/>
										<i className="col-2 align-self-center mb-3 fas fa-search text-ligth" />
									</div>
									<div className="col-8">
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
														<small>{searchResult.name}</small>
													</li>
												);
											})}
										</ul>
									</div>
									<button
										className="btn btn-primary col-6 my-2 my-sm-0 disable"
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
