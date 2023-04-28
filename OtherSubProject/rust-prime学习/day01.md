# 前提条件
- window11_amd64 
- 安装rust(官网)

//cmd 
```
cargo new hello_world --bin
cd hello_world
notepad src\main.rs
```
//main.rs
```rs
//main.rs
fn main()
{
    println!("学习rust语言");
    let rust = "Rust";
    println!("hello {}",rust);
    // 变量绑定
    let a_value = 5;
    // 交付自动推导类型 为i32
    let another_value = 5;
    assert_eq!(a_value,another_value);
    let b_value:u32 = 5;
    //assert_eq!(a_value,b_value);
    // assert 断言报错终止
    
    // 可变绑定
    let mut a_float:f64 = 1.0;
    let b_float = 2.0f32; //类型数据声明，此值不可变
    
    a_float = 2.0;//让a_float变化绑定的数据
    println!("{}",a_float);
    let a_float = a_float;//掩盖同名变量，a_float不可变了
    println!("{}",a_float);

    //isize,usize
    let a_usize_value:usize = 1;//`x`size 见到size是bit可变的
    println!("{}",a_usize_value);

    // 使用元组解构
    let (l_value,mut r_value):(bool,bool) = (true,false);
    println!("l_value: {:?}, r_value: {:?}",l_value,r_value);
    r_value = true;

    //下一个项目具体学习类型系统
}
```
//cmd
```
cargo run --release
```
//check `target\release\hello_world.exe`
