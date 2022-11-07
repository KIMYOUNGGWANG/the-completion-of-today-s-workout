import React from 'react';
import {FieldError, UseFormRegisterReturn} from 'react-hook-form';
import styled from 'styled-components';
interface Props {
  placeholder: string;
  labelText: string;
  register: UseFormRegisterReturn;
  value?: string;
  maxLength?: number;
  error?: FieldError;
}
function MainInput({placeholder, labelText, register, value, maxLength, error}: Props) {
  return (
    <InputContainer>
      <InputLabel>{labelText}</InputLabel>
      <Inputs placeholder={placeholder} {...register} value={value} maxLength={maxLength} />
      {error && <p>{error?.message}</p>}
    </InputContainer>
  );
}

export default MainInput;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 420px;
  margin-bottom: 14px;
  p {
    margin-top: 8px;
    color: #ff7e36;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.04em;
  }
`;

const InputLabel = styled.label`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: -0.04em;
  color: #424242;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 22px;
  }
`;

const Inputs = styled.input`
  width: 100%;
  height: 52px;
  color: #424242;
  font-family: 'Noto Sans KR';

  padding: 13px 20px;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
  font-size: 20px;
  line-height: 26px;
  ::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.04em;
    color: #868686;
    text-align: start;
  }
  &:focus {
    outline: none;
  }
  :focus::-webkit-input-placeholder {
    opacity: 0;
  }

  :focus::-moz-placeholder {
    opacity: 0;
  }

  :focus:-ms-input-placeholder {
    opacity: 0;
  }

  :focus:-moz-placeholder {
    opacity: 0;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 10px 10px;
    height: 42px;
    font-size: 14px;
    line-height: 22px;
    ::placeholder {
      font-size: 14px;
      line-height: 22px;
    }
  }
`;
