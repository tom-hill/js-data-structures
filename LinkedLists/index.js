import LinkedList from './LinkedList';

const list = new LinkedList();

list.push(1);
list.push(2);
list.push('3');
list.shift(0);
list.shift('-1');

/**
 * Some simple test logs to check the class works as expected
 */
console.log(list.length); // 5
console.log(list.unshift()); // '-1'
console.log(list.pop()); // '3'
console.log(list.contains(1)); // true
console.log(list.contains(33)); // false
console.log(list.find(1)); // Node: { value: 1, next: {Node}, prev: null }
console.log(list.indexOf(1)); // [0]
console.log(list.indexOf(33)); // -1
console.log(list.length); // 3
console.log(list.toString()); // { value: 0, next: <Circular>, prev: null } => { value: 1, next: <Circular>, prev: <Circular> } => { value: 2, next: null, prev: <Circular> }
console.log(list.insertAt(0.5, 1)); // Node: { value: 0.5, next: { value: 1 }, prev: { value: 0 }}
console.log(list.removeAt(1)); // 0.5

list.push(3);
list.push(3);
list.push(3);

console.log(list.findAll(3)); // { 3: { value: 3, next: <Circular>, prev: <Circular> }, 4: { value: 3, next: <Circular>, prev: <Circular> }, 5: { value: 3, next: <Circular>, prev: <Circular> } }
console.log(list.getAt(3)); // { value: 3, next <Circular>, prevL <Circular> }
