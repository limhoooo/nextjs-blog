# Flux 패턴이란

흔히 Redux 와 Vuex 에서 사용하는 디자인패턴이다.  
그래서 Flux 패턴이 뭔데?

## 등장배경

MVC (Model, View, Controller) 패턴의 단점을 보완하고 대규모 애플리케이션에서 데이터 흐름을 일관성 있게 관리함으로써 프로그램의 예측가능성을 높이기위함

## 구조

### Action

사용자 측에서 Action의 Type 과 새로운 데이터 payload 를 묶어서
dispatcher 에 전달하는 역할

```
store.dispatch({ type: 'ADD_TODO', payload: inputValue });
dispatch({ type: 'LOGIN', payload: { userName: cookieValue } });
```

### Dispatcher

데이터들의 중앙허브 라고 할 수있다.
Dispatcher는 들어오는 Action 객체 정보를 받아 실제로 어떤 행동을 할지 결정하는 곳이다.

### Store

Store는 애플리케이션의 모든 상태와 관련 로직을 가지고 있다.
Store의 state 변경이 완료가 되면 View에 상태가 변경 했다는 것을 알려준다.

### view

Flux의 View는 화면에 나타내는 것 뿐만이나라, 자식 View로 데이터를 흘려 보내는 뷰 컨트롤러의 역할도 함께 한다.
