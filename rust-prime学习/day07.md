# 函数
- 基本函数声明
- 发散函数
- 闭包
- 取得所有权move和Copy特性

//main.rs
```rs
//main.rs
#[allow(dead_code)] //允许未使用的值或函数...

fn main() {
    let one = 1;
    let two = add_one(one);
    println!("two: {}", two);

    //以下三句，任何一句都不能执行成功
    // diverges();
    // let _x:i32 = diverges();
    // let _y:String = diverges();

    //使用闭包创建匿名函数，闭包在离散数学好像是这样说的：包含原有环境，必要时添加环境，也就是外部环境捕捉
    let num = 5;
    let plus_num = |x: i32| x + num; // |??|视作函数参数块，注意他能捕捉之前的环境`num`，方式为借用，借用视作引用
    let ten = plus_num(5);
    println!("闭包使用: ten: {}", ten);

    //可以用move 关键字让闭包获得`num`的所有权
    let mut num = 5;
    let mut add_num = move |x: i32| num = num + x; //闭包通过move获得num的所有权
    add_num(5);
    //num在被move之后还能继续使用是因为其实现了`Copy特性`
    num = 1;
    assert_eq!(1,num);
}

fn add_one(x: i32) -> i32 {
    x + 1
}

//发散函数，他不返回
fn diverges() -> ! {
    //panic!是一个宏，使当前执行线程崩溃并打印它含有的str，
    panic!("this function never return");
}
```
