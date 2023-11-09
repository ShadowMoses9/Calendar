import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import CustomParseFormat from "dayjs/plugin/customParseFormat";

import Header from "./Header";

dayjs.extend(CustomParseFormat);

function AppLayout({ today, currentDate, setToday }) {
  //Date from URL
  const { dateId } = useParams();
  const [urlDate, setUrlDate] = useState(dayjs(dateId, "YYYY-MM-DD", true));

  //Formating date
  const route = `${today.year()}-${today.month() + 1}-${today.date() + 1}`;
  const routeWithZeros = new Date(route).toISOString().split("T")[0];

  const navigate = useNavigate();

  useEffect(() => {
    setToday(urlDate);
    navigate(`/${routeWithZeros}`);
  }, [routeWithZeros, navigate, urlDate, setToday]);

  return (
    <div
      className={`flex flex-col gap-4 h-screen max-w-5xl mx-auto text-primary pt-[10rem] `}
    >
      <Header
        currentDate={currentDate}
        urlDate={urlDate}
        setUrlDate={setUrlDate}
      />
      <Outlet />
    </div>
  );
}

export default AppLayout;
