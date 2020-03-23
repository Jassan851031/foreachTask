import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <form>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label for="validationDefault01">Dirección del Punto de Partida</label>
                <input type="text" className="form-control" id="validationDefault01" required />
              </div>
              <div className="col-md-6 mb-3">
                <label for="validationDefault02">Dirección del punto de término</label>
                <input type="text" className="form-control" id="validationDefault02" required />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label for="validationDefault03">Nombre</label>
                <input type="text" className="form-control" id="validationDefault03" required />
              </div>
              <div className="col-md-3 mb-3">
                <label for="validationDefault04">Medio de transporte</label>
                <select className="custom-select" id="validationDefault04" required>
                  <option selected disabled value="">Seleccione</option>
                  <option value="1"> option 1</option>
                  <option value="1"> option 2</option>
                  <option value="1"> option 3</option>
                  <option value="1"> option 4</option>
                </select>
              </div>
              <div className="col-md-3 mb-3">
                <label for="validationDefault05">Cantidad de Km</label>
                <input type="text" className="form-control" id="validationDefault05" required />
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="invalidCheck2" required />
                <label className="form-check-label" for="invalidCheck2">
                  Agree to terms and conditions
      </label>
              </div>
            </div>
            <button className="btn btn-primary" type="submit">Submit form</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;