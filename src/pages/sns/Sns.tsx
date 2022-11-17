import React from 'react';
import styled from 'styled-components';
import CardList from './components/CardList';

const Sns = () => {
  return (
    <Container>
      <CardList />
    </Container>
  );
};

export default Sns;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;
