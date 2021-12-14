import React from "react";
import Form from "./bookingFormComponents/Form.jsx";
import { useState } from "react";
const BreweriesListItem = (props) => {
  const [bookingForm, setBookingForm] = useState(false);
  const { brewery } = props;

  const handleClick = () => {
    setBookingForm(!bookingForm);
  };

  return (
    <li>
      <h2>{brewery.name}</h2>
      <div class="type">{brewery.brewery_type}</div>
      <section class="address">
        <h3>Address:</h3>
        <p>{brewery.street}</p>
        <p>
          <strong>
            {brewery.city}, {brewery.postal_code}
          </strong>
        </p>
      </section>
      <section class="phone">
        <h3>Phone:</h3>
        <p>{brewery.phone}</p>
      </section>
      <section class="booking">
        {!bookingForm && <button onClick={handleClick}>Book a tour</button>}
        {bookingForm && <button onClick={handleClick}>Hide Form</button>}
      </section>
      <section class="link">
        {brewery.website_url && (
          <a href={brewery.website_url} target="_blank">
            Visit Website
          </a>
        )}
        {!brewery.website_url && <a>No Website Available</a>}
      </section>
      {bookingForm && <Form />}
    </li>
  );
};
export default BreweriesListItem;
