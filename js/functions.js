//Первая функция
const checkLenght = (string, maxLength) => {
    let result = false;
    if (string.length <= maxLength) {
        result = true;
        return result;
    } 
    return result;
};

console.log('1 fucntion',checkLenght('kklksdl;', 10));


//Вторая функция
const checkPalindrom = (str) => {
    let string = str.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
    let left = 0;
    let right = string.length - 1;
    
    while (left < right) {
        if (string[left] !== string[right]) {
            return false;
        } 

        left++;
        right--;
    }
    
    return true;
}

console.log('2 function', checkPalindrom('топот'))
console.log('2 function', checkPalindrom('довОд'))
console.log('2 function', checkPalindrom('Кекс'))
console.log('2 function', checkPalindrom('Лёша на полке клопа нашёл'))


//Дополнительная функция
const findNumber = (string) => {
    let numberStr = '';
    for (let i=0; i < string.length; i++) {
        if (string[i] == '0' || string[i] == '1' || string[i] == '2' || string[i] == '3' || string[i] == '4' || string[i] == '5' || string[i] == '6' || string[i] == '7' || string[i] == '8' || string[i] == '9'){
            numberStr += string[i];
        }
    }   return (numberStr)
}   

console.log(findNumber('2023 год')) 
console.log(findNumber('ECMAScript 2022')) 
console.log(findNumber('1 кефир, 0.5 батона')) 