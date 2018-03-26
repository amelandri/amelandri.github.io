function displaySearchResults(results, store) {

  if (results.length) { // Are there any results?
    var appendString = '';
    
    console.log('B1');
    
    for (var i = 0; i < results.length; i++) { // Iterate over the results
      var item = store[results[i].ref];
      appendString += '<li><a href="' + item.url + '"><h3>' + item.title + '</h3></a>';
      appendString += '<p>' + item.content.substring(0, 150) + '...</p></li>';
    }

    $('#search-results').html(appendString);
    
  } else {
    
    console.log('C1');
    
    $('#search-results').html('<li>No results found</li>');
  }
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');

    if (pair[0] === variable) {
      return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
    }
  }
}


$(document).ready(function () {

  var searchTerm = getQueryVariable('query');
  
  var results;

  console.log('searchTerm: -' + searchTerm + '-');
  
  if (searchTerm) {

    console.log('A1');
    
    $('#search-box').attr("value", searchTerm);
	  $('.searchResultItem').text(searchTerm);

    var idx = lunr(function () {
      this.field('id');
      this.field('title', {
        boost: 10
      });
      this.field('content');
      for (var key in window.store) {
        this.add({
          'id': key,
          'title': window.store[key].title,
          'content': window.store[key].content
        });
      }
    });
    
    results = idx.search(searchTerm);
    
  }
  
  displaySearchResults(results, window.store);

})
