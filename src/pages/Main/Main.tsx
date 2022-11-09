import React from 'react';
import styled from 'styled-components';
import MainCard from './components/MainCard';
import Main1 from 'assets/images/main/main1.jpg';
import Main2 from 'assets/images/main/main2.jpg';
import Main3 from 'assets/images/main/main3.jpg';
import Main4 from 'assets/images/main/main4.jpg';
import {Link} from 'react-router-dom';
const CONSTANTSDATA = [
  {
    id: 1,
    title: '오늘 운동 기록',
    imageUrl: Main1,
    text: <p>오늘 운동한 내용을 기록해보아요!</p>,
    route: '/record',
  },
  {
    id: 2,
    title: 'SNS',
    imageUrl: Main2,
    text: <p>다른 사람의 오운완을 구경해보아요!</p>,
    route: '/sns',
  },
  {
    id: 3,
    title: '운동 기록 내역 보기',
    imageUrl: Main3,
    text: <p>지금까지 기록을 볼까요?</p>,
    route: '/history',
  },
  {
    id: 4,
    title: '식단등록',
    imageUrl: Main4,
    text: <p>식단을 등록해 보아요!</p>,
    route: '/food',
  },
];
const Main = () => {
  return (
    <MainContainer>
      <MainWrapper>
        {CONSTANTSDATA.map(el => (
          <Link to={el.route} key={el.id}>
            <MainCard title={el.title} imageUrl={el.imageUrl} text={el.text} />
          </Link>
        ))}
      </MainWrapper>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

const MainWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  /* grid-template-columns: 2fr; */
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;
