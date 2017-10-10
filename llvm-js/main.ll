define i32 @main() #0 {
  %x = alloca i32
  store i32 42, i32* %x
  ret i32 23
}