import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <form>
            <div className="card">
              <div className="card-header">
                Formulario
              </div>
              <div className="card-body">
                <div className="container">
                  <div className="row">
                    <div id="col-md-12">
                      <div className="alert alert-danger">
                        Some fields are missing
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-g roup">
                        <label className="form-label">Dirección del punto de partida</label>
                        <input type="text" id="no_card" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Dirección del punto de término</label>
                        <input type="text" id="key" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Nombre</label>
                        <input type="text" id="nombre" className="form-control" placeholder="Inserte nombre" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Ida y Vuelta ?</label>
                        <input type="radio" name="med_pago" value="visa" />
                          <i class="fa fa-cc-visa"></i>
                        <input type="radio" name="med_pago" value="mastercard" />
                          <i class="fa fa-cc-mastercard"></i>
                      </div>
                    </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">Medio de transporte</label>
                            <select id="estado" className="form-control">
                              <option value="">seleccione</option>
                              <option value="1"> option 1</option>
                              <option value="1"> option 2</option>
                              <option value="1"> option 3</option>
                              <option value="1"> option 4</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">cantidad de kilómetros</label>
                            <input type="text" id="postal" className="form-control" placeholder="Insertar Km" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-right">
                    <button className="btn btn-secondary mr-1">cancelar</button>
                    <button className="btn btn-primary">Guardar</button>
                  </div>
                </div>
          </form>
            </div>
      </div>
        </div>
  );
}

export default App;
