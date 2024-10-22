// Age
let userAge = prompt ('Введите свой возраст');
if (userAge > 0 && userAge <= 18 ) {
    alert('Иди в школу. Тебе ' + userAge);
    console.log('Иди в школу. Тебе ' + userAge);
}
if (userAge > 18 && userAge <=50 ) {
    alert('Иди работай. Тебе ' + userAge);
    console.log('Иди работай. Тебе ' + userAge);
}
if (userAge > 50 && userAge <= 59 ) {
    alert('Ты скоро будешь пенсионером. Тебе ' + userAge);
    console.log('Ты скоро будешь пенсионером. Тебе ' + userAge);
}
if (userAge > 59 && userAge <= 100 ) {
    alert('Ты пенсионер. Тебе ' + userAge);
    console.log('Ты пенсионер. Тебе ' + userAge);
}
if (userAge = undefined) {
    alert('Error');
}
// Time
let userTime = prompt('Какой сейчас час?');
if (userTime > 0 && userTime <= 4) {
    alert('Сейчас ' + userTime + ' часа ночи');
    console.log('Сейчас '+ userTime +' часа ночи');
}
if (userTime > 4 && userTime <= 6) {
    alert('Сейчас ' + userTime + ' часов ночи');
    console.log('Сейчас '+ userTime +' часов ночи');
}
if (userTime > 6 && userTime <= 10) {
    alert('Сейчас ' + userTime + ' часов утра');
    console.log('Сейчас '+ userTime +' часов утра');
}
if (userTime > 10 && userTime <= 12) {
    alert('Сейчас ' + userTime + ' часов дня');
    console.log('Сейчас '+ userTime +' часов дня');
}
if (userTime > 12 && userTime <= 16) {
    alert(`Сейчас ${userTime - 12} часа дня`);
    console.log(`Сейчас ${userTime - 12} часа дня`);
}
if (userTime > 16 && userTime <= 21 ) {
    alert(`Сейчас ${userTime - 12} часов вечера`);
    console.log(`Сейчас ${userTime - 12} часов вечера`);
}
if (userTime > 21 && userTime <= 24) {
    alert('Сейчас ' + (userTime - 24) + ' часа ночи');
    console.log('Сейчас '+ (userTime - 24) +' часа ночи');
}
// Average
let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');
let num3 = prompt('Введите третье число');
num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);
const result = num1+num2+num3;
const average = result/3;
alert('Средние число = '+ average);
console.log('Средние число = '+ average);