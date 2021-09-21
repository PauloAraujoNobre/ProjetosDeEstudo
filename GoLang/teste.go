package main

import "golang.org/x/tour/pic"

func Pic(dx, dy int) [][]uint8 {
	result := [][]uint8{}
	
	for i := 0 ; i < dy ; i++ {
		result = append(result, make([]uint8, uint8(dx)))
	}
	
	return result

func main() {
	pic.Show(Pic)
}
