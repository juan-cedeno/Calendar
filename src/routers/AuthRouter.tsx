import {Switch , Route, Redirect} from 'react-router-dom'
import { LoginPage, RegisterPage } from '../pages';
export const AuthRouter = () => {
return (
<div>
    <Switch>
        <Route 
            path='/auth/login'
            exact
            component={LoginPage}
        />
        <Route
            path='/auth/register'
            exact
            component={RegisterPage}
        />
        <Redirect to='/auth/login'/>
    </Switch>
</div>
)
}