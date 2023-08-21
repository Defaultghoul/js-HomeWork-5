// // 1

let inputOne = document.querySelector('#first-inputOne');
let inputTwo = document.querySelector('#first-inputTwo');
let btnFirst = document.querySelector('#first-btn');

btnFirst.addEventListener('click', function first() {
	if (inputOne.value != '' && inputTwo.value != '') {
		alert('Обидва поля заповнені');
	} else {
		alert('Не всі поля заповнені');
	}
});

// // 2

let secondInputOne = document.querySelector('#second-inputOne');
let secondInputTwo = document.querySelector('#second-inputTwo');
let btnSecond = document.querySelector('#second-btn');

btnSecond.addEventListener('click', function second() {
	if (+secondInputOne.value + +secondInputTwo.value > 10) {
		alert('Сума більша за 10');
	} else {
		alert('Сума менша або дорівнює 10');
	}
});

// 3

let thirdInput = document.querySelector('.third-input');
let thirdBtn = document.querySelector('.third-btn');

thirdBtn.addEventListener('click', function third() {
	if (thirdInput.value.includes('JavaScript')) {
		alert('Текст містить слово JavaScript');
	} else {
		alert('Текст не містить слово JavaScript');
	}
});

// 4

let fourthBtn = document.querySelector('.fourth-btn');
let fourthInput = document.querySelector('.fourth-input');

fourthBtn.addEventListener('click', function fourth() {
	if (+fourthInput.value >= 10 && +fourthInput.value <= 20) {
		alert('Число входить в діапазон від 10 до 20');
	} else {
		alert('Число не входить в діапазон від 10 до 20');
	}
});

// 5

let data = [
	document.querySelector('.fifth-name'),
	document.querySelector('.fifth-email'),
	document.querySelector('.fifth-password'),
];

let fifthBtn = document.querySelector('.fifth-btn');

fifthBtn.addEventListener('click', function fifth() {
	if (
		data[0].value.length >= 3 &&
		data[1].value.includes('@') &&
		data[1].value.includes('.') &&
		data[2].value.length >= 6
	) {
		window.location.href = 'https://www.twitch.tv/';
	} else {
		alert('error');
	}
});
