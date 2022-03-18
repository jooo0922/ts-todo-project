/**
 * any, void 관련 보충 설명
 *
 *
 * 1. any
 * any 타입은 string, number, array 등의 무수히 많은
 * 타입을 통칭하는 타입. 약간 치트키 같은 거라고 보면 됨.
 *
 * 처음 타입을 적용할 때, js 프로젝트에 타입을 적용하여
 * 변환하는 식으로 리팩토링을 한다고 하면,
 *
 * 모든 타입을 any 로 지정을 먼저 한 뒤에,
 * 거기서부터 차근차근 타입을 구체적으로 지정해 나가는 게 정상적인 방법.
 *
 * 물론, any를 사용하기 보다는 가급적 타입을 구체적으로
 * 지정해주는 게 좋지만, 만약 정말 타입을 모르겠다 싶으면
 * any라도 붙여줄 수 있다는 것임.
 *
 * 왜냐면, 타입을 최대한 구체적이고 강하게 정리해줘야
 * 타입스크립트가 주는 장점들을 더 극대화하여 사용할 수 있기 때문임!
 *
 *
 * 2. void
 * void 는 일반적으로 리턴값 타입으로 지정하는데,
 * void 를 지정했다는 건 '리턴값이 없다' 라는 의미로 보면 됨.
 *
 * glsl 에서도 마지막 gl_FragColor 계산해주는 main() 함수는
 * 리턴값을 void 로 지정해놓는 것과 동일한 문법!
 */

/**
 * 타입 별칭
 *
 * 아래의 코드를 보면 알겠지만,
 * { id: number; title: string; done: boolean }
 * 이런 식으로 길게 늘여쓴 타입이 계속 반복적으로 사용되고 있지?
 *
 * 근데 저 property가 수십 수백개로 늘어난다면?
 * 저 타입을 일일이 다 달아줘야 하나?
 * 너무 비효율적이고 가독성도 떨어짐!
 *
 * 그래서 미리 타입을 정의해두고, 거기에 이름(타입 별칭)을 붙여서
 * 이후에는 그 이름만 가져와서 타입을 지정할 수 있게
 * 하려고 만든 것이 타입 별칭이라고 함!
 */
// type Todo = {
//   id: number;
//   title: string;
//   done: boolean;
// };

/**
 * 인터페이스
 *
 * 위에 처럼 타입별칭을 만들 수도 있지만,
 * 이후 수업에서 배울 개념인 '인터페이스'를 사용해서
 * 미리 타입을 인터페이스로 정의해놓고,
 *
 * 해당 인터페이스를 이후 코드에서
 * 반복적으로 사용해서 타입을 지정하는 방법도 있음!
 *
 * 이렇게 타입을 미리 정의해두고 사용하면
 * 훨씬 코드가 깔끔해짐.
 */
interface Todo {
  id: number;
  title: string;
  done: boolean;
}

// 참고로 object[] 이런식으로 오브젝트가 들어가는 배열이다 라고 할수도 있지만,
// {오브젝트 속성 구체적 타입들}[] 이런 식으로도 디테일한 수준까지 타입 정의가 가능함!
// "오브젝트가 들어가는 배열이다" 만이 아니라 "이러이러한 속성값들로 구성된 오브젝트가 들어가는 배열이다" 수준으로
// 구체적인 타입 정의가 가능하다는 뜻!
// let todoItems: { id: number; title: string; done: boolean }[]; // 오브젝트가 들어가는 배열이다 라는 뜻.
let todoItems: Todo[]; // 이런 식으로 미리 정의해 둔 인터페이스를 가져와서 타입을 지정할 수 있음.

// api (실제 api는 아니지만, api라고 가정하고 만들어 놓은 것.)
function fetchTodoItems(): Todo[] {
  // 반환 타입 또한 객체가 담긴 배열로 지정함.
  const todos = [
    { id: 1, title: "안녕", done: false },
    { id: 2, title: "타입", done: false },
    { id: 3, title: "스크립트", done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): object[] {
  // 함수의 리턴값을 할당받는 const 변수값은 굳이 타입 지정을 안해줘도 되나 봄.
  // 그래서 그냥 다 지워버렸음.
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

// 참고로, ts로 프로젝트 코드를 작성할 때,
// 에러가 난 부분을 마우스 hover 하면 ts 에러 코드와 함께
// 왜 에러가 났는지에 대한 설명을 보여줌. 이거를 잘 참고해서
// 구글링 검색 해보든지 하면서 작성하는게 좋음.
function completeTodo(index: number, todo: Todo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
  return todoItems[0];
}

function showCompleted(): object[] {
  return todoItems.filter((item: Todo) => item.done);
  // 위에 filter 사용하는 걸 좀 쉽게 풀어서 쓴게 아래의 코드임.
  // return todoItems.filter((item) => {
  //   if (item.done) {
  //     return item;
  //   }
  // });
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  addTodo({ id: 4, title: "할일1", done: false });
  addTodo({ id: 5, title: "할일2", done: false });
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();

/**
 * .ts 파일에서는 빨간줄로 에러가 쳐진 부분에 대해
 * 수정을 해주지 않으면, 컴파일 즉, 변환이 되지 않음.
 *
 * 얘내들에 타이핑(Typing, 타입이 정의되지 않은 코드에 타입을 입혀주는 행위)을
 * 해줘야 제대로 컴파일 될 수 있음.
 */
