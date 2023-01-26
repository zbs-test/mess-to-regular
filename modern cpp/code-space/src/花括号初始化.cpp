#include <iostream>
#include <vector>
using namespace std;
struct T {
private:
  int a, b;
public:
  vector<int> getAB(){
    vector<int> tmp;
    tmp.push_back(this->a);
    tmp.push_back(this->b);
    return tmp;
  }
};

int main(){
  int a{10}; // init 10
  int b{};
  cout << "a: " << a << endl
       << "b: " << b << endl;
  bool bl{};
  cout << "bl: " << bl << endl;
  int *ptr{};
  cout << "ptr: " << ptr << endl;
  int *a_ptr = nullptr;
  cout << "nullptr: " << a_ptr << endl;
//   cout << "*nullptr: " << *a_ptr << endl; 并不能这样做，会引发段错误，段错误是什么？？
  struct T t{}; // init class
  vector<int> vec = t.getAB();
  cout << "vec[0]: " << vec.at(0) << endl
       << "vec[1]: " << vec.at(1) << endl;
  return 0;
}
  
