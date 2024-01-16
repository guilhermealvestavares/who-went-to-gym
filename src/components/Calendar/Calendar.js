import * as React from "react";
import dayjs from "dayjs";
import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import { ptBR } from "@mui/x-date-pickers/locales";

const daysToHighlight = [];

const initialValue = dayjs();

function ServerDay(props) {
  const {
    highlightedDays = daysToHighlight,
    day,
    outsideCurrentMonth,
    ...other
  } = props;

  const isSelected =
    !props.outsideCurrentMonth &&
    highlightedDays.indexOf(props.day.date()) >= 0;

  return (
    <Badge
      style={{ color: "#ffffff" }}
      key={props.day.toString()}
      overlap="circular"
      badgeContent={isSelected ? "✅" : undefined}
    >
      <PickersDay
        style={{ color: "#ffffff" }}
        selected={false}
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
      />
    </Badge>
  );
}

export const Calendar = ({ userWorkoutInfos }) => {
  function filterByCurrentMonth(date, currentMonth) {
    return date.workoutInfos
      .filter((item) => {
        const itemMonth = parseInt(item.date.split("/")[1], 10);
        return itemMonth === currentMonth;
      })
      .map((item) => parseInt(item.date.split("/")[0]));
  }

  const requestAbortController = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState(
    filterByCurrentMonth(userWorkoutInfos, new Date().getMonth() + 1)
  );

  React.useEffect(() => {
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    const currentMonth = new Date(date);
    setHighlightedDays(
      filterByCurrentMonth(userWorkoutInfos, currentMonth.getMonth() + 1)
    );
    setIsLoading(false);
  };

  return (
    <LocalizationProvider
      localeText={
        ptBR.components.MuiLocalizationProvider.defaultProps.localeText
      }
      dateAdapter={AdapterDayjs}
    >
      {console.log(
        "ptBR",
        ptBR.components.MuiLocalizationProvider.defaultProps.localeText
      )}
      {highlightedDays && (
        <DateCalendar
          sx={{
            svg: { color: "#ffffff" },
            input: { color: "#ffffff" },
            label: { color: "#ffffff" },
            span: { color: "#ffffff" },
          }}
          style={{ color: "#ffffff" }}
          defaultValue={initialValue}
          loading={isLoading}
          onMonthChange={handleMonthChange}
          renderLoading={() => (
            <DayCalendarSkeleton style={{ color: "#ffffff" }} />
          )}
          slots={{
            day: ServerDay,
          }}
          slotProps={{
            day: {
              highlightedDays,
            },
          }}
        />
      )}
    </LocalizationProvider>
  );
};
