import React, {ReactElement} from 'react';
import styled from 'styled-components';
import RightArrowIcon from 'assets/images/right-arrow.svg';
interface Props {
  title: string;
  imageUrl: string;
  text: ReactElement<HTMLParagraphElement>;
}
const MainCard: React.FC<Props> = ({title, imageUrl, text}) => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <img src={imageUrl} alt="" />
      </ImageWrapper>
      <ContentsWrapper>
        <h3>
          {title} <img src={RightArrowIcon} width={12} alt="" />
        </h3>
        <p>{text}</p>
      </ContentsWrapper>
    </CardWrapper>
  );
};

export default MainCard;

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  box-shadow: 0 0 20px 8px #d0d0d0;
  background: #f2f2f2;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    transform: scale(1.05);
    transition-duration: 0.5s;
  }
`;

const ImageWrapper = styled.div`
  img {
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 100%;
    max-height: 250px;
    object-fit: cover;
  }
  @media screen and (max-width: 768px) {
    img {
      height: 150px;
    }
  }
`;

const ContentsWrapper = styled.div`
  padding: 20px;

  h3 {
    font-size: 0.8rem;
    color: black;
    text-align: end;
  }
  p {
    margin-top: 10px;
    font-size: 1rem;
    color: black;
    text-align: end;
  }
`;
