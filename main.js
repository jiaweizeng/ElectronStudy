
var electron = require('electron')  //引入electron模块

var app = electron.app   // 创建electron引用

var BrowserWindow = electron.BrowserWindow;  //创建窗口引用

var mainWindow = null ;  //声明要打开的主窗口
app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        width:800,
        height:800, 
        webPreferences:{ 
            nodeIntegration:true,
            contextIsolation: false,
            enableRemoteModule:true
        }
    })   //设置打开的窗口大小

    mainWindow.webContents.openDevTools()

    require('./main/menu.js')//Menu属于是主线程下的模块，所以只能在主线程中使用

    require("@electron/remote/main").initialize();
    require("@electron/remote/main").enable(mainWindow.webContents);

    // mainWindow.loadFile('index.html')  //获取文件中的文本内容
    mainWindow.loadFile('demo2.html')  //remote打开新窗口，界面右键菜单设置

    //监听关闭事件，把主窗口设置为null
    mainWindow.on('closed',()=>{
        mainWindow = null
    })

})
