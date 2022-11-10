import React from 'react';
import styled from 'styled-components';

const Description = () => {
  return (
    <ContentsTextArea>
      <textarea />
    </ContentsTextArea>
  );
};

export default Description;
const ContentsTextArea = styled.div`
  textarea {
    width: 100%;
    height: 6.25em;
    resize: none;
  }
`;
