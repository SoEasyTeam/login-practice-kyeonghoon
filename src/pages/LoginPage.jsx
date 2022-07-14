import React, { useEffect } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LBtn } from '../components/common/Buttons';
import { EmailInput, PassWordInput, TextLabel } from '../components/common/TextAciveInput'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';
import { useHistory } from "react-router-dom";

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

const WarningParagraph = styled.strong`
    display: none;
    font-family: 'Spoqa Han Sans Neo';
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    text-align: left;
    color: #EB5757;
    ${({ visible }) => {
        return visible ? `display: block` : `display: none`;
    }}
`

function LoginPage({ setAuthenticate }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isActive, setIsActive] = useState(true);
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();   
    const history = useHistory();
    let authLogin = useSelector(state => state.auth.authenticate);

    useEffect(() => {
        if(authLogin === true){
            history.push('/home');
        } else {
            // setVisible(true);
            console.log('불일치');
        }
    },[authLogin])

    //이메일 주소 유효성 검사
    const checkEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    //로그인버튼 활성화 검사
    const loginActive = () => {
        return checkEmail.test(email)&&password.length > 5
        ? setIsActive(false)
        : setIsActive(true);
    };
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log('login user function issue');
        dispatch(authenticateAction.login(email, password));
    }

    return (
        <LoginMain>
            <h1 className='ir'>데브타운 로그인 화면</h1>
            <h2 className='loginTitle'>로그인</h2>
            <form className='loginForm' onSubmit={onSubmitHandler}>
                <TextLabel>이메일</TextLabel>
                <EmailInput value={email} onChange = {(event) => setEmail(event.target.value)} onKeyUp={loginActive} />
                <TextLabel>비밀번호</TextLabel>
                <PassWordInput value={password} onChange = {(event) => setPassword(event.target.value)} onKeyUp={loginActive}/>
                <WarningParagraph visible={visible}>*이메일  또는 비밀번호가 일치하지 않습니다.</WarningParagraph>
                <div className='loginBtnWrap'>
                    <LoginBtn disabled={isActive} >로그인</LoginBtn>
                    <JoinEmailLink to='/join'>이메일로 회원가입</JoinEmailLink>
                </div>
            </form>
        </LoginMain>
    )
}

export default LoginPage;