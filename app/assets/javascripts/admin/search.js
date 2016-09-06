$(function () {
  $("#search-table .table th a, #search-table .pagination a").on("click", function () {
    $.getScript(this.href);
    return false;
  });
  $('#search-form input').keyup(function () {
    $.get($('#search-form').attr('action'), $('#search-form').serialize(), null, 'script');
    return false;
  });
});
