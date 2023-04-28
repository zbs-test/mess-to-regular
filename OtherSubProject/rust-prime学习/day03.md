# 动态数组和字符串初体验
//main.rs
```rs
//main.rs
fn main()
{
    //使用微软风格
    let mut array:[i32;3] = [0;3];
    array[1] = 1;
    array[2] = 2;
    println!("index 0:{} 1:{} 2:{}",array[0],array[1],array[2]);    
    assert_eq!([1,2],&array[1..]);
    // &视为引用
    for x in &array {
        print!("{} ",x);
    }

    //动态数组：是基于堆内存申请的连续动态数据类型
    let v:Vec<i32> = Vec::new();//创建空Vec
    let v:Vec<i32> = vec![];//使用vec!宏创建空Vec
    let v = vec![1,2,3,4,5];//创建并初始化5个元素
    let v = vec![0;10];// 创建10个0
    let mut v = vec![1,2];//创建可变Vec
    v.push(3);//压入3
    let top_of_v = v.pop();//注意弹出的是Option类型,有值就能被Some装载,无值就是None
    println!("{:?}",top_of_v);// 使用{:?}打印从Vec得到的元素
    
    //字符串：String和str
    //关于&str：str不怎么使用，常用的是&str类型，是[u8]类型的切片形式&[u8],这是一种固定大小的字符串类型，常见的字符串字面常量就是 &'static str类型，是一种带有'static生命周期的&str类型
    let hello = "hello world";//&str声明，字符串字面常量"hello world"  
    let hello:&'static str = "hello world";//显式声明
    //关于String：是一个带有vec:Vec<u8>成员的结构体，理解为str类型的动态形式，他们的关系相当于[T],Vec<T>关系
    let mut s = String::new();//创建空字符串
    let mut hello = String::from("hello,");//从&str类型转化成String类型
    hello.push('w');//压入字符
    hello.push_str("orld");//压入字符串切片
    
    let mut s = String::from("foo");
    assert_eq!(s.pop(),Some('o'));//String是带有Vec<u8>的结构体，含有Vec的全部函数
    assert_eq!(s.pop(),Some('o'));
    assert_eq!(s.pop(),Some('f'));
    assert_eq!(s.pop(),None);// 四次断言,注意装载
}
```
# done
