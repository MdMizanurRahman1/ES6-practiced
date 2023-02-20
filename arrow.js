const add = (num1, num2) => num1 + num2;

const numbers = add(24, 26);
console.log(numbers);

const just = () => console.log(3.14);

const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;
console.log(addAll(12, 23, 34, 45, 67, 78));

const add2 = num3 => num3 * 5;

const doubleIt = (num4, num5, num8, num9) => {
    const add6 = num4 + num5;
    const add7 = num8 + num9;
    const total = add6 + add7;
    const result = total * 6;
    return result;
}
const getNumbers = doubleIt(23, 34, 45, 56);
console.log(getNumbers);