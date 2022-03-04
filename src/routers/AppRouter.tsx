import {
BrowserRouter as Router,Route,Switch } from "react-router-dom";
import { HomePage } from "../pages";
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
return (
<Router>
    <div>
        <Switch>
            <Route 
                path='/'
                component={HomePage}
                exact
            />
            <Route 
                path='/auth'
                component={AuthRouter}
            />
        </Switch>
    </div>
</Router>
)
}