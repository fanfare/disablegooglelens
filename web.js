try {
  let body = document.body.innerHTML
  let index = body.indexOf(`https://www.google.com/search?tbs`)
  if (index === -1) {
    throw new Error("tbs prefix url not found")
  }
  body = body.substring(index, body.length)
  index = body.indexOf(`"`)
  if (index === -1) {
    // should not reach here, but in case `"` is changed to `'`
    index = body.indexOf(`'`)
    if (index === -1) {
      throw new Error("closing quotation marks not found")
    }
  }
  body = body.substring(0,index)
  body = body.replace(`\\u003d`, "=")
  if (!body.startsWith("https")) {
    throw new Error(`body does not start with https, body length is ${body.length}`)
  }
  window.location.href = body
}
catch(e) {
  console.error(e)
}