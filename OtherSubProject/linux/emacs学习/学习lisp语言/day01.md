# 前提条件
- windows11_amd64 + emacs-28.1 + emacs环境变量配置
# 创建一个elisp 文件(相当于脚本文件)
//hello_world.el
```el
(princ "hello world\n")
```
//cmd
`emacs -Q --script hello_world.el`
# 自定义函数
//hello_world.el
```el
(defun println (x)
  (princ x)
  (princ "\n")
)
(println "hello world")
```
# 参考elisp教程
