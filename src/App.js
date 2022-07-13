import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JoinMembershipPage from './pages/JoinMembershipPage';
import LoginPage from './pages/LoginPage';
import SplashPage from './pages/SplashPage';

function App() {
    let [authenticate, setAuthenticate] = useState(false);

    useEffect(() => {
        console.log(authenticate);
    }, [authenticate]);

    return (
        <Switch>
            <Route exact path='/' component={() => <SplashPage />} />
            <Route path='/join' component={() => <JoinMembershipPage />} />
            <Route
                path='/login'
                component={() => (
                    <LoginPage setAuthenticate={setAuthenticate} />
                )}
            />
            <Route path='/home' component={() => <HomePage />} />
        </Switch>
    );
}

export default App;
