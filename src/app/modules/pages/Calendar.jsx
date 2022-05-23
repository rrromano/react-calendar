import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getWeekOfMonth } from "../../utils/index.js";
import CustomCalendar from "../components/CustomCalendar";
import ReminderModal from "../components/CustomCalendar/ReminderModal";

function Calendar({ reminders }) {
  const [month, setMonth] = useState(dayjs().month());
  const [year, setYear] = useState(dayjs().year());

  return (
    <CalendarContainer>
      <ReminderModal></ReminderModal>
      <CustomCalendar
        weeksOfMonth={getWeekOfMonth(reminders.remindersArray, month, year)}
        month={month}
        year={year}
        setMonth={setMonth}
        setYear={setYear}
      ></CustomCalendar>
    </CalendarContainer>
  );
}

const CalendarContainer = styled.div`
  margin: 2%;
`;

const mapStateToProps = (state) => ({
  reminders: state.RemindersReducer,
});

Calendar.propTypes = {
  reminders: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Calendar);
