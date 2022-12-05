chrome.contextMenus.create({
  id: "disablegooglelens",
  title: "Search Google for image", 
  contexts:["image"]
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.onClicked.addListener(function(e) {
    if (e.menuItemId !== "disablegooglelens") {
      return null
    }
    let URL = e.srcUrl
    let encodedURL = URL.replaceAll("?", '%3F').replaceAll("&", '%26')
    encodedURL = encodeURIComponent(URL)
    let crawlRequestURL = `https://lens.google.com/uploadbyurl?url=${encodedURL}&hl=en&re=df&st=${+ new Date()}&ep=gisbubu`
    chrome.tabs.create({  
      url: crawlRequestURL
    })
    return null
  })
});