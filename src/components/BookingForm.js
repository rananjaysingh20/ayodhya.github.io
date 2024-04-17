import React, { useState } from "react";
import "../styles/bookingForm.css"; // Import CSS file for styling
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SearchBox from './seachBox';

function HotelBookingForm() {
  const [formData, setFormData] = useState({
    location: "",
    checkInDate: "",
    checkOutDate: "",
    numberOfGuests: 1,
  });
  const handleCheckInDateChange = (date) => {
    setFormData({
      ...formData,
      checkInDate: date,
    });
  };

  const handleCheckOutDateChange = (date) => {
    setFormData({
      ...formData,
      checkOutDate: date,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can replace this with your form submission logic
  };

  return (
    <div className="booking-form-container">
        
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <SearchBox />
          <DatePicker
            selected={formData.checkInDate}
            onChange={handleCheckInDateChange}
            className="form-control date"
            placeholderText="From"
            dateFormat="dd/MM/yyyy" // Specify desired date format
          />
          <DatePicker
            selected={formData.checkOutDate}
            onChange={handleCheckOutDateChange}
            className="form-control date"
            placeholderText="To"
            dateFormat="dd/MM/yyyy" // Specify desired date format
          />
          <select
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={handleChange}
            className="form-control guests"
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default HotelBookingForm;
