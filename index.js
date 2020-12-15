const { app, BrowserWindow,ipcMain } = require('electron')

const mydb = require("./database")

function createWindow(){
    let win = new BrowserWindow(
        {
            width:800,
            height:600,
            webPreferences:{
                nodeIntegration: true
            }
        }
    )

    win.loadFile("index.html")
}

app.whenReady().then(createWindow)

//mydb.create_db()
//mydb.item_save("Nombre")

app.on('ready',()=>{
    ipcMain.on('item-send',(event, data)=>{
        mydb.item_all()
    })
})
