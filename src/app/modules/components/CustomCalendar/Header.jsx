import React from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import { Button, Tooltip, Typography } from "@material-ui/core";
import CalendarMonthIcon from "@material-ui/icons/CalendarToday";

const Header = ({ month, year, setMonth, setYear }) => {
  const onClickToday = () => {
    setMonth(dayjs().month());
    setYear(dayjs().year());
  };

  const onClickBeforeMonth = () => {
    if (month == 0 && year != 1000) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  };

  const onClickNextMonth = () => {
    if (month == 11 && year != 9999) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <HeaderContainer>
      <TitleContainer>
        <CalendarMonthIcon className="calendarIcon" />
        <Typography variant="h4" className="calendarTitle">
          Calendar
        </Typography>
      </TitleContainer>
      <ButtonsContainer>
        <Button className="button" onClick={onClickToday} variant="contained">
          Today
        </Button>
        <Tooltip title="Previous month">
          <Button
            className="button borderButton"
            onClick={onClickBeforeMonth}
            variant="contained"
            color="primary"
          >
            {"<"}
          </Button>
        </Tooltip>
        <Typography variant="h6">{month + 1}</Typography>
        <Tooltip title="Next month">
          <Button
            variant="contained"
            color="primary"
            className="button borderButton"
            onClick={onClickNextMonth}
          >
            {">"}
          </Button>
        </Tooltip>
        <Tooltip title="Previous year">
          <Button
            variant="contained"
            color="primary"
            className="button borderButton"
            onClick={() => setYear(year - 1)}
          >
            {"<"}
          </Button>
        </Tooltip>
        <Typography variant="h6">{year}</Typography>
        <Tooltip title="Next year">
          <Button
            variant="contained"
            color="primary"
            className="button borderButton"
            onClick={() => setYear(year + 1)}
          >
            {">"}
          </Button>
        </Tooltip>
      </ButtonsContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  .calendarIcon {
    font-size: 3rem;
    color: black;
  }

  .calendarTitle {
    margin-left: 1%;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 450px) {
    flex-direction: column;
  }

  .button {
    margin: 1%;
  }

  .borderButton {
    border-radius: 50px;
  }
`;

export default Header;
