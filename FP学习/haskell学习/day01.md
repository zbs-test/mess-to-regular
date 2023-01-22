# 前提条件
- windows11_amd64 + ghc + helix editor/micro editor/vim
# haskell 体验
- ghci 进入交互编程
- :?查看帮助手册
- :set propmpt "hello>" 把ghci提示符设置为hello
- :t True 查看字面量True的类型
- min 20 40 多参数函数的调用
- ctrl + d 退出交互式编程
# haskell编程环境
- haskell有两个应用，ghc和hugs
- ghc是编译本地`.hs代码`，调试工具
- ghc有三部分组成:
1. ghc是编译器
2. ghci是交互解析器和调试器
3. runghc是一个以脚本形式运行haskell代码的程序
- 其他杂七杂八不提了

# helix再提(在linux目录下已经略微写过helix的体验)
- helix --health
- space 管理模式，space+f，文件目录切换，此时使用:q退出 
- :vs 文件路径，附加窗口，:bc关闭打开的附加窗口
- space+w窗口管理，此时按q退出helix，space+w+w多窗口之间的切换 
- m，helix match模式:
1. maf全选函数定义实现，mif选中函数定义体
2. mip选中单词或段落，全看运气的快捷键? map全选文件，没什么用但保留

