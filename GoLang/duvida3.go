package main

import (
	"fmt"
	"erros"
)

var ErrNegativeSqrt = erros.New("Valor Negativo!")

func Sqrt(x float64) (float64, error) {
	if x < 0 {
		return 0, ErrNegativeSqrt
	}
	
	return math.Sqrt(0), nil
}

func main() {
	fmt.Println(Sqrt(2))
	fmt.Println(Sqrt(-2))
}
