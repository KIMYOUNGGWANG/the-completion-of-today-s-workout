import MainButton from 'components/button/MainButton';
import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import DateContents from './components/DateContents';
import Description from './components/Description';
import ImageContents from './components/ImageContents';
import WorkoutContentsSelector from './components/WorkoutContentsSelector';

const Record = () => {
  const [files, setFiles] = useState<UpdateFiles>({
    image: [],
    date: '',
    workout: [],
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const selectImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files !== null) {
      const file = e.currentTarget.files;
      if (file && file[0]) {
        const url = window.URL.createObjectURL(file[0]);
        const obj = {
          file: file[0],
          thumbnail: url,
          type: file[0].type.slice(0, 5),
        };
        setFiles({...files, image: [...files?.image, obj]});
      }
    }
  };
  const selectDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles({...files, date: e.target.value});
  };

  const selectWorkoutHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputRef?.current?.value ?? '';
    setFiles({...files, workout: [...files.workout, value]});
    if (inputRef.current !== null) inputRef.current.value = '';
  };
  return (
    <Container>
      <Wrapper>
        <Title>운동 기록</Title>
        <SubTitle>사진등록</SubTitle>
        <ImageContents files={files} selectImageHandler={selectImageHandler} />
        <ContentsWrapper>
          <SubTitle>날짜 선택</SubTitle>
          <DateContents selectDateHandler={selectDateHandler} />
          <SubTitle>운동선택</SubTitle>
          <WorkoutContentsSelector inputRef={inputRef} selectWorkoutHandler={selectWorkoutHandler} files={files} />
          <SubTitle>운동 설명</SubTitle>
          <Description />
        </ContentsWrapper>
        <MainButton title="운동 등록" />
      </Wrapper>
    </Container>
  );
};

export default Record;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  max-height: calc(100% - 150px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media screen and (max-width: 768px) {
    max-width: 415px;
  }
`;

const ContentsWrapper = styled.div`
  width: 100%;
`;
const Title = styled.h3`
  width: 100%;
  font-size: 2rem;
  color: black;
  text-align: center;
  border-bottom: 1px solid black;
`;
const SubTitle = styled.h4`
  font-size: 1rem;
  color: #4d4d4d;
  margin: 10px 0;
`;
