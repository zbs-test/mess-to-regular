# 枚举类型
- 代表一系列`子数据类型`的集合体，其中子数据类型如果为空，等价于c语言的enum
- 使用::符号获得每个具名子数据

//main.rs
```rs
//main.rs
fn main()
{
    let msg:Message = Message::Move { x: 3, y: 4 };
    println!("{:?}",msg);
}

#[derive(Debug)]
pub enum Message {
    //具名子数据类型非常自由,默认私有（结构体同）
    Quit,
    ChangeColor(i32,i32,i32),//元组/元组结构体
    Move{x:i32,y:i32},//结构体
    Write(String),
    //与结构体一样，枚举中的元素默认不能使用关系运算符进行比较，需要自己实现，或者使用match进行匹配
}
```
# 额外
- 枚举定义默认私有，如果枚举名pub，全字段pub
- 结构体定义默认私有，如果结构体名pub，字段依然保持私有，除非声明为pub
- 枚举，结构体的定义可递归
# 总结
- enum枚举定义，使用
- 理解枚举子数据类型的多样性
