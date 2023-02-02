/**
 * // 한국말 버전
 * 성명서, 이 프로젝트는 모든 사람이 기술과 엔터테인먼트를 배우는 데 도움을 주기 위한 것일 뿐이며 침해를 피하기 위해 수정된 웹사이트를 대규모로 확산 및 상업화하지 마십시오!
 */

// 추가 점수: 수정된 숫자
let extraScore = 1;

// 무적 모드: 참에서 거짓으로 변경
let wuDi = true;

// 첫 번째 과일: 숫자를 0-10으로 수정, 0은 포도, 9는 수박 반
let firstFruit = 0;

// 과일 합성 반전: 거짓에서 참으로 변경됨
let reverseLevelUp = false;

// 생성할 과일 지정: 기본값: 반전 안 함 0-5, 반전 켜기 6-11, 해당 숫자를 수정하여 무작위로 생성되는 과일 범위 제어
const minRandomFruitNum = reverseLevelUp ? 6 : 0; // 무작위 과일 최소값 생성(0-10) 0은 포도, 9는 수박 반
const maxRandomFruitNum = reverseLevelUp ? 11 : 5; // 최대 임의 과일 생성(1-11) 0은 포도, 9는 수박 반
let setFruits = {
  // 이전에 여러 번 생성된 과일을 지정하십시오. 숫자를 얼마든지 채울 수 있습니다. 0은 포도, 9는 수박 반입니다.
  startFruits: reverseLevelUp ? [10, 10, 9, 8, 8, 7] : [0, 0, 1, 2, 2, 3],
  randomFunction: () => {
    return minRandomFruitNum + Math.floor(Math.random() * (maxRandomFruitNum - minRandomFruitNum));
  }
}

// 과일을 Q 폭탄으로 만들기: false를 0보다 크고 1보다 작은 소수로 변경(권장 0.9)
let fruitQTan = false;

// 과일이 천천히 떨어지게 하십시오: 거짓을 0보다 큰 숫자로 변경하십시오. 값이 클수록 저항이 커지고 낙하 속도가 느려집니다(권장 5).
let fruitSlowDown = false;

// 오른쪽 상단의 아이콘을 클릭하여 과일 변경: false를 true로 변경
let clickChangeFruit = false;

// 광고 링크: false 또는 빈 문자열은 광고로 이동하지 않음을 의미합니다.
let adLink = true;

// 페이지 제목 수정: "수박게임" 교체
document.getElementsByTagName("title")[0].innerText = '수박게임';

// 선택 팝업창 열기: false를 true로 변경
let selectModal = false;

