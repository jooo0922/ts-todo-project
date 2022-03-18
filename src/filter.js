// filter API 에 대한 간단한 설명 예제...
// 알고있지만 정리 차원에서...

let arr = [
  { gender: "male", name: "john" },
  { gender: "female", name: "sarah" },
  { gender: "male", name: "bone" },
];

const filtered = arr.filter((item) => {
  if (item.gender === "female") {
    return item;
  }
});

// 얘를 터미널에서 node.js 로 실행해보면 [ { gender: 'female', name: 'sarah' } ] 요렇게 찍힘.
console.log(filtered);

/**
 * node 명령어로 node.js 실행하기
 *
 * node.js 는 자바스크립트를 브라우저 밖에서
 * 실행할 수 있는 실행환경!
 *
 * 그래서 특정 js 파일을 node 에서 실행하고 싶다면,
 * 해당 파일이 존재하는 디렉토리로 이동한 뒤,
 * 터미널을 켜서
 *
 * node [파일이름]
 *
 * 요런 식으로 쳐주면 됨.
 */
