# 简介
- 数值分析科学计算
- 支持
1. 模块化编程
2. 泛型编程
3. 结构化，面向对象编程
4. 并行编程
# before
- 使用`w64devkit-fortran`
- `fortran95`
- 参考`fortran教程`(百度)
# 开篇
### 从程序谈起
// program.f95
```f95
program add_two_numbers
! this is comment
    implicit none
! type def ，类型定义是real
    real :: a, b, result
! read from console and add and print result
    read (*,*) a, b
    result = a + b
    print *,'this result of a + b is ', result
end program add_two_numbers 
```
- 要点
1. 没有通常意义的main
2. 开合(end)语句是常见的
3. 注释
4. print 作为函数吗? 那么函数的使用
5. 计算的精确度不是我们所理想的，依然遵循计算机底层设置
- 官方解释
1. 所有Fortran程序`start?`关键字程序和`end`关键字结束程序，然后是该程序的名称。
2. 隐无语句允许编译器检查所有的变量类型是正确声明。必须`始终使用无隐在每个程序的开始。``implicit none即设计任何和隐含说明语句无效，所有变量都要显式地人工声明，不能未声明就直接使用，有效地避免了可能的大量错误`
3. 在Fortran语言注释开始使用感叹号（！），因为在这之后的所有字符（除字符串）被编译器忽略。
4. `print*命令`在屏幕上显示数据。
5. 代码行缩进，是保持一个程序读取一个很好的做法。
6. Fortran语言允许大写和小写字母。 Fortran语言是区分大小写的，除了字符串常量
# 本文已经很多了，先截止(doge)
