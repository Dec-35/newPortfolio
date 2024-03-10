$(document).scroll(function () {
  var y = $(document).scrollTop();
  var start = $('#first-container').height();

  if (y > start - 20) {
    $('#nametag').addClass('show');
  } else {
    $('#nametag').removeClass('show');
  }

  //document.getElementsByClassName('about-content')
  $('.about-content').each(function () {
    var positionElem = $(this).position();
    var topElem = positionElem.top + $(this).height();

    if (topElem > y && y > positionElem.top - $(this).height() - 300) {
      $(this).addClass('appear');
    } else {
      $(this).removeClass('appear');
    }
  });
  var positionContacts = $('#thirdpart').position();
  var top5 = positionContacts.top + $('#thirdpart').height();

  /* Trigger du viewport sur l'element */

  if (top5 > y && y > positionContacts.top - $('#thirdpart').height()) {
    $('#thirdpart').addClass('appear');
    //  $('#thirdpart').attr(scrollState, y - top5);
  } else {
    $('#thirdpart').removeClass('appear');
  }
});

$('#menu-toggle').click(function () {
  $('#menu .content').toggleClass('show');
  $('#menu-toggle').toggleClass('active');
  $('#themechanger').toggleClass('lighter');
});

//hide menu when click outside
$(document).click(function (e) {
  if (!$(e.target).closest('#menu').length) {
    $('#menu .content').removeClass('show');
    $('#menu-toggle').removeClass('active');
    $('#themechanger').removeClass('lighter');
  }
});

function changeMenuItem(e) {
  $('.option.active').removeClass('active');
  $('#' + e).addClass('active');
}
