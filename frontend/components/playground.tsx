import React from '../lib/react.js';

function Playground() {
  const items = ['와!', '점심시간이다!', '맛있는 것 먹어야지~'];

  return (
    <div>
      <List items={items} />
    </div>
  );
}

function List({ items = [] }: { items?: any[] }) {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </ul>
  );
}

function ListItem({ children }: { key: number; children?: React.ReactNode }) {
  return <li>{children}</li>;
}

export default Playground;
