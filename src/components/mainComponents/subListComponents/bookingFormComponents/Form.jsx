import React from "react";

const Form = () => {
  return (
    <section class="booking-section">
      <h3>Book a tour:</h3>
      <form class="booking-form">
        <label class="first-name">
          First Name:
          <input type="text" name="firstName" value="" />
        </label>
        <label class="last-name">
          Last Name:
          <input type="text" name="lastName" value="" />
        </label>
        <label class="tour-date">
          Tour date
          <input type="date" name="date" value="" />
        </label>
        <label class="tour-time">
          Time
          <input
            type="time"
            name="time"
            min="09:00"
            max="18:00"
            step="3600"
            value=""
          />
        </label>
        <label class="tour-no-of-people">
          No. people
          <input type="number" min="1" max="10" name="peopleCount" value="" />
        </label>
        <input type="submit" value="Book Now!" />
      </form>
    </section>
  );
};

export default Form;
