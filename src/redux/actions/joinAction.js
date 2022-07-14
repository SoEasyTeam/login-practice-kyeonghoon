function join(email, password) {
    console.log('join success action');
    return (dispatch, getState) => {
        dispatch({
            type: 'JOIN_EMAIL_PASSWORD_SUCCESS',
            payload: { email, password },
        });
    };
}

function joinfinal(email, password, isName, isId, isIntroduce) {
    console.log('join final success action');
    return (dispatch, getState) => {
        dispatch({
            type: 'JOIN_SUCCESS',
            payload: { email, password, isName, isId, isIntroduce },
        });
    };
}

export const joinAction = { join, joinfinal };
