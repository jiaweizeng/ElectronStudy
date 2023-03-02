var fs = require('fs')
const log = require('electron-log')
window.onload = function(){
    var btn = this.document.querySelector('#btn')
    var mybaby = this.document.querySelector('#mybaby')
    btn.onclick = function(){
        fs.readFile('xiaojiejie.txt',(err,data)=>{
            mybaby.innerHTML = data
            log.error('这是个错误日志==balabala==='+err)
        })
    }
} 