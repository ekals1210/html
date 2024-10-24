import React from 'react';
import './index.css'; // index.css 파일을 import하여 스타일을 적용합니다.

const App = () => {
  return (
    <div>
      <header>
        <div id="header">
          <img src="site.png" width="500" height="300" alt="이미지" />
        </div>
      </header>
      <article>
        <div id="article">
          <div id="banner">
            <img src="banner.png" alt="배너 이미지" />
          </div>
          <h1>옷 정보 이미지</h1>
          <div id="product-list"></div>
        </div>
      </article>
      <footer></footer>
    </div>
  );
};

export default App;
