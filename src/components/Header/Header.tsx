import React from 'react';
import styled from 'styled-components';
import HambugerIcon from 'assets/images/hambuger.svg';
import Logo from 'assets/images/LogoIcon.png';

const Header = () => {
  return (
    <Container>
      <NavWrapper>
        <IconArea>
          <img src={Logo} alt="로고아이콘" />
        </IconArea>
        오운완챌린지
        <HambugerBtn>
          <img src={HambugerIcon} alt="햄버거아이콘" />
        </HambugerBtn>
      </NavWrapper>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  background-color: #ffffff;
  @media screen and (max-width: 768px) {
    max-width: 415px;
  }
`;

const NavWrapper = styled.nav`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  @media screen and (max-width: 768px) {
    max-width: 415px;
  }
`;

const IconArea = styled.div`
  img {
    width: 30px;
  }
`;
const HambugerBtn = styled.div``;
