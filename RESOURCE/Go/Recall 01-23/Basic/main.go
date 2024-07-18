package main

import (
	"fmt"
	"math/big"
	// "math/rand"
	"crypto/rand"
	"strconv"
	"time"
)

func main() {
	//01 Basic Printing
	fmt.Println("heelo from me")

	// 02 Varibales
	const a = 2
	fmt.Println(a)

	var x1 string = "hi"
	fmt.Println(x1)

	x2 := "hi"
	fmt.Println(x2)

	var x3 = "hi"
	fmt.Println(x3)

	// x4 string = "hi"  // This is wrong
	// fmt.Println(x4)

	// 03 User Input
	// reader := bufio.NewReader(os.Stdin)

	// fmt.Println("Enter the rating for our Pizza:")
	// input, _ := reader.ReadString('\n')
	// fmt.Println("Thanks for rating, ", input)
	// fmt.Printf("Type of this rating is %T", input)

	// 04 Conversion
	x := "2.0"
	result, _ := strconv.ParseInt(x, 0, 64)
	fmt.Printf("type is %T and value id %v\n", result, result)

	// 05 Math
	fmt.Println("Welcome to maths in golang, time is ", time.Now().UnixNano())
	// rand.Seed(time.Now().UnixNano())
	// fmt.Println(rand.Intn(5) + 1)

	myRandomNum, _ := rand.Int(rand.Reader, big.NewInt(5));
	fmt.Println(myRandomNum);

}
