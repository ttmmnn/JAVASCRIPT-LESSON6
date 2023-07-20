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
console.log(coffee === coffee3); //内容が同じだが、データアドレスが違うので、falseになる
