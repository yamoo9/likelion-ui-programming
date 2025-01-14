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

const ENDPOINT = 'https://my-json-server.typicode.com/yamoo9/assets/vowels';

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
  // 리액트 렌더링 프로세스
  // React (순수!!!!!!!)
  //  리액트 컴포넌트 -> 리액트 엘리먼트 생성 -> 엘리먼트 트리 형성(Virtual DOM) -> 엘리먼트 트리 ->
  // React DOM
  //  ReactDOM 렌더링 -> 실제 DOM 커밋(commit) ->
  // 웹 브라우저
  //  DOM 플로우(flow) 형성 & 페인팅(painting)
  // 웹 애플리케이션 인터페이스 (부수 효과 ~~~~~)
  //  사용자 상호작용(인터랙션)
  //  UI 요소에 접근/조작 (변경)

  // -------------------------------------------------------------
  // 부수 효과 (리액트 렌더링 프로세스와 관련 없는 일들)
  // - 코드로 예측이 어려운 경우 (순수하지 않음)
  // -------------------------------------------------------------

  // 1. DOM에서 .Playground 엘리먼트 찾기
  // 2. .Playground 엘리먼트 내부에서 .List 엘리먼트를 찾아 DOM 트리에서 삭제
  // const playgroundElement =
  //   document.querySelector<HTMLDivElement>('.Playground');

  // if (playgroundElement) {
  //   const listElement =
  //     playgroundElement.querySelector<HTMLUListElement>('.List');
  //   if (listElement) {
  //     listElement.remove();
  //   }
  // }

  // 2번째 부수 효과(side effects)
  // 네트워크 요청/응답 (언제 응답이 올 지... 아무로 모름~ 예측 불가능)
  // Fetch API / axios API
  // fetch(ENDPOINT)
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .catch((error) => console.error(error));

  // -------------------------------------------------------------
  // 부수 효과를 발생시킬 수 있는 곳은?
  // 이벤트 핸들러 (함수) -> 작동 시점 (이벤트 발생 시: 이벤트 발생 주체 => 사용자)
  const handleDeleteList = () => {
    // 1. DOM에서 .Playground 엘리먼트 찾기
    // 2. .Playground 엘리먼트 내부에서 .List 엘리먼트를 찾아 DOM 트리에서 삭제
    const playgroundElement =
      document.querySelector<HTMLDivElement>('.Playground');

    if (playgroundElement) {
      const listElement =
        playgroundElement.querySelector<HTMLUListElement>('.List');
      if (listElement) {
        listElement.remove();
      }
    }
  };

  const handleRenderingListFromAsyncData = async () => {
    // 명령형 프로그래밍
    // 부수 효과 코드
    return fetch(ENDPOINT)
      .then((response) => response.json())
      .then((data: { id: number; name: string; shape: string }[]) => {
        const reactElement = document.getElementById('react');

        reactElement?.insertAdjacentHTML(
          'beforeend',
          /* html */ `
          <ul>
            ${data
              .map((item) => {
                return /* html */ `
                  <li>
                    ${item.name}
                  </li>
                `;
              })
              .join('')}
          </ul>
        `
        );
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="Playground">
      <button
        type="button"
        onClick={async () => {
          handleDeleteList();
          await handleRenderingListFromAsyncData();
          console.log('compolete rendering');
        }}
      >
        delete list element
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
