export const SET_REMINDER_DATE_SELECTED = "SET_REMINDER_DATE_SELECTED";
export const SET_REMINDER_MODAL_IS_OPEN = "SET_REMINDER_MODAL_IS_OPEN";
export const SET_REMINDERS_ARRAY = "SET_REMINDERS_ARRAY";

export const setReminderDateSelected = (reminderDateSelected) => ({
  type: SET_REMINDER_DATE_SELECTED,
  payload: reminderDateSelected,
});

export const setReminderModalIsOpen = (reminderModalIsOpen) => ({
  type: SET_REMINDER_MODAL_IS_OPEN,
  payload: reminderModalIsOpen,
});

export const setRemindersArray = (remindersArray) => ({
  type: SET_REMINDERS_ARRAY,
  payload: remindersArray,
});
