setState 는 비동기이다.  
즉 setState 가 포함된 함수를 실행할때
**일반 코드**들이 다 실행된 다음 setState 가 실행된다

```jsx
export default function Test() {
  const [count, setCount] = useState(0);
  const handleBtn = () => {
    setCount(count + 1);
    // 숫자가 하나씩 밀려서 나옴
    console.log(count); // 위에서 말하는 일반코드
  };
  return (
    <div>
      <button onClick={handleBtn}>btn</button>
    </div>
  );
}
```

### Why?

그 이유는 setState 는 랜더링과 관련되어있기 때문이다.  
setState 이후 리랜더링이 발생하는데 만약 setState 동기적이고 setState 이후에  
실행할 코드가 있다면 이후 코드들은 리랜더링으로 인해 실행되지 않을것이다.  
이와 관련해서 react 는 **React batch updating**라는것을 사용하는데  
한 함수에 여러개의 setState 가 있을시 여러개의 state 변경을 최종적으로 다 처리된이후  
마지막 state 가 변경된 이후에 한번만 리랜더링을 발생시킨다.  
불필요한 리랜더링을 방지하기 위함이다.  
만약 setState 가 일어날때마다 리랜더링을 시켜주고싶다면 useEffect의 의존성을 추가해야한다.

```jsx
useEffect(() => {}, [count]);
```

간단하게 React 의 setState 를 만들어보았다

```jsx
  ...
  setState(newState) {
    // 실행될 state 들을 변수에 넣는다
	this.arrState = [...this.arrState, { ...newState }];
    // requestAnimationFrame 를 이용해서 이벤트루프의 호출순위를 뒤로 밀어놓는다
	requestAnimationFrame(() => {
      this.executeArrState();
    });
  }
  executeArrState() {
    if (this.arrState.length === 0) return;
	// 쌓여있던 state 들을 처리해준다
    this.arrState.forEach(state => (this.state = { ...this.state, ...state }));
    this.arrState = [];
	// 최종적으로 랜더링처리
    this.render();
  }
```

### 회고

위의 만든 setState 는 내가 이해한 setState 동작방식대로 구현한것이다.  
React 소스를 직접 참고해서 만든것이 아니기때문에 정확하지 않을 수 있다.
