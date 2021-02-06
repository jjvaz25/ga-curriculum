import { flickrApiKey } from './keys.js';

const handleError = (err, userMessage) => {
  console.error('Error:', err);

  // hide loading view
  document.getElementById('loading-view').classList.add('hide');

  // add message to error container and remove 'hide' class
  const errorMessageContainer = document.querySelector('#errorMessage div');
  errorMessageContainer.textContent = userMessage;
  errorMessageContainer.parentNode.classList.remove('hide');
};

const retrievePhotosForLocation = async (latitude, longitude) => {
  const url = new URL('https://www.flickr.com/services/rest/');
  const params = {
    lat: latitude,
    lon: longitude,
    method: 'flickr.photos.search',
    api_key: flickrApiKey,
    media: 'photos',
    tags: 'landscape',
    format: 'json',
    extras: 'url_n',
    content_type: 1,
    safe_search: 1,
    nojsoncallback: 1 // need this because we don't want jsonp
  };

  // add query string to URL
  url.search = new URLSearchParams(params).toString();

  console.log('url', url)
  // fetch resource
  const rawResponse = await fetch(url);

  // if it's not ok, let's get out of here
  if (!rawResponse.ok) {
    throw new Error('failed to retrieve photos from Flickr API');
  }

  // transform response into JSON
  const json = await rawResponse.json();

  // return only photos
  return json.photos.photo;
};


const onLocationSuccess = async (position) => {
  try {
    const { latitude, longitude } = position.coords;

    // retrieve photos
    const photos = await retrievePhotosForLocation(latitude, longitude);

    // hide loading view, reveal results view
    document.getElementById('loading-view').classList.add('hide');
    document.getElementById('image-results-view').classList.remove('hide');

    // get images list...
    const imagesList = document.querySelector('.images');

    photos.filter((photo) => {
      return photo.title !== '';
    }).forEach((photo) => {
      // create element
      const newImageElement = document.createElement('img');
      // add src
      newImageElement.src = photo.url_n;
      // add class
      newImageElement.classList.add('image');
      // append to DOM
      imagesList.appendChild(newImageElement);
    });
  } catch (err) {
    handleError(err, 'Failed to look up Flickr images for location');
  }
};

const onLocationFail = (err) => {
  handleError(err, 'Failed to determine user location');
};

// DOM is ready for manipulation
const onLoadHandler = () => {
  // toggle loading view
  document.getElementById('loading-view').classList.remove('hide');

  // get location
  navigator.geolocation.getCurrentPosition(onLocationSuccess, onLocationFail);
};

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onLoadHandler);
} else {
  onLoadHandler();
}
