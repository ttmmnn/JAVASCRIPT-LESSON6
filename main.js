'use strict';
var hello = 'hello';
var hello = 'hi';
{
  function sayTomato() {
    var tomato = 'tomato';
    // sayTomato();
  }
}

var apple = 'apple';
// console.log(globalThis);

// primitive と reference の違い
const coffee = {
  name: 'Caffe Latte',
};
// const coffee2 = coffee;
// coffee2.name = 'Espresso';
const coffee3 = {
  name: 'Caffe Latte',
};
// console.log(coffee === coffee3); //内容が同じだが、データアドレスが違うので、falseになる

//クロージャーを使って、プライベート変数を作る方法
let generatePerson = (name) => {
  let age = 0;
  return {
    getName: () => name,
    getAge: () => age,
    incrementAge: () => {
      age += 1;
      // return age;
    },
  };
};
const yoshipi = generatePerson('Yoshipi');
console.log(yoshipi.getAge());
yoshipi.incrementAge();
yoshipi.incrementAge();
console.log(yoshipi.getAge());
console.log(yoshipi.getName());
const tom = generatePerson('Tom');
tom.incrementAge();
tom.incrementAge();
tom.incrementAge();
console.log(tom.getAge());
console.log(tom.getName());

let createCounter = () => {
  let count = 0;
  return () => {
    count += 1;
    // debugger;
    return count;
  };
};
const counter = createCounter();
counter();

//再帰関数について 効率よくループ処理を行う
//factorialとは階乗という意味　３! = 3 * 2 * 1
let factorial = function fact(n) {
  if (n === 0) return 1;
  return n * fact(n - 1);
};
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(0));

//実行コンテキスト（execution context)
const c = () => {
  return 'hello';
};
const b = () => {
  return c();
};
const a = () => {
  return b();
};
a();
