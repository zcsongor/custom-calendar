import React, { useState } from "react";
import {
  startOfMonth,
  getDay,
  getDaysInMonth,
  subMonths,
  addMonths,
  format
} from "date-fns";

const Calendar = () => {
  const weekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map(day => (
    <th key={day}>{day}</th>
  ));

  const [date, setDate] = useState(new Date());

  const firstDayOfMonthSu = getDay(startOfMonth(date));
  const firstDayOfMonth = firstDayOfMonthSu === 0 ? 6 : firstDayOfMonthSu - 1;
  const allDaysInMonth = getDaysInMonth(date);

  let blanks = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    blanks.push(
      <td key={i * 80} className="emptySlot">
        {""}
      </td>
    );
  }

  const days = [];
  for (let d = 1; d <= allDaysInMonth; d++) {
    days.push(
      <td key={d} className="calendar-day">
        {d}
      </td>
    );
  }

  var totalSlots = [...blanks, ...days];
  let rows = [];
  let cells = [];

  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row); // if index not equal 7 that means not go to next week
    } else {
      rows.push(cells); // when reach next week we contain all td in last week to rows
      cells = []; // empty container
      cells.push(row); // in current loop we still push current row to new container
    }
    if (i === totalSlots.length - 1) {
      // when end loop we add remain date
      rows.push(cells);
    }
  });

  let daysinmonth = rows.map((d, i) => {
    return <tr key={i}>{d}</tr>;
  });

  return (
    <>
      <h1>Calendar</h1>
      {format(date, "yyyy MMM")}
      <div>
        <button onClick={() => setDate(subMonths(date, 1))}>-</button>
        <button onClick={() => setDate(addMonths(date, 1))}>+</button>
      </div>
      <table>
        <thead>
          <tr>{weekdays}</tr>
        </thead>
        <tbody>{daysinmonth}</tbody>
      </table>
    </>
  );
};

export default Calendar;
