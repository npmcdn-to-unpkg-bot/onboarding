$(document).on('page:load ready', function () {
  $('body').on('click', '#search-table .table th a, #search-table .pagination a', function () {
    jQuery.ajaxSetup({cache: true});
    $.getScript(this.href);
    return false;
  });
  $('#search-form input').keyup(function () {
    $.get($('#search-form').attr('action'), $('#search-form').serialize(), null, 'script');
    return false;
  });
});
