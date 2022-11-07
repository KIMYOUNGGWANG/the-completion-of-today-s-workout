import React from 'react';
import styled from 'styled-components';
interface Props {
  title: string;
}
const MainButton: React.FC<Props> = ({title}) => {
  return <MainButtonWrapper>{title}</MainButtonWrapper>;
};

export default MainButton;
const MainButtonWrapper = styled.button`
  width: 100%;
  max-width: 420px;
  outline: none;
  background-color: #9dc8c8;
  border: none;
  border-radius: 5px;
  padding: 20px 10px;
  font-size: 1rem;
  cursor: pointer;
`;
