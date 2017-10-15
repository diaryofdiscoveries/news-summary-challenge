var articleList = document.getElementById('articleList');
var getNews = document.getElementById('getNews');
var tenMoreButton = document.getElementById('tenMore');
var counter = 1;
// var noteList = {};

getNews.addEventListener('click', function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://content.guardianapis.com/search?api-key=108a5597-4134-41fe-9f9a-7798a01e8383');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
});

function renderHTML(data) {
    var htmlString = '';
    for (i = 0; i < 10; i++) {
        htmlString += '<li><a href= ' + data.response.results[i].webUrl + '>'+ data.response.results[i].webTitle +'</a></li>';
    }
    articleList.innerHTML = htmlString;
}

getNews.click();
