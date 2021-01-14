const electron = require("electron");
const { protocol } = require("electron/main");
const { app, BrowserWindow } = electron;
const path = require("path");

let mainWindow;

app.on("ready", function () {
  const url = "file://" + path.join(__dirname, "/public/index.html");
  mainWindow = new BrowserWindow({
    width: 375,
    height: 812,
  });
  mainWindow.loadURL(url);
});
