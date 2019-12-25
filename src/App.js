import React, {Component} from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const App = () => (
  <div style={{ height: 700 }}>
    <Calendar
      localizer={localizer}
      events={[
        {
          title: "My event",
          allDay: false,
          start: new Date(2019, 11, 1, 10, 0), // 10.00 AM
          end: new Date(2019, 11, 2, 14, 0) // 2.00 PM
        },
        {
          title: "Merry Christmas",
          allDay: false,
          start: new Date(2019, 11, 25, 10, 0), // 10.00 AM
          end: new Date(2019, 11, 25, 14, 0) // 2.00 PM
        }
      ]}
      step={5}
      timeslots={3}
      view="month"
      views={["month"]}
      min={new Date(2019, 5, 1, 8, 0)} // 8.00 AM
      max={new Date(2019, 11, 1, 17, 0)} // Max will be 6.00 PM!
      // date={new Date(2019, 10, 1)}
    />
  </div>
);

// const myEventsList = {} //empty object for now
// class App extends Component{
//   constructor(props){
//     super(props);
//    //We will populate this function later
//   }
//   componentDidMount(){
//    //We will populate this function later
//   }
//   render(){
//     return(
//       <Calendar
//         localizer={localizer}
//         events={[myEventsList]}
//         startAccessor="start"
//         endAccessor="end"
//       />
//     )
//   }
// }

export default App;
