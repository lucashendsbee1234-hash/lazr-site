const {
  app,
  BrowserWindow,
  shell,
  ipcMain
} = require("electron");

const path = require("path");

const { autoUpdater } = require("electron-updater");

const RPC = require("discord-rpc");

let mainWindow;
let splash;

//////////////////////////////////////////////////////
// DISCORD RICH PRESENCE
//////////////////////////////////////////////////////

const rpc = new RPC.Client({ transport: "ipc" });

rpc.on("ready", () => {
  rpc.setActivity({
    details: "Browsing LazR Hub",
    state: "Launcher Open",
    largeImageKey: "logo",
    largeImageText: "LazR Hub",
    startTimestamp: new Date(),
    buttons: [
      {
        label: "Join Discord",
        url: "https://discord.gg/Eyhm3vHFgW"
      }
    ]
  });
});

rpc.login({
  clientId: "1396384839203842048"
}).catch(console.error);

//////////////////////////////////////////////////////
// CREATE SPLASH SCREEN
//////////////////////////////////////////////////////

function createSplash() {
  splash = new BrowserWindow({
    width: 700,
    height: 400,
    frame: false,
    transparent: false,
    alwaysOnTop: true,
    resizable: false,
    autoHideMenuBar: true,
    backgroundColor: "#0a0a0a",
    icon: path.join(__dirname, "icon.ico"),
    webPreferences: {
      nodeIntegration: true
    }
  });

  splash.loadURL(`data:text/html,
  <html>
  <body style="
    background:#0a0a0a;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    overflow:hidden;
    font-family:sans-serif;
    color:white;
  ">

  <img src='file://${path.join(__dirname, "icon.png")}'
  style='width:170px;height:170px;
  animation:pulse 2s infinite;' />

  <h1 style='margin-top:20px;
  color:#a855f7;
  font-size:38px;'>
  LazR Hub
  </h1>

  <p style='opacity:.7'>
  Loading launcher...
  </p>

  <div style='
  width:300px;
  height:8px;
  background:#222;
  border-radius:20px;
  overflow:hidden;
  margin-top:20px;
  '>

  <div style='
  width:100%;
  height:100%;
  background:#a855f7;
  animation:load 3s linear;
  '></div>

  </div>

  <style>
  @keyframes pulse{
    0%{transform:scale(1)}
    50%{transform:scale(1.05)}
    100%{transform:scale(1)}
  }

  @keyframes load{
    from{width:0%}
    to{width:100%}
  }
  </style>

  </body>
  </html>
  `);
}

//////////////////////////////////////////////////////
// CREATE MAIN WINDOW
//////////////////////////////////////////////////////

function createWindow() {

  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1000,
    minHeight: 700,
    autoHideMenuBar: true,
    title: "LazR Hub",
    backgroundColor: "#0a0a0a",
    icon: path.join(__dirname, "icon.ico"),

    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  //////////////////////////////////////////////////////
  // LOAD WEBSITE
  //////////////////////////////////////////////////////

mainWindow.loadURL("https://lazrhub.ink");

  //////////////////////////////////////////////////////
  // OPEN EXTERNAL LINKS
  //////////////////////////////////////////////////////

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {

    if (url.includes("discord.gg")) {
      shell.openExternal(url);
      return { action: "deny" };
    }

    return { action: "allow" };
  });

  //////////////////////////////////////////////////////
  // FINISH LOADING
  //////////////////////////////////////////////////////

  mainWindow.once("ready-to-show", () => {

    setTimeout(() => {

      if (splash) splash.close();

      mainWindow.show();

    }, 2500);

  });

  //////////////////////////////////////////////////////
  // AUTO UPDATER
  //////////////////////////////////////////////////////

  autoUpdater.checkForUpdatesAndNotify();

}

//////////////////////////////////////////////////////
// APP READY
//////////////////////////////////////////////////////

app.whenReady().then(() => {

  createSplash();

  createWindow();

});

//////////////////////////////////////////////////////
// CLOSE BEHAVIOR
//////////////////////////////////////////////////////

app.on("window-all-closed", () => {

  if (process.platform !== "darwin") {
    app.quit();
  }

});

//////////////////////////////////////////////////////
// SECURITY
//////////////////////////////////////////////////////

app.on("web-contents-created", (_, contents) => {

  contents.on("will-navigate", (event, navigationUrl) => {

    const parsedUrl = new URL(navigationUrl);

    if (parsedUrl.origin !== "https://lazrhub.ink") {
      event.preventDefault();
    }

  });

});