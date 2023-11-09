import dayjs from "dayjs";
import { data } from "../services/octokit";

export const getDays = (month = dayjs().month(), year = dayjs().year()) => {
  const firstDayOfMonth = dayjs().year(year).month(month).startOf("month");

  const lastDayOfMonth = dayjs().year(year).month(month).endOf("month");

  const days = [];

  //past days
  for (let i = 0; i < firstDayOfMonth.day(); i++) {
    days.push({ date: firstDayOfMonth.day(i), currentMonth: false });
  }

  //get current date
  for (let i = firstDayOfMonth.date(); i <= lastDayOfMonth.date(); i++) {
    days.push({
      date: firstDayOfMonth.date(i),
      currentMonth: true,
      isToday:
        firstDayOfMonth.date(i).toDate().toDateString() ===
        dayjs().toDate().toDateString(),
    });
  }

  //remaining day
  const remaining = 42 - days.length;

  for (
    let i = lastDayOfMonth.date() + 1;
    i <= lastDayOfMonth.date() + remaining;
    i++
  ) {
    days.push({ date: lastDayOfMonth.date(i), currentMonth: false });
  }
  return days;
};

export function getEvents() {
  const events = [];
  data.map((data) =>
    events.push({
      eventDate: data.commit.author?.date,
      name: data.commit.author?.name,
      eventId: data.author?.id,
      url: data.url,
      message: data.commit.message,
    })
  );
  return events;
}

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
