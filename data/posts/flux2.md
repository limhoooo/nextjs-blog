흔히 Redux 와 Vuex 에서 사용하는 디자인패턴이다.

## 등장배경

MVC (Model, View, Controller) 패턴의 단점을 보완하고 대규모 애플리케이션에서  
데이터 흐름을 일관성 있게 관리함으로써 프로그램의 예측가능성을 높이기위함

## 구조

![image](https://github.com/limhoooo/nextjs-blog/assets/24869943/f38f1c88-84d1-4dbe-8f4d-f1cd8ecbbc2a)

### Action

사용자 측에서 Action의 Type 과 새로운 데이터 payload 를 묶어서
dispatcher 에 전달하는 역할

### Dispatcher

데이터들의 중앙허브 라고 할 수있다.  
Dispatcher는 들어오는 Action 객체 정보를 받아 실제로 어떤 행동을 할지 결정하는 곳이다.  
React Hook 중 useReducer 로 간단하게 dispatcher 를 사용할 수 있다.

### Store

Store는 애플리케이션의 모든 상태와 관련 로직을 가지고 있다.  
Store의 state 변경이 완료가 되면 View에 상태가 변경 했다는 것을 알려준다.

### view

Flux의 View는 화면에 나타내는 것 뿐만이나라, 자식 View로 데이터를 흘려 보내는 뷰 컨트롤러의 역할도 함께 한다.

### 그래서 Flux 패턴이 뭔데?

사용자가 Action 을 하게되면 해당 Action 에 type 과 payload 를 담아서  
dispatch를 통해 해당 Action type 에 맞는 로직을 실행하게되며
그 로직안에서 store에 있는 상태를 변경 해준다.  
store 는 변경된 상태를 자신을 구독하고 있는 컴포넌트에 알려준다.
Flux 패턴은 이러한 구성 요소로 구성되며, 데이터의 단방향 흐름을 통해 상태를 관리하고  
예측 가능한 방식으로 애플리케이션을 유지 보수할 수 있게 도와준다.

### 간단한 Redux 를 Vanilla JS로 만들어보자

Redux 는 Flux 패턴을 바탕으로 reducer 를 혼합해서 만든 상태관리 라이브러리 이다.  
reducer 는 action type 에 따라 store 의 상태를 어떻게 변경할건지 정하는 객체 이다.
다음은 flux 패턴과 Observer 패턴을 이용한 간단한 Redux 구현 예제이다.  
사실 Vanilla JS 로 react 를 만들때 만들었던 Redux 소스이다보니  
직접만든 react 컴포넌트에 의존적인 redux 이기도 하지만  
Redux 를 이해하는데는 큰 문제는 없을것이다.

#### store 생성

```jsx
// 미리 만든 reducer 를 받아서 store 에 넘겨준다
const store = new CreateStore(reducer);
```

#### reducer 생성

```jsx
// 리듀서는 기본적으로 store에 있는 state 와 사용자의 액션에 따른 action 을 인자로 받는다.
function reducer(state = {}, action) {
  // action.type 에 따라 state 를 변경해준다
  switch (action.type) {
    case "ADD_TODO":
      const item = {
        id: new Date().getTime(),
        check: false,
        todo: action.payload,
      };
      return {
        ...state,
        items: [...state.items, { ...item }],
      };
    case "DELETE_TODO":
      return {
        ...state,
        items: action.payload,
      };
    case "CHANGE_TODO":
      return {
        ...state,
        items: action.payload,
      };
  }
  return state;
}
```

#### store 생성

```jsx
// 사용할 상태를 정의
const initState = {
  items: [],
};

export default class CreateStore {
  // store 생성시 reducer 및 state 를 저장해놓는다.
  constructor(reducer) {
    this.reducer = reducer;
    this.state = initState;
    this.listeners = [];
  }
  // 외부에서 사용될 dispatch
  dispatch(action) {
    // reducer 에서 retrun 된 state를 store 의 state 로 변경한다
    this.state = this.reducer(this.state, action);
    // state 변경시 구독하고 있는 컴포넌트 리랜더링
    this.listeners.forEach((fn) => fn());
  }
  getState() {
    return { ...this.state };
  }
  // 해당 store 를 사용할 컴포넌트들을 구독 시킨다.
  subscribe(component) {
    this.listeners = [...this.listeners, component];
  }
  initSubscribe() {
    this.listeners = [];
  }
}
```

#### Action 호출

```jsx
store.dispatch({ type: "ADD_TODO", payload: todoList });
```

### React Hook 을 이용한 Redux 구현

react 를 사용한다면 useReducer 를 이용해서 간단하게 구현할 수 있다.

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.login:
      return { user: { userName: action.payload.userName }, isLogged: true };
    case ActionType.logout:
      return { user: null, isLogged: false };
    case ActionType.isLoggedIn:
      return { ...state, isLogged: action.payload.isLogged };
    case ActionType.register:
      return { ...state };
    default:
      return state;
  }
};
// useReducer
const [state, dispatch] = useReducer(reducer, initState);
```
