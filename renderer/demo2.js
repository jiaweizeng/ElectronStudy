const btn = this.document.querySelector('#btn')
const { Menu, BrowserWindow } = require('@electron/remote')

var newWin = null
window.onload = function () {

    btn.onclick = () => {
        newWin = new BrowserWindow({
            width: 500,
            height: 500,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                enableRemoteModule: false
            }
        })
        newWin.loadFile('yellow.html')
        newWin.on('close', () => { win = null })

    }
}

var rigthTemplate = [
    { label: '粘贴', accelerator: `ctrl+v` },
    { label: '复制', accelerator: `ctrl+c` }
]

var m = Menu.buildFromTemplate(rigthTemplate)

window.addEventListener('contextmenu', function (e) {
    // alert(111);

    //阻止当前窗口默认事件
    e.preventDefault();
    //把菜单模板添加到右键菜单
    // m.popup({ window: remote.getCurrentWindow() })
    m.popup({ newWin })
})