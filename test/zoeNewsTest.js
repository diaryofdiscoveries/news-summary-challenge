var test = function() {

    var button = document.getElementById('submit-button');
    var textField = document.getElementById('textField');
    var testResult = document.getElementById('testResult');
    var main = document.getElementById("main");
    var getNews = document.getElementById("getNews");
    var articleList = document.getElementById("articleList");
    var articleListItems = document.getElementById("articleList").getElementsByTagName("li");
    var tenMoreButton = document.getElementById("tenMore");

    var success = function () {
        console.log("%cTest passed", 'color:green');
        // testResult.insertAdjacentHTML("beforeend", '<li style="color: green"> Test passed! </li>');
    };

    var fail = function (method) {
        console.log("%c" + method, 'color:red');
        // testResult.insertAdjacentHTML("beforeend", '<li style="color: red"> Test failed! </li>');
    };

    var reset = function() {
        // blogList.innerHTML = ''
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

    var linkGoesToGuardian = function() {
        testIfTrue(articleListItems[0].innerHTML.includes('<a href="https://www.theguardian.com/'));
    };

    var clickTenMore = function() {
        testIfTrue(articleListItems.length === 10);
        fiveMoreButton.click();
        testIfTrue(articleListItems.length === 20);
    };

    runTests = function() {
        pageSuccess();
        hasANewsfeedButton();
        newsFeedHasTopTenItems();
        eachItemIsAList();
        linkGoesToGuardian();
        clickTenMore()
    };


    runTests()

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
