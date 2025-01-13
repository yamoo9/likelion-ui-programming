import React from '../lib/react.js';
import ReactDOM from '../lib/react-dom/client.js';
import App from './app.ts'; // .ts (브라우저 해석 X, ts-browser 해석)

const root = document.getElementById('react');

// 타입 보호
if (!root) {
  alert('문서에 #react 요소가 존재하지 않습니다.');
} else {
  // React 컴포넌트 -> React 엘리먼트 생성
  const app = React.createElement(App);
  // 생성된 React 엘리먼트는 ReactDOMRoot 인스턴스(객체)의
  // render() 메서드에 전달되어 React 앱 화면 표시
  // 가상 DOM -> ReactDOM -> 실제 DOM 변환 (DOM Commit)
  ReactDOM.createRoot(root).render(app);
}
