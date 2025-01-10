import React from '../lib/react.js';
import Calculator from './calculator';

const { createElement: h, Fragment } = React;

function Calculators() {
  return h(
    Fragment,
    null,
    h(Calculator),
    h(Calculator, { operator: '-' }),
    h(Calculator, { elements: [12, 2] }),
    h(Calculator, { elements: [-12, 23], operator: '*' }),
    h(Calculator, { elements: [, 6], operator: '/' })
  );

  // props.children은 배열 (고유 값으로 각 항목에 key 설정 권장)
  // return [
  //   h(Calculator, { key: 'child-1' }),
  //   h(Calculator, { key: 'child-2', operator: '-' }),
  //   h(Calculator, { key: 'child-3', elements: [12, 2] }),
  //   h(Calculator, { key: 'child-4', elements: [-12, 23], operator: '*' }),
  //   h(Calculator, { key: 'child-5', elements: [, 6], operator: '/' }),
  // ];
}

export default Calculators;
