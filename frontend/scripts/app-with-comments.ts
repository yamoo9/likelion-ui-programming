import React from '../lib/react.js';

// hyperscript 함수
// JavaScript 마크업 처리 사용
const h = React.createElement;

// React 엘리먼트를 반환하는 함수 (재사용 목적)
// React 컴포넌트(구성요소, UI의 부분)
function App(): React.ReactNode {
  // React 엘리먼트 생성하는 함수 실행 결과 반환
  // React 엘리먼트 반환
  // React (또는 Vue) 가상(Virtual) DOM
  // VDOM을 구성하는 가상 노드(vNode) 생성
  return h(
    /* type: HTML 컴포넌트(태그) 이름 or React 빌트인 컴포넌트 or 사용자 정의 컴포넌트 */
    'div',
    /* 컴포넌트 속성(props, 외부에서 전달되는 데이터) */
    {
      style: appStyles,
    }
    /* 컴포넌트의 자식들(children) */
  );
}

// 앱 스타일 맵(객체)
const appStyles = {
  display: 'flex',
  flexFlow: 'column',
  gap: 12,
  padding: 20,
};

export default App;
