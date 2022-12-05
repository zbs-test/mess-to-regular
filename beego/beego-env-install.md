# install beego env for linux 
```sh
//firstly it is needed to set goproxy and module
//install beego 
go get github.com/astaxie/beego
//update beego
go get -u github.com/astaxie/beego
//install bee cli
go get github.com/beego/bee
//set env path for bee, if gopath is defalut : gopath=/home/[user]/go
export PATH=$PATH:/home/[user]/go/bin
//and then may be ok to run bee
```
# create beego proj
```sh
bee new [projName]
cd [projName]
go mod tidy
bee run
```
# GET http://localhost:8080/ 
