import React from 'react';
import styled from 'styled-components';

const ContentsCard = () => {
  return (
    <Container>
      <Wrapper>
        <p>크로스핏</p>
        <p>운동시간</p>
        <p>소모칼로리</p>
      </Wrapper>
    </Container>
  );
};

export default ContentsCard;

const Container = styled.div`
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 20px;
  border: 1px solid red;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
