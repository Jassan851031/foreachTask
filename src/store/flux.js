const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			path: 'http://localhost:5000',
			punto_partida: "",
			punto_termino: "",
			km: "",
			nombre: "",
			resumen: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getResumen: () => {
				const store = getStore();
				fetch(store.path + '/resumen')
					.then(resp => resp.json())
					.then(data => {
						setStore({ resumen: data });
						//console.log(data);
						console.log(store.resumen);
					})
					.catch(err => console.log(err));
			},

			addViaje: () => {
                const store = getStore();
                const data = {
                    punto_partida: store.punto_partida,
					punto_termino: store.punto_termino,
					tipo_transporte: store.tipo_transporte,
					km: store.km,
					nombre: store.nombre,
                }
                fetch(store.path + '/agregar', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    }

                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            name: '',
                            description: '',
                            icon: '',
                        });
                    })
            },

		}
	};
};

export default getState;