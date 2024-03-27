import React, { useState } from 'react';

export default function DatePicker() {
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
      const currentDateOfMonth = new Date(year, month, day);
      if (currentDateOfMonth >= currentDate) {
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
    const currentDate = new Date();
    if (year > currentDate.getFullYear() || (year === currentDate.getFullYear() && month > currentDate.getMonth())) {
      setMonth(month - 1);
    }
  };

  return (
    <div className="datepicker-container">
      <input
        type="text"
        className="bg-gradient-to-b from-purple-100 to-purple-400 text-black relative rounded-lg outline-none text-lg flex items-center gap-1.5 py-2 px-5 w-full border-2 border-[#030017] placeholder:text-gray-700 focus:ring-1 focus:ring-purple-400 focus:ring-offset-1 focus:ring-offset-transparent date-input"
        placeholder="Select date here"
        onClick={toggleDatePicker}
      />

      {isDatePickerOpen && (
        <div className="datepicker">
          <div className="datepicker-header">
            <button className={`prev ${year === new Date().getFullYear() && month === new Date().getMonth() ? 'current-month' : 'other-month'}`} onClick={handlePrevMonth}>
              Prev
            </button>

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
              <input type="number" className="year-input" onChange={handleYearChange} value={year} />
            </div>

            <button className="next" onClick={handleNextMonth}>
              Next
            </button>
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
            <button className="cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button className="apply" onClick={handleApply}>
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
