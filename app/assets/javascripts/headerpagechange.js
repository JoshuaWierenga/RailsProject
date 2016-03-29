function headerchange(page)
{
  document.getElementById('homelink').className = 'header-text';
  document.getElementById(page).className = 'header-text header-text-active';
}

function headerchangeuser()
{
  document.getElementById('homelink').className = 'header-text';
  document.getElementById('userlink').className = 'header-text header-text-arrow header-text-active hvr-icon-hang';
  document.getElementById('sub-header-user-layout-out').id = 'sub-header-user-layout-out-active';
}