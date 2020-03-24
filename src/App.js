import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from './store/appContext'
import add_viaje from './add_viaje';
import resumen from './resume_viajes'
import inicio from './inicio'


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={inicio} />

                <Route exact path="/agregar" component={add_viaje} />
                <Route exact path="/resumen" component={resumen} />
               
            </Switch>
        </BrowserRouter>
    )
}
export default injectContext(App);