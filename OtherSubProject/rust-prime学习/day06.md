# 控制流，分立几个文件
### rust只有两种语句：
1. 声明语句
2. 表达式语句，它通过加上`;`来将表达式变成语句，从而放回unit的值（），如`let x =5`; 返回`()`

//main.rs
```rs

fn main() {
    //典型statement
    let x = 5;
    //典型expression 
    let y = if x == 5 { 10 } else { 20 };
    
    //for 
    for i in 1..10{
        print!("{} ",i);
    }

    //对于无限循环loop和设置标签块（代码段）
    'outer:loop{
        println!("entered the outer loop");
        'inner:loop{
            println!("entered the inner loop");
            break 'outer;//终止'outer标签块
        }
        println!("this point will never be reached");
    }
    println!("exited the outer loop");

    //match 视为模式匹配，典型的函数式编程
    let day = 5;
    match day{
        0|6=>println!("weekend"),// 0 或 6
        1..=5 => println!("weekday"),// 左闭右闭 [1,5]
        _=>println!("invalid"),// _ 是每个模式匹配必须的项
        //match 强制有穷性检查，必须覆盖所有可能值
    }

    let x = 1;
    match x {
        //如果需要得到`|` , `..=`匹配到的值，可以使用@绑定变量
        value @ 1..=5=>println!("got a range element {}",value),//视作`value = x, value at 范围`
        _=>println!("anything"),
    }

    let x = 5;
    println!("x: type: i32, value: {}",x);
    let mut y = 5;
    let ref_x = &x;
    println!("ref_x: type: &i32, value: {}",ref_x);
    match x {
        //对x引用
        ref r => println!("got a reference to {}",r),//视作`r = &x,print r`
    }
    match y {
        //对y引用
        ref mut mr =>println!("got a mutable reference to {}",mr),//视作`let mut mr = &y,print mr`
    }

    //match 解构元组
    let pair = (0,-2);
    match pair{
        (0,y)=>println!("x is `0`, `y` is `{:?}`",y),
        (x,0)=>println!("`x` is `{:?}`,y is `0`",x),
        _=>println!("it doesn't matter what they are"),
    }
}

```

//main2.rs
```rs
//main2.rs
fn main() {
    //match 解构结构体，枚举
    //匹配struct
    let origin = Point { x: 0, y: 0 };
    match origin {
        Point { x, .. } => println!("origin.x: {}", x),
    }
    //匹配enum
    let x = OptionalInt::Value(5);
    match x {
        OptionalInt::Value(i) if i > 5 => println!("greater than 5"),//字面意思
        OptionalInt::Value(..) => println!("an int"),
        OptionalInt::Missing => println!("no value at x"),
    }
}

struct Point {
    x: i32,
    y: i32,
}
enum OptionalInt {
    Value(i32),
    Missing,
}
```

//main3.rs
```rs
// main3.rs
fn main() {
    //if let 和 while let 做模式匹配
    let number = Some(7);
    let mut optional = Some(0);

    //if let 解构Option类型,视作`if 让 Some(?) 去匹配 ?? , {成功，ok块},{!ok}`
    if let Some(i) = number {
        println!("matched {:?}", i);
    } else {
        println!("didn't match");
    }

    //while let 直到解构,视作`while 让Some(?) 去匹配?? , 如果true{ok块} else {!ok块}`
    while let Some(i) = optional {
        if i>9{
            println!("greater than 9,quit");
            optional = None;
        }else {
            println!("i is {:?}",i);
            optional = Some(i+1);
        }
    }
}
```
# 总结
- 重要：模式匹配，match，if let，while let
- 取值@和引用ref
- 标签使用


