import React from '../lib/react.js';
import ReactDOM from '../lib/react-dom/client.js';
import App from './app';

const root = document.getElementById('react');

if (!root) {
  alert('문서에 #react 요소가 존재하지 않습니다.');
} else {
  const app = React.createElement(App);
  ReactDOM.createRoot(root).render(app);
}
