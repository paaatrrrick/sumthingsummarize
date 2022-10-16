console.log("Hello Background");

var contextMenuItem = {
    "id": "sendRequest",
    "title": "Add To Text Summary",
    "contexts": ["selection"]
}
var url_text = "EMPT"
var title_text = "BLANK_TITLE"
chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData, tab){        
    if(clickData.menuItemId == "sendRequest" && clickData.selectionText){
        const article_text = clickData.selectionText
        const json_object = {
            title : tab.title,
            body: article_text,
            url : tab.url,
            // id: tab.title + Math.floor(Math.random() * 100).toString()
        }
        console.log(json_object);
        fetch('http://127.0.0.1:5000/create_summary', {
            method:'POST',
            mode: 'cors',
            body: JSON.stringify(json_object),
            headers:{
                "Content-Type": 'application/json; charset=UTF-8',
                "Access-Control-Allow-Origin": "*"
            }
        }).then(response => response.json()).then(json => console.log(json))

        // var data = new FormData();
        // data.append('title', tab.title);
        // data.append('body', clickData.selectionText);
        // data.append('url', tab.url);
        // // data.append('requiredkey', 'key');
        // var xhr = new XMLHttpRequest();
        // xhr.open('POST', 'http://127.0.0.1:5000/create_summary', true);
        // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // xhr.onload = function () {
        //     // do something to response
        //     console.log(this.responseText);
        // };
        // xhr.send(data);
    }
})