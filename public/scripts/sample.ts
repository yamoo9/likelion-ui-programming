// DOM API + JavaScript
// DOM 구현 -> 사용자 인터페이스 구현

// 엘리먼트 생성
const element = document.createElement('h1');

// 생성된 엘리먼트에 속성 설정(추가)
element.setAttribute('lang', 'en');

// 생성된 엘리먼트에 텍스트 콘텐츠 추가 설정
element.textContent = 'Programming';

// #app 엘리먼트 내부에 생성된 엘리먼트를 마운트(mount)
document.getElementById('app')?.append(element);