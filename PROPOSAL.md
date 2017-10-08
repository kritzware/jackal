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