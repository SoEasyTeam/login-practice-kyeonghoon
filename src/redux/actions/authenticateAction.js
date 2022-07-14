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
            if (
                resJson.message === '이메일 또는 비밀번호가 일치하지 않습니다.'
            ) {
                console.log('action dispatch 중지');
            } else {
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: { email, password },
                });
            }
        } catch (err) {
            console.log(err);
        }
    };
}

export const authenticateAction = { login };
