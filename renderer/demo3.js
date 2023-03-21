var { shell } = require('@electron/remote')

var aHref = document.querySelector('#aHref') 

aHref.onclick = function(e){
    e.preventDefault()
    var href = this.getAttribute('href')
    shell.openExternal(href)
}

var mybtn = document.querySelector('#mybtn')

mybtn.onclick = function(e){

    // window.open('https://jspang.com')
    window.open('./popup_page.html')
}

window.addEventListener('message',(msg)=>{
    let mytext = document.querySelector('#mytext')
    mytext.innerHTML = JSON.stringify(msg.data)
})