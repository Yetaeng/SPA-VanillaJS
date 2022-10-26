import Main from '../views/main.js';
import About from '../views/about.js';
import Dashboard from '../views/dashboard.js';
import NotFound from '../views/notFound.js';

const routes = [
  { path: '/', view: Main},
  { path: '/about', view: About},
  { path: '/dashboard', view: Dashboard},
];

const router = () => {

  const foundRoute = routes.find(route => route.path === location.pathname)?.view || NotFound;

  let currentView = new foundRoute();
  currentView.render(document.querySelector('#app'));
};

const navigator = (url) => {
  window.history.pushState(null, null, url);

  router();
}

window.addEventListener("popstate", router());

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#navigation').addEventListener("click", (e) => {
    e.preventDefault();
    navigator(e.target.href);
  });

  router();
});