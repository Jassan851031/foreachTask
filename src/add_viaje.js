import React, { useContext } from 'react';
import { Context } from './store/appContext';

const Agregar = ()  => {

    const { store, actions } = useContext(Context);

    let newViaje = {
        partida: '',
        termino: '',
        km: '',
        nombre: '',
        viaje_redondo: '',
        transp_id: ''
    };

    const handleChange = (event) => { 
        newViaje[event.target.name] = event.target.value;
    }


    const handleSubmit = (event) => {
        actions.addViaje(newViaje);
        event.preventDefault();
    }

        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                Formulario
                        </div>
                            <div className="container mt-5">
                                <div className="row">
                                    <div className="col-md-12">

                                        <form onSubmit={(e) => handleSubmit(e)}>

                                            <div className="form-row">
                                                <div className="col-md-6 mb-3">
                                                    <label>Dirección del Punto de Partida</label>
                                                    <input type="text" className="form-control" id='validationDefault01' name='punto_partida' onChange={(e) => handleChange(e)}/>
                                                </div>

                                                <div className="col-md-6 mb-3">
                                                    <label>Dirección del punto de término</label>
                                                    <input type="text" className="form-control" id='validationDefault02' name='punto_termino' required  onChange={(e) => handleChange(e)}/>
                                                </div>
                                            </div>

                                            <div className="form-row">
                                                <div className="col-md-6 mb-3">
                                                <label>Usuario</label>
                                                    <select className="custom-select" name='id_usuario' id='validationDefault03' required onChange={(e) => handleChange(e)}>
                                                        <option disabled selected>Seleccione</option>
                                                        {
                                                        store.usuarios.length > 0 &&
                                                        store.usuarios.map((item, i) => {
                                                            return (
                                                                <option key={i} value={item.id}>
                                                                    {item.nombre}
                                                                </option>
                                                            );
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <label>Medio de transporte</label>
                                                    <select className="custom-select" name='id_transporte' id='validationDefault04' required onChange={(e) => handleChange(e)}>
                                                        <option disabled selected>Seleccione</option>
                                                        {
                                                        store.transporte.length > 0 &&
                                                        store.transporte.map((item, i) => {
                                                            return (
                                                                <option key={i} value={item.id}>
                                                                    {item.transporte}
                                                                </option>
                                                            );
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <label>Cantidad de Km</label>
                                                    <input type="text" className="form-control" id='validationDefault05' name='distancia_km' required onChange={(e) => handleChange(e)}/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">¿Ida y vuelta?</label><br />
                                                        <input className="select mr-1" type="radio" name="viaje_redondo" value="true" required  onChange={(e) => handleChange(e)}/>
                                                        <i className="si mr-3">Si</i>
                                                        <input className="select mr-1" type="radio" name="viaje_redondo" value="false" required  onChange={(e) => handleChange(e)}/>
                                                        <i className="no">No</i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer text-right">
                                                <button className="btn btn-secondary mr-1">Cancelar</button>
                                                <input className="btn btn-primary" type="submit" value="Guardar" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default Agregar;