import React, { Component } from 'react';

class Onlynumbers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            distancia_km: ''
        };
        this.onHandleKmChange = this.onHandleKmChange.bind(this);
    }

    onHandleKmChange = e => {
        let distancia_km = e.target.value;

        if (!Number(distancia_km)) {
            return;
        }
        this.setState({[e.target.name]: distancia_km});
        console.log(distancia_km);
    };

    render() {
        return (
            <input type="text" className="form-control" id="validationDefault05"
            name="distancia_km" value={this.state.distancia_km} onChange={this.onHandleKmChange} required />
        );
    }
}

export default Onlynumbers;