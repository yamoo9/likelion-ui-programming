import React from '../lib/react.js';

/* 상위(부모) 컴포넌트 -------------------------------------------------------------- */

export default function Playground() {
  // 리스트 데이터
  const items: string[] = [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'TanStack (React) Query',
    'React Icons',
    'Zustand',
  ];

  // 리스트 데이터 하위 컴포넌트에 전달
  return (
    <div className="Playground">
      <List list={items} />
    </div>
  );
}

/* 하위(자식) 컴포넌트 -------------------------------------------------------------- */

// 입력된 컴포넌트 속성(props)의 리스트 데이터 렌더링
// JSX 인라인 리스트 렌더링 (for문 또는 Array.prototype.map 활용)
function List({ list }: { list: string[] }) {
  // 1. for문 사용
  // const listItems: React.ReactElement[] = [];
  // // listItems -> React.ReactElement[] === React Children
  // for (let index = 0; index < list.length; index++) {
  //   const item = list[index];
  //   listItems.push(<li key={index}>{item}</li>);
  // }

  // 2. Array.prototype.map 메서드 사용
  // const listItems = list.map((item, index) => {
  //   return <li key={index}>{item}</li>;
  // });
  // const listItems = list.map((item, index) => <li key={index}>{item}</li>);

  // 3. JSX 내부에 직접 Array.prototype.map 메서드 사용
  return (
    <ul>
      {/* React.ReactElement */}
      {/* children prop */}
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
