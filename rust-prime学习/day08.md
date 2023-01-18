# 控制流
### 条件流程
- if `expr` {}
- if `expr` {} else {}
- if `expr1` {} else if `expr2` {} 
- let  `varname=` if `to match` {`value1`}else{`value2`}
- if let `Some to match(kind of Some(y) = x)` {`do something`}
- match `varname`{`tree1=>do something`,`tree2=>do else`,`...`}
- for var in iterator {`do something`}
- for (i,j) in (start_num..end_num).enumerate(){`do something`}
- while `expr`{code}
- loop{`when it must to break or continue`}
- `label continue or break`

// main.rs
```rs
//main.rs
fn main() {
    // 对比c系语言，rust的if表达式特点是:
    // 1. 判断条件不用小括号
    // 2. 条件是表达式，不是语句
    let x = 5;
    let y = if x == 5 { 10 } else { 17 };

    let x = Some(5); //装载5
                     // 把Some看成模式匹配
    if let Some(y) = x {
        // 如果让y 去匹配 x，成功就打印以下
        println!("y = {}", y);
    }
    // 让y去匹配x 
    let z = if let Some(y) = x { y } else { 0 };
    let x = Some(5);
    match x {
        Some(y) => println!("y = {}", y),
        None => (),
    }
    // 控制流极为痛苦，所以暂时搁置
    // 回顾类型使用
    show([1,2,3]);
    // 下一节切片
}
// 注意：array的类型为 [u8;3]，这是一个整体，即 [u8;3]!=[u8;4]
fn show(array:[u8;3]){
    // 先将[u8;3]转换成iterator
    for (index,value) in array.into_iter().enumerate() {
        print!("index {}: value {}\n",index,value );
    }
}
```
# 总结
- 重点模式匹配
- if for while loop控制流
- 标签
