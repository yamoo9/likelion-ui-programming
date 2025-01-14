import React from '../lib/react.js';

export default function Playground() {
  // 지역 변수 X
  // let count = 9; // 9, 10, 11, ...

  // 컴포넌트 상태(state) O
  // 상태란? 시간의 흐름에 따라 변경되는(기억되는) 데이터
  // React.useState() API(함수)
  const [count, setCount] = React.useState(9);

  // 지역 변수는 변경되고 있으나,
  // 컴포넌트(함수)는 감감 무소식...
  // 우리는 리액트에게 아무런 일도 시키지 않았기 때문
  // 리액트 시그널(signal)을 줘야 컴포넌트를 다시 렌더링 하지!!!
  return (
    <div className="Playground">
      <h1>플레이그라운드</h1>
      <button
        type="button"
        onClick={() => {
          // 리액트야!!! count 상태를 업데이트 해줘~!!!
          // 다음 번 렌더링에서 사용할 상태 값(next state value)은 count + 1 이야!
          // 리액트: 다음 번 렌더링 할 때 count 값을 count + 1로 변경해줄께!!!
          setCount(count + 1);
        }}
      >
        {count}
      </button>
    </div>
  );
}
