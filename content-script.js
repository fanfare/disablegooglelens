function start() {
  function preloadipc(file, node) {
    var th = document.getElementsByTagName(node)[0]
    var s = document.createElement('script')
    s.setAttribute('type', 'text/javascript')
    s.setAttribute('src', file)
    th.appendChild(s)
  }
  preloadipc( chrome.runtime.getURL('web.js'), 'body')
}

if (document.readyState !== 'loading') {
  start()
} 
else {
  document.addEventListener('DOMContentLoaded', function () {
    start()
  })
}