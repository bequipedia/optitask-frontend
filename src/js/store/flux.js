const BASE_URL = "http://localhost:8080";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: [],
			countries: [],
			token: "",
			datefull_now: "",
			hour_now: "",
			trx_sell_localBTC: [],
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
			loginUser: async data_login => {
				let url = BASE_URL + "/login";
				let response = await fetch(url, {
					method: "POST",
					body: JSON.stringify(data_login),
					headers: { "Content-Type": "application/json" }
				});
				if (response.ok) {
					setStore({ token: response.jwt });
					console.log(response.jwt);
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

			//Función para cambiar sidebar
			showSidebar: () => {
				const store = getStore();
				setStore({ sidebar: !store.sidebar });
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
			},

			//Consulta API
			getExchagesLocalBTC: async () => {
				const LOCALBITCOINSENDPOINT =
					"https://cors-anywhere.herokuapp.com/https://localbitcoins.com/sell-bitcoins-online/ves/.json";
				const opt = {
					method: "GET",
					mode: "cors",
					// headers: {
					// 	Origin: "*"
					// },
					body: null
				};
				const response = await fetch(LOCALBITCOINSENDPOINT, opt);
				if (response.ok) {
					return await response.json();
				}
				return { error: true };
			}
		}
	};
};
export default getState;

//	if (hour_now_str == "09:30" || hour_now_str == "16:57")
