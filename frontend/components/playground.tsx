import React from '../lib/react.js';

/* 상위(부모) 컴포넌트 -------------------------------------------------------------- */

type ListItem = {
  id: string;
  subject: string;
};

export default function Playground() {
  const items: ListItem[] = [
    {
      id: 'react',
      subject: 'React',
    },
    {
      id: 'next.js',
      subject: 'Next.js',
    },
    {
      id: 'typescript',
      subject: 'TypeScript',
    },
    {
      id: 'react router',
      subject: 'React Router',
    },
  ];

  return (
    <div className="Playground">
      <List list={items} />
    </div>
  );
}

/* 하위(자식) 컴포넌트 -------------------------------------------------------------- */

interface ListProps {
  list: ListItem[];
}

function List({ list }: ListProps) {
  return (
    <ul className="List">
      {list.map((item) => (
        <ListItem key={item.id}>{item.subject}</ListItem>
      ))}
    </ul>
  );
}

/* 하위(자손) 컴포넌트 -------------------------------------------------------------- */

interface ListItemProps {
  key?: string;
  children?: React.ReactNode;
}

function ListItem(props: ListItemProps) {
  return <li>{props.children}</li>;
}
