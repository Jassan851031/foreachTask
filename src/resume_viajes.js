import React, { useContext } from 'react';
import { Context } from './store/appContext';

const Resumen = () => {
    const { store } = useContext(Context);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Punto Partida</th>
                    <th scope="col">Punto Termino</th>
                    <th scope="col">Tipo Transporte</th>
                    <th scope="col">Km</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Ida/Vuelta</th>
                    <th scope="col">Emision</th>
                </tr>
            </thead>
            <tbody>
                {
                    store.resumen.length > 0 &&
                    store.resumen.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>{item.punto_partida}</td>
                                <td>{item.punto_termino}</td>
                                <td>{item.id_transporte}</td>
                                <td>{item.distancia_km}</td>
                                <td>{item.nombre_usuario}</td>
                                <td>{item.viaje_redondo? "Si" : "No"}</td>
                                <td>{item.emision}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
                </div>
            </div>
        </div>
    );
}

export default Resumen;