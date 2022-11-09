import Footer from 'components/footer/Footer';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header/Header';
import BackgroundImg from 'assets/images/17001.jpg';
import SignUp from 'pages/Signup/SignUp';
import Login from 'pages/Login/Login';
import Main from 'pages/\bMain/Main';
import Record from 'pages/record/Record';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <BackGroundContainer>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/record" element={<Record />} />
        </Routes>
      </BackGroundContainer>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

const BackGroundContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  opacity: 0.6;
  @media screen and(max-width:768px) {
    max-width: 415px;
  }
`;
