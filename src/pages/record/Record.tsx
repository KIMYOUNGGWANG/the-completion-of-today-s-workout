import React, {useRef, useState} from 'react';
import styled from 'styled-components';

interface Files {
  image: UpdateImage[];
  date: string;
  workout: string[];
}
interface UpdateImage {
  file: File;
  thumbnail: string;
  type: string;
}

const Record = () => {
  const [files, setFiles] = useState<Files>({
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
  console.log(files);
  const selectDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles({...files, date: e.target.value});
  };

  const workoutHandler = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const selectWorkoutHandler = () => {
    const value = inputRef?.current?.value ?? '';
    setFiles({...files, workout: [...files.workout, value]});
    if (inputRef.current !== null) inputRef.current.value = '';
  };
  return (
    <Container>
      <Wrapper>
        <Title>운동 기록</Title>
        <ImageWrapper>
          <input type="file" onChange={selectImageHandler} />
          {files.image.length === 0 && <img src={'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'} style={{width: 300, height: 300}} />}
          {files?.image.map(el => {
            return <img src={el.thumbnail} key={el.thumbnail} alt={el.thumbnail} />;
          })}
        </ImageWrapper>
        <ContentsWrapper>
          <DatePicker>
            <SubTitle>운동 날짜</SubTitle>
            <input type="date" onChange={selectDateHandler} />
          </DatePicker>
          <ContentsSelectArea>
            <SubTitle>운동 종류</SubTitle>
            <input type="text" placeholder="운동입력" ref={inputRef} />
            <button onClick={selectWorkoutHandler}>등록</button>
            <div>
              {files.workout.map((el, idx) => {
                return <span key={`${el}-${idx}`}>{el}</span>;
              })}
            </div>
          </ContentsSelectArea>
          <ContentsTextArea>
            <SubTitle>Description</SubTitle>
            <textarea />
          </ContentsTextArea>
        </ContentsWrapper>
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
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  max-height: calc(100% - 150px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  @media screen and (max-width: 768px) {
    max-width: 415px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  overflow-y: scroll;
  img {
    width: 100%;
  }
`;

const ContentsWrapper = styled.div``;
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
`;

const DatePicker = styled.div`
  input[type='date']::-webkit-datetime-edit-text,
  input[type='date']::-webkit-datetime-edit-month-field,
  input[type='date']::-webkit-datetime-edit-day-field,
  input[type='date']::-webkit-datetime-edit-year-field {
    color: #888;
  }
`;

const ContentsSelectArea = styled.div`
  width: 100%;
  input {
    width: 20%;
    padding: 5px;
    border-radius: 20px;
    border: 1px solid blue;
    margin-right: 20px;
  }
  div {
    span {
      margin-right: 10px;
    }
  }
`;

const ContentsTextArea = styled.div`
  textarea {
    width: 100%;
    height: 6.25em;
    border: none;
    resize: none;
  }
`;
