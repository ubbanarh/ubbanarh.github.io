function setCookie(cookieName, value, days) {
  var expiry = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expiry = "; expires=" + date.toUTCString();
  }
  document.cookie = cookieName + "=" + (value || "") + expiry + "; path=/";
}

function getCookie(cookieName) {
  var name = cookieName + "=";
  var temp = document.cookie.split(';');
  for (var i = 0; i < temp.length; i++) {
    var c = temp[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}

function isPreviouslyVisited() {
  return !getCookie("previousVisited");
}

function UTCToEST(utcDate) {
  var estOffset = -5;
  var utcTime = new Date(utcDate);
  var estTime = new Date(utcTime.getTime() + (estOffset * 60 * 60 * 1000));
  return estTime;
}

// Function to display the welcome message
function welcomeMessageToUser() {
  var messageToUser;
  if (isPreviouslyVisited()) {
    messageToUser = "Welcome to my homepage!";
    setCookie("previousVisited", new Date().toUTCString(), 365);
  } else {
    var previousVisited = getCookie("previousVisited");
    var previousVisitedToEST = UTCToEST(previousVisited);
    messageToUser = "Welcome back! Your last visit was " + previousVisitedToEST.toLocaleString("en-US", {timeZone: "America/New_York"});
  }
  alert(messageToUser);
}

welcomeMessageToUser();
