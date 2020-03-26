import React,  { Component }from 'react';
import { Link } from 'react-router-dom';

class Inicio extends Component {


    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                    <Link to='/resumen' type="button" className="btn btn-success mr-2" value="Resumen">Resumen</Link>
                        <Link to="/agregar" type="button" className="btn btn-primary">Agregar</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Inicio;