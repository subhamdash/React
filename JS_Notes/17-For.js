const iterable = [3, 5, 7];

iterable.foo = "hello";
iterable.push(8)
iterable.fool = "hi";

console.log(iterable)

for (const i in iterable) {
  console.log(i,iterable[i]);
}
console.log()
console.log("We are iterating things over here")
for (const i of iterable) {
    console.log(i,iterable[i]);
  }


  console.log("We are iterating things over Key-Value")
const objects = {'a': 1, 'b': 2, 'c' : 3};

for (const i in objects) {
    console.log(i,objects[i]);
  }