var age = +prompt('Введите ваш возраст в цифрах');

if (age > 0 && age <= 18) {
    console.log('Вы еще молоды, Вам нужно учиться');
} else if (age > 18 && age <= 50) {
    console.log('Вам нужно работать');
} else if (age > 50 && age <= 59) {
    console.log('Вам скоро на пенсию');
} else if (age > 59 && age <= 100) {
    console.log('Вы пенсионер');
} else {
    console.log('Что-то пошло не так');
}

hours = +prompt('Введите время в цифрах от 0 до 23')
switch(hours){
    case 0 :
        alert('Сейчас 12 часов ночи')
        break
    case 1 :
        alert('Сейчас 1 час ночи')
        break
    case 2 :
        alert('Сейчас 2 часа ночи')
        break
    case 3 :
        alert('Сейчас 3 часа ночи')
        break
    case 4 :
        alert('Сейчас 4 часа ночи')
        break
    case 5 :
        alert('Сейчас 5 часов ночи')
        break
    case 6 :
        alert('Сейчас 6 часов ночи')
        break
    case 7:
        alert('Сейчас 7 часов утра')
        break
    case 8:
        alert('Сейчас 8 часов утра')
        break
    case 9:
        alert('Сейчас 9 часов утра')
        break
    case 10:
        alert('Сейчас 10 часов утра')
        break
    case 11:
        alert('Сейчас 11 часов дня')
        break
    case 12:
        alert('Сейчас 12 часов дня')
        break
    case 13:
        alert('Сейчас 1 час дня')
        break
    case 14:
        alert('Сейчас 2 час дня')
        break
    case 15:
        alert('Сейчас 3 часа дня')
        break
    case 16:
        alert('Сейчас 4 часа дня')
        break
    case 17:
        alert('Сейчас 5 часов дня')
        break
    case 18:
        alert('Сейчас 6 часов вечера')
        break
    case 19:
        alert('Сейчас 7 часов вечера')
        break
    case 20:
        alert('Сейчас 8 часов вечера')
        break
    case 21:
        alert('Сейчас 9 часов вечера')
        break
    case 22:
        alert('Сейчас 10 часов вечера')
        break
    case 23:
        alert('Сейчас 11 часов вечера')
        break
}


var number1 = +prompt('Введите число1');
var number2 = +prompt('Введите число2');
var number3 = +prompt('Введите число3');

if ((number1 > number2 && number1 < number3) || (number1 < number2 && number1 > number3)) {
    console.log('Среднее число: ' + number1);
} else if ((number2 > number1 && number2 < number3) || (number2 < number1 && number2 > number3)) {
    console.log('Среднее число: ' + number2);
} else if ((number3 > number1 && number3 < number2) || (number3 < number1 && number3 > number2)) {
    console.log('Среднее число: ' + number3);
} else {
    console.log('Что-то пошло не так');
}