# Jackal
## Initial Proposal and Ideas

### What is it?
Jackal consists of a compiler written in Golang, which generates LLVM machine code.

### Requirements
The language should be/have:
- Fast
- Powerful
- Easy to use and learn
- Modern style syntax, similar to Go, Javascript and Python
- Statically typed

### Syntax Overview
```go
func main() {
  x : int = 2
  y : int = 3
  
  a : int = sum(x, y)
  b : int = sumShort(x, y)
  
  printf("a: {a}, b: {b}")
  
  for(i: int = 0; i < 10; i++) {
    print(i)
  }
}

int func sum(x: int, y: int) {
  return x + y
}

int sumShort(x, y) -> x + y
```

## Syntax
### Types
All the standard types should be supported:
- `int`, `int32`, `int64` with unsigned variations e.g. `uint32`
- `float`
- `string`
- `char`
- `boolean`

### Variables
Variables should be constants by default and require a type definition
```go
// Route 1
let int : a = 100
a = 10

const int : x = 10
```
```go
// Route 2
// Constant by default
int a = 100
a = 10 // Compile time error

// Use 'mut' to define mutable variable
// If a mutable var is defined and not in the program, a compile time warning is given
mut string x = "Hello world!\n"
x = "Goodbye!"
```
```go 
// Route 3
int x = 10
mut int y = 100
```

### Functions
```go
int func test(int x, int y) -> x + y
string func hello(string name) -> "Hello, {name}"

int func someCalc(mut int x, int y) {
  x = (x + 1) * y
  return x
}

func test(int x, int y) int -> x + y
func hello(string name)) string -> "Hello, {name}"

func someCalc(mut int x, int y) int {
  x = (x + 1) * y
  return x
}
```

### Arrays
Array length does not need to be defined and is dynamic
```go
int grades = [10, 20, 30, 40, 50]
int empty = []

mut string names = ["Krist", "Kurt", "Dave"]
names[0] = "John"
```
