/*

- In the index.html file there is a "Get Consumer Finance Data" button. When the user clicks the button, pull data from the provided link above (https://cors.bridged.cc/https://www.consumerfinance.gov/data-research/consumer-complaints/search/api/v1/). Handle the link success and error responses accordingly, displaying results in
console.log() if successful.

- Separate your logic so that you can use your functions for another user button
click of "Get Custom Data". Interact with an API of your choice and handle both
success and error scenarios.

Other data sources:
- leading causes of death in new york: https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json
- Any listed here: https://cfpb.github.io/api/ccdb/api.html
  - but you need to prefix with to avoid CORS issues "https://cors.bridged.cc/"
- Any listed here: https://jsonplaceholder.typicode.com/guide/

*/

// Step 1: Write a generic makeRequest function that accepts the url as the argument and uses fetch to make the API request, transform it to JSON, and log this JSON to the screen. This function must account for both connection/network errors and error status codes (anything above 299).
const makeRequest = () => {

}

// DOM is loaded when this function runs
const onLoadHandler = () => {
  // Step 2: Create variables for the DOM elements representing the two buttons

  // Step 3: Attach a click event listener to both of these elements that calls the makeRequest function. One button should call the consumer complains endpoint and the other should call an endpoint of your choosing. 
};

// only run onLoadHandler if DOM is loaded
if (document.readyState === 'loading') {
  // vanilla js
  document.addEventListener('DOMContentLoaded', onLoadHandler);

  // jquery
  // $(document).ready(onLoadHandler);
} else {
  onLoadHandler();
}
