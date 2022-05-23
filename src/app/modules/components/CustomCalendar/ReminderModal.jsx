import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

import { getWeatherInfo } from "../../../services/weatherService";
import {
  setReminderModalIsOpen,
  setRemindersArray,
} from "../../../redux/actions/RemindersActions";

const BoxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ReminderModal = ({
  reminders,
  setReminderModalIsOpen,
  setRemindersArray,
}) => {
  useEffect(() => {
    checkIsEditReminder();
  }, [reminders]);

  const [reminderDate, setReminderDate] = useState("");
  const [reminderTitle, setReminderTitle] = useState("");
  const [reminderDescription, setReminderDescription] = useState("");
  const [reminderStartTime, setReminderStartTime] = useState("");
  const [reminderEndTime, setReminderEndTime] = useState("");
  const [reminderCity, setReminderCity] = useState("");
  const [reminderWeather, setReminderWeather] = useState({
    temp: "N/A",
    description: "N/A",
  });
  const [showError, setShowError] = useState(false);

  const editReminder = reminders.remindersArray.find(
    (reminder) => reminder.isActive
  );

  const removeReminder = (reminderId) => {
    setRemindersArray(
      reminders.remindersArray.filter((reminder) => reminder.id !== reminderId)
    );
    setReminderModalIsOpen(false);
    clearFields();
  };

  const markAllRemindersAsInactive = () => {
    setRemindersArray(
      reminders.remindersArray.map((reminder) => {
        return {
          ...reminder,
          isActive: false,
        };
      })
    );
  };

  const checkIsEditReminder = () => {
    const editReminder = reminders.remindersArray.find(
      (reminder) => reminder.isActive
    );
    if (editReminder) {
      const date = editReminder.date.split("/");
      setReminderDate(
        dayjs(new Date(date[2], date[1] - 1, date[0])).format("YYYY-MM-DD")
      );
      setReminderTitle(editReminder.title);
      setReminderDescription(editReminder.description);
      setReminderStartTime(editReminder.startTime);
      setReminderEndTime(editReminder.endTime);
      setReminderCity(editReminder.city);
      setReminderWeather({
        temp: editReminder.weatherInfo.split(" - ")[0],
        description: editReminder.weatherInfo.split(" - ")[1],
      });
    } else {
      const date = reminders.reminderDateSelected.split("/");
      setReminderDate(
        dayjs(new Date(date[2], date[1] - 1, date[0])).format("YYYY-MM-DD")
      );
    }
  };

  const handleClose = (_, reason) => {
    if (reason !== "backdropClick") {
      setReminderModalIsOpen(false);
      setShowError(false);
      clearFields();
      markAllRemindersAsInactive();
    }
  };

  const searchWeather = async () => {
    try {
      const response = await getWeatherInfo(reminderCity);
      setReminderWeather({
        description: response.data.weather[0].description || "N/A",
        temp: response.data.main.temp || "N/A",
      });
    } catch (error) {
      setReminderWeather({
        description: "N/A",
        temp: "N/A",
      });
    }
  };

  const validateFields = () => {
    const fields = [
      reminderTitle,
      reminderDescription,
      reminderStartTime,
      reminderEndTime,
    ];
    const isValid = fields.every((field) => field !== "");
    if (!isValid) {
      setShowError(true);
    }
    return isValid;
  };

  const saveReminder = () => {
    if (validateFields()) {
      setShowError(false);

      let newRemindersArray;

      const editReminder = reminders.remindersArray.find(
        (reminder) => reminder.isActive
      );

      if (editReminder) {
        editReminder.date = dayjs(reminderDate).format("DD/MM/YYYY");
        editReminder.title = reminderTitle;
        editReminder.description = reminderDescription;
        editReminder.city = reminderCity;
        editReminder.startTime = reminderStartTime;
        editReminder.endTime = reminderEndTime;
        editReminder.weatherInfo = `${reminderWeather.temp} - ${reminderWeather.description}`;
        editReminder.isActive = false;

        newRemindersArray = reminders.remindersArray.map((reminder) => {
          return reminder.isActive ? editReminder : reminder;
        });
      } else {
        const newReminder = {
          id: uuidv4(),
          date: dayjs(reminderDate).format("DD/MM/YYYY"),
          title: reminderTitle,
          description: reminderDescription,
          city: reminderCity,
          startTime: reminderStartTime,
          endTime: reminderEndTime,
          weatherInfo: `${reminderWeather.temp} - ${reminderWeather.description}`,
          isActive: false,
        };
        newRemindersArray = reminders.remindersArray;
        newRemindersArray.push(newReminder);
      }

      setRemindersArray(newRemindersArray);
      setReminderModalIsOpen(false);
      clearFields();
    }
  };

  const clearFields = () => {
    setReminderDate("");
    setReminderTitle("");
    setReminderDescription("");
    setReminderStartTime("");
    setReminderEndTime("");
    setReminderCity("");
    setReminderWeather({
      temp: "N/A",
      description: "N/A",
    });
  };

  return (
    <Modal
      open={reminders.reminderModalIsOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableEscapeKeyDown={true}
      keepMounted={true}
    >
      <Box sx={BoxStyle}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Typography variant="h6">Reminder</Typography>
          </Grid>
          {editReminder && (
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => removeReminder(editReminder.id)}
              >
                Remove reminder
              </Button>
            </Grid>
          )}
          <Grid item xs={12}>
            <TextField
              label="Date"
              type="date"
              variant="outlined"
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                setReminderDate(e.target.value);
              }}
              value={reminderDate}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Title"
              multiline
              variant="outlined"
              fullWidth={true}
              onChange={(e) => setReminderTitle(e.target.value)}
              value={reminderTitle}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              multiline
              minRows={4}
              variant="outlined"
              fullWidth={true}
              onChange={(e) => setReminderDescription(e.target.value)}
              value={reminderDescription}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Start Time"
              type="time"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              fullWidth={true}
              variant="outlined"
              onChange={(e) => setReminderStartTime(e.target.value)}
              value={reminderStartTime}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="End Time"
              type="time"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              fullWidth={true}
              variant="outlined"
              onChange={(e) => setReminderEndTime(e.target.value)}
              value={reminderEndTime}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="City"
              multiline
              variant="outlined"
              fullWidth={true}
              onChange={(e) => setReminderCity(e.target.value)}
              value={reminderCity}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              fullWidth={true}
              onClick={searchWeather}
            >
              Search
            </Button>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Typography variant="subtitle1">
              Information Weather:
              {` ${reminderWeather.temp} - ${reminderWeather.description}`}
            </Typography>
          </Grid>
          {showError && (
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Typography variant="h6" color="error">
                You must complete all fields
              </Typography>
            </Grid>
          )}
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              color="primary"
              fullWidth={true}
              onClick={saveReminder}
            >
              Save
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button variant="outlined" fullWidth={true} onClick={handleClose}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  reminders: state.RemindersReducer,
});

const mapDispatchToProps = {
  setReminderModalIsOpen,
  setRemindersArray,
};

ReminderModal.propTypes = {
  reminders: PropTypes.object.isRequired,
  setReminderModalIsOpen: PropTypes.func.isRequired,
  setRemindersArray: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReminderModal);
