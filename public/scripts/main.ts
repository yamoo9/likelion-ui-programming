import { Greeting } from './greeting';

// 인사말 리스트(목록) 배열
const greetingList = Object.values(Greeting);

// 제어 대상 참조
const heading = document.querySelector('h1');

// 제어 버튼 참조
const changeButton = document.querySelector('[type="button"]');

// 버튼에 이벤트 바인딩
changeButton?.addEventListener('click', handleChangeGreetMessage);

// 이벤트 핸들러
function handleChangeGreetMessage() {
  // 랜덤 인사말 설정
  const message = greetingList[Math.floor(Math.random() * greetingList.length)];
  // 화면에 렌더링
  heading && (heading.textContent = message);
}