function headerchangehome()
{
  document.getElementById('homelink').className = 'header-text-active';
  document.getElementById('bookmarkslink').className = 'header-text';
  document.getElementById('commentslink').className = 'header-text';
  document.getElementById('userinlink').className = 'header-text';
  document.getElementById('useroutlink').className = 'header-text';
}

function headerchangebookmarks()
{
  document.getElementById('homelink').className = 'header-text';
  document.getElementById('bookmarkslink').className = 'header-text-active';
  document.getElementById('commentslink').className = 'header-text';
  document.getElementById('userinlink').className = 'header-text';
  document.getElementById('useroutlink').className = 'header-text';
}

function headerchangecomments()
{
  document.getElementById('homelink').className = 'header-text';
  document.getElementById('bookmarkslink').className = 'header-text';
  document.getElementById('commentslink').className = 'header-text-active';
  document.getElementById('userinlink').className = 'header-text';
  document.getElementById('useroutlink').className = 'header-text';
}

function headerchangeuser()
{
  document.getElementById('homelink').className = 'header-text';
  document.getElementById('bookmarkslink').className = 'header-text';
  document.getElementById('commentslink').className = 'header-text';
  document.getElementById('userlink').className = 'header-text-active';
}