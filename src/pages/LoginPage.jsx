import React from 'react'
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { LBtn } from '../components/common/Buttons';
import { EmailInput, PassWordInput, TextLabel } from '../components/common/TextAciveInput'
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { loginUser } from '../actions/user_action';

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
    .loginBtnWrap {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const LoginBtn = styled(LBtn)`
    margin: 30px 0 20px;
`

const JoinEmailLink = styled(Link)`
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
`

function LoginPage() {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <LoginMain>
            <h1 className='ir'>데브타운 로그인 화면</h1>
            <h2 className='loginTitle'>로그인</h2>
            <form className='loginForm' onSubmit={onSubmitHandler}>
                <TextLabel>이메일</TextLabel>
                <EmailInput value={Email} onChange = {onEmailHandler} />
                <TextLabel>비밀번호</TextLabel>
                <PassWordInput value={Password} onChange = {onPasswordHandler} />
                <div className='loginBtnWrap'>
                    <LoginBtn>로그인</LoginBtn>
                    <JoinEmailLink to='/join'>이메일로 회원가입</JoinEmailLink>
                </div>
            </form>
        </LoginMain>
    )
}

export default withRouter(LoginPage);