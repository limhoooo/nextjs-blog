## Map 이란?

: Key, Value 형식으로 저장할 수 있는 참조형 데이터 타입

객체만으로 해결하기 힘든 부분들을 위해서 ES6 에서 새롭게 Map 등장하였다.

```jsx
const user = new Map([
  ["name", "ho"],
  ["age", 10],
  ["major", "컴퓨터"],
]);

console.log(user);
// Map(3) {'name' => 'ho', 'age' => 10, 'major' => '컴퓨터'}
```

### 주요 메서드 및 프로퍼티

```
new Map() // map을 만든다
map.set(key, value) // key를 이용해 value를 저장한다
map.get(key) // key에 해당하는 값 반환. key가 존재하지 않다면 undefined를 반환
map.has(key) // key가 존재하면 true, 아니면 false를 반환
map.delete(key) // key에 해당하는 값 삭제
map.clear() // map 안의 모든 요소 제거
map.size // 요소의 개수 반환

map.keys() // 각 요소의 키를 모아둔 iterable 객체를 반환
map.values() // 각 요소의 값을 모은 iterable 객체를 반환
map.entries() // 요소의 [key, value] 한 쌍으로 하는 iterable 객체 반환. 이 객체는 for...of 루프의 기초로 쓰인다
```

### 객체와의 차이점

**객체의 Key 는 String 혹은 Symbol 만 가능했지만 Map의 Key는 object, Array 등 으로도 가능하다.**

- 객체에 key 로서 Object 를 넣으면, toString() 의 결과인 \[object Object\] 문자열이 key 가 된다.
- 반면, Map 에는 key 로 Object 를 넣으면, Object 자체가 key 가 될 수 있다.

```jsx
const obj1 = {};
const obj2 = {};
const o = {
  [obj1]: "obj1",
  [obj2]: "obj2",
};

console.log(o); // {[object Object]: 'obj2'}

const map = new Map();
map.set(obj1, "obj1");
map.set(obj2, "obj2");

console.log(map); // Map(2) {{…} => 'obj1', {…} => 'obj2'}
console.log(map.get(obj1)); // obj1
```

**객체는 해당 객체의 개수를 찾기 힘들었지만 Map 은 size 로 개수를 찾을수있는 메서드가 존재한다.**

- Object 안의 프로퍼티 개수를 찾으려면 Object.keys 를 이용해서 프로퍼티의 key 를 가져온후 length 로 찾아야했지만 Map 은 자체적으로 size 라는 프로퍼티를 갖고있다

```jsx
var objS = { name: "test", ttt: "NewTest", kim: "kim" };
console.log("Object.keys Length : ", Object.keys(objS).length);

const user = new Map([
  ["name", "ho"],
  ["age", 10],
  ["major", "컴퓨터"],
]);
console.log(user.size); // 3
```

**성능 차이**

- Map 은 obj 에 비해 뛰어난 검색속도를 갖고있다
- 잦은 데이터 갱신과 적은 데이터 출력에는 Object > Map
- 적은 데이터 갱신과 많은 데이터 출력에는 Object < Map
