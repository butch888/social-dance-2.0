import React, { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const datePickerRef = useRef(null);

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handleClickOutside = (event) => {
    if (datePickerRef.current &&!datePickerRef.current.contains(event.target)) {
      // Если клик был вне области календаря, скрываем его
      document.getElementById("calendar").style.display = "none";
    }
  };

  useEffect(() => {
    // Добавляем обработчик событий клика вне элемента
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Очищаем обработчик при размонтировании компонента
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center">
      <input 
        type="text" 
        readOnly 
        value={startDate.toISOString().split('T')[0]} 
        onClick={() => {
          document.getElementById("calendar").style.display = "block";
        }}
        className="border border-gray-300 bg-white p-2 rounded-md w-64 cursor-pointer"
      />
      <div id="calendar" ref={datePickerRef}>
        <DatePicker 
          selected={startDate} 
          onChange={handleDateChange}
          className="absolute z-10"
        />
      </div>
    </div>
  );
};

export default DatePickerComponent;