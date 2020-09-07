//Написать функцию, которая будет принимать число и возвращать массив с числами от 0 до N-1.
function array_maker(x) {
	var numbers = [];
	for (var i = 0; i < x; i++) {
		numbers.push(i);
        
	}
	return numbers;
}
// Создать функцию которая будет принимать 3 числа и проверять - делится ли нацело первое число одновременно и на второе и на третье.
function Division(x,y,z) {
	if (x % y == 0 && x % z == 0) {
		return true;
	}
	return false;
}
//Написать функцию которая будет принимать строку и  возвращать туже строку но с капитализированной первой буквой.
//Покрывать случаи со спецсимволами не нужно. Строка всегда содержит от 1 до 10 символов.
function toCapital(str) {
	return str[0].toUpperCase()+str.slice(1);
}

//Проверки
function first_check() {
	var value = document.getElementById("first").value;
	console.log(array_maker(value));
	document.getElementById("text-div").innerHTML = array_maker(value);
}

function second_check() {
	var value = document.getElementById("second").value;
	var arr = value.split(" ");
	console.log(Division(arr[0], arr[1], arr[2]));
	document.getElementById("text-div").innerHTML = Division(arr[0], arr[1], arr[2]);
}

function third_check() {
	var value = document.getElementById("third").value;
	console.log(toCapital(value));
	document.getElementById("text-div").innerHTML = toCapital(value);
}