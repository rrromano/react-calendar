import React from "react";

import Header from "./Header";
import DaysOfWeeks from "./DaysOfWeeks";
import Week from "./Week";

const CustomCalendar = ({ weeksOfMonth, month, year, setMonth, setYear }) => {
  const daysOfWeek = weeksOfMonth[0].daysOfWeek.map((day) =>
    day.date.format("dddd")
  );

  return (
    <div>
      <Header
        month={month}
        year={year}
        setMonth={setMonth}
        setYear={setYear}
      ></Header>
      <DaysOfWeeks daysOfWeek={daysOfWeek}></DaysOfWeeks>
      {weeksOfMonth.map((week) => (
        <Week week={week.daysOfWeek} month={month} key={week.week}></Week>
      ))}
    </div>
  );
};
export default CustomCalendar;
