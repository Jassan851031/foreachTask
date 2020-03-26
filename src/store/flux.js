const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			path: 'http://localhost:5000',
			partida: '',
			termino: '',
			km: '',
			nombre: '',
			ida_vuelta: false,
			transp_actual: 0,
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
					punto_partida: store.partida,
					punto_termino: store.termino,
					id_transporte: store.transp_actual,
					distancia_km: store.km,
					id_usuario: store.nombre,
					viaje_redondo: store.ida_vuelta
				}
				
				fetch('http://localhost:5000/agregar-viaje', {
					method: 'POST',
					body: JSON.stringify(data),
					headers: {
						'Content-Type': 'application/json',
					}
				})
				.then(resp => resp.json())
				.then(() => {
					console.log('wewe');
					setStore({
						partida: '',
						termino: '',
						transp_actual: '',
						km: '',
						nombre: '',
						ida_vuelta: '',
					});
					//getActions().getResumen();
					})
			},
		}
	};
};

export default getState;