import React from 'react';
import {Calendar as ReactCalendar} from 'react-calendar';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
const Calendar = () => {
  return (
    <Container>
      <Wrapper>
        <ReactCalendar showNeighboringMonth={false} locale={'ko'} calendarType="US" tileDisabled={() => false} tileContent={'Icon'} prev2Label={'false'} />
      </Wrapper>
    </Container>
  );
};

export default Calendar;

const Container = styled.div`
  width: 100%;
  height: calc(50vh + 60px);
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  .highlight {
    background: #f3a95f;
  }
  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button {
    visibility: hidden;
  }
  .react-calendar {
    width: 100%;
    max-width: 1200px;
    padding: 35px;
  }
`;
