const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			path: 'http://localhost:5000',
			//Your data structures
			// inicio: [],
			// final: [],
			// tipo_transp: [],
			// km: [],
			// nombre: [],
			// redondo: false,
			// emision: "",
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
						console.log(data);
						setStore({ resumen: data });
					})
					.catch(err => console.log(err));
			},

			// addViaje: () => {
            //     const store = getStore();
            //     const data = {
            //         description: store.description,
            //         icon: store.icon,
            //     }
            //     fetch(store.path + '/api/categories', {
            //         method: 'POST',
            //         body: JSON.stringify(data),
            //         headers: {
            //             'Content-Type': 'application/json',
            //             'Authorization': 'Bearer ' + store.currentUser.access_token
            //         }

            //     })
            //         .then(resp => resp.json())
            //         .then(data => {
            //             setStore({
            //                 name: '',
            //                 description: '',
            //                 icon: '',
            //             });
            //             getActions().getCategories();
            //         })
            // },
		}
	};
};

export default getState;