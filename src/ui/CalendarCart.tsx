import { useState } from "react";

import EventInfo from "./EventInfo";

function CalendarCart({
  date,
  currentMonth,
  isToday,
  setEventInfoPop,
  eventInfoPop,
  datesMatch,
}) {
  const [clickedName, setClickedName] = useState("");

  return (
    <div className="flex flex-col gap-1 border border-neutral-300 p-1 ">
      <div className="flex flex-1 basis-1/4 justify-end ">
        {currentMonth ? (
          <h1
            className={`border rounded-full bg-neutral-100 px-1 text-black font-normal text-[0.70rem] ${
              isToday ? "bg-primary" : ""
            }`}
          >
            {date.date()}
          </h1>
        ) : null}
      </div>
      <div className="place-item-center basis-3/4 flex items-center ">
        {currentMonth && datesMatch.isCurrentDate ? (
          <div
            onClick={(e) => {
              setEventInfoPop(() => true);
              setClickedName(
                e.target.childNodes[0].firstChild.data.split(":")[1]
              );
            }}
            className=" bg-neutral-200  border grow-0 rounded-lg  h-full w-full"
          >
            <div className="text-primary flex flex-col text-[0.70rem] p-1 gap-2 font-semibold cursor-pointer">
              <span className="pointer-events-none">{`Author:${datesMatch.name}`}</span>
              <span className="pointer-events-none">
                {`id: ${datesMatch.id}`}
              </span>
            </div>
          </div>
        ) : (
          ""
        )}
        {eventInfoPop &&
        datesMatch.isCurrentDate &&
        datesMatch.name === clickedName ? (
          <EventInfo
            datesMatch={datesMatch}
            setEventInfoPop={setEventInfoPop}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CalendarCart;
