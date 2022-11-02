# 👩‍💻 Vanilla JavaScript로 만들어보는 SPA

## 📌 Intro
프로그래머스 데브 매칭에서 과제 테스트를 풀어본 적이 있는데, 당시 문제가 '별도의 라이브러리 없이 vanilla JS를 이용한 SPA 쇼핑몰'을 만드는 것이었다.
생각했던 것 보다 많이 어려웠고, 절반은 아예 손도 대지 못했다. 그동안 라이브러리나 프레임워크에 너무 의존하고 있었던 것은 아닌가 생각이 들었고, 자바스크립트도 아직 제대로 사용하지 못하고 있었음을 느꼈다.

그래서 우선은 SPA에서 중요한 부분인 라우팅 처리를 Vanilla JS를 이용하여 직접 구현해보고 싶었다. 리액트에서 많이 사용하는 react-router-dom 이라는 라이브러리는 내부에서 `History API`를 사용하고 있었는데, 여기에 힌트를 얻어 시작해보았다.
<br /><br />

## 📌 I learned
### ✅ express 서버 구축하고, 정적 파일 제공하기
브라우저가 서버로부터 빈 index.html을 응답받으면, 해당 파일 내의 head를 읽어 추가로 필요한 자원(index.js, index.css 등)을 다시 서버로 요청한다.
그럼 이때 서버에서는 해당 자원을 다시 응답으로 돌려줘야하는데, express에는 `stastic`이라는 메서드가 포함되어 이러한 정적파일들을 쉽게 제공할 수 있다.

* `app.use(express.static('public'));`

static의 인자로는 디렉토리 이름이 들어간다. 따라서 'public' 이라는 디렉토리 밑에 있는 데이터들을 웹브라우저의 요청에 따라 제공해줄 수 있다.
<br /><br />

* `app.use('/static', express.static('public'));`

가상경로를 이용하여 접근하게 할 수도 있는데, 이 경우 사용자가 public 디렉터리에 있는 파일들에 접근하려면 "http://localhost:3000/static/hello.html"처럼 접근해야한다.
<br /><br />

* `app.use('/static', express.static(__dirname + '/public'));`

express.static 메서드는 node 프로세스가 실행되는 디렉터리에 상대적이므로, 절대경로를 사용하는 것을 추천한다.
<br /><br />

* `app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));`

만약 디렉토리 뎁스가 많다면 path 모듈을 사용해 경로를 지정해줄 수 있는데, path.resolve는 인자들을 하나로 합쳐 경로를 만들어준다.
<br /><br />

### ✅ `DOMContentLoaded` vs `load`
DOMContentLoaded는 초기 HTML 문서를 완전히 불러오고 분석이 끝났을 때 발생한다. 그리고 스타일 시트, 이미지, 하위 프레임의 로딩은 기다리지 않는다.
그래서 조금 더 빠르게 사용자가 볼 수 있다는 장점이 있으며, defer를 선언한 js와 비슷하게 발동한다.

load는 DOM 요소를 만들고, 페이지에 필요한 모든 리소스(모든 외부자원)를 다 다운받고나면 이벤트가 호출된다.
<br /><br />

### ✅ popstate event
popstate는 뒤로 가기 버튼, 앞으로 가기 버튼, history.back() 등을 통해 브라우저의 URL이 변경되는 것을 감지하는 이벤트이다.
예를 들어 `window.addEventListener("popstate", router);`는 버튼 클릭을 통해 URL이 변경되면, 이벤트가 발생하면서 router라는 콜백함수를 실행시키고, 함수호출로 인해 렌더링이 일어나게 된다.
<br /><br />

## 📌 Next time
* 동적 라우팅
* 각각의 뷰마다 자바스크립트 연결하기