# 实际体验项目(参考`b站极简教程`)
- 文件编写+ghci编译加载
//main.hs
```haskell
doubleX x = 2 * x
doubleUs x y = doubleX x + doubleX y 
doubleSmall x = (if x > 100 then x else x * 2) -- 
-- 这里的'是定义函数的合法字符，也可以认为是一个同名函数的修正版
doubleSmall' x = (if x > 100 then x else x * 2) + 10 --test: 110 -> 120
-- 甚至可以重写内置函数,注意这个函数的
min x y = if x > y then x else y -- test: 10, 20 -> 20
```
//cmd
```
ghci
ghci>:l main.hs
ghci>doubleX 10
```
# 注意也可以直接`ghci main.hs`

# 列表
- 列表list 只包含单一类型元素
- 列表拼接使用 ++ 符号或 单一元素:该元素类型的列表
- 列表操作元素
//列表例子.hs
```haskell
>let a = [1,2,3] -- 等价于1:2:3:[]
>a
>a++[4,5] -- 类型默认是不可变的，加上了也不会存储在a变量上
>let str = ['h','e','l','l','o']
>str
>str!!4 -- test:->'o' 获取index=4的字符，index从0数起
>a:1 -- test:->2
>let lst = [[1,2,3],[1,2],[1,2,3,4]] --多级列表
>[3,2,1]>[2,1,0] -- test:True 从头比较，如大于再比较下一个
>head [1,2,3] --test: 1 列表函数
>last [1,2,3] --test: 3 
>tail [1,2,3] --test: [2,3] 
>init [1,2,3] --test: [1,2]
>length [1,2,3] --test: 3
>null [1,2] --test: False 判断列表是否为空
>reverse [1,2,3] --test: [3,2,1]
>take 2 [1,2,3,4,5] --从头提取2个元素[1,2]
>drop 2 [1,2,3,4,5] --从头删除2个元素，大于列表长度列表置空
>minimum [1,2,3] 
>maximum [1,2,3] 
>sum [1,2,3]
>product [1,2,3,4] --从前到后累乘
>4 `elem` [1,2,3,4] --这个函数用``括住,判断4是列表的元素
```
# 实际函数应用，非常牛逼
```haskell
{-
	函数名:getUppercase 
	参数:str(字符串，就是列表)
	功能:获取给定字符串中的大写字符
-}
getUppercase str = [a|a<-str,a `elem` ['A'..'Z']] --条件限定,条件限定结果为a(来自str中的大写字符)
{-
	函数名:len
	参数:xs(列表)
	功能:利用sum函数，重写length函数
-}
len' xs = sum [1 | _<-xs] --_代表来自xs的任意字符，条件限定结果为1,导入到[],再sum 列表
{-
	:pingPong
	:xs(数字列表)
	:数字替换为字符串如下:
	x>10->"Ping"
	x<10->"Pong"
	x为奇数
-}
pingPong xs = [if x > 10 then "Ping" else "Pong"|x<-xs,odd x]
```

# 其他
- :doc length查看length函数用法
- 对内置函数重写函数名使用'结尾
