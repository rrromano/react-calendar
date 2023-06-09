# React - Calendar

_This is a reactJs project that renders a calendar for a monthly view and offers the possibility to create reminders for any day ._

## Starting ▶️

The following instructions will allow you to get a working copy of the project on your local machine for development and testing purposes.

### Installation ⚙️

- Run `npm install` | `yarn install` to install all dependencies.
- Run `npm start` | `yarn run` to run the app locally.
- You can find the project running on `localhost:3000`.

### Testing 🧪

- Run `npm test` to execute automated tests.

### Deployment 🚀

- Run `npm run build` to generate a ready-to-deploy version.

## Libraries used 🛠️

- Dayjs: For handling dates.
- Styled-components: For handling styles.
- Material-Ui: For some UI components..
- Axios: To make http requests.
- Uuid: To generate different unique random ids.
- Redux: For state management.

## General considerations 📖

### Calendar Component

- The calendar view is Monthly.
- When the project is start-up, the calendar for the current month is displayed.
- Leave some reminders in the global state so that they are displayed as an example, when it just starts.
- Weekend days (cells) are shown in a darker gray color and weekdays in a lighter color.
- The days (numbers) corresponding to the previous month or the following month are shown in a lighter gray and the days of the month in which you are unemployed in black.
- The current day (number) is displayed with a green background.
- Today button: shows you the calendar for the current month.
- Previous month/Next month button: changes the calendar view according to the selected month.
- Previous Year/Next Year button: changes the calendar view to the selected year (taking into account the month in which you are stopped).
- When the Next Month button reaches the last month, if clicked, it moves to the first month of the following year.
- When the Previous Month button reaches the first month, if clicked, it goes to the last month of the previous year.
- Reminders are displayed in a cell corresponding to their date, and if there is more than one for that day, they are grouped.
- The reminders in the calendar show the title, the city and the weather information.
- When clicking on a cell corresponding to a day, the popup opens to register a new reminder. By default the date field is set to the value of the selected day.
- When clicking on a cell corresponding to a reminder, the popup opens to edit it and the different fields are autocompleted.

### Reminder Component

- By clicking on the save button in the pop up, a new reminder is added or the selected one is updated. It is validated that you have completed all the fields. All values ​​of the reminders can be changed.
- When clicking on the cancel button of the pop up, it closes and has no functionality.
- By default, the 'Information weather' label is shown without any value or with the information of the selected reminder.
- After completing the city by clicking on the search button, it searches the current weather information for that city, using an OpenWeatherMap api.
- If a city is not completed, when clicking on the search button, the api will throw an error, and therefore the corresponding label is not updated (it is controlled with a try catch, but do not develop the logic that this is mandatory).

### General Info

- The view of the calendar and the PopUp to add/edit reminders adapt to different screen resolutions.

## Author ✒️

 - Romano, Rodrigo Ruben - Information systems engineer.

## Contact 📋

 - [LinkedIn](https://www.linkedin.com/in/rodrigo-ruben-romano/)
 - [Mail](mailto:romano.rodrigo19@gmail.com)
