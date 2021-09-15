import React from "react";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import "../css/Winter.css";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const Winter = ({ onSearchSubmit }) => {
  //  console.log(onSearchSubmit());
  const [term, setTerm] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const onInputChange = (e) => {
    //const prices = props.onSearchSubmit();
    //console.log(prices);
    setTerm(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(term);
    //console.log(this.props.onSearchSubmit());
  };

  console.log(term);

  return (
    <div className={"glades"}>
      <div className={"flex-gap"}>
        <div style={{ width: "40%" }}>
          <form action="/action_page.php" onSubmit={onFormSubmit}>
            <label htmlFor="loc"></label>
            <input
              className={"formStyle"}
              type="text"
              id="loc"
              name="location"
              placeholder="Please enter current location"
              value={term}
              onChange={onInputChange}
            />
          </form>
        </div>
        <div className={"row"}>
          <div style={{ height: "2%" }}>
            <label htmlFor="cars">Radius</label>
          </div>
          <div style={{ paddingBottom: "23%" }}>
            <select name="miles" id="miles">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Start Date"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />

          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="End Date"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    </div>
  );
};

export default Winter;
