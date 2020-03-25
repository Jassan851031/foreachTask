import React, { useContext } from 'react';
import { Context } from './store/appContext';

const Agregar = () => {

    const { store, actions } = useContext(Context)
    //console.log(store.punto_partida);
    

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
                                    <form>
                                        <div className="form-row">
                                            <div className="col-md-6 mb-3">
                                                <label for="validationDefault01">Dirección del Punto de Partida</label>
                                                <input type="text" className="form-control" id="validationDefault01" required 
                                                value={store.punto_partida} onChange={e => actions.handleChange(e)} />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label for="validationDefault02">Dirección del punto de término</label>
                                                <input type="text" className="form-control" id="validationDefault01" required 
                                                onChange={e => actions.handleChange(e)} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6 mb-3">
                                                <label for="validationDefault03">Nombre</label>
                                                <input type="text" className="form-control" id="validationDefault03" 
                                                required onChange={e => actions.handleChange(e)} />
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label for="validationDefault04">Medio de transporte</label>
                                                <select className="custom-select" id="validationDefault04" required 
                                                onChange={e => actions.handleChange(e)}>
                                                    <option selected disabled value="">Seleccione</option>
                                                    {store.transporte.length > 0 &&
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
                                                <label for="validationDefault05">Cantidad de Km</label>
                                                <input type="text" className="form-control" id="validationDefault05" required 
                                                onChange={e => actions.handleChange(e)}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">¿Ida y vuelta?</label><br />
                                                    <input className="select mr-1" type="radio" name="idavuelta" value="ida" required />
                                                    <i className="si mr-3">Si</i>
                                                    <input className="select mr-1" type="radio" name="idavuelta" value="vuelta" required />
                                                    <i className="no">No</i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer text-right">
                                            <button className="btn btn-secondary mr-1">Cancelar</button>
                                            <button className="btn btn-primary" type="submit"
                                                onClick={() => actions.addViaje()}
                                            >Guardar</button>
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