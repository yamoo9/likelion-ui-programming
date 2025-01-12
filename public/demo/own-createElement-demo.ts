import createElement from '../lib/own/createElement';

/* -------------------------------------------------------------------------- */
/* Own CreateElement Function                                                 */
/* -------------------------------------------------------------------------- */

const ownElement = createElement(
  'div',
  {
    id: 'own',
  },
  'hello'
);

const reactAppElement = createElement('div', {
  id: 'react',
  className: 'app',
});

console.group('Own 요소 노드');
console.log(ownElement);
console.log(reactAppElement);
console.groupEnd();
