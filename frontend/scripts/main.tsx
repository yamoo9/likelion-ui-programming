import React from '../lib/react.js';
import ReactDOM from '../lib/react-dom/client.js';
import App from './app.tsx';

const root = document.getElementById('react');

if (!root) {
  alert('문서에 #react 요소가 존재하지 않습니다.');
} else {
  // const app = React.createElement(App);
  // const app = <App></App>;
  // const app = <App />;
  ReactDOM.createRoot(root).render(<App />);
}
