(function ($) {
  $(function () {
    $(".sidenav").sidenav();
  }); // end of document ready
})(jQuery); // end of jQuery name space

function changetext() {
  var msgText =
    document.getElementById("hellomsg") || document.getElementById("helloundo");
  if (msgText.id == "hellomsg") {
    var msg = msgText.textContent;
  }
  var button =
    document.getElementById("click-button") ||
    document.getElementById("click-undo");

  if (button.id == "click-button") {
    msgText.setAttribute("data", msg);
    msgText.textContent = "Bingo !!";
    msgText.id = "helloundo";
    button.firstElementChild.className = "fa fa-undo";
    button.id = "click-undo";
  } else if (button.id == "click-undo") {
    msgText.id = "hellomsg";
    button.firstElementChild.className = "fa fa-hand-o-up";
    msgText.textContent = msgText.getAttribute("data");
    button.id = "click-button";
    msgText.removeAttribute("data");
  }
}
