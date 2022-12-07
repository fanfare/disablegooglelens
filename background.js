const get = (URL) => {
  // handle ^http images
  let encodedURL = URL.replaceAll("?", '%3F').replaceAll("&", '%26')
  encodedURL = encodeURIComponent(URL)
  let crawlRequestURL = `https://lens.google.com/uploadbyurl?url=${encodedURL}&hl=en&re=df&st=${+ new Date()}&ep=gisbubu`
  chrome.tabs.create({  
    url: crawlRequestURL
  })
}

const post = async (URL) => {
  // handle ^data: images
  function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  const blob = await (await fetch(URL)).blob()
  const formData = new FormData()
  formData.append("encoded_image", blob, `${randint(111111,999999)}.jpg`)
  let response = await fetch(`https://lens.google.com/upload?hl=en&re=df&st=${+ new Date()}&ep=gisbubb`, {
    "body": formData,
    "method": "POST",
    "mode": "cors"
  })
  .then(response => response.text())
  .then((text) => {
    if (text.indexOf("refresh") === -1) {
      console.log("no base64 found")
      return null
    }
    let index = text.indexOf('https://lens.google.com')
    text = text.slice(index)
    index = text.indexOf('"')
    if (index === -1) {
      index = text.indexOf("'")
      if (index === -1) {
        console.log("no closing quote found")
        return null
      }
    }
    text = text.slice(0,index)
    if (!text.startsWith("http")) {
      console.log("url does not start with http")
      return null
    }
    chrome.tabs.create({  
      url: text
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