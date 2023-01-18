# 简单使用cmake去做c++项目
# 前提条件:
- linux + cmake + gcc + g++ + vim 
---
这是一个c++联合cmake的小项目，主要是测试项目的搭建流程
---
//bash
```bash
mkdir testProject && cd testProject && mkdir include && mkdir src && mkdir build 
vim include/swap.h
```
在swap.h
```cpp
#include <iostream>
using namespace std;
class swap{
private:
  int a,b;
public:
  swap(int a,int b){
    this->a = a;
    this->b = b;
  }
  void run();
  void print();
};
```
在src目录下swap.cpp
```cpp
#include “swap.h”
void swap::run(){
  int temp;
  temp = this->a;
  this->a = this->b;
  this->b = this->a;
}
void swap::print(){
  cout << "a = " << a << endl;
  cout << "b = " << b << endl;
}

在testProject目录下创建main.cpp
```cpp
#include "swap.h"
int main(){
  int a, b;
  cout << "input a and b (int)\n";
  cin >> a >> b;
  swap myswap(a, b);
  myswap.run();
  myswap.print();
 }
```
此时在testProject下创建CMakeLists.txt
```txt
cmake_required_minimum(VERSION 3.0)

project(your_project_name)

include_directories(include)

add_executable(your_exe_file main.cpp src/swap.cpp)

```
然后cd build 
```bash
cmake .. && make && ./your_exe_file
```
注意：其中包含[your..]的可以自定义
