//find out what news source was clicked
var url1 = 'https://www.reddit.com/top.json';
var url2 = 'http://api.npr.org/query?id=1001&apiKey=MDI0MjE0OTE3MDE0NjI2NTk2MTk4NzZiMQ000';
var url3 = 'http://digg.com/api/news/popular.json;';
var urlnews = '';
var urldataformat = "";
var urlclick="";

$(document).ready(function (event) {
    // $(".container li").change(function(e) {
    $("#listContainer li a").click(function (e) {
        alert(this.id);
        urlclick=(this.id);
        switch (urlclick){
         case "Reddit":
         urlnews = url1;
         urldataformat = "JSON";
         break;

         case "NPR":
         urlnews = url2;
         urldataformat = "XML";
         break;

         case "Digg":
         urlnews = url3;
         urldataformat = "JSON";
         break;
         }

  //  urlnews = url1;

    var httpRequest = new XMLHttpRequest();
    httpRequest.onload = responseMethod;

    'use strict';

    $.ajax({
        url: urlnews,
        data: {format: urldataformat},
        crossDomain: true,
        withCredentials: false,
        success: function (response) {
            if (response.length > 0) {
                $.each(response, function (event, item) {
                    var newItem = document.createElement('div');
                    newItem.innerHTML = "<h3>" + item.name + "</h3>" + item.description;
                    document.getElementById('results').appendChild(newItem);
                });
            }
            console.log(response);
            document.getElementById('art1').textContent = "My title";
        },
        error: function (response) {
            console.log('error on url');
        }
    });

    httpRequest.open('GET', urlnews, true);
    httpRequest.send(null);

    function responseMethod(response) {
        // Check if our state is "DONE"
        var responseObject={};
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            // If our request was successful we get a return code/status of 200
            if (httpRequest.status === 200) {
                    if (urldataformat = "JSON") {
                         responseObject = JSON.parse(httpRequest.responseText);
                    } else {
                        if (urldataformat = "XML") {
                            responseObject = XML.parse(httpRequest.responseText);
                        }
                    }
                }
            } else {
                // This is the scenario that there was an error with our request
                console.log('There was a problem with the request.');
            }
        }
    });
});

//var ParsedElements = $(htmlToParse);
//Console.log(ParsedElements);


/* // Create the XHR object.
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // CORS not supported.
        xhr = null;
    }
    return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
    return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest() {
    // All HTML5 Rocks properties support CORS.
    var url = 'http://updates.html5rocks.com';

    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
        alert('CORS not supported');
        return;
    }

    // Response handlers.
    xhr.onload = function() {
        var text = xhr.responseText;
        var title = getTitle(text);
        alert('Response from CORS request to ' + url + ': ' + title);
    };

    xhr.onerror = function() {
        alert('Woops, there was an error making the request.');
    };

    xhr.send();
}*/