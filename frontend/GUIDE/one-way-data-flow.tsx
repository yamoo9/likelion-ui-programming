import React from '../lib/react.js';

/* -------------------------------------------------------------------------- */
/* 단방향 데이터 흐름                                                              */
/* -------------------------------------------------------------------------- */

function Root() {
  return (
    <div className="Root">
      <GrandChild />
    </div>
  );
}

function GrandParent() {
  return (
    <div className="GrandParent">
      <Parent />
    </div>
  );
}

function Parent() {
  return (
    <div className="Parent">
      <Child />
    </div>
  );
}

function Child() {
  return (
    <div className="Child">
      <GrandChild />
    </div>
  );
}

function GrandChild() {
  let link = {
    href: '',
    text: '',
  };

  return (
    <div className="GrandChild">
      <a href={link.href}>{link.text}</a>
    </div>
  );
}
