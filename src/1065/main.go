package main;import."fmt";import."strconv";func main(){a:=0;Scan(&a);if a<100{Println(a)}else{c:=99;for i:=range make([]int,a-99){s:=Itoa(i+100);x,_:=Atoi(string(s[0]));y,_:=Atoi(string(s[1]));z,_:=Atoi(string(s[2]));if x-y==y-z{c++}};Println(c)}}