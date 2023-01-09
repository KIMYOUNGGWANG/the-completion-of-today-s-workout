import React from 'react';
import styled from 'styled-components';
import MainInput from 'components/input/MainInput';
import {useForm} from 'react-hook-form';
import {AiOutlinePlusCircle} from 'react-icons/ai';
const WodCard = () => {
  const {
    handleSubmit,
    register,
    formState: {errors},
  } = useForm();
  return (
    <Container>
      <Wrapper>
        <div>
          <MainInput placeholder="WOD를 입력하세요 ex) pull up / 10회 or squat 100lb" register={register('id')} />
          <AiOutlinePlusCircle size={30} />
        </div>
        <div>
          <input placeholder="갯수" />
          <input placeholder="무게 (단위까지)" />
          <select>
            <option>lb</option>
            <option>kg</option>
          </select>
        </div>
      </Wrapper>
    </Container>
  );
};

export default WodCard;

const Container = styled.div`
  width: 100%;
  padding: 0 0 20px 0;
  border-bottom: 1px solid #999999;
`;

const Wrapper = styled.div`
  width: 100%;
  div {
    display: flex;
    align-items: center;
    margin-bottom: 0;
    &:nth-child(2) {
      margin-top: 10px;
      input {
        width: 30%;
      }
    }
  }
`;
