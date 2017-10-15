var articleList = document.getElementById('articleList');
var summaryField = document.getElementById('summaryField');
var refreshNews = document.getElementById('refreshNews');
var tenMoreButton = document.getElementById('tenMore');
var backToNews = document.getElementById('backToNews');
var topOfPageTitle = document.getElementById('topOfPageTitle');

var counter = 0;
var articleCounter = 1;
var buttonCounter = 0;
var increment = 10;

getNews = function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://content.guardianapis.com/search?api-key=108a5597-4134-41fe-9f9a-7798a01e8383');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        articleList.innerHTML += renderHTML(ourData, counter);
    };
    ourRequest.send();
};

getNewsSummary = function(link) {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + link);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        summaryField.innerHTML = renderHTMLSummary(ourData, counter);
    };
    ourRequest.send();
};


refreshNews.addEventListener('click', function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://content.guardianapis.com/search?api-key=108a5597-4134-41fe-9f9a-7798a01e8383');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        articleList.innerHTML = renderHTML(ourData, 0, counter + 10);
    };
    articleCounter = 1;
    ourRequest.send();
});

articleList.addEventListener('click', function(e) {
  console.log(e.path[2]);
  if (e.path[0].innerHTML === 'Summary') {
    getNewsSummary(e.path[1].value);
    hideElement(true, articleList);
    hideElement(true, tenMoreButton);
    hideElement(true, refreshNews);
    unhideElement(true, backToNews);
    topOfPageTitle.innerHTML = e.path[2].innerHTML;
  }
});

function summaryButton(id) {
    return document.getElementById(id);
}

backToNews.addEventListener('click', function() {
  unhideElement(true, articleList);
  unhideElement(true, tenMoreButton);
  unhideElement(true, refreshNews);
  hideElement(true, backToNews);
  summaryField.innerHTML = '';
  topOfPageTitle.innerHTML = 'The Guardian Headlines';
});

function renderHTML(data, int, incrementValue = increment) {
    var htmlString = '';
    for (i = int; i < (int + incrementValue); i++) {
        var link = data.response.results[i].webUrl;
        htmlString += '<li><a href= ' + link + ' id=article' + articleCounter + ' class="center">'+ data.response.results[i].webTitle +' </a>';
        htmlString += '<br>';
        htmlString += '<button id="article' + articleCounter + '" value="' + link + '" class="button articleButton center"><span>Summary</span></button></li>';
        articleCounter += 1;
    }
    return htmlString;
}

function renderHTMLSummary(data) {
    var htmlString = '<p class="summary">';
    if (data.sentences.length !== 0) {
        for (i=0; i < data.sentences.length; i++) {
            htmlString += data.sentences[i] + ' ' + '<br><br>';
        }
    } else {
        console.log('no!');
        htmlString += data.text;
    }
    htmlString += '</p>';

    console.log(htmlString);
    console.log('htmlString above');
    return htmlString;
}

tenMoreButton.addEventListener('click', function() {
    counter += increment;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://content.guardianapis.com/search?api-key=108a5597-4134-41fe-9f9a-7798a01e8383');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        articleList.innerHTML += renderHTML(ourData, counter);
    };
    ourRequest.send();

    incrementButtonPress();
    hideElement(buttonCounter >= 9, tenMoreButton);
});

hideElement = function(condition, element) {
    if (condition) {
        element.style.display = 'none';
    }
};

unhideElement = function(condition, element) {
    if (condition) {
        element.style.display = '';
    }
};

incrementButtonPress = function() {
    buttonCounter += 1;
};

getNews();
