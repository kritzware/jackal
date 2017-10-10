define i32 @main() #0 {
  %1 = alloca i32
  %2 = alloca i32
  %3 = alloca i32

  store i32 1, i32* %1
  store i32 2, i32* %2

  %4 = load i32, i32* %1
  %5 = load i32, i32* %2

  %6 = add nsw i32 %4, %5

  store i32 %6, i32* %3
  
  ret i32 %6
}