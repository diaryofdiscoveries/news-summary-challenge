News Summary Challenge
======================
Create an app that grabs all the headlines from the Guardian newspaper API and displays them on a page.  Clicking on a headline will show the article, and clicking on the summary button will show a summary of the article.

Objectives of exercise
----
- Build a single page web app, written purely in frontend JavaScript, CSS and HTML. No libraries or frameworks!
- Use a static web server (e.g. [http-server](https://www.npmjs.com/package/http-server)) to serve the HTML, CSS and JavaScript files.
- Send requests to an API to get data from the Guardian and to summarise text.

How to run the app
-----------------
````
$ git clone https://github.com/diaryofdiscoveries/news-summary-challenge.git
$ cd news-summary-challenge
$ npm install
$ http-server
````

User Stories
----
```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are
```

```
As a busy politician
I can click a link to see the original news article
So that I can get an in depth understanding of a very important story
```

```
As a busy politician
I can see a summary of a news article
So I can get a few more details about an important story
```

Resources
----

* [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)
* [Aylien text summary API docs](http://docs.aylien.com/docs/summarize)
