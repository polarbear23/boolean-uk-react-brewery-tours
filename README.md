# boolean-uk-react-brewery-tours

<img src="./_images/breweries-tour-react.gif?raw=true" width="1000px">

### Setup
1. Fork this repository
2. Clone your forked repository
3. In the project directory run `npm install` to install project dependencies

```sh
$ npm install # install project dependencies
$ npm start # run the application
```

**Description**
We're revisiting this exercise so we can practice some extra concepts that were introduced so far. You will have the opportunity to interact with an API again, and use `useEffect` as well as building more forms and use them together with the rest of your app!

**Deliverables**
- A user can enter a US state and view a list of breweries in that state
	- The list has a maximum of 10 breweries on display
	- The list has three types of breweries that offer brewery tours:
		- Micro
		- Regional
		- Brewpub
	- **Do not** show the other types of breweries
- From the list of breweries, a user can view the following details about each brewery:
	- Name
	- Type of brewery
	- Address
	- Phone Number
- From the list of breweries, a user can visit the website of a brewery
- From the list of breweries, a user can open one booking form at a time
- The user can submit the booking form to book a tour
- The booking form should clear after submitted
- Each booking form should keep the data until it's submitted
- From the 'filter by type of brewery' section, a user can filter by type of brewery
- From the 'filter by city' section, a user can filter by city, the location of the brewery
- From the 'filter by city' section, a user can clear all filters
- From the 'search' section, a user can search for breweries by:
	- Name
	- City

**Instructions**
- Start a json-server **with a different port than the React server**, use the following command `json-server --watch db.json -p 4000`
- Read the "Open Brewery DB" documentation: https://www.openbrewerydb.org/documentation/01-listbreweries
- Think about which request type to use
- Render the main section with the breweries list you get from your search by state fetch
- When a form is submitted, its data should be saved in the json-server
- Render the side section with all the filter options. When applied, the main section should immediately render the filtered list

**Tips**
- Start with the logic first, use `console.log(state)` to check your logic is working; when the logic is working as expected move on to styling
- Use a `cleanData` function to modify the data in the fetch request before adding it to its corresponding state
- Use an `extractCitiesData` function to extract the cities from the data in the fetch request and add it to state for the 'filter by city' section
- For filter by type use a `select` element to capture user input
- For filter by city use a list of `checkbox` elements to capture user input
- For the booking form, use a `date` and `time` input

**Challenge**
- Add pagination to the list; if the list of breweries is greater than 10 a user can go to the next page to view more breweries

**Challenge 2**
- Add a submitted bookings page; this page should replace the list and filters sections, and display all the bookings that were saved in the server. You should display each booking data and the respective brewery info. Create also an option to group the bookings by brewery, and display all bookings per brewery
