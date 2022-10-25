export default function NotFound() {
  const $view = document.createElement('div');
  
  $view.className = 'not_found';
  $view.innerHTML = '<h1>404 Not found</h1>';

  this.render = ($target) => {
    $target.innerHTML = '';
    $target.appendChild($view);
  };
};