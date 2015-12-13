function headerchangebookmarks()
{
  document.getElementById('homelink').className = 'header-text';
  document.getElementById('bookmarkslink').className = 'header-text header-text-active';;
}

function headerchangecomments()
{
  document.getElementById('homelink').className = 'header-text';
  document.getElementById('commentslink').className = 'header-text header-text-active';
}

function headerchangepictures()
{
  document.getElementById('homelink').className = 'header-text';
  document.getElementById('pictureslink').className = 'header-text header-text-active';
}

function headerchangeuser()
{
  document.getElementById('homelink').className = 'header-text';
  document.getElementById('userlink').className = 'header-text header-text-arrow header-text-active hvr-icon-hang';
  document.getElementById('sub-header-user-layout-out').id = 'sub-header-user-layout-out-active';
}