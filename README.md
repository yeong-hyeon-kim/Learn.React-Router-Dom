## 📕 프로젝트 개요(Introduce Project)

### Learn-React-Router-Dom

* 리액트(React)에서 라우터를 사용하며 [SPA](#SPA(Single-Page-Application)-:-단일-페이지-어플리케이션) 방식인 리액트를 [MPA](#MPA(Multi-Page-Application)-:-다중-페이지-어플리케이션) 처럼 사용하는 법을 알아봅니다.

## 💡 리액트 라우터(React Router Dom)?

### SPA(Single Page Application) : 단일 페이지 어플리케이션

* `CSR(Client Side Rendering)` : 클라이언트에서 렌더링을 수행합니다.
    * 필요한 정적 리소스를 최초 한번에 다운로드하여 렌더링 합니다.
    * 이후 요청은 필요한 데이터만 받아 업데이트 합니다.

* 페이지 이동 시 갱신에 필요한 데이터만 전달 받아 전체적인 트래픽이 감소합니다.

* 새로고침이 아닌 필요한 부분만 렌더링하므로 네이티브 애플리케이션과 비슷한 UX를 제공합니다.

* 모바일 웹 또는 하이브리드 앱으로 많이 이용되고 있습니다.

### MPA(Multi Page Application) : 다중 페이지 어플리케이션

* `SSR(Server Side Rendering)` : 서버에서 랜더링을 수행합니다.
    * 요청 할 때마다 서버에서 렌더링이 완료된 페이지를 가져옵니다.

* 전체 페이지를 렌더링하므로 전체적인 트래픽이 증가합니다.
* 서버에서 이미 렌더링한 결과를 가져오기 때문에 첫 로딩이 빠릅니다.
* 전통적인 웹 방식 입니다.

### 라우터(Router Dom)는 리액트(React)를 여러 페이지로 나눠서 사용할 수 있게 만드는 것이 목적입니다.

#### BrowserRouter

* 리액트 라우터를 사용하려는 태그의 상위 태그를 `<BrowserRouter/>` 감싸줍니다.

```javascript
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
    <App />
</BrowserRouter>
```

#### Route

* 특정 주소에 컴포넌트 연결하는 태그 입니다.
* Route는 단독으로 사용할 수 없고 Routes안에 포함하여 사용합니다.

```javascript
import { Route, Routes } from "react-router-dom";

<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/Profile/" element={<Profile />} />
    <Route path="/profiles/" element={<Profiles />} />
    <Route path="/history" element={<HistorySample />} />
</Routes>
```

#### Link

* 다른 주소로 이동시키는 태그입니다.
* ✔ `<Link/>`
  * 브라우저의 주소만 변경
* ❌ `<a/>`
  * 페이지를 아예 새로 불러옵니다.
  * 리액트 앱이 지니고있는 상태들도 초기화되고, 렌더링된 컴포넌트도 모두 사라지고 새로 렌더링을 하게됩니다.

## 💻 개발 환경(Develop Environment)

||운영체제(OS)|언어(Language)|프레임워크(Framework)|
|-|:-:|:-:|:-:|
|명칭(Name)|![Windows](https://img.shields.io/badge/Windows-0078D6?style=flat-square&logo=Windows&logoColor=white)|![JAVASCRIPT](https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black)|![REACT](https://img.shields.io/badge/REACT-61DAFB?style=flat-square&logo=React&logoColor=black)|
|버전(Version)|`10`, `11`||`18.2.0`|
