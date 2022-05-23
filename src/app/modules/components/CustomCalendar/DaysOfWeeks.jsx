import React from "react";
import styled from "styled-components";

const DaysOfWeeks = ({ daysOfWeek }) => {
  return (
    <DaysOfWeeksContainer>
      {daysOfWeek.map((day) => (
        <DayContainer area={day} key={day}>
          <DayText>{day}</DayText>
        </DayContainer>
      ))}
    </DaysOfWeeksContainer>
  );
};

const DaysOfWeeksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday";
  height: 2rem;
`;

const DayContainer = styled.div`
  background-color: #303f9f;
  grid-area: ${(props) => props.area};
  display: table;
  text-align: center;
  height: 100%;
`;

const DayText = styled.h4`
  color: white;
  display: table-cell;
  vertical-align: middle;
`;

export default DaysOfWeeks;
