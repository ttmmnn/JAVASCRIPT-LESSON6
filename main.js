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
