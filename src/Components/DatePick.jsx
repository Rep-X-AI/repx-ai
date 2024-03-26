import React, { useState } from 'react';
import '../CSS/Date.css'

export default function DatePicker(){
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [year, setYear] = useState(selectedDate.getFullYear());
  const [month, setMonth] = useState(selectedDate.getMonth());
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const handleDateClick = (day) => {
    const newDate = new Date(year, month, day);
    setSelectedDate(newDate);
  };
  const displayDates = () => {
    const currentDate = new Date();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const datesArray = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      datesArray.push(<button key={`empty-${i}`} className="empty"></button>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday =
        currentDate.getDate() === day &&
        currentDate.getFullYear() === year &&
        currentDate.getMonth() === month;
      const selected =
        selectedDate.getDate() === day &&
        selectedDate.getFullYear() === year &&
        selectedDate.getMonth() === month;
      datesArray.push(
        <button
          key={day}
          className={`${isToday ? 'today' : ''} ${selected ? 'selected' : ''}`}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </button>
      );
    }
    return datesArray;
  };
  const handleMonthChange = (e) => {
    setMonth(e.target.selectedIndex);
  };
  const handleYearChange = (e) => {
    setYear(parseInt(e.target.value));
  };
  const handleApply = () => {
    document.querySelector('.date-input').value = selectedDate.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
    setIsDatePickerOpen(false);
  };
  const handleCancel = () => {
    setIsDatePickerOpen(false);
  };
  const toggleDatePicker = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };
  const handleNextMonth = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  };
  const handlePrevMonth = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  };
  return (
    <div className="datepicker-container">
      <input type="text" className="date-input" placeholder="Select date here" onClick={toggleDatePicker} />

      {isDatePickerOpen && (
        <div className="datepicker">
          <div className="datepicker-header">
            <button className="prev" onClick={handlePrevMonth}>Prev</button>

            <div>
              <select className="month-input" onChange={handleMonthChange} value={month}>
                <option value={0}>January</option>
                <option value={1}>February</option>
                <option value={2}>March</option>
                <option value={3}>April</option>
                <option value={4}>May</option>
                <option value={5}>June</option>
                <option value={6}>July</option>
                <option value={7}>August</option>
                <option value={8}>September</option>
                <option value={9}>October</option>
                <option value={10}>November</option>
                <option value={11}>December</option>
              </select>
              <input
                type="number"
                className="year-input"
                onChange={handleYearChange}
                value={year}
              />
            </div>

            <button className="next" onClick={handleNextMonth}>Next</button>
          </div>

          <div className="days">
            <span>Sun</span>
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
          </div>

          <div className="dates">{displayDates()}</div>

          <div className="datepicker-footer">
            <button className="cancel" onClick={handleCancel}>Cancel</button>
            <button className="apply" onClick={handleApply}>Apply</button>
          </div>
        </div>
      )}
    </div>
  );
};