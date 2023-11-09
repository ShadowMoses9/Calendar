import Button from "./Button";

import { months } from "../utils/helpers";

function Header({ currentDate, urlDate, setUrlDate }) {
  function handleDecrement() {
    setUrlDate(urlDate.month(urlDate.month() - 1));
  }

  function handleIncrement() {
    setUrlDate(urlDate.month(urlDate.month() + 1));
  }

  return (
    <div className="flex justify-between">
      <div className="flex gap-3 text-black font-semibold text-lg">
        <span>{months[urlDate.month()]}</span>
        <span>{urlDate.year()}</span>
      </div>
      <div className="flex gap-2 items-center">
        <Button handler={handleDecrement}>﹤</Button>
        <h1
          className="cursor-pointer font-semibold hover:-translate-y-1 transition-all"
          onClick={() => setUrlDate(currentDate)}
        >
          Current Date
        </h1>
        <Button handler={handleIncrement}>﹥</Button>
      </div>
    </div>
  );
}

export default Header;
