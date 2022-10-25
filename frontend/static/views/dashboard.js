export default function Dashboard() {
  const $view = document.createElement('div');
  
  $view.className = 'dashboard';
  $view.innerHTML = '<h1>대시보드 페이지 입니다.</h1>';

  this.render = ($target) => {
    $target.innerHTML = '';
    $target.appendChild($view);
  };
};