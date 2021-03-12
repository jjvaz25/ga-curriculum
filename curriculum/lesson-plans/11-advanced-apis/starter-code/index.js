// 1. Wait until the DOM is ready
// 2. Determine user location with `navigator` browser API
//   - If this fails, display error message
// 3. Retrieve photos from flickr for user location
//   - If this fails, display error message
// 4. For each photo returned:
//   - Create `img` element
//   - Append `img` element to the DOM
import { flickrApiKey } from './keys.js';

const onLoadHandler = () => {
    // document.getElementById
    
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onLoadHandler);
} else {
    onLoadHandler();
}

 

const options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
};
function success(pos) {
    let crd = pos.coords;
    // console.log(pos);

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    
    apiCall(crd.latitude, crd.longitude);
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

async function apiCall(latitude, longitude) {
    const url = new URL('https://www.flickr.com/services/rest/');
    const params = {
        lat: latitude,
        lon: longitude,
        method: 'flickr.photos.search',
        api_key: flickrApiKey,
        media: 'photos',
        tags: 'landscape',
        format: 'json',
        content_type: 1,
        safe_search: 1,
        nojsoncallback: 1 // need this because we don't want jsonp
    };

    // add query string to URL
    url.search = new URLSearchParams(params).toString();

    // same as writing the url above
    // let url = `https://www.flickr.com/services/rest/?lat=${latitude}&lon=${longitude}&method=flickr.photos.search&api_key=${flickrApiKey}&media=photos&tags=landscape&format=json&extras=url_n&content_type=1&safe_search=1&nojsoncallback=1`;
    // fetch resource
    const rawResponse = await fetch(url);

    if (!rawResponse.ok) {
    alert('failed to request photos from Flickr API');

    // we want to stop execution if there is an error
    return;
    }

    // transform response into JSON
    const json = await rawResponse.json();

    console.log('json', json);
}

