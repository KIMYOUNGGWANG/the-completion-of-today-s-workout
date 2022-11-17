import React from 'react';
import styled from 'styled-components';
import Calendar from './components/Calendar';
import ContentsList from './components/ContentsList';

const History = () => {
  return (
    <Container>
      <Calendar />
      <ContentsList />
    </Container>
  );
};

export default History;

const Container = styled.div`
  padding: 0 20px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
