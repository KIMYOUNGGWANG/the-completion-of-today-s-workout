import {WORKOUT_TYPE} from 'constants/RecordData';
import React from 'react';
import styled from 'styled-components';

interface Props {
  selectWorkoutHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  inputRef: React.LegacyRef<HTMLInputElement>;
  files: UpdateFiles;
}
const WorkoutContentsSelector: React.FC<Props> = ({selectWorkoutHandler, inputRef}) => {
  return (
    <ContentsSelectArea>
      <select onChange={selectWorkoutHandler}>
        {WORKOUT_TYPE.map((type, idx) => {
          return <option key={idx}>{type}</option>;
        })}
      </select>
    </ContentsSelectArea>
  );
};
export default WorkoutContentsSelector;

const ContentsSelectArea = styled.div`
  width: 100%;
  select {
    position: relative;
    width: 30%;
    padding: 5px;
    margin-right: 20px;
    option {
      position: absolute;
    }
  }
  div {
    span {
      margin-right: 10px;
    }
  }
`;
