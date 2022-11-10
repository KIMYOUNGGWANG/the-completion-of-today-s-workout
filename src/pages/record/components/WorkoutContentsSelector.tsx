import React from 'react';
import styled from 'styled-components';

interface Props {
  selectWorkoutHandler: (e: React.ChangeEvent<HTMLFormElement>) => void;
  inputRef: React.LegacyRef<HTMLInputElement>;
  files: UpdateFiles;
}
const WorkoutContentsSelector: React.FC<Props> = ({selectWorkoutHandler, inputRef, files}) => {
  return (
    <ContentsSelectArea>
      <form onSubmit={selectWorkoutHandler}>
        <input type="text" placeholder="운동입력" ref={inputRef} />
        <button>등록</button>
      </form>
      <div>
        {files.workout.map((el, idx) => {
          return <span key={`${el}-${idx}`}>#{el}</span>;
        })}
      </div>
    </ContentsSelectArea>
  );
};
export default WorkoutContentsSelector;

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
