// probably rewrite this to use the old version

const get = (URL) => {
  // handle ^http images
  let encodedURL = URL.replaceAll("?", '%3F').replaceAll("&", '%26')
  encodedURL = encodeURIComponent(URL)
  let crawlRequestURL = `https://www.google.com/searchbyimage?client=firefox&image_url=${encodedURL}`
  chrome.tabs.create({  
    url: crawlRequestURL
  })
}

const post = async (URL) => {
  // handle ^data: images
  function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  fetch(URL)
    .then((response) => response.blob())
    .then((blob) => {
      const formData = new FormData()
      formData.append("encoded_image", blob, `${+ new Date()}.jpeg`)
      formData.append("image_url", "")
      formData.append("sbisrc", "Google Chrome 110.0.5481.78 (Official) Windows")
      fetch("https://www.google.com/searchbyimage/upload", {
        referrer: "",
        mode: "cors",
        method: "POST",
        body: formData
      }).then(response => {
        chrome.tabs.create({  
          url: response.url
        })
      })
    })
}


chrome.contextMenus.onClicked.addListener(function(e) {
  try {
    if (e.menuItemId !== "disablegooglelens") {
      return null
    }
    let URL = e.srcUrl
    if (!URL || URL.length === 0) {
      return null
    }
    if (URL.startsWith("data:")) {
      post(URL)
    }
    else {
      get(URL)
    }
    return null
  }
  catch(e) {
    console.log(e)
  }
})

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: "disablegooglelens",
      title: "Search Google for image", 
      contexts:["image"]
    }) 
  })
})

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    fetch(request)
      .then((response) => response.blob())
      .then((blob) => {
        const formData = new FormData()
        formData.append("encoded_image", blob, `${+ new Date()}.jpeg`)
        formData.append("image_url", "")
        formData.append("sbisrc", "Google Chrome 110.0.5481.78 (Official) Windows")
        fetch("https://www.google.com/searchbyimage/upload", {
          referrer: "",
          mode: "cors",
          method: "POST",
          body: formData
        }).then(response => {
          sendResponse(response.url)
        })
      });    
    return true
  }
);