import React,  { Component }from 'react';
import getState from './store/flux';
import { Link } from 'react-router-dom';

class Inicio extends Component {

    constructor(props) {
        super(props);
        this.state = getState({
            getStore: () => this.state.store,
            getActions: () => this.state.actions
        })
    }

    get_resumen = () => {
        this.state.actions.getResumen();
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                    <Link to='/resumen' type="button" onClick={() => this.get_resumen()} className="btn btn-success mr-2" value="Resumen">Resumen</Link>
                        <Link to="/agregar" type="button" className="btn btn-primary">Agregar</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Inicio;