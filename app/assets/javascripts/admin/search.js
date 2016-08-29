$(function () {
  $('#search_table_form input').keyup(function () {
    $.get($('#search_table_form').attr('action'), $('#search_table_form').serialize(), null, 'script');
    return false;
  });
});
