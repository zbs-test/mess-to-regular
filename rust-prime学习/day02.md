# 类型系统
### rust内置原生数据类型
- 布尔类型，有两个值true,false
- 字符类型，表示单个unicode字符，存储为4字节(注意是unicode)
- 数值类型：分为有符号和无符号的整数，以及浮点数
- 字符串类型：最底层为不定长类型str，更常用的是字符串切片&str和堆分配的String，其中字符串切片是静态分配的，有固定大小，不可变，堆分配是可变的
- 数组：固定大小，元素同种类型，表示为[T;N]
- 切片：引用一个数组的部分数据并且不需要拷贝，表示为&[T]
- 元组：具有固定大小的有序列表，每个元素有自己的类型，通过解构或索引来获得元组元素的具体值
- 指针：最顶层是裸指针`*const T` 和`*mut T`，但是解引用指针是不安全的，必须放到`unsafe`块
- 函数：函数类型的`变量`是一个函数指针
- 元类型：即（），其唯一的值也是（），(理解为void或unit，unit更准确)
# data_type
//cmd 
```
cargo new data_type --bin
```
//main.rs
```rs
//main.rs
fn main()
{
    //boolean type
    let t = true;
    let f:bool = false;

    //char type 
    let c = 'c';

    //numeric types
    let x = 42;
    let y:u32 = 123_456_0;
    let z:f64 = 1.23e+2;
    let zero = z.abs_sub(123.4);
    let bin = 0b1111_0000;
    let oct = 0o7320_1546;
    let hex = 0xf23a;

    //string types
    let str = "Hello world";
    let mut string = str.to_string();
    let raw_string = r#"这个教程是照抄rust prime的，
        质量上乘，合适我。
    "#;
    println!("{:?}",raw_string);

    //arrays and slices
    let a = [0,1,2,3,4];
    let middle = &a[1..4];//左闭右开
    let mut ten_zeros:[i64;10] = [0;10];

    //tuple type 
    let tuple:(i32,&str) = (50,"hello world");
    let (fifty,_) = tuple;//解构
    let hello_world = tuple.1;//索引

    //raw pointers
    let x = 5;
    let raw = &x as *const i32;//声明指针raw，获取x地址
    let points_at = unsafe{*raw};//解引用指针raw
    println!("{:?}",points_at);//打印解引用的值

    //function type
    fn foo(x:i32)->i32{x}//函数嵌套
    let bar:fn(i32)->i32 = foo;
    let bar_one = bar(1);
    let foo_one = foo(1);
    println!("bar(1): {}, foo(1): {}",bar_one,foo(1));
    
    // 下一个项目学习什么呢？
}
```
# 总结
- 数组创建
- 函数类型
- string细分
- 指针使用
- tuple使用
# 本章完结
