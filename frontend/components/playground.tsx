import React from '../lib/react.js';

/*
  학습 주요 주제

  - 순수 함수
    - React 컴포넌트는 항상 순수한 것으로 간주
  - 리스트 렌더링
    - 대부분 for문 보다는 map 메서드 활용
    - 리스트 렌더링 시, key 속성 필히 필요 (정확하게, 빠르게, 효과적으로 렌더링 하기 위해)
    - key 속성은 형제 간에 고유해야 함
  - 사이드 이펙트 (부수 효과)
    - 부수 효과란?
      - 리액트 렌더링 프로세스와 관련없는 일들
      - 실제 DOM 객체 접근/조작
      - 네트워크 통신(서버에 요청/응답)
*/

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

  // -------------------------------------------------------------
  // 부수 효과 (리액트 렌더링 프로세스와 관련 없는 일들)
  // - 코드로 예측이 어려운 경우 (순수하지 않음)
  // -------------------------------------------------------------

  // // DOM 엘리먼트에 접근해 스타일을 조작 (명령형 프로그래밍)
  // const listElement = document.querySelector<HTMLUListElement>('ul.unknown');

  // // 타입 단언(Type Assertion)
  // // (listElement as HTMLElement).style.cssText = `

  // // 타입 네로윙(Type Narrowing)
  // if (listElement) {
  //   listElement.style.cssText = `
  //     margin: 20px;
  //     border: 4px solid rgba(0 0 0 / 15%);
  //     padding-inline-start: 0;
  //     list-style: none;
  //   `;
  // }

  // -------------------------------------------------------------
  // 부수 효과를 발생시킬 수 있는 곳은?
  // 1. 이벤트 핸들러 (함수) -> 작동 시점 (이벤트 발생 시: 이벤트 발생 주체 => 사용자)

  const handleChangeListStyles = () => {
    // DOM 엘리먼트에 접근해 스타일을 조작 (명령형 프로그래밍)
    const listElement = document.querySelector<HTMLUListElement>('ul.List');

    // 타입 단언(Type Assertion)
    // (listElement as HTMLElement).style.cssText = `

    // 타입 네로윙(Type Narrowing)
    if (listElement) {
      listElement.style.cssText = `
        margin: 20px;
        border: 4px solid rgba(0 0 0 / 15%);
        padding-inline-start: 0;
        list-style: none;
      `;
    }
  };

  return (
    <div className="Playground">
      <button type="button" onClick={handleChangeListStyles}>
        change list styles
      </button>
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
    <ul
      className="List"
      // style={{
      //   margin: 20,
      //   border: '4px solid rgba(0 0 0 / 15%)',
      //   listStyle: 'none',
      //   paddingInlineStart: 0,
      // }}
    >
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
