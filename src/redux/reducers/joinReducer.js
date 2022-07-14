let initialState = {
    email: '',
    password: '',
    isName: '',
    isId: '',
    isIntroduce: '',
};

function joinReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case 'JOIN_EMAIL_PASSWORD_SUCCESS':
            console.log('join email pw success reducer');
            return {
                ...state,
                email: payload.email,
                password: payload.password,
                isName: payload.isName,
                isId: payload.isId,
                isIntroduce: payload.isIntroduce,
            };
        default:
            return { ...state };
    }
}

export default joinReducer;
