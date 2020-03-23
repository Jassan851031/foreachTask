import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
    <form>
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <label for="validationServer01">First name</label>
          <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required>
            <div class="valid-feedback">
              Looks good!
      </div>
    </div>
          <div class="col-md-4 mb-3">
            <label for="validationServer02">Last name</label>
            <input type="text" class="form-control is-valid" id="validationServer02" value="Otto" required>
              <div class="valid-feedback">
                Looks good!
      </div>
    </div>
            <div class="col-md-4 mb-3">
              <label for="validationServerUsername">Username</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroupPrepend3">@</span>
                </div>
                <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3" required>
                  <div class="invalid-feedback">
                    Please choose a username.
        </div>
      </div>
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="validationServer03">City</label>
                <input type="text" class="form-control is-invalid" id="validationServer03" required>
                  <div class="invalid-feedback">
                    Please provide a valid city.
      </div>
    </div>
                <div class="col-md-3 mb-3">
                  <label for="validationServer04">State</label>
                  <select class="custom-select is-invalid" id="validationServer04" required>
                    <option selected disabled value="">Choose...</option>
                    <option>...</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
      </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="validationServer05">Zip</label>
                  <input type="text" class="form-control is-invalid" id="validationServer05" required>
                    <div class="invalid-feedback">
                      Please provide a valid zip.
      </div>
    </div>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required>
                      <label class="form-check-label" for="invalidCheck3">
                        Agree to terms and conditions
      </label>
                      <div class="invalid-feedback">
                        You must agree before submitting.
      </div>
    </div>
                  </div>
                  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
</div>
  );
}

export default App;



{/* <div className="container mt-5">
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
                                    <label className="form-label">¿Ida y vuelta?</label><br />
                                    <input className="select mr-1" type="radio" name="idavuelta" value="ida" />
                                    <i className="si mr-3">Si</i>
                                    <input className="select mr-1" type="radio" name="idavuelta" value="vuelta" />
                                    <i className="no">No</i>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-3">
                                  <div className="form-group">
                                    <label className="form-label">Medio de transporte</label>
                                    <select id="estado" className="form-control">
                                      <option value="">Seleccione</option>
                                      <option value="1"> option 1</option>
                                      <option value="1"> option 2</option>
                                      <option value="1"> option 3</option>
                                      <option value="1"> option 4</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="form-group">
                                    <label className="form-label">Cantidad de kilómetros</label>
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
                </div> */}