export function init() {
  selectAll('[data-ext-fn="ext-select-all"]');
}

function selectAll($selector) {
  const $el = document.querySelectorAll($selector);

  $el.forEach(($i) => {
    _eventSelectAll($i);
  });
}

function _eventSelectAll($i) {
  return $i.addEventListener('click', ($e) => {
    $e.currentTarget.select();
  });
}
