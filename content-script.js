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
      chrome.runtime.sendMessage(
        letterdump,
        function (response) {
          window.location.href = response
        }
      );
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
