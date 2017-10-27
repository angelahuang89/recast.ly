var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {    
      key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true,
    },

    success: (data) => {
      console.log('Fetched!');
      callback(data.items);
    },

    failure: (data) => {
      console.error(data);
    }        
  });
};

window.searchYouTube = _.debounce(searchYouTube, 500, {leading: true, trailing: true});
