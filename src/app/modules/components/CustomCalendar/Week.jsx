import React from "react";
import Day from "./Day";
import styled from "styled-components";

const Week = ({ week, month }) => {
  return (
    <WeekContainer>
      {week.map((day) => (
        <Day day={day} month={month} key={day.date.day()} />
      ))}
    </WeekContainer>
  );
};

const WeekContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday";
  height: 8rem;
`;

export default Week;
