import { getDays, getEvents } from "../utils/helpers";

import CalendarCart from "./CalendarCart";

function Calendar({ today, setEventInfoPop, eventInfoPop }) {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let days = [];
  const events = getEvents();

  getDays(today.month(), today.year()).forEach(
    ({ date, currentMonth, isToday }) => {
      const temp = events.filter((f) =>
        JSON.stringify(date).includes(f.eventDate?.split("T")[0])
      );

      days.push({
        date,
        currentMonth,
        isToday,
        eventInfoPop,
        setEventInfoPop,
        datesMatch: {
          isCurrentDate: temp.length > 0 && temp[0] ? true : false,
          name: temp.length > 0 ? temp[0].name : "",
          id: temp.length > 0 ? temp[0].eventId : 0,
          url: temp.length > 0 ? temp[0].url : "",
          message: temp.length > 0 ? temp[0].message : "",
        },
      });
    }
  );

  return (
    <div className={`w-full`}>
      <div className=" grid grid-cols-7 place-items-center bg-cyan-200 py-3 rounded-t-lg font-bold  border border-neutral-300 ">
        {weekDays.map((day, index) => {
          return <h1 key={index}>{day}</h1>;
        })}
      </div>
      <div
        className={`w-full grid grid-cols-7 auto-rows-fr border border-neutral-300 rounded-b-lg h-[33rem] relative`}
      >
        {days.map((day, index) => (
          <CalendarCart
            date={day.date}
            currentMonth={day.currentMonth}
            isToday={day.isToday}
            key={index}
            eventInfoPop={day.eventInfoPop}
            setEventInfoPop={day.setEventInfoPop}
            datesMatch={day.datesMatch}
          />
        ))}
      </div>
    </div>
  );
}

export default Calendar;
