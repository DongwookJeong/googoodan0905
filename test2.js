console.log("a");
setTimeout(function () {
  console.log("b");
}, 0);
setTimeout(function () {
  console.log("c");
}, 0);
// 이벤트 루프
// 순서를 어길 수 있다.
// 원하는 시간에 실행 할 수 있다.
