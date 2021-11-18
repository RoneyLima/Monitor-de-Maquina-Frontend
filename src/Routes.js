import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './styles/Routes.css'

import pageA from './routes/A'
import pageB from './routes/B'

function Routes() {
    return (
        <div className="view">
            <Switch>
                <Route exact path="/a" component={pageA} contagem="3" status="1" soldaspm="20" lote="34234534" tipotela="Treliça 14x50" />
                <Route exact path="/b" component={pageB} />
            </Switch>
        </div>
    )
}

export default Routes;