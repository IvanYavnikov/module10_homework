let x = prompt('Enter your message')
let number = x++;

if (typeof number === 'number' && !isNaN(number)) {
    if (number % 2 === 0) {
        console.log('Это четное число');
    } else {
        console.log('Это нечетное число');
    }
}   else {
        console.log('Упс, кажется, вы ошиблись');
}