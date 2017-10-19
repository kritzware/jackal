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
- Static types

### Syntax Overview
```go
func main() {
  int x = 2
  int y = 3
  
  int a = sum(x, y)
  int b = sumShort(x, y)
  
  printf("a: {a}, b: {b}") // "a: 5, b: 5"

  mut int c = 0
  
  for(c; c < 10; c++) {
    println(c)
  }
}

func sum(int x, int y) int {
  return x + y
}

func sumShort(int x, int y) int -> x + y
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
// Style 1
let int : a = 100
a = 10

const int : x = 10
```
```go
// Style 2
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
// Style 1 - Type declared at the start
int func test(int x, int y) -> x + y
string func hello(string name) -> "Hello, {name}"

int func someCalc(mut int x, int y) {
  x = (x + 1) * y
  return x
}

// Style 2 - Type declared after params
func test(int x, int y) int -> x + y
func hello(string name) string -> "Hello, {name}"

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

### Object
Name not confirmed, potentially also Frame or Struct. Object properties are constant by default.
```go
object Campaign = {
  id int,
  name string,
  mut cost float
}

Campaign example = { 102193, "Alpha Delta", 123.45 }
example.cost = 150.5

Campaign another_example = {
  id: 102193,
  name: "Alpha Delta",
  cost: 123.45
}
```

### Conditionals
```go
int x = 5

if(x > 10) {
  ...
} else {
  ...
}

boolean check = true
int y = check ? 10 : 5
```

### Operators
```go
x || y // OR
x && y // AND
x > y // GREATER THAN
x < y // LESS THAN
x >= y // GREATER THAN OR EQUAL
x <= y // LESS THAN OR EQUAL
```
