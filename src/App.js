import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from 'axios';
import logo from './logo.svg'
import './App.css';

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

// const App = () => (
//   <div style={{ height: 700 }}>
//     <Calendar
//       localizer={localizer}
//       events={[
//         {
//           title: "My event",
//           allDay: false,
//           start: new Date(2019, 11, 1, 10, 0), // 10.00 AM
//           end: new Date(2019, 11, 2, 14, 0) // 2.00 PM
//         },
//         {
//           title: "Merry Christmas",
//           allDay: false,
//           start: new Date(2019, 11, 25, 10, 0), // 10.00 AM
//           end: new Date(2019, 11, 25, 14, 0) // 2.00 PM
//         }
//       ]}
//       step={5}
//       timeslots={3}
//       view="month"
//       views={["month"]}
//       min={new Date(2019, 5, 1, 8, 0)} // 8.00 AM
//       max={new Date(2019, 11, 1, 17, 0)} // Max will be 6.00 PM!
//       // date={new Date(2019, 10, 1)}
//     />
//   </div>
// );

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cal_events: [
        //State is updated via componentDidMount
      ],
    }
  }

  convertDate = (date) => {
    return moment.utc(date).toDate()
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/events")
      .then(response => {
        console.log(response.data);
        let appointments = response.data;

        for (let i = 0; i < appointments.length; i++) {
          appointments[i].start = this.convertDate(appointments[i].start)
          appointments[i].end = this.convertDate(appointments[i].end)
        }

        this.setState({
          cal_events:appointments
        })
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {

    const {cal_events} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"></img>
          <h1 className="App-title">React Calendar</h1>
        </header>
        <div style={{height: 700}}>
            <Calendar
              localizer={localizer}
              events={cal_events}
              step={30}
              defaultView='month'
              views={['month','week','day']}
              defaultDate={new Date()}
          />
        </div>
      </div>
    );
  }
}

export default App;
