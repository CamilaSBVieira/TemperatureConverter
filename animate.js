const sun = document.querySelector(".sun");
const button = document.getElementById('clear');
const mountain = document.querySelector('.mountain1');
const mountain2 = document.querySelector('.mountain2');
const mountain3 = document.querySelector('.mountain3');

document.body.addEventListener('keyup', () => {
    if (celsius.value >= 20) {
        document.body.style.backgroundColor = '#55C3FA';
        sun.style.backgroundColor = '#FAF141';
        button.style.backgroundColor = '#71E373';
        mountain.style.borderBottomColor = '#693718';
        mountain2.style.borderBottomColor = '#693718';
        mountain3.style.borderBottomColor = '#693718';

    } else if (celsius.value < 0) {
        mountain.style.borderBottomColor = 'white';
        mountain2.style.borderBottomColor = 'white';
        mountain3.style.borderBottomColor = 'white';
    } else {
        document.body.style.backgroundColor = '#75ADC9';
        sun.style.backgroundColor = '#D6C472';
        button.style.backgroundColor = '#A6E0A7';
        mountain.style.borderBottomColor = '#693718';
        mountain2.style.borderBottomColor = '#693718';
        mountain3.style.borderBottomColor = '#693718';
    }
})