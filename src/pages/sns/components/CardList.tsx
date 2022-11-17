import React from 'react';
import styled from 'styled-components';
import SnsCard from './SnsCard';
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const CardList = () => {
  return (
    <Wrapper>
      {arr.map(el => {
        return <SnsCard key={el} />;
      })}
    </Wrapper>
  );
};

export default CardList;

const Wrapper = styled.div`
  width: 100%;
  max-width: 550px;
`;
