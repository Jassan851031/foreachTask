import React, { Component } from 'react';

class Onlynumbers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            distancia_km: '',
            regexp : /^[0-9\b]+$/
        };
        this.onHandleKmChange = this.onHandleKmChange.bind(this);
    }

    onHandleKmChange = e => {
        let distancia_km = e.target.value;

        if (distancia_km === '' || this.state.regexp.test(distancia_km)) {
            this.setState({ [e.target.name]: distancia_km })
        }
    };

    render() {
        return (
            <input type="text" className="form-control" id="validationDefault05"
            name="distancia_km" value={this.state.distancia_km} onChange={this.onHandleKmChange} required />
        );
    }
}

export default Onlynumbers;