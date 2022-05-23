import { SET_REMINDER_DATE_SELECTED } from "../actions/RemindersActions";
import { SET_REMINDER_MODAL_IS_OPEN } from "../actions/RemindersActions";
import { SET_REMINDERS_ARRAY } from "../actions/RemindersActions";

const INITIAL_STATE = {
  reminderDateSelected: "",
  reminderModalIsOpen: false,
  remindersArray: [
    {
      id: "42f975e0-97f1-4c7d-b93f-e4affa5a96ca",
      date: "22/04/2022",
      title: "Firt Reminder Title",
      description: "First Reminder Description",
      city: "Buenos Aires",
      startTime: "12:00",
      endTime: "15:00",
      weatherInfo: "287.81 - broken clouds",
      isActive: false,
    },
    {
      id: "c055fd4c-2059-4002-8e90-1808e6ba3627",
      date: "23/05/2022",
      title: "Second Reminder Title",
      description: "Second Reminder Description",
      city: "Londres",
      startTime: "13:00",
      endTime: "16:00",
      weatherInfo: "250 - clear sky",
      isActive: false,
    },
    {
      id: "9a1bf083-3c6c-41cb-bd1d-8b7e942ef8df",
      date: "23/05/2022",
      title: "Third Reminder Title",
      description: "Third Reminder Description",
      city: "Londres",
      startTime: "14:00",
      endTime: "18:00",
      weatherInfo: " 281,17 - clear sky",
      isActive: false,
    },
    {
      id: "03bb71e1-d2ea-478f-96ae-8edfae9e866f",
      date: "23/05/2022",
      title: "Four Reminder Title",
      description: "Four Reminder Description",
      city: "Brasil",
      startTime: "15:00",
      endTime: "18:00",
      weatherInfo: "240 - broken clouds",
      isActive: false,
    },
    {
      id: "a9ba848a-9959-4f10-9bee-f09772ae14dd",
      date: "27/05/2022",
      title: "Five Reminder Title",
      description: "Five Reminder Description",
      city: "Uruguay",
      startTime: "14:00",
      endTime: "18:00",
      weatherInfo: " 281,17 - clear sky",
      isActive: false,
    },
    {
      id: "4610276d-a041-48d9-9626-ceea454aeecc",
      date: "27/05/2022",
      title: "Six Reminder Title",
      description: "Six Reminder Description",
      city: "Paraguay",
      startTime: "15:00",
      endTime: "18:00",
      weatherInfo: "240 - broken clouds",
      isActive: false,
    },
    {
      id: "17e0a134-1b14-4a35-b27c-ac089d18df2a",
      date: "14/06/2022",
      title: "Seven Reminder Title",
      description: "Seven Reminder Description",
      city: "Bélgica",
      startTime: "15:00",
      endTime: "18:00",
      weatherInfo: "240 - broken clouds",
      isActive: false,
    },
  ],
};

function RemindersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_REMINDER_DATE_SELECTED: {
      const reminderDateSelected = action.payload;
      return {
        ...state,
        reminderDateSelected,
      };
    }
    case SET_REMINDER_MODAL_IS_OPEN: {
      const reminderModalIsOpen = action.payload;
      return {
        ...state,
        reminderModalIsOpen,
      };
    }
    case SET_REMINDERS_ARRAY: {
      const remindersArray = action.payload;
      return {
        ...state,
        remindersArray,
      };
    }
    default:
      return state;
  }
}

export default RemindersReducer;
