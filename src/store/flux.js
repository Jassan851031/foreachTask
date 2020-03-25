const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			path: 'http://localhost:5000',
			punto_partida: "",
			punto_termino: "",
			km: "",
			nombre: "",
			ida_vuelta: false,
			transporte: [],
			resumen: []
		},
		actions: {

			getResumen: () => {
				const store = getStore();
				fetch(store.path + '/resumen')
					.then(resp => resp.json())
					.then(data => {
						setStore({ resumen: data });
						//console.log(data);
						//console.log(store.resumen);
					})
					.catch(err => console.log(err));
			},

			getTransporte: () => {
                const store = getStore();
                fetch(store.path + '/transporte', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
						setStore({ transporte: data });
						//console.log('wewe');
                    })
			},
			
			handleChange: e => {
				setStore({
					[e.target.name]: e.target.value
				});
			},

			addViaje: () => {
				const store = getStore();
				const data = {
					punto_partida: store.punto_partida,
					punto_termino: store.punto_termino,
					tipo_transporte: store.tipo_transporte,
					km: store.km,
					nombre: store.nombre,
					ida_vuelta: store.ida_vuelta
				}
				fetch(store.path + '/agregar-viaje', {
					method: 'POST',
					body: JSON.stringify(data),
					headers: {
						'Content-Type': 'application/json',
					}
				})
				.then(resp => resp.json())
				.then(() => {
					setStore({
						punto_partida: '',
						punto_termino: '',
						tipo_transporte: '',
						km: '',
						nombre: '',
						ida_vuelta: '',
					});
					//console.log('wewe');
					//getActions().getResumen();
					})
			},
		}
	};
};

export default getState;