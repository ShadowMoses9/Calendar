import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

import AppLayout from "./ui/AppLayout";
import PageNotFound from "./ui/PageNotFound";
import Calendar from "./ui/Calendar";

function App() {
  const currentDate = dayjs();
  const [today, setToday] = useState<Dayjs>(currentDate);

  //State for Popup
  const [eventInfoPop, setEventInfoPop] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout
              today={today}
              currentDate={currentDate}
              setToday={setToday}
            />
          }
        >
          <Route
            path=":dateId"
            element={
              <Calendar
                today={today}
                eventInfoPop={eventInfoPop}
                setEventInfoPop={setEventInfoPop}
              />
            }
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
