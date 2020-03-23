import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
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
                        <label className="form-label">Dirección del punto de termino</label>
                        <input type="text" id="key" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Name</label>
                        <input type="text" id="nombre" className="form-control" placeholder="Insert your name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">LastName</label>
                        <input type="text" id="apellidos" className="form-control" placeholder="Insert your Lastname" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">City</label>
                        <input type="text" id="ciudad" className="form-control" placeholder="xxxx-xxxx-xxxx" />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label className="form-label">Medio de transporte</label>
                        <select id="estado" className="form-control">
                          <option value="">select</option>
                          <option value="1"> option 1</option>
                          <option value="1"> option 2</option>
                          <option value="1"> option 3</option>
                          <option value="1"> option 4</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label className="form-label">Postal Code</label>
                        <input type="text" id="postal" className="form-control" placeholder="Insert Amount" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">we accept</label>
                        <br />
                        <div>
                          <input type="radio" name="med_pago" value="visa" />
                          <i className="fa fa-cc-visa"></i>
                          <input type="radio" name="med_pago" value="mastercard" />
                          <i className="fa fa-cc-mastercard"></i>
                          <input type="radio" name="med_pago" value="paypal" />
                          <i className="fa fa-cc-paypal"></i>
                          <input type="radio" name="med_pago" value="amex" />
                          <i className="fa fa-cc-amex"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">comment</label>
                        <br /><textarea name="insert some comment" id="" cols="67" rows="6"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer text-right">
                <button className="btn btn-secondary">cancel</button>
                <button className="btn btn-primary">send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
