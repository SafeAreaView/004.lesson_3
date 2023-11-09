"use strict"
// Вивести на сторінку в один рядок через кому числа від 10 до 20.
let arr1 = []

for (let i = 10; i <= 20; i++) {
  arr1.push(i)
}
document.write(arr1.join(", "))

document.write("<br> <br><br>")

// Вивести квадрати чисел від 10 до 20.
let arr2 = []
for (let i = 10; i <= 20; i++) {
  arr2.push(i ** 2)
}
document.write(arr2.join(", "))
document.write("<br> <br><br>")

// Вивести таблицю множення на 7.
let arr3 = []
for (let i = 1; i <= 10; i++) {
  arr3.push(i * 7)
}
document.write(arr3.join(", "))
document.write("<br> <br><br>")

// Знайти суму всіх цілих чисел від 1 до 15.
let arr4 = []
for (let i = 1; i <= 9; i++) {
  arr4.push(i + i)
}
document.write(arr4.join(", "))
document.write("<br> <br><br>")

// Знайти добуток усіх цілих чисел від 15 до 35.
let arr5 = []
for (let i = 15; i <= 35; i++) {
  arr5.push(i * i)
}
document.write(arr5.join(", "))
document.write("<br> <br><br>")

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let count = 500
let sum = 0
for (let i = 1; i <= count; i++) {
  sum += i
}
const avg = sum / count

document.write(avg)

document.write("<br> <br><br>")

// Вивести суму лише парних чисел в діапазоні від 30 до 80.

let arr6 = []
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    arr6.push(i)
  }
}
document.write(arr6.join(", "))
document.write("<br> <br><br>")

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let arr7 = []
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    arr7.push(i)
  }
}
document.write(arr7.join(", "))
document.write("<br> <br><br>")

let number = 100

let result = "Дільники числа " + number + ": "
let result2 = "Парні дільники числа " + number + ": "
let sumEvenDivisors = 0

for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    result += i + " "
    if (i % 2 === 0) {
      result2 += i + " "
      sumEvenDivisors += i
    }
  }
}

document.write(`${result} <br> ${result2} <br> Сума парних дільників числа ${number}: ${sumEvenDivisors}`)

document.write("<br> <br><br>")

// Надрукувати повну таблицю множення від 1 до 10.
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    document.write(`${i} * ${j} = ${i * j}<br>`)
  }
  document.write("<br>")
}
