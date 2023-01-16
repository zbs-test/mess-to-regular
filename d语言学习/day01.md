# 前提条件
- windows下载安装dmd非常操蛋，不过好在我下载成功了
- windows11_amd64 + dmd2 + vscode + d语言插件
- 分块学习
# 第一块
- 把d语言看成c的变种
### hello_world
//cmd 
```
md d语言学习
cd d语言学习
md day01
cd day01 
notapad day01.d
```
//day01.d
```d
//day01.d
import std.stdio;

int main(){
  writeln("hello world");
}
```
//cmd 
```
dmd day01.d
```
//check day01.exe

