# 前提条件
- windows11_amd64
- Visual studio2022 + 安装C++工作负荷（什么玩意的名字）
# before
## windows 应用程序分类
- console控制台程序
- 窗口程序
- dll（有入口，不能执行）
- lib （无入口，不能执行）
## 使用编译工具流程
- cl.exe 将源码编译成.obj
- link.exe 将.obj链接生成.exe
- rc.exe 将.rc编译，最终送往链接
- 默认安装Visual studio时，在C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.34.31933\bin\Hostx64\x64	（好长）
## 使用到的windows平台库
- kernel32.dll	核心api函数，如进程线程，内存管理
- user32.dll		窗口消息api
- gdi32.dll 		绘图api
- 在 c:\Windows\System32
- 头文件windows.h		不知道在哪里路径
## 设置visual studio msvc环境（百度）
```
# 这是最爽的一部分
设置用户环境变量就行，不用设置系统环境变量
步骤：	
1. 新建BIN项目，包含 	C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.34.31933\bin\Hostx64\x64		版本号会稍微变化
2.新建INCLUDE, 包含	
- C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.34.31933\bin\Hostx64\x64
- C:\Program Files (x86)\Windows Kits\10\Include\10.0.22000.0\cppwinrt
- C:\Program Files (x86)\Windows Kits\10\Include\10.0.22000.0\shared
- C:\Program Files (x86)\Windows Kits\10\Include\10.0.22000.0\ucrt
- C:\Program Files (x86)\Windows Kits\10\Include\10.0.22000.0\um
- C:\Program Files (x86)\Windows Kits\10\Include\10.0.22000.0\um
3.新建LIB项，包含
- C:\Program Files (x86)\Windows Kits\10\Include\10.0.22000.0\um
- C:\Program Files (x86)\Windows Kits\10\Lib\10.0.22000.0\ucrt\x64
- C:\Program Files (x86)\Windows Kits\10\Lib\10.0.22000.0\ucrt_enclave\x64
- C:\Program Files (x86)\Windows Kits\10\Lib\10.0.22000.0\um\x64
4.在PATH，引入BIN即可 	
%BIN%
5.完结
```
## 关于msvc（？）
- 编译一些没有以来平台库时好像是直接编译成功
- 编译与平台有关的好像要链接库

# 编写Win32窗口程序
//cmd
```
md Win32工程
cd Win32工程
echo "">msgbox.c
notepad msgbox.c
```
//msgbox.c
```c
//msgbox.c
#include <windows.h> // 头文件大集合
/*
	para:
	当前程序的实例句柄，当前程序前一个实例句柄，命令行参数字符串，窗口显示方式
*/
int WinMain(HINSTANCE hIns,HINSTANCE hPreIns,LPSTR lpCmdLine,int nCmdShow)
{
	/*
		para:
		挂载父窗口,消息str,窗口标题名称,控件类型
	*/
	MessageBox(NULL,"hello world","Info",MB_YESNOCANCEL|MB_ICONERROR);
	return 0;
}
```

//cmd
```
# 生成obj
cl msgbox.c -c
# 链接整合  
link msgbox.obj user32.lib
# 一定按以上两步走
# 执行
msgbox.exe
# 弹框
```

# after
- MessageBox是阻塞函数，理解为不退出此函数，都会一直在使用本函数
### 程序编译链接过程：
- 前提环境设置
- 源文件->编译成obj->链接生成exe
- 资源脚本.rc文件->rc编译->将资源链接到主程序中
### 关于rc编译器体验使用
- 百度一张icon文件，保存到本工程目录下，命名01.ico，或者找jpg格式转换成ico
- 在`cmd`新建01.rc, echo "">01.rc
- 书写rc脚本语言
```rc
//这是注释，删除 01.rc
100 ICON 01.ico
``` 
*擦，rc编译器没有环境变量*
```
#设置rc路径
步骤：
1.在之前的BIN项下新添这个
C:\Program Files (x86)\Windows Kits\10\bin\10.0.22000.0\x64
```
// cmd 
```
# 生成.res文件
rc 01.rc 
# 送往链接
link msgbox.obj 01.res user32.lib 
```

### 过程图

		cl.exe
.c/.cpp ----->.obj|---- link.exe
	rc.exe			   |---------->.exe
.rc---------->.res|----

# done 
