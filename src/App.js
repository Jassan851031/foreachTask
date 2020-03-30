import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from './store/appContext'
import add_viaje from './add_viaje';



const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/agregar" component={add_viaje} />
            </Switch>
        </BrowserRouter>
    )
}
export default injectContext(App);