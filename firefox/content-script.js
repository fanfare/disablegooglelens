;(()=>{
  async function start() {
    try {
      let body = document.body.innerHTML
      let index = body.indexOf(`jsname="a9kxte"`)
      if (index === -1) {
        throw new Error("no end of base64 found")
      }
      body = body.substring(0, index)
      let bracketfound = false
      let quotefound = false
      let letterdump = ""
      for (let i=body.length-1;i>=0;i--) {
        let character = body[i]
        if (bracketfound) {
          if (quotefound) {
            if (character === "&") {
              letterdump = letterdump.substring(5)
              break
            }
            letterdump = character + letterdump
          }
          else {
            if (character === "&") {
              quotefound = true
            }
          }
          continue
        }
        else if (character === "]") {
          bracketfound = true
        }
      }
      letterdump = letterdump.replaceAll(`\\u003d`, "=")
      if (letterdump.length < 10) {
        throw new Error(`letterdump length is ${letterdump.length}`)
      }
      letterdump = "data:image/jpeg;base64," + letterdump
      function randint(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
      }
      fetch(letterdump)
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
            window.location.href = response.url
          })
        })
    }
    catch(e) {
      console.error(e)
    }
  }
  if (document.readyState !== 'loading') {
    start()
  } 
  else {
    document.addEventListener('DOMContentLoaded', function () {
      start()
    })
  }
})();
