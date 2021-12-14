import React from "react";
import { useState } from "react";
const Form = () => {
  const [bookingData, setBookingData] = useState({
    firstName: "",
    lastName: "",
    date: "",
    time: "",
    quantityOfTourists: "",
  });

  const changeFirstName = (event) => {
    setBookingData({
      firstName: event.target.value,
      lastName: bookingData.lastName,
      date: bookingData.date,
      time: bookingData.time,
      quantityOfTourists: bookingData.quantityOfTourists,
    });
  };
  const changeLastName = (event) => {
    setBookingData({
      firstName: bookingData.firstName,
      lastName: event.target.value,
      date: bookingData.date,
      time: bookingData.time,
      quantityOfTourists: bookingData.quantityOfTourists,
    });
  };
  const changeDate = (event) => {
    setBookingData({
      firstName: bookingData.firstName,
      lastName: bookingData.lastName,
      date: event.target.value,
      time: bookingData.time,
      quantityOfTourists: bookingData.quantityOfTourists,
    });
  };
  const changeTourTime = (event) => {
    setBookingData({
      firstName: bookingData.firstName,
      lastName: bookingData.lastName,
      date: bookingData.date,
      time: event.target.value,
      quantityOfTourists: bookingData.quantityOfTourists,
    });
  };
  const changeQuantityOfTourists = (event) => {
    setBookingData({
      firstName: bookingData.firstName,
      lastName: bookingData.lastName,
      date: bookingData.date,
      time: bookingData.time,
      quantityOfTourists: event.target.value,
    });
  };
  return (
    <section class="booking-section">
      <h3>Book a tour:</h3>
      <form class="booking-form">
        <label class="first-name">
          First Name:
          <input
            type="text"
            name="firstName"
            value={bookingData.firstName}
            onChange={changeFirstName}
          />
        </label>
        <label class="last-name">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={bookingData.lastName}
            onChange={changeLastName}
          />
        </label>
        <label class="tour-date">
          Tour date
          <input
            type="date"
            name="date"
            value={bookingData.date}
            onChange={changeDate}
          />
        </label>
        <label class="tour-time">
          Time
          <input
            type="time"
            name="time"
            min="09:00"
            max="18:00"
            step="3600"
            value={bookingData.time}
            onChange={changeTourTime}
          />
        </label>
        <label class="tour-no-of-people">
          No. people
          <input
            type="number"
            min="1"
            max="10"
            name="peopleCount"
            value={bookingData.quantityOfTourists}
            onChange={changeQuantityOfTourists}
          />
        </label>
        <input type="submit" value="Book Now!" />
      </form>
    </section>
  );
};

export default Form;
