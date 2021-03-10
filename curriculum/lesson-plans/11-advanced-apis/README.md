# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Advanced APIs

| Timing | Type | Topic |
| --- | --- | --- |
| 15 min | [Opening](#opening) | Introduction to Advanced APIs |
| 30 min | [Codealong](#codealong1) | Getting Started Flickr API |
| 100 min | [Lab](#lab1) | Functions and Callbacks: Independent Practice |
| 5 min |  [Conclusion](#conclusion)| Final Questions & Exit Tickets |

### Objectives
*After this lesson, students will be able to:*

- Implement a geolocation API to request a location.
- Process a third-party API response and share location data on your website.
- Search documentation needed to make and customize third-party API requests.

### Preparation
*Before this lesson, students should already be able to:*

- Have a solid grasp on HTTP fundamentals.
- Know how to manipulate the DOM with vanilla JS.
- Understand the basics of Promises.

---
<a name = "opening"></a>
## Introduction to Advanced APIs (15 min) 

Today we are going to build an app together, and in the process, we're going to go learn more about the process of dividing a problem into subproblems, reading API documentation, using a HTTP client to test out API requests, and using the browser `navigator` object to get the user's location.

<a name = "codealong1"></a>
## Getting Started Flickr API (30 min)

### Setting the Scene

You wake up in the middle of the night with this fantastic app idea: What if there were a web page you could visit that would automatically display landscape photos from wherever you are located in the world? A visitor in Ukraine would see photos of Ukraine. A visitor in Wisconsin would see beautiful fields of cows and cheese.

The next morning, you text your experienced JavaScript developer friend for advice. She responds: 
> Sounds like a great idea! You might want to look into the browser navigator object for the user location. **Flickr** has a great API for searching for photos. I think with those two things combined you'll be able to build your app. Tomorrow I'm flying out to climb Mount Everest so I won't be available. Good luck!

You still don't have all the answers but you have some important leads on how you might build your app. It feels overwhelming and you begin to despair. Thankfully, you remember the quote from Lao-Tzu: "A journey of a thousand miles begins with a single step." Perhaps we can divide this big problem into smaller problems so that it feels more manageable and achievable.

### Outlining the problem

We know this will be a frontend app because we want users to experience it through a web browser. We can go ahead and create a new directory for our app with a `index.html` and `styles.css` with the contents shown here in the [starter code directory](starter-code).

Let's outline the steps to solve the problem is pseudo code:
```js
// 1. Wait until the DOM is ready
// 2. Determine user location with `navigator` browser API
//   - If this fails, display error message
// 3. Retrieve photos from flickr for user location
//   - If this fails, display error message
// 4. For each photo returned:
//   - Create `img` element
//   - Append `img` element to the DOM
```

## Step 1: Wait until the DOM is ready

We've done this before in previous classes.

```js
const onLoadHandler = () => {

};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onLoadHandler);
} else {
  onLoadHandler();
}
```

## Step 2: Determine browser location with Navigator browser API

Let's take a look at the Navigator API docs: https://developer.mozilla.org/en-US/docs/Web/API/Navigator

We will be using Navigator to get the user's location so lets take a look at the [`getCurrentPosition()`](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition). The docs provide an example. Let's take a look:

```js
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
```

We don't really know what we'll need for the Flickr API. Let's leave this as is until we investigate our next problem.

## Step 3: Retrieve photos from Flickr for user location

We know the broader goal of this step but we aren't quite sure how to do that yet. Let's divide this subproblem into subproblems:
1. Can this API provide the information we need?
2. Figure out how to interact with this API.
3. Write this API request in code.

### Reading the documentation

A good place to start when working with the documentation for the first time is the API: https://www.flickr.com/services/developer/api/ .

We learn right away that we'll need an API key. Let's set that up: https://www.flickr.com/services/apps/create/ .

<a name = "lab1"></a>
## Choosing an API endpoint: Practice (100 min)

In pairs, review the documentation here: https://www.flickr.com/services/api/ . See if you can find the endpoint we can use to search photos for a specific user location. Take a look at the various request parameters and take note of ones that might important for our app.

### Experiment with API endpoint

At this point we might not be confident we have the right endpoint. Or we want to do a little bit of testing to make sure that our API key works before we try to implement this request in JavaScript.

One common way of doing this is with an HTTP client. This can be done on the command line with `curl` or with an application with a graphical interface such as Postman or Insomnia. Today we'll accomplish this with Insomnia. 

Let's install Insomnia by following the steps here: https://support.insomnia.rest/article/23-installation

We could get a random set of lat/lng from this website for testing purposes: https://www.latlong.net/

Play around with making requests with your API key and referencing the docoumentation. Have fun! Experiment with the different parameters, including `format` parameter with a value of `json`, as well as `nojsoncallback` with value of `1`. 

After that, identify another endpoint in the documentation to experiment with and see if you can get a successful request with that in Insomnia.

### Implement API call 

Before we write any JavaScript we know that we will need to store an API key. Truth be told, the API key can't be secured 100% in the frontend, unless the API provider is allowing you to set scoping rules that restrict the calls to a specific domain (yours). Any user can visit your page and see the API key you are sending by looking at the networking panel in dev tools. That being said, there is a big difference between exposing this key in your requests and publishing it to Github, where curious humans and automated scrapers can obtain your API key and do whatever they want with it. 

So let's start by adding our API key to `keys.js`, which we will then import into our main `index.js`. Then, we'll make sure `keys.js` is in our `.gitignore` file which will prevent us from accidentally publishing this to github.


Next, let's transform the request we created in Insomnia to JavaScript. We'll then add this to our code.

```js
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
```

### Opening your webpage
Some things to remember when opening your webpage. You may run into some issues due to CORS. If you are using `http-server` or Live Server with VS Code, you will have to change the url to `localhost:<PORT NUMBER>`. This is because Chrome determines that `localhost` over `http` is secure.

You may also have enable location settings if you are on a Mac. Open Settings > Security & Privacy > Location Services. Once enabled for your browser, you may have to close and quit the program. 

## Step 4: Your turn. Add images to the DOM

At this point we've solved all other subproblems. We've figured out how to get the user's location and get the photos from the Flickr API. All that is left is iterating through the Flickr API response to append images to the DOM.

## Step 5: Bonuses

**Bonus 1**: Add in a loading screen to indicate to the user that something is happening. This is considered a best practice especially since it might take a few seconds for the API call and navigator geocode to complete.

**Bonus 2**: Return URLs for larger images (Hint: Check out the extras argument at https://www.flickr.com/services/api/flickr.photos.search.html  and look at the Size Suffixes section at https://www.flickr.com/services/api/misc.urls.html).

**Bonus 3**: Instead of landscapes, return photos from a different category (see popular tags at https://www.flickr.com/photos/tags/)

**Bonus 4 (challenging)**: Implement OAuth and display the current user’s information on the site after a successful login. See authentication documentation at https://www.flickr.com/services/api/auth.oauth.html and the jso library at https://github.com/andreassolberg/jso.

---
<a name = "conclusion"></a>
## Conclusion (5 min)

**More Resources:**
* [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
* [OAuth](https://www.oauth.com/oauth2-servers/single-page-apps/)
* [4 Different ways you can make API calls in Javascript](https://levelup.gitconnected.com/all-possible-ways-of-making-an-api-call-in-plain-javascript-c0dee3c11b8b)