import dayjs from "dayjs";

export const getWeekOfMonth = (
  reminders = [],
  month = dayjs().month(),
  year = dayjs().year()
) => {
  //I look for which day of the week corresponds to the first day of the month of the received date (possible values ​​0 (Sunday) - 6 (Saturday))
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();

  // If the first day of the month does not fall on Sunday, I check how many days back I have to start
  let currentMonthCount = 0 - firstDayOfTheMonth;

  // I build a matrix of 6 rows x 7 columns, starting from Sunday (it can be days of the previous month), until completing the 42 values ​​of the matrix (it can be days of the following month)
  let weekCount = 1;
  const weekOfMonthMatrix = new Array(6).fill([]).map(() => {
    const daysOfWeek = new Array(7).fill(null).map(() => {
      currentMonthCount++;
      const date = dayjs(new Date(year, month, currentMonthCount));
      return {
        date,
        reminders: reminders.filter(
          (r) => r.date === date.format("DD/MM/YYYY")
        ),
      };
    });
    const week = {
      week: weekCount,
      daysOfWeek,
    };
    weekCount++;
    return week;
  });
  return weekOfMonthMatrix;
};
