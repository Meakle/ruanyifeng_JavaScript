var num; //声明
num = 1; //赋值

var num1 = 1;//声明和赋值

num2 = 1;//直接赋值未声明变量，变量变为全局变量。

//console.log(num3);//直接使用未声明变量，报错

var num3 = 1;
var num3;//重新声明一个声明过的变量，二次声明无效。

var num3 = 2;//但是赋值操作会覆盖。使用let没有这个情况