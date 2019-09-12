// console.log(5 & 13); // 0101 & 1101 = 0101
// // expected output: 5;
//
// console.log(parseInt("0101",2) & parseInt("1101",2));
// // expected output: 5;
//
// console.log(5 & 13 & 3); // 0101 & 1101 & 0011 = 0001
// // expected output: 1;
//
// console.log(5 | 13); // 0101 | 1101 = 1101
// // expected output: 13

const a = (8).toString(2);
const b = (3).toString(2);
const c = (1).toString(2);

console.log(`${a}, ${b}, ${c}`);

console.log(a & b); // Bitwise AND	a & b	Returns a 1 in each bit position for which the corresponding bits of both operands are 1s.
console.log(a | b); // Bitwise OR	a | b	Returns a 1 in each bit position for which the corresponding bits of either or both operands are 1s.
console.log(a ^ b); // Bitwise XOR	a ^ b	Returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s.
console.log(a, ~ a ); // Bitwise NOT	~ a	Inverts the bits of its operand.
console.log(a << b); // Left shift	a << b	Shifts a in binary representation b (< 32) bits to the left, shifting in 0s from the right.
console.log(a, c, (a >> c).toString(2), a >> c); // Sign-propagating right shift	a >> b	Shifts a in binary representation b (< 32) bits to the right, discarding bits shifted off.
console.log(b, c, (b >>> c).toString(2), b >>> c); // Zero-fill right shift	a >>> b  	Shifts a in binary representation b (< 32) bits to the right, discarding bits shifted off, and shifting in 0s from the left.
