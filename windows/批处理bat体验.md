# 其实cmd并不被powershell完全兼容，有些命令在cmd可以高效和有效运行
# 所以学习cmd即可，虽说cmd可能会被posh代替
- type 1.txt
- find "abc" 1.txt 查找
- fc 1.txt 2.txt 比较
- date /T
- time /T
- ping baidu.com
- ipconfig 
- set /a 6%4 计算表达式
- shutdown /s /t 1
- move 移动重命名
- ren 重命名
- copy path\file path\file 复制 
# 开始编写bat脚本,test.bat在cmd运行
```bat
@echo off
set /a a = 1 + 1
echo %a%
set a=
echo "a 被清空了"
echo %a%
echo hello
echo "world"

set /p name = "what is your name?"
echo %name%
@REM 内置变量
echo %cd% %date% %time% %random% %errorlevel% %0 %1 %2
@REM %0代表执行命令第一位，即.bat文件名

@REM 调用可执行文件 call 可执行文件 [参数列表]
call a.exe
@REM 条件
if errorlevel 0 (
    echo "ok"
)else (
    echo "error"
)

if exist a.exe (echo a.exe is exist) else (echo a.exe is not exist)
@REM 赋值最好不要空格
set str=abc
if abc==%str% (echo %str%) else (echo "str is not abc")
@REM 扩展if
@REM /I 忽略大小写
if /I abc==ABc (echo true) else (echo false) 
@REM equ neq lss leq gtr geq 比较运算符，这是模仿linux shell吗??
if 1 lss 2 (echo true) else (echo false)
@REM defined varname 如果定义了varname, 为true
if defined str (echo true) else (echo false)

@REM 标签和goto
goto Label
echo "this line will be ignored"
:Label
echo first out
@REM for循环
@REM 枚举量
for %%i in (1.txt,2.txt) do (echo %%i)
@REM 打印本目录的所以文件
for %%i in (*.*) do (echo %%i)
@REM for扩展语法
@REM /d 搜索文件夹
for /d %%i in (*) do (echo %%i)
@REM /r 递归搜索d盘下的dev-kit文件夹 set代表当前的 .文件夹
for /r d:\dev-kit %%i in (.) do (echo %%i)
@REM 例子 start step end
@REM 并没有达到我理想的输出，bat太有限了吗
for %%i in (1,1,10) do (echo "hello world")
@REM rename文件下所有txt文件，使用 test.bat path\...\*.*
set cnt=0
for %%i in (%1) do {
    rename %%i %cnt%.txt 
    set /a cnt=%cnt%+1
    @REM 这里的echo好像不能执行
    echo %cnt% 
}
echo %cnt%
pause > nul
```
