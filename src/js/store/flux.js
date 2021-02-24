const BASE_URL = "http://localhost:8080";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: [],
			countries: [],
			token: "",
			datefull_now: "",
			hour_now: "",
			rates_to_dolar: [],
			sidebar: false,
			//  desde aqui se debera realizar los estado y crear un useEffect para colocar
			//  a funcionar los drop down list del fromulario de registro de Ingreso y egresos

			paymentForms: [
				{
					payment: "Efectivo",
					paymentMethod: ["Moneda Fiduciaria"]
				},
				{
					payment: "Cryptomonedas",
					paymentMethod: ["Bitcoin"]
				},
				{
					payment: "Punto de venta",
					paymentMethod: ["Nacional", "Internacional"]
				},
				{
					payment: "P2P",
					paymentMethod: ["Nacional", "Internacional"]
				},
				{
					payment: "Plataformas digitales",
					paymentMethod: ["PayPal", "AirTM", "Giftcard"]
				},
				{
					payment: "Otras formas de pago",
					paymentMethod: ["Intercambio comercial"]
				}
			]
		},
		actions: {
			//Función para cambiar sidebar
			showSidebar: () => {
				const store = getStore();
				//setStore({ sidebar: !store.sidebar });
				store.sidebar = !store.sidebar;
			},

			//Función para consultar en el endpoint los tipos de cambio actualizados rate_to_dolar
			getRates: async () => {
				try {
					let urlRates = BASE_URL + "/rates";
					let response = await fetch(urlRates);
					let responseObject = await response.json();
					setStore({ rates: responseObject });
					console.log(responseObject);
				} catch (error) {
					console.log(error);
				}
			},

			loginUser: async (email, password) => {
				let url = BASE_URL + "/login";
				let actions = getActions();
				let store = getStore();
				let login_data = {
					email: email,
					password: password
				};
				let response = await fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(login_data)
				});
				let information = await response.json();
				console.log(information);
				if (response.ok) {
					setStore({ user: information, token: information.jwt });
					sessionStorage.setItem("token", information.jwt);
					sessionStorage.setItem("id", information.id);
					return true;
				} else {
					console.log(response.statusText);
					console.log(response.status);
					return false;
				}
			},
			// Registrar un usuario
			addUser: async data_signup => {
				console.log(data_signup);
				let url = BASE_URL + "/users";
				let response = await fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(data_signup) //revisar cómo se llama a estado singup de componente signup.js
				});
				if (response.ok) {
					return true;
				} else {
					console.log(response.statusText);
					console.log(response.status);
					return false;
				}
			},

			//Consultar identidad de un usuario
			// getUserID: async store.token => {
			// 	try{
			// 		let url = BASE_URL + "/seguro";
			// 		let response = await fetch(url, {
			// 			method: "POST",
			// 			headers: {
			// 				"Content-Type": "application/json",
			// 				"Authorization": Bearer store.token
			// 			}
			// 		})
			// 		let responseObject = await response.json();
			// 			setStore({ countries: responseObject });
			// 		} catch (error) {
			// 			console.log(error);
			// 		}
			// 	},

			//Registrar Incomes
			addIncome: async data_income => {
				console.log(data_income);
				let url = BASE_URL + "/incomes";
				let response = await fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(data_income) //revisar cómo se llama a estado singup de componente signup.js
				});
				if (response.ok) {
					return true;
				} else {
					console.log(response.statusText);
					console.log(response.status);
					return false;
				}
			},

			//Registrar Expenses
			addExpense: async data_expense => {
				console.log(data_expense);
				let url = BASE_URL + "/expenses";
				let response = await fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(data_expense) //revisar cómo se llama a estado singup de componente signup.js
				});
				if (response.ok) {
					return true;
				} else {
					console.log(response.statusText);
					console.log(response.status);
					return false;
				}
			},

			//Consulta API Countries REST
			getCountries: async () => {
				try {
					let urlAPICountry = "https://restcountries.eu/rest/v2/all";
					let response = await fetch(urlAPICountry);
					let responseObject = await response.json();
					setStore({ countries: responseObject });
					console.log(responseObject);
				} catch (error) {
					console.log(error);
				}
			},

			//Consulta fecha y hora actual
			getTimeNow: () => {
				let now = new Date();
				let dateNow = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();
				let hourNow = now.getHours() + ":" + now.getMinutes();
				let currentTime = dateNow + " " + hourNow;
				setStore({ datefull_now: currentTime, hour_now: hourNow });
			}
		}
	};
};
export default getState;

//	if (hour_now_str == "09:30" || hour_now_str == "16:57")
