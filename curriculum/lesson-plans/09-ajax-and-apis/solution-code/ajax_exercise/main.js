// - Separate your logic so that you can use your functions for another user button click of "Get Custom Data"
// async/await
const makeRequest = async (url) => {
  try {
    // fetch the raw response
    const rawResponse = await fetch(url);

    // fetch only rejects for network error or connection issues
    // as a result, we need to handle different scenarios here
    // rawResponse.ok is true if status code is between 200 - 299
    if (!rawResponse.ok) {
      throw new Error('response not ok');
    }

    // if we made it this far, we're ok
    const jsonResponse = await rawResponse.json();
    console.log('jsonResponse', jsonResponse);
  } catch (err) {
    console.log('err', err);
  }
}

// chain
// const makeRequest = function(url) {
//   fetch(url).then((res) => {
//     if (!res.ok) {
//       throw new Error('response not ok');
//     }
//     return res.json();
//   }).then((jsonResponse) => {
//     console.log('jsonResponse', jsonResponse);
//   })
//   .catch((err) => {
//     console.log('err', err);
//   });
// };

const onLoadHandler = () => {
  // vanilla js
  document.getElementById('getDataButton').addEventListener('click', (evt) => {
    console.log('making request');
    makeRequest('https://cors-anywhere.herokuapp.com/https://www.consumerfinance.gov/data-research/consumer-complaints/search/api/v1/');
  });

  document.getElementById('getCustomDataButton').addEventListener('click', (evt) => {
    console.log('making request');
    makeRequest('https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json');
  });

  // jquery
  // $('#getDataButton').on('click', (evt) => {
  //   console.log('making consumer finance request');
  //   makeRequest('https://cors-anywhere.herokuapp.com/https://www.consumerfinance.gov/data-research/consumer-complaints/search/api/v1/');
  // });

  // $('#getCustomDataButton').on('click', (evt) => {
  //   console.log('making custom request');
  //   makeRequest('https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json');
  // });
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
