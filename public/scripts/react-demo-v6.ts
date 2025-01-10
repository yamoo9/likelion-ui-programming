/* -------------------------------------------------------------------------- */
/* React Programming Preview                                                  */
/* -------------------------------------------------------------------------- */
import React from '../lib/react.js';
import ReactDOM from '../lib/react-dom/client.js';

function Heading() {
  return React.createElement('h1', {}, '안녕!');
}

function ChangeButton() {
  return React.createElement('button', { type: 'button' }, '인사말');
}

function Wrapper() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Heading),
    React.createElement(ChangeButton)
  );
}

const rootElement = document.getElementById('react');
const reactDomRoot = ReactDOM.createRoot(rootElement);

reactDomRoot.render(React.createElement(Wrapper));

// 효과적인 함수의 재사용(유용성)
function add(numbers: { a: number; b: number }): number {
  // let a = 1;
  // let b = 2;
  return numbers.a + numbers.b;
}

add({ a: 2, b: 4 });
add({ a: 5, b: 9 });

// 효과적인 리액트 컴포넌트(함수)의 재사용(유용성)
// 리액트 컴포넌트가 외부에서 [ 데이터 ]를 어떻게 전달 받아야 할까요?

function HeadingDemo(props: {
  elementName: string;
  content: string;
}): React.ReactElement {
  // let elementName = 'h1';
  // let content = '안녕!';
  return React.createElement(props.elementName, null, props.content);
}

// createElement(type /* Component */, props /* null | {} */)
const element1 = React.createElement(HeadingDemo, {
  elementName: 'h1',
  content: '안녕!',
});

const element2 = React.createElement(HeadingDemo, {
  elementName: 'p',
  content: '안녕하세요!! 오늘은 즐거운 불.금이에요!',
});

console.log(element1);
console.log(element2);
