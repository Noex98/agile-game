import React from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import Start from './components/Start'
import Err404 from './components/Err404'
import Game from './components/Game'

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route 
                        path='/' exact
                        component={Start}
                    />
                    <Route 
                        path='/game' exact
                        component={Game}
                    />
                    <Route 
                        path='/'
                        component={Err404}
                    />
                </Switch>
            </Router>
        </div>
    )
}

export default App
