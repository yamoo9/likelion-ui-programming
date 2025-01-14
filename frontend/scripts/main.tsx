// const StrictMode = React.StrictMode;
// const { StrictMode } = React;
// @ts-nocheck
import React, { StrictMode } from '../lib/react.js';
import ReactDOM from '../lib/react-dom/client.js';
import App from './app.tsx';

const root = document.getElementById('react');

if (!root) {
  alert('문서에 #react 요소가 존재하지 않습니다.');
} else {
  ReactDOM.createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
