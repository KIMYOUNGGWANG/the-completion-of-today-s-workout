import React from 'react';
import styled from 'styled-components';
interface Props {
  selectDateHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const DateContents: React.FC<Props> = ({selectDateHandler}) => {
  return (
    <DatePicker>
      <input type="date" onChange={selectDateHandler} />
    </DatePicker>
  );
};

export default DateContents;
const DatePicker = styled.div`
  input[type='date']::-webkit-datetime-edit-text,
  input[type='date']::-webkit-datetime-edit-month-field,
  input[type='date']::-webkit-datetime-edit-day-field,
  input[type='date']::-webkit-datetime-edit-year-field {
    color: #888;
  }
`;
