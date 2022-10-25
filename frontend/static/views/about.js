export default function about() {
  const $view = document.createElement('div');
  
  $view.className = 'about';
  $view.innerHTML = '<h1>어바웃 페이지 입니다.</h1>';

  this.render = ($target) => {
    $target.innerHTML = '';
    $target.appendChild($view);
  };
};