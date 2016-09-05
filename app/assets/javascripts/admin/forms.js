$(document).ready(function () {
  // init tags plugin
  $('.tags').tagsInput();

  // set chosen plugin settings
  $('.chzn-select').chosen({disable_search_threshold: 10});
});
