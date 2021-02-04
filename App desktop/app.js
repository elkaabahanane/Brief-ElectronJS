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
  fs.appendFileSync("historique.txt", result, (err) => {
    if (err) throw err;
  });
  document.getElementById("result").innerText = " ";
  alert("Appel en cours....");
}

function displayKeyboard() {
  document.getElementById("historyy").style.display = "none";
  document.getElementById("contactt").style.display = "none";
  document.getElementById("keyboard").style.display = "block";
}

function display() {
  document.getElementById("keyboard").style.display = "none";
  document.getElementById("contactt").style.display = "none";
  document.getElementById("historyy").style.display = "block";

  const history = fs.readFileSync("historique.txt", "utf8");
  document.getElementById("historyy").innerHTML = history;
}

function displayContacts() {
  document.getElementById("keyboard").style.display = "none";
  document.getElementById("historyy").style.display = "none";
  document.getElementById("contactt").style.display = "block";

  const contactsData = fs.readFileSync("contacts.txt", "utf8");
  document.getElementById("contactt").innerHTML = contactsData;
}

function saveContact() {
  var contactInp = document.getElementById("contact-inp").value;
  var result =
    '<div class="record"> 👤 ' +
    '<span class="record-date">' +
    contactInp +
    "</span>" +
    '<span class="record-result">' +
    document.getElementById("result").innerText +
    "</span>" +
    "</div>";

  fs.appendFileSync("contacts.txt", result, (err) => {
    if (err) throw err;
  });
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
