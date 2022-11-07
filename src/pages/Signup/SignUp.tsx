import MainButton from 'components/button/MainButton';
import MainInput from 'components/input/MainInput';
import React from 'react';
import {useForm} from 'react-hook-form';
import styled from 'styled-components';

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: {errors},
  } = useForm();
  return (
    <Container>
      <Wrapper>
        <h1>회원가입 페이지</h1>
        <MainInput placeholder="아이디" labelText="아이디" register={register('id')} />
        <MainInput placeholder="비밀번호" labelText="비밀번호" register={register('password')} />
        <MainInput placeholder="닉네임" labelText="닉네임" register={register('nickName')} />
        <MainInput placeholder="생년 월 일" labelText="생년월일" register={register('birth')} />
        <MainInput placeholder="전화번호" labelText="전화번호" register={register('phoneNumber')} />
        <MainButton title="회원가입" />
      </Wrapper>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    max-width: 415px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  h1 {
    font-size: 2rem;
  }
`;
