# 几类函数应用（我看不懂）
```d
module day03;
import std.stdio;
import core.vararg;

int x = 10;
immutable int y = 30;
const int* p;
//纯函数
pure int pure_function(int i, const char* q, immutable int* s)
{
    // writeln(); // 不能再纯函数使用非纯函数，除非放入debug块
    debug
    {
        writeln("hello world");
    }
    // x = i;// 错误，不能修改全局区域x
    // i = x;// 错误，i不能读取可变的全局区域
    // i = *p;// 错误，i不能读取常全局区域p
    i = y; // i可以读取不可变的全局区域y
    auto myvar = new int(10); //能使用new表达式
    debug
    {
        writeln(myvar);
    }
    return i;
}

pure void haha()
{
    auto i = new int(10);
    debug
    {
        writeln(i);
    } //纯函数的debug块默认不输出到终端
}
//抛出异常函数
int add(int a, int b) nothrow
{
    int result;
    try
    {
        writeln("adding");
        result = a + b;
    }
    catch (Exception error)
    {
        //do nothing 
    }
    return result;
}
//参考函数,返回引用
ref int greater(ref int first, ref int second)
{
    return (first > second) ? first : second;
}
//自动函数，自动推导函数返回值
auto add(int first, double second)
{
    double result = first + second;
    return result;
}
//可变长参数函数
void printArgs(int x, ...)
{
    for (int i = 0; i < _arguments.length; i++)
    {
        write(_arguments[i]);
        if (_arguments[i] == typeid(int))
        {
            int j = va_arg!(int)(_argptr);
            writefln("\t%d", j);
        }
        else if (_arguments[i] == typeid(long))
        {
            long j = va_arg!(long)(_argptr);
            writefln("\t%d", j);
        }
        else if (_arguments[i] == typeid(double))
        {
            double d = va_arg!(double)(_argptr);
            writefln("\t%g", d);
        }
    }
}
//inout函数，INOUT既可以用于函数的参数和返回类型中使用。这就像为可变的，常量，和不变的模板。可变性属性从参数即inout的转让推导可变性属性的返回类型推断。
inout(char)[] quoteWord(inout(char)[] phrase)
{
    return '"' ~ phrase ~ '"';
}
// struct Ractangle
struct Rectangle
{
    double width;
    double height;
    //属性函数
    double area() const @property
    {
        return width * height;
    }

    void area(double newArea) @property
    {
        auto mutiplier = newArea / area;
        width *= mutiplier;
        writeln("value set");
    }
}

void main(string[] args)
{
    writeln("return value of pure_function: ", pure_function(x, null, null));
    haha();

    writeln("10+20=", add(10, 20));

    int a = 1;
    int b = 2;
    greater(a, b) += 10;
    writefln("a:%s, b:%s", a, b);

    int c = 1;
    double d = 2.5;
    writeln("add(c,d)=", add(c, d));

    printArgs(1, 2, 3L, 4.5);

    char[] ch = "test a".dup;
    ch = quoteWord(ch);
    writeln(typeof(quoteWord(ch)).stringof, " ", ch);

    Rectangle rect = Rectangle(10, 20);
    writeln("the area is ", rect.area);
    rect.area(300);
    writeln("modify width is: ", rect.width);
}
```

