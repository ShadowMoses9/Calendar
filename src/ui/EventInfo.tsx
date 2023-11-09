import { useEffect, useRef } from "react";

function EventInfo({ datesMatch, setEventInfoPop }) {
  const popRef = useRef();

  useEffect(() => {
    let handlerPopUp = (e) => {
      if (!popRef.current?.contains(e.target)) {
        setEventInfoPop(false);
        datesMatch = {};
      }
    };
    document.addEventListener("mousedown", handlerPopUp);
  }, []);

  return (
    <div
      className={`absolute left-[20%] right-[20%] top-[35%]  border-neutral-300 rounded-lg px-12 py-5 bg-neutral-200 z-50 `}
      ref={popRef}
    >
      <div className="flex flex-col  divide-y-2 divide-primary">
        <h1>Event Info: </h1>
        <p>{`Author: ${datesMatch.name}`}</p>
        <p>{`Event ID: ${datesMatch.id}`}</p>
        <p>{`URL: ${datesMatch.url}`}</p>
        <p>{`Message: ${datesMatch.message}`}</p>
      </div>
    </div>
  );
}

export default EventInfo;
