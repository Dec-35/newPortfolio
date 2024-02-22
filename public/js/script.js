function loadcookies() {
  var cookie = document.cookie;
  var themeStatus = cookie.split('; ');
  for (let i in themeStatus) {
    if (themeStatus[i].split('=')[0] === 'theme') {
      var theme = themeStatus[i].split('=')[1];
    }
  }

  if (theme === 'dark') {
    $('body').removeClass('light');
  } else {
    $('body').addClass('light');
  }
}

function changetheme() {
  $('body').toggleClass('light');

  const d = new Date();
  d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
  let expires = 'expires=' + d.toUTCString();

  if ($('body').is('.light')) {
    document.cookie = 'theme' + '=' + 'light' + ';' + expires + ';path=/';
  } else {
    document.cookie = 'theme' + '=' + 'dark' + ';' + expires + ';path=/';
  }
}
