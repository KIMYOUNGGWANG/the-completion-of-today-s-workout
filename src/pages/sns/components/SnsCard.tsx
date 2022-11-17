import React from 'react';
import styled from 'styled-components';
import Image from 'assets/images/main/main1.jpg';
import BeforeHeartIcon from 'assets/images/211754_heart_icon.svg';
import AfterHeartIcon from 'assets/images/211755_heart_icon.svg';
import CommentsIcon from 'assets/images/commentsIcon.svg';
const SnsCard = () => {
  return (
    <Container>
      <Wrapper>
        <ContentsHeaderWrapper>
          <HeaderUerInfoContents>1234</HeaderUerInfoContents>
          <HeaderIcon>5678</HeaderIcon>
        </ContentsHeaderWrapper>
        <ImageContentsWrapper>
          <img src={Image} alt="asd" />
        </ImageContentsWrapper>
        <ContentsBodyWrapper>
          <ContentsBodyIcon>
            <img src={BeforeHeartIcon} width={15} />
            <img src={CommentsIcon} />
          </ContentsBodyIcon>
        </ContentsBodyWrapper>
      </Wrapper>
    </Container>
  );
};

export default SnsCard;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 470px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #2d2d2d;
  border-radius: 8px;
`;

const ContentsHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
`;

const HeaderUerInfoContents = styled.div``;
const HeaderIcon = styled.div``;

const ImageContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 470px;
  max-height: 470px;
  img {
    width: 100%;
  }
`;

const ContentsBodyWrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

const ContentsBodyIcon = styled.div``;
