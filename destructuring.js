// user 객체를 받아서 id와 name을 출력하는 함수를 3개의 이상의 Function signature로 표현하기
const hong = { id: 1, name: 'Hong' };
const lee = { id: 2, name: 'Lee' };

function f1({ id, name }) {
  console.log(`${id}, '${name}'`);
}

const f2 = function ({ id, name }) {
  console.log(`${id}, '${name}'`);
};

const f3 = ({ id, name }) => console.log(`${id}, '${name}'`);

// 재귀 함수 사용시 내부에서 객체 내부에서 호출하는 편이 좋다.
const f4 = function tmp({ id, name }) {
  console.log(`${id}, '${name}'`);
};

const f5 = new Function('obj', 'console.log(obj.id, obj.name)');

f1(hong);
f2(lee);
f3(hong);
f4(lee);
f5(hong);

// user 객체에서 pssswd 프로퍼티를 제외한 데이터를 userInfo라는 변수에 할당하시오.
const user2 = { id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul' };

const { passwd, ...userInfo } = user2;

console.log(userInfo);

// 다음 arr에서 3개의 id를 id1, id2, id3로 할당하시오.
const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];

// // arr에서 바로 받는 편이 좋다. 간단하고 직관적인 코드로 작성
const [
  {
    0: { id: id1 },
  },
  {
    0: { id: id2 },
    1: { id: id3 },
  },
] = arr;

console.log(id1, id2, id3);

// key를 전달하면 해당 값의 첫 글자를 제외한 문자를 리턴하는 함수를 destructuring을 최대한 활용하여
// 함수를 완성하시오.

const user4 = { name: 'Hong', passwd: 'xyz', addr: 'Seoul' };

// 구조분해할당으로 하나 원소 제외하기
function getValueExceptInitial(k) {
  const { [k]: v } = user4;
  const si = [...v];
  // const [, ...r] = v // [...v];
  // return r.join('');
  return si.splice(1).join('');
}

console.log(getValueExceptInitial('name'));
console.log(getValueExceptInitial('passwd'));
console.log(getValueExceptInitial('addr'));
