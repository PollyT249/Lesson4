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

// Lesson 5

// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const studentInfo = {
//   name: "Abi Smith",
//   specialty: "Philology",
//   averageScore: 80,
//   missedLessons: 3,
//   showInfo: function () {
//     console.log(
//       "Student: " +
//         this.name +
//         ". " +
//         "Specialty: " +
//         this.specialty +
//         ". " +
//         "Average score: " +
//         this.averageScore +
//         ". " +
//         "Missed lessons: " +
//         this.missedLessons +
//         "."
//     );
//   },
// };

// student2 = {
//   name: "Megan Fox",
//   specialty: "Chemistry",
//   averageScore: 70,
//   missedLessons: 4,
// };

// student3 = {
//   name: "Martin Lille",
//   specialty: "Literature",
//   averageScore: 85,
//   missedLessons: 2,
// };

// student4 = {
//   name: "Emily Stark",
//   specialty: "Programmer",
//   averageScore: 90,
//   missedLessons: 1,
// };

// studentInfo.showInfo.bind(student2)();
// studentInfo.showInfo.call(student2);
// studentInfo.showInfo.apply(student2);
// studentInfo.showInfo.bind(student3)();
// studentInfo.showInfo.call(student3);
// studentInfo.showInfo.apply(student3);
// studentInfo.showInfo.bind(student4)();
// studentInfo.showInfo.call(student4);
// studentInfo.showInfo.apply(student4);

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const definition = {
//   showSentence() {
//     const output = document.getElementById("output");
//     output.textContent =
//       "Визначення " + this.definitionOf + " - " + this.definitionSentence;
//   },
// };

// const definitionOfHtml = {
//   definitionOf: "HTML",
//   definitionSentence:
//     "стандартизована мова розмітки документів для перегляду вебсторінок у браузері.",
// };

// const definitionOfCss = {
//   definitionOf: "CSS",
//   definitionSentence:
//     "це спеціальна мова стилю сторінок, що використовується для опису їхнього зовнішнього вигляду.",
// };

// document
//   .querySelector("#btn-html")
//   .addEventListener("click", definition.showSentence.bind(definitionOfHtml));

// document
//   .querySelector("#btn-css")
//   .addEventListener("click", definition.showSentence.bind(definitionOfCss));

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// function shop(productName, pricePerKg, quantityKg) {
//   const totalPrice = pricePerKg * quantityKg;
//   return `${productName}: ${totalPrice.toFixed(2)} грн`;
// }

// // Тести:
// console.log(shop("banana", 30, 4.5)); // banana: 135.00 грн
// console.log(shop("cherry", 58, 1.3)); // cherry: 75.40 грн
// console.log(shop("orange", 89, 3.4)); // orange: 302.60 грн
