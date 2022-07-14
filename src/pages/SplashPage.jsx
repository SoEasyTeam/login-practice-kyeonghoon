import { useEffect, useState } from 'react';
import LoginOptions from '../components/loginOptions/LoginOptions';
import Splash from '../components/splash/Splash';
import { withRouter } from 'react-router-dom';

function SplashPage(props) {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        setTimeout(() => {setIsActive(true)}, 1500)
    }, []);
    return (
        <>
            {isActive ? 
                <LoginOptions isActive={isActive} />
                :
                <Splash isActive={isActive} />
            }
        </>
    )
}

export default SplashPage;