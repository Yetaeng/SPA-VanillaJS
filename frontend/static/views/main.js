export default function Main() {
  const $view = document.createElement('div');
  
  $view.className = 'main';
  $view.innerHTML = '<h1>메인 페이지 입니다.</h1>';

  this.render = ($target) => {
    $target.innerHTML = '';
    $target.appendChild($view);
  };
};