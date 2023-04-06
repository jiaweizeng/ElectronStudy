
var electron = require('electron')  //引入electron模块
var globalShortcut = electron.globalShortcut//注册快捷键
var app = electron.app   // 创建electron引用

var BrowserWindow = electron.BrowserWindow;  //创建窗口引用

var mainWindow = null;  //声明要打开的主窗口
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    })   //设置打开的窗口大小

    mainWindow.webContents.openDevTools()

    require('./main/menu.js')//Menu属于是主线程下的模块，所以只能在主线程中使用

    require("@electron/remote/main").initialize();
    require("@electron/remote/main").enable(mainWindow.webContents);

    globalShortcut.register('ctrl+e', () => {
        mainWindow.loadURL('https://www.jianshu.com/u/2b6264d880ea')
    })
    let isRegister = globalShortcut.isRegistered('ctrl+e') ? 'Register Success' : 'Register fail'
    console.log('------->' + isRegister)

    // mainWindow.loadFile('index.html')  //获取文件中的文本内容
    // mainWindow.loadFile('demo2.html')  //remote打开新窗口，界面右键菜单设置
    mainWindow.loadFile('demo3.html')  //使用shell，在浏览器中打开网页。子窗口向父窗口传递消息
    // mainWindow.loadFile('demo4.html') //打开文件,保存文件,弹出对话框
    // mainWindow.loadFile('demo5.html') //断网提醒测试
    // mainWindow.loadFile('demo6.html')// 通知消息
    // mainWindow.loadFile('demo7.html')// 复制到剪贴板

    //通常把window.open打开的窗口叫做子窗口   BrowserView打开的就是一个窗口
    // var BrowserView = electron.BrowserView //引入BrowserView
    // var view = new BrowserView()   //new出对象
    // mainWindow.setBrowserView(view)   // 在主窗口中设置view可用
    // view.setBounds({ x: 0, y: 200, width: 1200, height: 800 })  //定义view的具体样式和位置
    // view.webContents.loadURL('https://www.baidu.com')  //wiew载入的页面

    //监听关闭事件，把主窗口设置为null
    mainWindow.on('closed', () => {
        mainWindow = null
    })

})

app.on('will-quit',function(){
    //注销全局快捷键的监听
    globalShortcut.unregister('ctrl+e')
    globalShortcut.unregisterAll()

})