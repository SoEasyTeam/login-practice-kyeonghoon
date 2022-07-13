function login(email, password) {
    console.log('login success action');

    return async (dispatch, getState) => {
        let url = 'https://mandarin.api.weniv.co.kr';
        const reqPath = '/user/login';
        try {
            let res = await fetch(url + reqPath, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: {
                        email: email,
                        password: password,
                    },
                }),
            });
            const resJson = await res.json();
            console.log(resJson);
        } catch (err) {
            console.log(err);
        }
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: { email, password },
        });
    };
}

export const authenticateAction = { login };
