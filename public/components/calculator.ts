import React from '../lib/react.js';

const { createElement: h } = React;

const operations = {
  '+': (left: number, right: number): number => left + right,
  '-': (left: number, right: number): number => left - right,
  '*': (left: number, right: number): number => left * right,
  '/': (left: number, right: number): number => left / right,
};

function Calculator(props: { elements?: [number, number]; operator: string }) {
  const operator = props.operator ?? '+';

  let left = 0;
  let right = 0;

  if (props.elements) {
    const [l, r] = props.elements;
    left = l ?? left;
    right = r ?? right;
  }

  const outputValue: number = operations[operator](left, right);

  return h(
    'div',
    {
      className: 'calculator',
    },
    h(
      'code',
      null,
      `${left} ${operator} ${right} = `,
      h('output', null, outputValue)
    )
  );
}

export default Calculator;
