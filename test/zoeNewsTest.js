var test = function() {

    var button = document.getElementById('submit-button');
    var textField = document.getElementById('textField');
    var testResult = document.getElementById('testResult');
    var main = document.getElementById("main");
    var refreshNews = document.getElementById("refreshNews");
    var articleList = document.getElementById("articleList");
    var articleListItems = document.getElementById("articleList").getElementsByTagName("li");
    var tenMoreButton = document.getElementById("tenMore");
    var summaryButton = document.getElementById("summaryButton");
    var increment = 3;

    var success = function () {
        console.log("%cTest passed", 'color:green');
    };

    var fail = function (method) {
        console.log("%c" + method, 'color:red');
    };

    var reset = function() {
    };

    var testIfTrue = function(argument) {
        if (argument) {
            success();
        } else {
            fail(arguments.callee.caller);
        }
        reset()
    };

    var pageSuccess = function() {
        testIfTrue(main.innerHTML.includes("Zoë's News"))
    };

    var hasANewsfeedButton = function() {
        testIfTrue(getNews);
    };

    var newsFeedHasTopTenItems = function() {
        var articleListItems = document.getElementById("articleList").getElementsByTagName("li");
        testIfTrue(articleListItems.length === 10);
    };

    var eachItemIsAList = function() {
        testIfTrue(articleListItems[0].nodeName === "LI");
        testIfTrue(articleListItems[0].innerHTML.includes('<a href='));
    };

    var linkGoesToGuardianSite = function() {
        testIfTrue(articleListItems[0].innerHTML.includes('<a href="https://www.theguardian.com/'));
    };

    var clickTenMore = function() {
        testIfTrue(articleListItems.length === 10);
        tenMoreButton.click();
        articleListItems = document.getElementById("articleList").getElementsByTagName("li");
        testIfTrue(articleListItems.length === 20);
    };

    var summaryButtonExits = function() {
        testIfTrue(summaryButton);
    };

    var getNewsSummary = function() {
        summaryButton.click();
    };

    runTests = function() {
        pageSuccess();
        hasANewsfeedButton();
        newsFeedHasTopTenItems();
        eachItemIsAList();
        linkGoesToGuardianSite();
        clickTenMore();
        summaryButtonExits();
    };

    runTests();

};

var runTestIfLoaded = function() {
    if (document.readyState === 'complete') {
        test();
    } else {
        console.log('not loaded');
    }
};

window.onLoad = function() {
    runTestIfLoaded();
};

window.onLoad();
