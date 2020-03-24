import React, { useContext } from 'react';
import { Context } from './store/appContext';



const Resumen = (props) => {
    const { store } = useContext(Context);
    //console.log(store.resumen.length)

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
                                <td>{item.viaje_redondo}</td>
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

/*
function resumen() {
    return(
    
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    );
}
*/

export default Resumen;