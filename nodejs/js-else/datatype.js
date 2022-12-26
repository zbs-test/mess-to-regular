// 分类1 常量变量
// 分类二 基本类型 可对象化类型(对象指实体数据)
// bool null undef number string symbol
// Array(实际上没有这个类型，他是object) function object 衍生object: Date Regex
console.log(typeof console.log)//func
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
