// 分类1 常量变量
// 分类二 基本类型 可对象化类型(对象指实体数据)
// bool null undef number string symbol
// Array(实际上没有这个类型，他是object) function object ... see next
JavaScript 数据类型
在 JavaScript 中有 6 种不同的数据类型：

string
number
boolean
object
function
symbol
3 种对象类型：

Object
Date
Array
2 个不包含任何值的数据类型：

null
undefined

typeof "John"                 // 返回 string
typeof 3.14                   // 返回 number
typeof NaN                    // 返回 number
typeof false                  // 返回 boolean
typeof [1,2,3,4]              // 返回 object
typeof {name:'John', age:34}  // 返回 object
typeof new Date()             // 返回 object
typeof function () {}         // 返回 function
typeof myCar                  // 返回 undefined (如果 myCar 没有声明)
typeof null                   // 返回 object
console.log(typeof console.log)//func
constructor 属性
constructor 属性返回所有 JavaScript 变量的构造函数。

实例
"John".constructor                 // 返回函数 String()  { [native code] }
(3.14).constructor                 // 返回函数 Number()  { [native code] }
false.constructor                  // 返回函数 Boolean() { [native code] }
[1,2,3,4].constructor              // 返回函数 Array()   { [native code] }
{name:'John', age:34}.constructor  // 返回函数 Object()  { [native code] }
new Date().constructor             // 返回函数 Date()    { [native code] }
function () {}.constructor         // 返回函数 Function(){ [native code] }
// 对象
var person={
firstname : "John",
lastname  : "Doe",
id        :  5566
}
name=person.lastname;
name=person["lastname"];
//Undefined 这个值表示变量不含有值。
//可以通过将变量的值设置为 null 来清空变量。
person=null;
// 关键字仿照java
//done
