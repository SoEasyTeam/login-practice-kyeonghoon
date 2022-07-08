import { Route, Switch } from 'react-router-dom';
import JoinMembershipPage from './pages/JoinMembershipPage';
import LoginPage from './pages/LoginPage';
import SplashPage from './pages/SplashPage';

function App() {
    return (
        <Switch>
            <Route exact path='/' component={SplashPage} />
            <Route exact path='/join' component={JoinMembershipPage} />
            <Route exact path='/login' component={LoginPage} />
        </Switch>
    );
}

export default App;
