import React from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  setReminderDateSelected,
  setReminderModalIsOpen,
  setRemindersArray,
} from "../../../redux/actions/RemindersActions";

const Day = ({
  day,
  month,
  reminders,
  setReminderDateSelected,
  setReminderModalIsOpen,
  setRemindersArray,
}) => {
  const addNewReminder = (reminderDateSelected) => {
    setReminderDateSelected(reminderDateSelected);
    setReminderModalIsOpen(true);
  };

  const editReminder = (selectedReminder) => {
    const newRemindersArray = reminders.remindersArray.map((reminder) => {
      return { ...reminder, isActive: selectedReminder.id === reminder.id };
    });

    setReminderDateSelected(selectedReminder.date);
    setRemindersArray(newRemindersArray);
    setReminderModalIsOpen(true);
  };

  return (
    <DayContainer
      area={day.date.format("dddd")}
      key={day.date.day()}
      backGroundColor={
        day.date.day() === 0 || day.date.day() === 6 ? "#bdbdbd" : "#e0e0e0"
      }
    >
      <div
        className="itemDay"
        onClick={() => addNewReminder(day.date.format("DD/MM/YYYY"))}
      >
        <DayText
          color={month === day.date.month() ? "black" : "#757575"}
          backGroundColor={
            day.date.isSame(dayjs(), "day") ? "rgb(46, 125, 50)" : "inherit"
          }
        >
          {day.date.date()}
        </DayText>
      </div>
      {day.reminders.map((reminder, index) => (
        <ReminderContainer
          className="itemDay"
          key={index}
          onClick={() => editReminder(reminder)}
        >
          <ReminderText>
            {reminder.title} - {reminder.city} - {reminder.weatherInfo}
          </ReminderText>
        </ReminderContainer>
      ))}
    </DayContainer>
  );
};

const DayContainer = styled.div`
  background-color: ${(props) => props.backGroundColor};
  grid-area: ${(props) => props.area};
  height: 100%;
  border: 1px solid white;
  max-height: 8rem;
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "itemDay";

  .itemDay {
    grid-area: "itemDay";
    &:hover {
      cursor: pointer;
    }
  }
`;

const DayText = styled.p`
  color: ${(props) => props.color};
  background-color: ${(props) => props.backGroundColor};
  font-weight: bold;
  display: inline-block;
  margin-left: 2%;
  border-radius: 8px;
  padding-left: 2%;
  padding-right: 2%;

  &:hover {
    cursor: pointer;
  }
`;

const ReminderContainer = styled.div`
  border-radius: 8px;
  background-color: red;
  padding: 3px;
  border: 1px solid white;
  height: auto;
`;

const ReminderText = styled.div`
  color: white;
`;

const mapStateToProps = (state) => ({
  reminders: state.RemindersReducer,
});

const mapDispatchToProps = {
  setReminderDateSelected,
  setReminderModalIsOpen,
  setRemindersArray,
};

Day.propTypes = {
  setReminderDateSelected: PropTypes.func.isRequired,
  setReminderModalIsOpen: PropTypes.func.isRequired,
  setRemindersArray: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Day);
