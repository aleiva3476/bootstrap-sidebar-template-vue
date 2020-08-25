$(function () {
  let sidebar = $('.sidebar'),
    listItems = $('div.sidebar-content > ul > li'),
    width = sidebar.width();

  function hideSidebar() {
    if (!sidebar.hasClass('hidden')) {
      sidebar.one('transitionend', function () {
        sidebar.addClass('hidden');
      });
      sidebar.width(0);
    }
  }
  function showSidebar() {
    sidebar.removeClass('hidden');
    sidebar.width(width);
  }
  function dropdown(event) {
    event && event.preventDefault();
    let parent = $(this).parent('.sidebar-dropdown');
    if (parent.hasClass('active')) {
      parent.removeClass('active');
    } else {
      listItems.removeClass('active');
      parent.addClass('active');
    }
  }
  function activeItem() {
    let parent = $(this).parent('li');
    if (!parent.hasClass('active')) {
      listItems.removeClass('active');
      parent.addClass('active');
    }
  }

  $('#btn-hide, .btn-sidebar-close').on('click', hideSidebar);
  $('#btn-show, .btn-sidebar-show').on('click', showSidebar);
  $('div.sidebar-content > ul > li.sidebar-dropdown > a').on('click', dropdown);
  $('div.sidebar-content > ul > li:not(.sidebar-dropdown) > a').on('click', activeItem);
});
