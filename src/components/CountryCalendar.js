import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { fetchHolidays, fetchCountries } from "../actions";
import { connect } from "react-redux";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class CountryCalendar extends React.Component {
  debugger;
  state = {
    events: [],
  };

  componentDidMount() {
    console.log(new Date());
    this.props.fetchHolidays(this.props.countryCode, "2022");
  }

  componentDidUpdate(prevProp, PrevState) {
    if (this.props.countryCode !== prevProp.countryCode) {
      this.state.events.length = 0;
      this.props.fetchHolidays(this.props.countryCode, "2022");
    }
  }

  render() {
    if (this.props.holidays) {
      this.props.holidays.map((holiday) =>
        this.state.events.push({
          title: holiday.name,
          start: holiday.date.iso,
          end: holiday.date.iso,
        })
      );
    }
    return (
      <div className="CountryCalendar">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh", margin: "50px" }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //  debugger;
  return { holidays: state.holidays.holidays };
};

export default connect(mapStateToProps, { fetchHolidays, fetchCountries })(
  CountryCalendar
);
