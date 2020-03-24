import React, { useContext } from 'react';
import { Context } from './store/appContext';



const Resumen = (props) => {
    const { store } = useContext(Context);

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
      {
          store.resumen.length > 0 &&
          store.resumen.map((item, i) => {
              return(
                <tr key={i}>
                    <th scope="row">1</th>
                    <td>{item.punto_partida}</td>
                    <td>{item.punto_termino}</td>
                    <td>{item.distancia_km}</td>
                </tr>
              )
          })
      }
  </tbody>
</table>
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