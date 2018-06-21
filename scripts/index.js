'use strict';
/* global $ */
const API_KEY = '' ; //insert API key here;

/*
  We want our store to hold a `videos` array of "decorated" objects - i.e. objects that
  have been transformed into just the necessary data to display on our page, compared to the large
  dataset Youtube will deliver to us.  Example object:
  
  {
    id: '98ds8fbsdy67',
    title: 'Cats dancing the Macarena',
    thumbnail: 'https://img.youtube.com/some/thumbnail.jpg'
  }

*/
const store = {
  videos: []
};



// TASK: Add the Youtube Search API Base URL here:
// Documentation is here: https://developers.google.com/youtube/v3/docs/search/list#usage
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

// TASK:
// 1. Create a `fetchVideos` function that receives a `searchTerm` and `callback`
// 2. Use `searchTerm` to construct the right query object based on the Youtube API docs
// 3. Make a getJSON call using the query object and sending the provided callback in as the last argument
// TEST IT! Execute this function and console log the results inside the callback.
const fetchVideos = function(searchTerm) {
// console.log('`fetchVideos` ran');
  const query = {
    part: 'snippet',
    key : API_KEY, 
    q: searchTerm,
    maxResults: 25
  };

  $.getJSON(BASE_URL, query, function (response) {
    
    const vidData = response;
    console.log(vidData);

    const videos = decorateResponse(vidData); 
    addVideosToStore(videos);
    render();
    
  });  
};

//fetchVideos('world cup');

// TASK:
// 1. Create a `decorateResponse` function that receives the Youtube API response
// 2. Map through the response object's `items` array
// 3. Return an array of objects, where each object contains the keys `id`, `title`, 
// `thumbnail` which each hold the appropriate values from the API item object. You 
// WILL have to dig into several nested properties!
// TEST IT! Grab an example API response and send it into the function - make sure
// you get back the object you want.
const decorateResponse = function(response) {
  
  
  return response.items.map(item => ({
    id: item.id.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.medium.url

  }));
  //console.log(results);
};

//decorateResponse(mockData);

const generateResultsText = function(query) {
  let myHTML = `<h2>Displaying 25 results for your search term: ${query}</h1>`;
  $('.text-results').html(myHTML);
};

// TASK:
// 1. Create a `generateVideoItemHtml` function that receives the decorated object
// 2. Using the object, return an HTML string containing all the expected data
// TEST IT

const generateVideoItemHtml = function(video) {
  return `
  <li data-id="${video.id}">
   <h3>${video.title}</h3> 
   <a href="https://www.youtube.com/watch?v=${video.id}"><img src="${video.thumbnail}" alt="This is a clickable picture that will take you to the video"></a> </li>
   `;
  
};



// TASK:
// 1. Create a `addVideosToStore` function that receives an array of decorated video 
// objects and sets the array as the value held in store.videos
// TEST IT!
const addVideosToStore = function(videos) {
  store.videos = videos;
};
// console.log(videos);

// TASK:
// 1. Create a `render` function
// 2. Map through `store.videos`, sending each `video` through your `generateVideoItemHtml`
// 3. Add your array of DOM elements to the appropriate DOM element
// TEST IT!
const render = function() {
  const videoElements = store.videos.map (vid => {
    return generateVideoItemHtml(vid);
    
  });
  
  $('.results').html(videoElements);
};

// const videos = decorateResponse(mockData);
// addVideosToStore(videos);
// render();


// TASK:
// 1. Create a `handleFormSubmit` function that adds an event listener to the form
// 2. The listener should:
//   a) Prevent default event
//   b) Retrieve the search input from the DOM
//   c) Clear the search input field
//   d) Invoke the `fetchVideos` function, sending in the search value
//   e) Inside the callback, send the API response through the `decorateResponse` function
//   f) Inside the callback, add the decorated response into your store using the `addVideosToStore` function
//   g) Inside the callback, run the `render` function 
// TEST IT!
const handleFormSubmit = function() { 
  //works for both clicking and hitting enter as well
  $('form').on('submit', function(event){ 
    event.preventDefault(); 
    console.log ('`handleFormSubmit` ran');
    const queryTarget = $(event.currentTarget).find('#search-term');
    const query = queryTarget.val();
    generateResultsText(query);
    //console.log(query); this worked
    queryTarget.val('');//resets what is in the box
    fetchVideos(query);
    
    
  });
};

// When DOM is ready:
$(function () {
  // TASK:
  // 1. Run `handleFormSubmit` to bind the event listener to the DOM
  handleFormSubmit();
});
