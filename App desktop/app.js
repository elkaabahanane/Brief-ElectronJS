const electron = require("electron");
const { protocol } = require("electron/main");
const { app, BrowserWindow } = electron;
const path = require("path");
const fs = require("fs");

//Save data
function save() {
  var result =
    '<div class="record">' +
    '<span class="record-date">' +
    new Date().toDateString() +
    "</span>" +
    '<span class="record-result">' +
    document.getElementById("result").innerText +
    "</span>" +
    "</div>";
  ("\r\n");
  fs.appendFileSync("historique.txt", result, (err) => {
    if (err) throw err;
  });
  document.getElementById("result").innerText = " ";
  alert("Appel en cours....");
}

function display() {
  var keyboard = (document.getElementById("keyboard").style.display = "none");
  var historyy = (document.getElementById("historyy").style.display = "block");
  const history = fs.readFileSync("historique.txt", "utf8");
  document.getElementById("historyy").innerHTML = history;
}

function saveContact() {
  var result = document.getElementById("result").innerText;
  var contactInp = document.getElementById("contact-inp").value;
  var contact = contactInp + " - " + result + "\r\n";
  fs.appendFileSync("contacts.txt", contact);
}

app.on("ready", function () {
  const url = "file://" + path.join(__dirname, "/public/index.html");
  const mainWindow = new BrowserWindow({
    width: 375,
    height: 812,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadURL(url);
});
