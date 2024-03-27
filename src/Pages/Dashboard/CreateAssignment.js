import React, { useState } from 'react';
import './Date.css'

export default function CreateAssignment() {

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
      datesArray.push(<p key={`empty-${i}`} className="empty"></p>);
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
          <p
            key={day}
            className={`${isToday ? 'today' : ''} ${selected ? 'selected' : ''}`}
            onClick={() => handleDateClick(day)}
          >
            {day}
          </p>
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
    <div className="w-full flex flex-col">
      <h1 className="text-3xl mb-1 text-left font-bold leading-none md:text-4xl lg:text-5xl pb-2 bg-gradient-to-bl from-purple-300 via-pink-300 to-purple-500 bg-clip-text text-transparent">
        {" "}Create Assignment{" "}
      </h1>
      <p className="mb-3 mt-2 text-lg font-normal text-purple-300 lg:text-xl text-left">
        Fill in the details below to create a new assignment and share it with your students.
      </p>
      <hr className="h-px my-8 mt-1 bg-gray-700 border-0" />
      <form className='w-full sm:px-16 lg:px-20 xl:px-40 flex flex-col flex-wrap text-xl mb-10 py-5'>
        <div className="grid gap-2 sm:gap-6 md:grid-cols-2">
          <div>
            <input name="title" id="title" type="text" className="bg-gradient-to-b from-purple-100 to-purple-300 text-black relative rounded-lg outline-none text-lg flex items-center gap-1.5 py-2 px-5 w-full border-2 border-[#030017] placeholder:text-gray-700 focus:ring-1 focus:ring-purple-400 focus:ring-offset-1 focus:ring-offset-transparent" required autoComplete="off" placeholder="Assignment Title" />
          </div>
          <div>
            <input name="creationDate" id="creationDate" type="text" className="bg-gradient-to-b from-purple-100 to-purple-300 text-black relative rounded-lg outline-none text-lg flex items-center gap-1.5 py-2 px-5 w-full border-2 border-[#030017] placeholder:text-gray-700 focus:ring-1 focus:ring-purple-400 focus:ring-offset-1 focus:ring-offset-transparent select-none pointer-events-none" required autoComplete="off" value={new Date(Date.now()).toLocaleDateString('en-GB')} placeholder="Creation Date" readOnly />
          </div>
        </div>

        <div className="grid mt-2 gap-2 sm:gap-6 md:grid-cols-2">
          <div>
            {/* {Date PIcker Start} */}
            
            <div className="datepicker-container">
              <input type="text" className="bg-gradient-to-b from-purple-100 to-purple-300 text-black relative rounded-lg outline-none text-lg flex items-center gap-1.5 py-2 px-5 w-full border-2 border-[#030017] placeholder:text-gray-700 focus:ring-1 focus:ring-purple-400 focus:ring-offset-1 focus:ring-offset-transparent date-input" placeholder="Select date here" onClick={toggleDatePicker} />

              {isDatePickerOpen && (
                <div className="datepicker">
                  <div className="datepicker-header">
                  <p className="prev" onClick={handlePrevMonth}>Prev</p>

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
                        min={new Date().getFullYear()}
                      />
                    </div>

                    <p className="next" onClick={handleNextMonth}>Next</p>
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

            {/* Date Picker End */}

          </div>
          <div>
            <input name="totalMarks" id="totalMarks" type="number" className="bg-gradient-to-b from-purple-100 to-purple-300 text-black relative rounded-lg outline-none text-lg flex items-center gap-1.5 py-2 px-5 w-full border-2 border-[#030017] placeholder:text-gray-700 focus:ring-1 focus:ring-purple-400 focus:ring-offset-1 focus:ring-offset-transparent" required autoComplete="off" min={0} max={1000} placeholder="Total Marks" />
          </div>
        </div>

        <div className="grid gap-6 mt-3 text-black md:grid-cols-2">
          <div>
            <label htmlFor="questionURL" className="block mb-2 font-medium text-purple-400 ">Question Paper PDF</label>
            <div className="flex items-center justify-center w-full">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 rounded-lg cursor-pointer bg-gradient-to-b from-purple-100 to-purple-400 text-black">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                  </svg>
                  <p className="mb-2 text-sm text-gray-950"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-950">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="modelURL" className="block mb-2 font-medium text-purple-400 ">Model Answer PDF</label>
            <div className="flex items-center justify-center w-full">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 rounded-lg cursor-pointer bg-gradient-to-b from-purple-100 to-purple-400 text-black">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                  </svg>
                  <p className="mb-2 text-sm text-gray-950"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-950">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>
        </div>

        <div className='mt-3'>
          <textarea name="description" id="description" className="bg-gradient-to-b from-purple-100 to-purple-400 text-black relative rounded-lg outline-none text-lg flex items-center gap-1.5 py-2 px-5 w-full border-2 h-52 resize-none border-[#030017] placeholder:text-gray-700 focus:ring-1 focus:ring-purple-400 focus:ring-offset-1 focus:ring-offset-transparent" autoComplete="off" placeholder="Write a bit of description...." />
        </div>

        <button type="submit" className="hero-button-gradient mt-3 rounded-lg py-3 px-7 text-white font-medium tracking-wide transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-95">Create Assignment</button>   
      </form>


    </div>
  );
}
