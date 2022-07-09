function getGRRCArticles(filter){
    //Make GET call to Goodwood REST API to retrieve all GRRC articles/videos/gallery in JSON format

    var url = "";

    //Check filter to display correct type of article an amend API call URL accordingly
    if (filter == "articles"){
        url = "https://www.goodwood.com/v2/getgrrcarticles/?articletype=1";
    }else if (filter == "videos"){
        url = "https://www.goodwood.com/v2/getgrrcarticles/?articletype=2";
    }else if (filter == "gallery"){
        url = "https://www.goodwood.com/v2/getgrrcarticles/?articletype=3";
    }else{
        url = "https://www.goodwood.com/v2/getgrrcarticles/";
    }

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);

    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        // Once sever has recieved request, processed it, and browser has downloaded content, 
        // unpack the response and store in 'articles' variable. 
        var json = JSON.parse(xhr.responseText)
        var articles = json.Result

        //Insert response into HTML DOM
        document.getElementById("article1img").src = articles[0].ImageUrl;
        document.getElementById("article1title").innerHTML = articles[0].Title;
        document.getElementById("article1link").href = articles[0].Url;

        document.getElementById("article2img").src = articles[1].ImageUrl;
        document.getElementById("article2title").innerHTML = articles[1].Title;
        document.getElementById("article2link").href = articles[1].Url;

        document.getElementById("article3img").src = articles[2].ImageUrl;
        document.getElementById("article3title").innerHTML = articles[2].Title;
        document.getElementById("article3link").href = articles[2].Url;

    }};
    xhr.send();
}

function getEvents(){
    //Function to make GET REST API call to get list of featured events

    var url = "https://www.goodwood.com/v2/getevents";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);

    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        var json = JSON.parse(xhr.responseText)
        var events = json.Result

        var url =  events[0].ImageUrl;
        url = url.split('?')[0]
        document.getElementById("event1img").src = url;
        document.getElementById("event1title").innerHTML = events[0].Name;
        document.getElementById("event1link").href = events[0].Url;
        var date = new Date(events[0].EventFromDate);
        date = date.toLocaleString('default', {day: 'numeric',  month: 'long' });
        document.getElementById("event1from").innerHTML = "From " + date;

        var url =  events[1].ImageUrl;
        url = url.split('?')[0]
        document.getElementById("event2img").src = url;
        document.getElementById("event2title").innerHTML = events[1].Name;
        document.getElementById("event2link").href = events[1].Url;
        var date = new Date(events[1].EventFromDate);
        date = date.toLocaleString('default', {day: 'numeric',  month: 'long' });
        document.getElementById("event2from").innerHTML = "From " + date;
        
        document.getElementById("event3img").src = events[2].ImageUrl;
        document.getElementById("event3title").innerHTML = events[2].Name;
        document.getElementById("event3link").href = events[2].Url;
        var date = new Date(events[2].EventFromDate);
        date = date.toLocaleString('default', {day: 'numeric',  month: 'long' });
        document.getElementById("event3from").innerHTML = "From " + date;

        document.getElementById("event4img").src = events[3].ImageUrl;
        document.getElementById("event4title").innerHTML = events[3].Name;
        document.getElementById("event4link").href = events[3].Url;
        var date = new Date(events[3].EventFromDate);
        date = date.toLocaleString('default', {day: 'numeric',  month: 'long' });
        document.getElementById("event4from").innerHTML = "From " + date;

        var url =  events[4].ImageUrl;
        url = url.split('?')[0]
        document.getElementById("event5img").src = url;
        document.getElementById("event5title").innerHTML = events[4].Name;
        document.getElementById("event5link").href = events[4].Url;
        var date = new Date(events[4].EventFromDate);
        date = date.toLocaleString('default', {day: 'numeric',  month: 'long' });
        document.getElementById("event5from").innerHTML = "From " + date;

    }};
    xhr.send();
}

function filter(){
    //Function to filter articles by artice, video or gallery

    var option = document.getElementById("filter").value;
    getGRRCArticles(option);
}

function loadPage(){
    //Function to make calls to REST API when page first accessed

    getGRRCArticles();
    getEvents();
}
