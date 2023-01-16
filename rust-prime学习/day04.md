# 结构体
//main.rs
```rs
use std::default;

fn main()
{
    //结构体是一种记录类型，（我猜测可能来自erlang？）
    let point = Point{x:0,y:0};//创建结构体
    println!("{:?}",point);
    println!("point.x: {:?}",point.x);

    //元组结构体
    let android_green = Color(0xa4,0xc6,0x39);
    let Color(red,green,blue) = android_green;
    println!("{:?}",android_green);
    println!("red:{:?}",red);

    //新类型
    let length = Inches(10);
    println!("{:?}",length);

    //空结构体
    let emptyStruct = EmptyStruct;
    println!("{:?}",emptyStruct);

    //新类型Digit
    #[derive(Debug)]
    struct Digit(i32);
    let v = vec![0,1,2];
    let d:Vec<Digit> = v.into_iter().map(Digit).collect();//什么意思???看不懂
    println!("d:{:?}",d);
}

//结构体风格：大写开头，含有字段，用`,`隔开
#[derive(Debug)]//这叫注释
struct Point
{
    //结构体字段具名
    x:i32,
    y:i32,
}

//元组结构体,他的字段不具名
#[derive(Debug)]
struct Color(u8,u8,u8);//u8到底是什么类型？

//新类型newtype是含有一个字段的元组结构体
#[derive(Debug)]
struct Inches(i32);

//空结构体/单元类型结构体
#[derive(Debug)]
struct EmptyStruct;
```
# 总结
- 结构体
- 元组结构体，解构
- 新类型
- 空结构体
```
# 总结
- 结构体
- 元组结构体，解构
- 新类型
- 空结构体
