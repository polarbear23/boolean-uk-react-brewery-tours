import React from "react";

const BreweriesListItem = (props) => {
  const { brewery } = props;
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
        <button>Book a tour</button>
      </section>
      <section class="link">
        <a href={brewery.website_url} target="_blank">
          Visit Website
        </a>
      </section>
      <section class="booking-form">
        <h3>Book a tour:</h3>
        <form>
          <label>
            First Name
            <input type="text" name="firstName" value="" />
          </label>
          <label>
            Last Name
            <input type="text" name="lastName" value="" />
          </label>
          <label>
            Tour date
            <input type="date" name="date" value="" />
          </label>
          <label>
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
          <label>
            No. people
            <input type="number" min="1" max="10" name="peopleCount" value="" />
          </label>
          <input type="submit" value="Book Now!" />
        </form>
      </section>
    </li>
  );
};

export default BreweriesListItem;
