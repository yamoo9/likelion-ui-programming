import React from '../lib/react.js';

const { createElement: h } = React;

type OperationFn = (left: number, right: number) => number;
type Operator = '+' | '-' | '*' | '/' | '**';

const operations: Record<Operator, OperationFn> = {
  '+': (left, right) => left + right,
  '-': (left, right) => left - right,
  '*': (left, right) => left * right,
  '/': (left, right) => left / right,
  '**': (left, right) => left ** right,
};

function Calculator({
  elements,
  operator = '+',
}: {
  elements?: [number, number];
  operator: Operator;
}) {
  let left = 0;
  let right = 0;

  if (elements) {
    const [l, r] = elements;
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
