import React from 'react';
import styled from 'styled-components';
import ContentsCard from './ContentsCard';

const ContentsList = () => {
  return (
    <Wrapper>
      <ContentsCard />
      <ContentsCard />
    </Wrapper>
  );
};

export default ContentsList;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`;
