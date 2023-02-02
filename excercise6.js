let arr = [33, 13, 44, 11, 22, 43, 55, 1, 43, 1];
let result = true;
for (let i = 0; i < arr.length - 1; i++) {
  if (typeof arr[i] != typeof arr[i + 1]) {
    result = false
  }
  
}
console.log(result);