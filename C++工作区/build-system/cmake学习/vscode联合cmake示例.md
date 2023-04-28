# vscode + cmake-3.25 + w64devkit-fortran
- 先配置好环境gcc...变量，vscode下载c++插件
- vscode 中`ctrl + shift + P` 查找`cmake configure`
- 看左下角的配置项
- 点击运行
- 可以做单文件编程
# 除了gcc，还可已使用很多编译器，尝试能不能编译运行成功
# 调试我不会，但是msvc那一套的debug可以运行在我本机，而gcc那一套我不会配置，不懂???
# 多文件编程呢？？？
- 参考`B站岁安慢煮酒`的cmake入门
# 顺便了解以下clion默认的cmake编程
- 在`setting`的`build...`看`tool chain` 工具链，一般配置了gcc的环境变量就能自动检测，没有的话就自己配，但是如果很复杂，实在不行转linux吧
- 新建项目绝对不能有中文名字
- 看看能不能运行和调试
# 注意点
- 我用的是ninja去构建，不是makefile，make在我本机很坑，根本make不起来
- 有机会学习一下ninja和makefile是什么关系
