// EXAMPLE 1 - Replace/Remove characters that Don't match Regex

const str = 'Hello123!@#';

// ✅ Remove not matching
const result1 = str.replace(/[^a-zA-Z]+/, '');
console.log(result1); // 👉️ Hello

// ✅ Replace not matching
const result2 = str.replace(/[^a-zA-Z]+/, '!');
console.log(result2); // 👉️ Hello!

// ✅ Replace each occurrence of not matching
const result3 = str.replace(/[^a-zA-Z]/g, '=');
console.log(result3); // 👉️ "Hello======"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Replace the characters that don't match the regex

// const str = 'Hello123!@#';

// const result = str.replace(/[^a-zA-Z]+/, '!');
// console.log(result); // 👉️ Hello!

// ------------------------------------------------------------------

// // EXAMPLE 3 - Replace each occurrence of a character that doesn't match the regex

// const str = 'abc123';

// const result = str.replace(/[^a-z]/g, '!');
// console.log(result); // 👉️ "abc!!!"
