import React from '../lib/react.js';

let renderCount: number = 0;

export default function Playground() {
  // 함수 내부의 지역 변수는 함수 실행 이후에 [ 초기화 ] 된다.
  // 컴포넌트 내부의 지역 변수일 뿐. 상태(데이터)가 아님.
  // let loveIcons = '❤️';

  // 컴포넌트 상태(시간의 흐름에 따라 변경되어도 기억될 데이터) 관리 API
  // React Hooks (함수 이름이 use로 시작함)
  // React.useState API(함수)
  // const loveIconsState = React.useState('❤️' /* 초깃값 */);
  // 배열 구조 분해 할당
  // const [state, updater] = React.useState(initialValue);
  const [loveIcons, setLoveIcons] = React.useState('❤️' /* 초깃값 */);

  // 리액트 화면에 렌더링 1회
  // 개발 중 StrictMode를 사용하면 2회 렌더링
  // renderCount += 1;
  // console.log('렌더링 횟수: ', `${renderCount}회`);

  return (
    <div className="Playground">
      <h1>플레이그라운드</h1>

      <p className="message">I LOVE LIKELION 12 {loveIcons}</p>

      <button
        type="button"
        aria-label="하트"
        onClick={() => {
          console.log('하트 +1 추가~');
          setLoveIcons(loveIcons + '❤️');
        }}
      >
        <svg
          fill="none"
          strokeWidth={1.5}
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
          width="24"
          height="24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </button>
    </div>
  );
}
