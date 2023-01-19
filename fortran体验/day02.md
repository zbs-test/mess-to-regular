# fortran关键字很多，分两类
1. 非IO相关
2. IO相关
# fortran类型系统
- 我常用`类型系统来代替数据类型`
1. 整型(integer)
2. 实型(real)
3. 复杂类型(复数?)
4. 逻辑类型(bool)
5. 字符类型(char)

```fortran
program int_test
implicit none
    ! 8bytes
    integer(kind=8) :: large_value 
    ! 使用huge函数
    print *,huge(large_value)
end program int_test
```


```fortran
program division
implicit none
real::p,q,realRes
integer::i,j,intRes
p=2.0
q=3.0
i=2
j=3

realRes = p/q
intRes = i/j
! 2.0/3.0 for real
print*, realRes
! 2/3 = 0 for int
print*, intRes
end program division
```

```fortran
program complex_test
implicit none
complex::some
! which is 1+2i
some = (1,2)
print *,some
end program complex_test
```

```fortran
program char_test
implicit none
character(len=40)::ch
! ch的长度为40
ch = "hello world"
print *,ch
end program char_test
```

