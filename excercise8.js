let myMap = new Map();
myMap.set('арбуз', 'красный')
myMap.set('яблоко', 'зеленое')
myMap.set('пикап', 'ржавый')

for (let keyProp of myMap){
    console.log(`Ключ - ${keyProp[0]}, Значение - ${keyProp[1]}`);
}