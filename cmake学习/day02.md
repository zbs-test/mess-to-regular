# 前提条件
- windows11_amd64 + `w64devkit-fortran + ninja` + python3.11 + pip 
- pip install ninja
- w64devkit-fortran很强大，可以使用vim等等
# 内容
- 使用cmake`配置，构建`，测试和安装代码项目
# 构建示例命令
- `cmake -B <生成目录> -S <源码目录>`
- `cmake --build <生成目录>`
# 构建过程
- 编译可执行程序和库
- 管理依赖关系
- 测试
- 安装
- 打包
- 生成使用文档
- 专业测试
# 经历阶段
- 配置`CMakeLists.txt`
- 中间文件`CMakeCache.txt`??
- 生成makefile用于make构建
- 构建: compile,link,test,package
# 使用ninja的generator先体验
//cmd
```cmd
md day01
cd day01
touch day01.cpp CMakeLists.txt
```
//day01.cpp
```cpp
#include <iostream>
using namespace std;
int main(){
	cout << "ok" << endl;
	return 0;
}
```
//CMakeLists.txt
```cmake
cmake_minimum_required(VERSION 3.20)
project(day01)
add_executable(main day01.cpp)
```
//cmd
```
md build
cd build
cmake -G Ninja ..
ninja 
```
# 查看 main.exe
# 其他
- 我好像已经把msvc相关的环境变量删除了，但cmake时系统还是默认使用msvc那一套来，我不知道为什么，我不会
- 所有每次cmake可能都要带上`-G Ninja`
- ninja好像和makefile是同级关系，我没用过makefile
