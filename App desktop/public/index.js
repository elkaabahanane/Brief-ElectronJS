function getValueOnClick(btnId, resultId) {
  var btn = document.getElementById(btnId);
  var result = document.getElementById(resultId);

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    result.innerText += btn.innerText;
  });
}

getValueOnClick("btn1", "result");
getValueOnClick("btn2", "result");
getValueOnClick("btn3", "result");
getValueOnClick("btn4", "result");
getValueOnClick("btn5", "result");
getValueOnClick("btn6", "result");
getValueOnClick("btn7", "result");
getValueOnClick("btn8", "result");
getValueOnClick("btn9", "result");
getValueOnClick("btn10", "result");
getValueOnClick("btn11", "result");
