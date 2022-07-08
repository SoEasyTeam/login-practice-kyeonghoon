import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import { LBtn } from '../components/common/Buttons';
import { EmailInput, PassWordInput, TextLabel } from '../components/common/TextAciveInput'
import { useDispatch } from 'react-redux'
import { registerUser } from '../actions/user_action';
import { withRouter } from 'react-router-dom';

const LoginMain = styled.section`
    width: 100vw;
    padding: 0 5%;
    .loginTitle {
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
        text-align: center;
        margin: 30px 0 40px;
    }
    .nextBtnWrap {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const NextBtn = styled(LBtn)`
    margin: 30px 0 20px;
`

const JoinEmailInput = styled(EmailInput).attrs({
    placeholder: '이메일 주소를 입력해 주세요.'
})``

const JoinPassWordInput = styled(PassWordInput).attrs({
    placeholder: '비밀번호를 설정해 주세요.'
})``

function JoinMembershipPage(props) {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const dispatch = useDispatch();

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        let body = {
            email: Email,
            password: Password,
        };

        dispatch(registerUser(body)).then((res) => {
            alert('가입이 정상적으로 되었습니다.');
            props.history.push('/login');
        });
    }

    return (
        <LoginMain>
            <h1 className='ir'>데브타운 회원가입 화면</h1>
            <h2 className='loginTitle'>이메일로 회원가입</h2>
            <form className='loginForm' onSubmit={ onSubmitHandler }>
                <TextLabel>이메일</TextLabel>
                <JoinEmailInput value={Email} onChange={onEmailHandler}/>
                <TextLabel>비밀번호</TextLabel>
                <JoinPassWordInput value={Password} onChange={onPasswordHandler}/>
                <div className='nextBtnWrap'>
                    <NextBtn>다음</NextBtn>
                </div>
            </form>
        </LoginMain>
    )
}

export default withRouter(JoinMembershipPage);