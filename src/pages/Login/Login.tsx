import MainButton from 'components/button/MainButton';
import MainInput from 'components/input/MainInput';
import React from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: {errors},
  } = useForm();
  return (
    <LoginContainer>
      <LoginWrapper>
        <h1>로그인 페이지</h1>
        <InputWrapper>
          <MainInput placeholder="아이디" labelText="아이디" register={register('id')} />
          <MainInput placeholder="비밀번호" labelText="비밀번호" register={register('id')} />
          <MainButton title="로그인" />
        </InputWrapper>

        <ButtonWrapper>
          <p>아직 회원이 아닌가요?</p>
          <Link to="/signup">회원가입 하러 가기</Link>
        </ButtonWrapper>
        <MainButton title="카카오 로그인 버튼 영역" />
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 2rem;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 420px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
