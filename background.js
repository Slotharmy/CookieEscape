var active_tab_id =0;
var website_json;
//fetch the data from the Websites.json.


fetch("./Websites.json")
.then(response => {
   return response.json();
})
.then(data => {
  website_json = JSON.parse(JSON.stringify(data));
  console.log(website_json.Website_btn[0].WebsideURL);
  checkURL(JSON.stringify(website_json.Website_btn[0].WebsideURL));
});



function checkURL(url){
  var ret = url.replace(/"/g,'');
  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {   //onactivated only triggers when clicking on the tab
  chrome.tabs.get(tabId, current_tab_info => {
    active_tab_id = tabId;
    console.log(current_tab_info.url);
    
    if (/^https:\/\/www.nic.at\/en\/my-at-domain\/registration\/registration-guidelines/.test(current_tab_info.url)) {
      //send message from backend to frontend
      chrome.tabs.sendMessage(active_tab_id, {message:'you are on sport.orf.at'});

      //chrome.tabs.sendMessage(active_tab_id, {message: cookieinfo.cookie})
      chrome.scripting.executeScript(
        {
        target: {tabId: tabId},
        files: ['popup.js'],
       },
        () => console.log('popup.js was executed')) //executeScript(tabnumber, file)
    }
  });
});

}
//console.log(website_json.Website_btn[0].WebsideURL);
//console.log(data.WebsideURL);



//chrome.runtime.onMessage.addListener((request, sender, sendRepsonse) => {
  //check if message = the message i should get and response
    //chrome.tabs.sendMessage(active_tab_id, {message:'you are on www.kurier.at'})
    //sendRepsonse({message: 'yo i got your message'});
    //chrome.storage.local.get("password", value => {
    //  console.log(value);
    //})
//})

/*
//console.log(chrome.extension.popup);
var views = chrome.extension.getViews({
    type: "popup"
});
for (var i = 0; i < views.length; i++) {
    views[i].document.getElementById('x').innerHTML = "My Custom Value";
}
/*
const user = {
  username: 'demo-user'
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // 2. A page requested user data, respond with a copy of `user`
  if (message === 'get-user-data') {
    sendResponse(user);
  }
});*/

//chrome.tabs.executeScript(null, {file: 'popup.js'}, () => console.log('i injected'));