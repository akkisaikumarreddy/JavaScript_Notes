// The Only Numeric Type
const number = 25;
console.log(number)
console.log(typeof number);


// Scientific Notation
const a = 156e5;
const b = 156e-5;
console.log(a)
console.log(typeof a);
console.log(b)
console.log(typeof b);


// Integer Precision
const c = 999999999999999;
const d = 999999999999999;
console.log(c)
console.log(typeof c);
console.log(d)
console.log(typeof d);


// Floating Point Precision {not always 100% accurate due to binary representation limitations.}
const e = 0.22 + 0.12;
const f = (0.22 * 10 + 0.12 * 10) / 10;
console.log(e)
console.log(typeof e);
console.log(f)
console.log(typeof f);


//  NaN and Infinity
console.log(0/0);
console.log(isNaN("Hello"));

console.log(1/0);
console.log(-1/0);
console.log(isFinite(100));


// Adding Numbers and Strings
const g = 10;
const h = 20;
const i = g + h;
console.log(i);

const j = "10";
const k = "20";
const l = j + k;
console.log(l);


//  Numeric Strings
const m = "100" / "10";
const n = "100" * "10";
const o = "100" - "10";
console.log(m);
console.log(n);
console.log(o);


// Decimal Numbers
const p = 33;
const q = 3.3;
console.log(p);
console.log(q);


// Octal Number
const r = 0o562;
console.log(r);


// Binary Numbers
const s = 0b11;
const t = 0B0111;
console.log(s);
console.log(t);


// Hexadecimal Numbers
const u = 0xfff;
console.log(u);


//  Undefined to NaN
const res = undefined + 10;
console.log(res);


// Null to 0
const total = null + 5;
console.log(total);


//  Boolean to Number
const n1 = true + 10;
const n2 = false + 10;
console.log(n1);
console.log(n2);


// String to Number
const s1 = '42';
const s2 = 'hello';

const strToNum1 = Number(s1);
const strToNum2 = Number(s2);

console.log(strToNum1);
console.log(strToNum2);


