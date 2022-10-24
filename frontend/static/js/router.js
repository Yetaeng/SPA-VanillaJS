const router = async () => {
  const routes = [
    { path: '/', view: () => {console.log('main');}},
    { path: '/about', view: () => {console.log('about');}},
    { path: '/dashboard', view: () => {console.log('dashboard');}},
  ];
  
  // routes 배열을 돌며 현재 브라우저 url의 /뒤와 일치하는 route를 찾아 새로운 배열 potentialMatches을 반환함
  const potentialMatches = routes.map(route => {
    return {  
      route,
      isMathch: route.path === location.pathname
    };
  });
  
  let match = potentialMatches.find(match => match.isMathch);
  if (!match) {
    return document.querySelector('#app').innerHTML = '<h1>Not found</h1>';
  }

  console.log(match.route.view());
};

// 페이지 이동
const navigator = (url) => {
  window.history.pushState({}, null, url); // url 주소 바꿔줌. 렌더링은 x

  router();
}

// 뒤로가기, 앞으로가기 버튼 동작시키기
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.nav').addEventListener("click", (e) => {
    e.preventDefault();
    navigator(e.target.href);
  });

  router();
});