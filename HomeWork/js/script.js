// --1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Батьки дозволили?");
//   }
// }

// Використовуючи оператор '?':

// function checkAge(age) {
//   return (age > 18) ? true : confirm('Батьки дозволили?');
// }

// Використовуючи оператор АБО || (найкоротший варіант):

// function checkAge(age) {
//   return (age > 18) || confirm('Батьки дозволили?');
// }

// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
// Наприклад: min(2, 5) == 2;
// min(3, -1) == -1;
// min(1, 1) == 1;

// Використовуючи if:

// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// Використовуючи оператор '?':

// function min(a, b) {
//   return a < b ? a : b;
// }
// P.S. У випадку рівності чисел a == b немає значення, що повертати.

// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   "Ви згодні?",
//   function () {
//     alert("Ви погодились.");
//   },
//   function () {
//     alert("Ви скасували виконання.");
//   }
// );

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// function showOk() {
//   alert("Ви погодились.");
// }

// function showCancel() {
//   alert("Ви скасували виконання.");
// }

// // використання: функції showOk, showCancel передаються як аргументи для ask
// ask("Ви згодні?", showOk, showCancel);

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Ви згодні?",
//   function () {
//     alert("Ви погодились.");
//   },
//   function () {
//     alert("Ви скасували виконання.");
//   }
// );
