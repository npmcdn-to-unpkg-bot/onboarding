$(document).on('page:load ready', function () {
  $('body').on('click', '#search-table .table th a, #search-table .pagination a', function () {
    jQuery.ajaxSetup({cache: true});
    $.getScript(this.href);
    return false;
  });
  $('#search-form-events input, #search-form-tasks input').keyup(function () {
    $.get($('#search-form-events').attr('action'), $('#search-form-events').serialize(), null, 'script');
    $.get($('#search-form-tasks').attr('action'), $('#search-form-tasks').serialize(), null, 'script');
    return false;
  });
});
