$(function () {
  $('#search-form input').keyup(function () {
    $.get($('#search-form').attr('action'), $('#search-form').serialize(), null, 'script');
    return false;
  });
});
