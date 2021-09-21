package main

import (
	"fmt"
)


func main() {
	a := []int{1, 2, 3, 4, 5, 6, 7, 9}

	a = a[0:5]
	fmt.Println(a)

	a = a[:0]
	fmt.Println(a)
}
